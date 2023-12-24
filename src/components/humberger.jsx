import React, { Component } from 'react'
import styled from 'styled-components' ;

const Divh = styled.div`
    width: 30px;
    height: 5px;
    background-color: black;
    margin-bottom: 5px;
`

class Humberger extends Component {
    render() {
        return (
            <div>
                <Divh></Divh>
                <Divh></Divh>
                <Divh></Divh>
            </div>
        )
    }
}

export default Humberger