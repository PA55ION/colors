import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    font-size: calc(10px + 2vmin);
    

`


export default class SortColor extends React.Component {
    render() {
        return(
            <div>
                <Header>
                    Gradient
                </Header>

            </div>
        )
    }

}