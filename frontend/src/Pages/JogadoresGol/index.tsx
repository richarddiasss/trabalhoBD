import React from 'react';
import {JogadorContainer, JogadoresDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: 'Cristiano Ronaldo', col2: '100' },
    { id: 2, col1: 'Robert Lewandowski', col2: '62' },
    { id: 3, col1: 'Romelu Lukaku', col2: '60' },
    { id: 4, col1: 'Harry Kane', col2: '58' },
    { id: 5, col1: 'Lionel Messi', col2: '55' },
    { id: 6, col1: 'Edin Dzeko', col2: '50' },
  ];
  

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Jogador', width: 400, headerAlign: 'center' },
    { field: 'col2', headerName: 'Total de gols', width: 400, headerAlign: 'center' },
  ];
  

export default function Jogadores(){
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
