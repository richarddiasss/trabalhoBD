import { int, date ,mysqlEnum, mysqlTable, uniqueKeyName, varchar, timestamp, boolean  } from "drizzle-orm/mysql-core";
import { primaryKey } from "drizzle-orm/pg-core";


export const selecao = mysqlTable("selecao", {
    nome: varchar("nome", {length: 30}).primaryKey(),
    continente: varchar( "continente", {length: 30}),
});

export const torneio = mysqlTable("torneio", {
    nome: varchar("Nome", {length: 30}).primaryKey(),
    ano: date("Ano"),
});

export const partida = mysqlTable("partida", {
    cidade: varchar("cidade", {length: 30}),
    pais: varchar("pais", {length: 30}),
    awayScore: int("awayScore"),
    homeScore: int("homeScore"),
    data: date("data").primaryKey(),
    fk_Torneio_Nome: varchar("fk_Torneio_Nome", {length: 30}).references(() => torneio.nome),
    fk_Selecao_Nome1 : varchar("fk_Selecao_Nome1", {length: 30}).primaryKey().references(() => selecao.nome),
    fk_Selecao_Nome2 : varchar("fk_Selecao_Nome2", {length: 30}).primaryKey().references(() => selecao.nome),
    

});

export const jogadorMarcador = mysqlTable("jogadormarcador", {
    nome: varchar("Nome", {length: 30}).primaryKey(),
    nacionalidade: varchar("Nacionalidade", {length: 30}),
}); // This table has no columns, so it will be created with no columns

export const selecaojogador = mysqlTable("selecaojogador", {
    fk_Selecao_Nome: varchar("fk_Selecao_Nome", {length: 30}).primaryKey().references(() => selecao.nome),
    fk_Jogador_Nome: varchar("fk_Jogador_Nome", {length: 30}).primaryKey().references(() => jogador.nome),
});

export const temGolMarcadoPor = mysqlTable("temgolmarcadopor", {
    fk_Jogador_Nome: varchar("fk_JogadorMarcador_Nome", {length: 30}).primaryKey().references(() => jogador.nome),
    fk_Partida_Data: date("fk_Partida_Data").primaryKey().references(() => partida.data),
    penalti: boolean("Penalti"),
    minuto: int("MinutodoGol").primaryKey(),
    golContra: boolean("GolContra"),
});