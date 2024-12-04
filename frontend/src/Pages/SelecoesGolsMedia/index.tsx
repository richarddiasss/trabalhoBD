import React from 'react';
import {SelecoesContainer, SelecoesDiv } from './style';
import HeaderHome from "../../components/HeaderHome";
import { Titulo } from '../../components/TituloPagina/style';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';


const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Seleção', width: 270, headerAlign: 'center' },
    { field: 'col2', headerName: 'Gols', width: 270, headerAlign: 'center' },
    { field: 'col3', headerName: 'Média', width: 270, headerAlign: 'center' },
]

export default function Selecoes(){

    const [selecoes, setSelecoes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/selecoesAcimaMedia');
                console.log('Dados recebidos da API:', response.data);
                setSelecoes(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);

    const rows: GridRowsProp = selecoes.map((selecao, index) => {
        console.log('Continente:', selecao);
        return {
            id: selecao.id || index,
            col1: selecao.selecao,
            col2: selecao.total_gols,
            col3: selecao.media_gols,

        }
    });
    
    if (loading) {
        return <div>Carregando...</div>
    }


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
                        width:'70%',
                    }} 
                    rows={rows} 
                    columns={columns}>

                </DataGrid>
            </SelecoesContainer>
        </SelecoesDiv>
    )
}
