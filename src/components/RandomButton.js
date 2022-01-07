import React from "react";
import reactDom from "react-dom";
import races from "data/races.json"
JSON.parse()
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            races
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const races =this.state.races
        const randraces = races[Math.floor(Math.random())];
    }
}
