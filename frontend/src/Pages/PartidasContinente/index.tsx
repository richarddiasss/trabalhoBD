import React from 'react';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ContainerPartidas, PartidasDiv } from './style';

const rows: GridRowsProp = [
    {id: 1, col1: 'Europa', col2: 29573 },
    {id: 2, col1: 'Ásia', col2: 17235},
    {id: 3, col1: 'África', col2: 20596},
    {id: 4, col1: 'Oceania', col2: 2022},
    {id: 5, col1: 'América do Norte', col2: 10442},
    {id: 6, col1: 'América do Sul', col2: 8074}
];

const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Continente', flex: 1, headerAlign: 'center'},
    {field: 'col2', headerName: 'Numero de partidas', flex: 1, headerAlign: 'center'}
]

export default function PartidasContinente(){
    return(
        <PartidasDiv>
            <HeaderHome/>
            <ContainerPartidas>
                <Titulo>Número de partidas por continente</Titulo>
                <DataGrid
                    sx={{
                        backgroundColor: '#F3F3F3',
                        marginTop: '2%',
                        fontSize: '20px',
                        width:'80%',
                    }} 
                    rows={rows}
                    columns={columns}
                >

                </DataGrid>
            </ContainerPartidas>
        </PartidasDiv>
    )
}
