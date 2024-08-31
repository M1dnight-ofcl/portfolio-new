import React, { useEffect } from "react";
import { Grid, BorderGlow } from "../lib";
export const LoadingScreen=()=>{
    useEffect(()=>{
        window.onload=()=>{
            document.getElementById("loading").style.opacity="0";
            document.getElementById("loading").style.pointerEvents="none";
            document.getElementById("loading").style.userSelect="none";
        };
    },[]);
    return(<>
        <div id="loading">
            <Grid />
            <BorderGlow />
            <div id="loading_logo"></div>
        </div>
    </>);
} 