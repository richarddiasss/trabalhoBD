import React from 'react';
import logo from "../../assets/HeaderAssets/logoSite.png";
import { HeaderBase, LogoHeader, LogoImg, NomeHeader, BotoesHeader, HomeButton, SobreButton } from './style';
import {Link} from "react-router-dom";

export default function HeaderHome (){

    return (
        <HeaderBase>
            <LogoHeader>
                <LogoImg src={logo}></LogoImg>
                <NomeHeader>FutClassics</NomeHeader>
            </LogoHeader>
            <BotoesHeader>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </BotoesHeader>
        </HeaderBase>
    )
}
