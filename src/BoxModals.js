import React from 'react';
import styled from 'styled-components';
import { Icon, InlineIcon } from "@iconify/react";
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
    
const WrapperIcon = styled.div`
    margin: 15px;

    &:hover {
        color: red;
        cursor: pointer;
    }

`

const HeartButton = styled.button`
    border: none;
    background: none;
    position: absolute;
    

`
const Header = styled.p`
    font-size: calc(6px + 2vmin);
`



class BoxModals extends React.Component {
    render() {
        return(
           <OuterBox>
               <Header>{this.props.color.name}</Header>
               <InnerBox background={this.props.color.background}></InnerBox>
                     <WrapperIcon >
                    <InlineIcon icon={heart} />
                    </WrapperIcon>

                    <HeartButton>
                        <InlineIcon 
                        icon={code} /> {this.props.color.code}
                    </HeartButton>
                    
           </OuterBox>
        )
    };
}

export default BoxModals;