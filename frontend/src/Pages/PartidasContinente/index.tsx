import React from 'react';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ContainerPartidas, PartidasDiv } from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';



const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Continente', width: 350, headerAlign: 'center'},
    {field: 'col2', headerName: 'Numero de partidas', width: 350, headerAlign: 'center'}
]

export default function PartidasContinente(){
    const [continentes, setContinentes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/partidasPorContinente');
                setContinentes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);

    const rows: GridRowsProp = continentes.map((continente, index) => {
        return {
            id: continente.id || index,
            col1: continente.continente,
            col2: continente.numeroDePartidas
        }
    });
    

    if (loading) {
        return <div>Carregando...</div>
    }

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
                        width:'70%',
                    }} 
                    rows={rows}
                    columns={columns}
                />
            </ContainerPartidas>
        </PartidasDiv>
    )
}
