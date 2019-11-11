import React from 'react';
import styled from 'styled-components';
import { InlineIcon } from "@iconify/react";
import heart from "@iconify/icons-mdi/heart";
import code from "@iconify/icons-mdi/code";
// import accountCheck from "@iconify/icons-mdi/account-check";


const OuterBox = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid gray;
    border-radius: 35px;
    margin: 13px;
    cursor: pointer;
`
const InnerBox = styled.div(props => ({
    background: props.background,
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    position: 'relative',
    left: '18%',
   
}));
    
const Button = styled.button`
    margin: 15px;
    position: relative;
    left: -70px;
    border: none;
    background: none;
    color: white;
    font-size: 16px;

    &:hover {
        color: red;
        cursor: pointer;
    }

`
const CodeButton = styled.button`
    border: none;
    background: none;
    position: relative;
    cursor: pointer;
    color: white;
    font-size: 20px;
    left: 50px;


`
const Header = styled.p`
    font-size: calc(6px + 2vmin);
`


class BoxModals extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            counter: 0,
        }
    }

    handleClick = () => {
        this.setState({
            counter:  this.state.counter + 1
        })
    }
    render() {
        return(
           <OuterBox>
               <Header>{this.props.color.name}</Header>
               <InnerBox background={this.props.color.background}></InnerBox>
                     <Button onClick={this.handleClick}>
                    <InlineIcon
                        icon={heart}
                     />  {this.state.counter}
                    </Button>
                    <CodeButton>
                        {
                            document.queryCommandSupported('copy') &&
                            <div>
                                 <InlineIcon 
                                icon={code}
                                onClick={() => {navigator.clipboard.writeText(this.props.color.code)}}
                             /> 
                            </div>
                        }
                    </CodeButton>
           </OuterBox>
        )
    };
}

export default BoxModals;