import React from 'react';
import {CampoNeutroContainer, CampoNeutroDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Data', width: 220, headerAlign: 'center' },
    { field: 'col2', headerName: 'Mandante', width: 220, headerAlign: 'center' },
    { field: 'col3', headerName: 'Visitante', width: 220, headerAlign: 'center' },
    { field: 'col4', headerName: 'Cidade', width: 220, headerAlign: 'center' },
    { field: 'col5', headerName: 'País', width: 220, headerAlign: 'center' }
]

export default function CampoNeutro(){

    const [partidas, setPartida] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/selecoesCampoNeutro');
                console.log('Dados recebidos da API:', response.data);
                setPartida(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);

    const rows: GridRowsProp = partidas.map((partida, index) => {
        console.log('Continente:', partida);
        return {
            id: partida.id || index,
            col1: partida.dataPartida,
            col2: partida.selecaoHome,
            col3: partida.selecaoAway,
            col4: partida.cidade,
            col5: partida.pais,

        }
    });
    
    if (loading) {
        return <div>Carregando...</div>
    }

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
