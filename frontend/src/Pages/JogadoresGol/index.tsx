import React from 'react';
import {JogadorContainer, JogadoresDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';


const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Jogador', width: 400, headerAlign: 'center' },
    { field: 'col2', headerName: 'Total de gols', width: 400, headerAlign: 'center' },
  ];
  

export default function Jogadores(){

    const [jogadores, setJogadores] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/golsJogador');
                setJogadores(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);

    const rows: GridRowsProp = jogadores.map((jogador, index) => {
        console.log('Continente:', jogador);
        return {
            id: jogador.id || index,
            col1: jogador.jogador,
            col2: jogador.totalGols
        }
    });
    
    if (loading) {
        return <div>Carregando...</div>
    }

    return(
        <JogadoresDiv>
            <HeaderHome/>
            <JogadorContainer>
                <Titulo>Lista de Jogadores que marcaram gols</Titulo>
                <DataGrid 
                    sx={{
                        backgroundColor: '#F3F3F3',
                        marginTop: '2%',
                        fontSize: '20px',
                        width:'65%',
                    }} 
                    rows={rows} 
                    columns={columns}
                ></DataGrid>
            </JogadorContainer>
        </JogadoresDiv>
    )
}   
