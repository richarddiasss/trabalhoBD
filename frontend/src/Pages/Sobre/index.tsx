import React from 'react';
import { SobreDiv, Titulo, Container, Texto, Lista, Item } from './style';
import HeaderHome from "../../components/HeaderHome";

export default function Sobre(){
    return(
        <SobreDiv>
            <HeaderHome/>
            <Container>
                <Titulo>Sobre</Titulo>
                <Texto>
                Este trabalho consiste em uma aplicação web desenvolvida para realizar consultas sobre os resultados de partidas de futebol internacional entre seleções. A aplicação utiliza um conjunto de dados extenso, extraído do Kaggle, intitulado "International Football Results from 1872 to 2017". O dataset abrange partidas realizadas entre os anos de 1916 e 2024 e contém informações detalhadas sobre os jogos, como seleções participantes, resultados finais, datas, locais e marcadores de gol.
                </Texto>
                <Texto>
                A aplicação foi projetada para permitir que os usuários realizem consultas simples e avançadas, oferecendo uma interface amigável para pesquisa de partidas, comparação de resultados e análise do desempenho das seleções ao longo do tempo. Além disso, o projeto foi desenvolvido utilizando o SGBD MySQL para o gerenciamento eficiente dos dados, garantindo que as consultas sejam rápidas e precisas.
                </Texto>
                <Texto>
                Por meio desta aplicação, os usuários podem explorar um rico histórico de partidas internacionais, sendo capaz de obter informações detalhadas de jogos de diferentes competições e períodos, além de visualizar estatísticas como o número total de partidas realizadas em cada continente.
                </Texto>
                <Texto>
                A aplicação oferece diversas funcionalidades de consulta, proporcionando aos usuários a capacidade de explorar e analisar os dados de maneira aprofundada. Entre as consultas disponíveis, destacam-se: 
                </Texto>
                <Lista>
                    <Item>
                        <b>Lista de Jogadores que Marcaram Gols:</b> apresenta os jogadores ordenados pelo total de gols marcados ao longo de todas as partidas, permitindo uma análise das maiores estrelas do futebol internacional.
                    </Item>
                    <Item>
                        <b>Contagem de Partidas por Continente:</b> proporciona uma visão geográfica das partidas, organizando os jogos de acordo com o continente onde ocorreram.
                    </Item>
                    <Item>
                        <b>Seleções com Goleadores Acima da Média:</b> identifica as seleções cujos jogadores possuem um desempenho superior à média de gols, evidenciando as equipes com maior capacidade ofensiva.
                    </Item>
                    <Item>
                        <b>Partidas em Campo Neutro:</b> permite visualizar todas as partidas disputadas fora dos países das seleções envolvidas, uma consulta útil para compreender o impacto de jogos em locais neutros.
                    </Item>
                    <Item>
                        <b>Seleções com Gols Acima da Média Geral:</b> exibe as seleções que, ao longo da história, marcaram um número de gols superior à média geral de gols por jogo, destacando as equipes mais prolíficas.
                    </Item>
                </Lista>
            </Container>
        </SobreDiv>
    )
}

