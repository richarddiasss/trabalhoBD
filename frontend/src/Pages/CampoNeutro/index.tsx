import React from 'react';
import {CampoNeutroContainer, CampoNeutroDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {id: 1, col1: '02/07/1916', col2: 'Chile', col3: 'Uruguay', col4: 'Bueno Aires', col5: 'Argentina'},
    {id: 2, col1: '08/07/1916', col2: 'Brazil', col3: 'Chile', col4: 'Bueno Aires', col5: 'Argentina'},
    {id: 3, col1: '12/07/1916', col2: 'Brazil', col3: 'Uruguay', col4: 'Bueno Aires', col5: 'Argentina'}
]

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Data', flex: 1, headerAlign: 'center' },
    { field: 'col2', headerName: 'Mandante', flex: 1, headerAlign: 'center' },
    { field: 'col3', headerName: 'Visitante', flex: 1, headerAlign: 'center' },
    { field: 'col4', headerName: 'Cidade', flex: 1, headerAlign: 'center' },
    { field: 'col5', headerName: 'País', flex: 1, headerAlign: 'center' }
]

export default function CampoNeutro(){
    return(
        <CampoNeutroDiv>
            <HeaderHome/>
            <CampoNeutroContainer>
                <Titulo>Partidas em campo neutro</Titulo>
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
            </CampoNeutroContainer>
        </CampoNeutroDiv>
    )
}
