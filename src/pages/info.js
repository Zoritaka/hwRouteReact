import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Info = () => {

    function Li({srl, Name}){
        return (
            <li> <Link to={String(srl)}> {String(Name)} </Link> </li>
        );
    }//Li()
    function Button({srl}){
        return (
            <Link to={String(srl)}><button className="btn">Next</button></Link>
        );
    }//Button()
    function Player({}){
        return (
        <div className="Main">
            <div  className="block">
                <h1>Столица Казахстана Астана</h1>
                <hr/>
                <p>Астана́ (каз. Астана, Astana (инф.)[4], дословно — «столица»; ранее — Акмо́линск, Целиногра́д, Акмола́, Нур-Султа́н) — столица Республики Казахстан[5] с 10 декабря 1997 года. Город расположен на севере страны, на берегах реки Ишим, административно разделён на 5 районов. Астана является анклавом, окружённым территорией Акмолинской области, административно не входя в её состав. Акмолинск получил статус города 7 мая 1862 года[6]. Городом-миллионером Астана стала в июне 2017 года, когда население города составило 1 002 874 жителя[7]. На 1 декабря 2022 года население города составляло 1 350 228 человек[2], что является вторым показателем в Казахстане после Алма-Аты.</p>
                Достопримечательности Астаны:
                <ul className="pp">
                    <Li
                        srl={'/attractions1'}
                        Name={'Дворец мира и согласия'}
                    />
                    <Li
                        srl={'/attractions2'}
                        Name={'Центральная мечеть (Астана)'}
                    />
                    <Li
                        srl={'/attractions3'}
                        Name={'Байтерек (монумент)'}
                    />                    
                </ul>
                <Button
                    srl={"/photo"}
                />
            </div>
        </div>
        );
    }//Player()
    
    return (
        <Player/>
    );
};//Info()

export default Info;