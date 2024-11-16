import express, { Express, Request, Response } from "express";
import db from "./db/db";
import { torneio, partida, temGolMarcadoPor,jogadorMarcador, selecao } from "./db/schema";
import e from "express";
import { sql, eq, desc, or } from "drizzle-orm";
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hellodadadada World!");
});


//Consultas com Junções

//Listar gols marcados em cada partida (detalhes dos jogadores)
app.get("/golsPorPartida", async (req: Request, res: Response) => {
  try {
    const golsPorPartida = await db
    .select({
      dataPartida: temGolMarcadoPor.fk_Partida_Data,
      minutoDoGol: temGolMarcadoPor.minuto,
      jogador: jogadorMarcador.nome,
      nacionalidade: jogadorMarcador.nacionalidade,
      penalti: temGolMarcadoPor.penalti,
      golContra: temGolMarcadoPor.golContra
    })
    .from(temGolMarcadoPor)
    .innerJoin(jogadorMarcador, eq(temGolMarcadoPor.fk_Jogador_Nome, jogadorMarcador.nome))
    .innerJoin(partida, eq(temGolMarcadoPor.fk_Partida_Data, partida.data))
    .limit(50);
  
  res.status(200).json(golsPorPartida);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


//Consultas com Funções de Agregação

//Contar partidas por continente
app.get("/partidasPorContinente", async (req: Request, res: Response) => {
  try {
    const partidasPorContinente = await db
    .select({
      continente: selecao.continente,
      numeroDePartidas: sql`COUNT(${partida.data})`
    })
    .from(partida)
    .innerJoin(selecao, or(
      eq(partida.fk_Selecao_Nome1, selecao.nome),
      eq(partida.fk_Selecao_Nome2, selecao.nome)
    ))
    .groupBy(selecao.continente);
  
      res.status(200).json(partidasPorContinente);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

//lista de jogadores que marcaram gols em ordem do maior goleador para o menor
app.get("/golsJogador", async (req: Request, res: Response) => {
  try {
    const totalGolsPorJogador = await db
    .select({
      jogador: jogadorMarcador.nome,
      totalGols: sql`COUNT(${temGolMarcadoPor.minuto})`
    })
    .from(temGolMarcadoPor)
    .innerJoin(jogadorMarcador, eq(temGolMarcadoPor.fk_Jogador_Nome, jogadorMarcador.nome))
    .where(eq(temGolMarcadoPor.golContra, false))
    .groupBy(jogadorMarcador.nome)
    .orderBy(desc(sql`COUNT(${temGolMarcadoPor.minuto})`))
    .limit(50);
  
      res.status(200).json(totalGolsPorJogador);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

//Consultas com Subconsultas Aninhadas

// Seleções com gols acima da média
app.get("/selecoesAcimaMedia", async (req: Request, res: Response) => {
  try {
    const selecoesAcimaMedia = await db.execute(
      sql`
        WITH GolsPorSelecao AS (
    SELECT 
        s.nome AS selecao,
        COUNT(tgp.minutoDoGol) as total_gols
    FROM selecao s
    LEFT JOIN selecaoJogador sj ON sj.fk_Selecao_Nome = s.nome
    LEFT JOIN temGolMarcadoPor tgp ON sj.fk_JogadorMarcador_Nome = tgp.fk_JogadorMarcador_Nome
    GROUP BY s.nome
),
MediaGolsJogadores AS (
    SELECT AVG(golsTotal) as media_gols
    FROM (
        SELECT 
            COUNT(tgp.minutoDoGol) AS golsTotal
        FROM temGolMarcadoPor tgp
        GROUP BY tgp.fk_JogadorMarcador_Nome
    ) AS mediaGols
)
SELECT 
    gps.selecao,
    gps.total_gols,
    mgj.media_gols
FROM GolsPorSelecao gps, MediaGolsJogadores mgj
WHERE gps.total_gols > mgj.media_gols
ORDER BY gps.total_gols DESC
LIMIT 10;
      `
    );
    
      res.status(200).json(selecoesAcimaMedia);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get("/selecoesComGoleadoresAcimaMedia", async (req: Request, res: Response) => {
  try {
    const selecoesComGoleadoresAcimaMedia = await db.execute(
      sql`
          SELECT DISTINCT 
      s.nome AS selecao,
      jm.nome AS jogador,
      (SELECT COUNT(tgp2.minutoDoGol)
      FROM temGolMarcadoPor tgp2
      WHERE tgp2.fk_JogadorMarcador_Nome = tgp.fk_JogadorMarcador_Nome
        AND tgp2.golContra = FALSE) AS totalGols,
      (SELECT AVG(totalGols)
      FROM (
        SELECT COUNT(tgp3.minutoDoGol) AS totalGols
        FROM temGolMarcadoPor tgp3
        WHERE tgp3.golContra = FALSE
        GROUP BY tgp3.fk_JogadorMarcador_Nome
      ) AS mediaGols) AS mediaGeral
  FROM 
      selecao s
  INNER JOIN 
      selecaoJogador sj ON s.nome = sj.fk_Selecao_Nome
  INNER JOIN 
      temGolMarcadoPor tgp ON sj.fk_JogadorMarcador_Nome = tgp.fk_JogadorMarcador_Nome
  INNER JOIN 
      jogadorMarcador jm ON jm.nome = tgp.fk_JogadorMarcador_Nome
  WHERE 
      (SELECT COUNT(tgp2.minutoDoGol)
      FROM temGolMarcadoPor tgp2
      WHERE tgp2.fk_JogadorMarcador_Nome = tgp.fk_JogadorMarcador_Nome
        AND tgp2.golContra = FALSE) 
      > 
      (SELECT AVG(totalGols)
      FROM (
        SELECT COUNT(tgp3.minutoDoGol) AS totalGols
        FROM temGolMarcadoPor tgp3
        WHERE tgp3.golContra = FALSE
        GROUP BY tgp3.fk_JogadorMarcador_Nome
      ) AS mediaGols)
  ORDER BY totalGols DESC
  LIMIT 10;
      `
    );
    
      res.status(200).json(selecoesComGoleadoresAcimaMedia);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Partidas de campo neutro
app.get("/selecoesCampoNeutro", async (req: Request, res: Response) => {
  try {
    const partidasCampoNeutro = await db.execute(
      sql`
        SELECT 
          p.data AS dataPartida,
          s1.nome AS selecaoHome,
          s2.nome AS selecaoAway,
          p.cidade,
          p.pais
        FROM 
          partida p
        INNER JOIN 
          selecao s1 ON p.fk_Selecao_Nome1 = s1.nome
        INNER JOIN 
          selecao s2 ON p.fk_Selecao_Nome2 = s2.nome
        WHERE 
          p.campo_neutro = TRUE
        LIMIT 10;
      `
    );
    
    
      res.status(200).json(partidasCampoNeutro);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});