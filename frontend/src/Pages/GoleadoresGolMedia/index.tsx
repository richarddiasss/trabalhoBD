import React from 'react';
import {GoleadoresContainer, GoleadoresDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {id: 1, col1: 'Portugal', col2: 'Cristiano Ronaldo', col3: '108', col4: '3,1385'},
    {id: 2, col1: 'Poland', col2: 'Robert Lewandowski', col3: '62', col4: '3,1385'},
    {id: 3, col1: 'Belgium', col2: 'Romelu Lukaku', col3: '60', col4: '3,1385'}
]

const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Seleção', flex: 1, headerAlign: 'center'},
    {field: 'col2', headerName: 'Jogador', flex: 1, headerAlign: 'center'},
    {field: 'col3', headerName: 'Gols', flex: 1, headerAlign: 'center'},
    {field: 'col4', headerName: 'Média Geral', flex: 1, headerAlign: 'center'}
]

export default function Goleadores(){
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
