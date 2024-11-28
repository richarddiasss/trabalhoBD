import React from 'react';
import logo from "../../assets/HeaderAssets/logoSite.png";
import { HeaderBase, LogoHeader, LogoImg, NomeHeader } from './style';

export default function HeaderHome (){

    return (
        <HeaderBase>
            <LogoHeader>
                <LogoImg src={logo}></LogoImg>
                <NomeHeader>FutClassics</NomeHeader>
            </LogoHeader>
        </HeaderBase>
    )




}