import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
const City = () => {

    function Button({srl}){
        return (
            <Link to={String(srl)}><button className="btn">Next</button></Link>
        );
    }//Button()
    function Player({}){
        return (
        <div className="Main">
            <div  className="block start">
                <h2>Город Астана!</h2>
                <p>Добро пожаловать на страницу гид по Астане!<br/> Нажмите NEXT, чтобы перейти дальше</p>
                
                <Button
                    srl={'/info'}
                />
            </div>
        </div>
        );
    }//Player()
    
    return (
        <Player/>
    );
};//City()

export default City;