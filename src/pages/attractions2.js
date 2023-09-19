import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
const attractions2 = () => {
    function Button({srl}){
        return (
            <Link to={String(srl)}><button className="btn">Back</button></Link>
        );
    }//Button()
    function Player({}){
        return (
        <div className="Main">
            <div  className="block">
                <h1>Центральная мечеть (Астана)</h1>
                <hr/>
                <p>Центральная мечеть города Астаны (каз. Астана қаласының бас мешіті) — соборная мечеть в Астане, самая большая по вместимости мечеть Казахстана и Центральной Азии[1].</p>
                <h2>Строительство</h2>
                <hr/>
                <p>18 марта 2019 года инициатор строительства, президент Казахстана Нурсултан Назарбаев заложил
                    первый камень на месте строительства новой мечети. Строительство поддержали частные инвесторы,
                    из государственного бюджета средства не использовались[2]. 12 августа 2022 года прошло открытие
                    мечети с участием Назарбаева[1].</p>
                <Button
                    srl={"/info"}
                />
            </div>
        </div>
        );
    }//Player()
    
    return (
        <Player/>
    );
};//attractions()

export default attractions2;