import React from 'react';
import { HomeDiv, FotoHome, TextoConsulta, Tabelas, TabelaHome, LadoEsquerdoTabela, LadoDireitoTabela, TituloTabela, DescricaoTabela, ConhecerDetalhes, BottomDiv } from './style';
import InfoHome from '../../assets/HomeAssets/homeMaraca.png';
import tabelaUm from '../../assets/HomeAssets/fotoTabelaUm.png';
import tabelaDois from '../../assets/HomeAssets/fotoTabelaDois.png';
import tabelaTres from '../../assets/HomeAssets/fotoTabelaTres.png';
import tabelaQuatro from '../../assets/HomeAssets/fotoTabelaQuatro.png';
import tabelaCinco from '../../assets/HomeAssets/fotoTabelaCinco.png';
import HeaderHome from "../../components/HeaderHome";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <HomeDiv>
            <HeaderHome/>
            <FotoHome src={InfoHome}></FotoHome>
            <TextoConsulta>Consultas:</TextoConsulta>
                <Tabelas>
                    <Link to="/jogadores" style={{textDecoration: "none"}}>
                        <TabelaHome>
                            <LadoEsquerdoTabela>
                                <TituloTabela>Tabela 1</TituloTabela>
                                <DescricaoTabela>Tabela em que registra-se os gols marcados por um jogador.</DescricaoTabela>
                            </LadoEsquerdoTabela>
                            <LadoDireitoTabela src={tabelaUm}></LadoDireitoTabela>
                        </TabelaHome>           
                    </Link>
                    <Link to="partidas-por-continente" style={{textDecoration: "none"}}>
                        <TabelaHome>
                        <LadoEsquerdoTabela>
                                <TituloTabela>Tabela 2</TituloTabela>
                                <DescricaoTabela>Tabela em que registra-se o número de partidas em certo continente.</DescricaoTabela>
                            </LadoEsquerdoTabela>
                            <LadoDireitoTabela src={tabelaDois}></LadoDireitoTabela>
                        </TabelaHome>
                    </Link>
                    <Link to="/goleadores" style={{textDecoration: "none"}}>
                        <TabelaHome>
                        <LadoEsquerdoTabela>
                                <TituloTabela>Tabela 3</TituloTabela>
                                <DescricaoTabela>Tabela em que registra-se número da média de gols de e mostra quais jogadores ultrapassam essa média.</DescricaoTabela>
                            </LadoEsquerdoTabela>
                            <LadoDireitoTabela src={tabelaTres}></LadoDireitoTabela>
                        </TabelaHome>
                    </Link>
                    <Link to="/campo-neutro" style={{textDecoration: "none"}}>
                        <TabelaHome>
                        <LadoEsquerdoTabela>
                                <TituloTabela>Tabela 4</TituloTabela>
                                <DescricaoTabela>Tabela em que tem as consultas e registram-se as partidas realizadas em campo neutro.</DescricaoTabela>
                            </LadoEsquerdoTabela>
                            <LadoDireitoTabela src={tabelaQuatro}></LadoDireitoTabela>
                        </TabelaHome>
                    </Link>
                    <Link to="selecoes" style={{textDecoration: "none"}}>
                        <TabelaHome>
                        <LadoEsquerdoTabela>
                                <TituloTabela>Tabela 5</TituloTabela>
                                <DescricaoTabela>Tabela em que tem as consultas e registra-se seleções que marcaram mais gols do que a média geral.</DescricaoTabela>
                            </LadoEsquerdoTabela>
                            <LadoDireitoTabela src={tabelaCinco}></LadoDireitoTabela>
                        </TabelaHome>
                    </Link>
                </Tabelas>
                    <ConhecerDetalhes>CONHECER DETALHES DO TRABALHO</ConhecerDetalhes>

                    <BottomDiv>Este site foi criado sem a ajuda de Inteligência Artificial em 2024.</BottomDiv>
        </HomeDiv>


    )
}
