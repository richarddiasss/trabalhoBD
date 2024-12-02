import React from 'react';
import {SelecoesContainer, SelecoesDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {id:1, col1: 'Brazil', col2: '1072', col3: '3.0959'},
    {id:2, col1: 'Germany', col2: '1024', col3: '3.0959'},
    {id:3, col1: 'Argentina', col2: '989', col3: '3.0959'}
]

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Seleção', flex: 1, headerAlign: 'center' },
    { field: 'col2', headerName: 'Gols', flex: 1, headerAlign: 'center' },
    { field: 'col3', headerName: 'Média', flex: 1, headerAlign: 'center' },
]

export default function Selecoes(){
    return(
        <SelecoesDiv>
            <HeaderHome/>
            <SelecoesContainer>
                <Titulo>Seleções com gols acima da média</Titulo>
                <DataGrid 
                    sx={{
                        backgroundColor: '#F3F3F3',
                        marginTop: '2%',
                        fontSize: '20px',
                        width:'90%',
                    }} 
                    rows={rows} 
                    columns={columns}>

                </DataGrid>
            </SelecoesContainer>
        </SelecoesDiv>
    )
}
