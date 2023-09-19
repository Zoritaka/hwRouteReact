import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Photo = () => {

    function Button({srl}){
        return (
            <Link to={String(srl)}><button className="btn">back</button></Link>
        );
    }//Button()
    function Player({}){
        return (
        <div className="Main">
            <div  className="block">
                <h2>Фото города!</h2>
                <hr/>
                <div className="photo">
                    <img src={require("./photo/ccccc.jpg")}></img>
                    <img src={require("./photo/ggggg.jpg")}></img>
                </div>
                <div className="photo">
                    <img src={require("./photo/llll.jpg")}></img>
                    <img src={require("./photo/jjjj.jpg")}></img>
                </div>
                <div className="photo">
                    <img src={require("./photo/aaaaaa.jpg")}></img>
                    <img src={require("./photo/vvvv.jpg")}></img>                
                </div>
                <hr/>
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
};//Photo()

export default Photo;