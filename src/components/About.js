import React from 'react';
import { Dimensions } from 'react-native'
import Typist from "react-typist";
import profilepic from "./images/profilepic.png"

export default function About() {
    let deviceWidth = Dimensions.get('window').width
    let deviceHeight = Dimensions.get('window').height
    return (
        <main>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: deviceHeight-100, width: deviceWidth-50}}>
                <Typist cursor={{ show: false }} startDelay={100}>
                    <h1>Hi, I'm Pallab</h1>
                    <h1>Software Engineer</h1>
                </Typist>
                <img src={profilepic} alt=""/>;
            </div>
        </main>
    );
  }