import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    Contructor() {
        super()
        this.state = {
            name: "barjo"
        }
    }

    componentDidMount() {
        //console.log('componentDidmaount');
        this.test('this is parameter function')
    }

    test(x) {
        var y = "this is variabel didalam function"
        console.log(x);
        console.log(y);
    }

    render() {
        //console.log('render');
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            p > Edit < code > src / App.js < /code> and save to reload. </p >
            <
            a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >
            Learn React <
            /a>  < /
            header > <
            /div>
        );

    }
}