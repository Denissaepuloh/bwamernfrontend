import React, { Component } from 'react'

import Header from "parts/Header";
export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        document.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        )
    }
}
