import React from 'react';
import { HomeDiv, FotoHome, TextoConsulta, Tabelas, TabelaUmHome, LadoEsquerdoTabelaUm, TabelaDoisHome } from './style';
import InfoHome from '../../assets/HomeAssets/homeMaraca.png';
import HeaderHome from "../../components/HeaderHome";

export default function Home(){
    return(
        <HomeDiv>
            <HeaderHome/>
            <FotoHome src={InfoHome}></FotoHome>
            <TextoConsulta>Consultas:</TextoConsulta>
                <Tabelas>
                    <TabelaUmHome>
                        <LadoEsquerdoTabelaUm>
                            
                        </LadoEsquerdoTabelaUm>
                    </TabelaUmHome>
                    <TabelaDoisHome></TabelaDoisHome>


                </Tabelas>
        </HomeDiv>


    )
}
