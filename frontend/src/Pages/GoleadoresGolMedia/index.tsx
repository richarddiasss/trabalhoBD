import React from 'react';
import {GoleadoresContainer, GoleadoresDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';


const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Seleção', width: 250, headerAlign: 'center'},
    {field: 'col2', headerName: 'Jogador', width: 250, headerAlign: 'center'},
    {field: 'col3', headerName: 'Gols', width: 250, headerAlign: 'center'},
    {field: 'col4', headerName: 'Média Geral', width: 250, headerAlign: 'center'}
]

export default function Goleadores(){

    const [jogadores, setJogadores] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/selecoesComGoleadoresAcimaMedia');
                console.log('Dados recebidos da API:', response.data);
                setJogadores(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);

    const rows: GridRowsProp = jogadores.map((jogador, index) => {
        console.log('jogador:', jogador);
        return {
            id: jogador.id || index,
            col1: jogador.selecao,
            col2: jogador.jogador,
            col3: jogador.totalGols,
            col4: jogador.mediaGeral,
        }
    });
    
    console.log('Rows geradas:', rows);

    if (loading) {
        return <div>Carregando...</div>
    }

    return(
        <GoleadoresDiv>
            <HeaderHome/>
            <GoleadoresContainer>
                <Titulo>Seleções com goleadores acima da média</Titulo>
                <DataGrid
                    sx={{
                        backgroundColor: '#F3F3F3',
                        marginTop: '2%',
                        fontSize: '20px',
                        width:'90%',
                    }} 
                    rows={rows} 
                    columns={columns}
                >

                </DataGrid>
            </GoleadoresContainer>
        </GoleadoresDiv>
    )
}
