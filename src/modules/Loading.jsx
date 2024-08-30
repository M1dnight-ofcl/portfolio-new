import React from "react";
import { Grid, BorderGlow } from "../lib";
export class LoadingScreen extends React.Component {
    constructor(props) {
       super(props);
       this.handleLoad=this.handleLoad.bind(this);
    }   
    componentDidMount(){window.addEventListener('load', this.handleLoad);}
    componentWillUnmount(){window.removeEventListener('load', this.handleLoad);}
    handleLoad(){
        if(document.getElementById("loading")){
            document.getElementById("loading").style.opacity="0";
            document.getElementById("loading").style.pointerEvents="none";
        }
    }
    render(){
        return(<>
            <div id="loading">
                <Grid />
                <BorderGlow />
                <div id="loading_logo"></div>
            </div>
            {this.props.children}
        </>);
    }
} 