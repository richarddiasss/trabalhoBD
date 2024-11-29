import React from 'react';
import logo from "../../assets/HeaderAssets/logoSite.png";
import { HeaderBase, LogoHeader, LogoImg, NomeHeader, BotoesHeader, HomeButton, SobreButton } from './style';

export default function HeaderHome (){

    return (
        <HeaderBase>
            <LogoHeader>
                <LogoImg src={logo}></LogoImg>
                <NomeHeader>FutClassics</NomeHeader>
            </LogoHeader>
            <BotoesHeader>
                <div className='HomeButton'>Home</div>
                <div className='SobreButton'>Sobre</div>
            </BotoesHeader>
        </HeaderBase>
    )




}