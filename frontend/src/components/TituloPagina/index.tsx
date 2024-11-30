import React from 'react';
import { Titulo } from './style';

export default function TituloPagina({texto}){
    return(
        <Titulo>
            {texto}
        </Titulo>
    )
}
