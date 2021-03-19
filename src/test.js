import React, { Component } from 'react';
import data from "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/"; 

const dataman = data[0].id;

class Example1 extends Component {
	render() {
		return (
            <ul>
                {dataman.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default Example1;