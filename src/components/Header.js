import React , { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus , setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Z</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIconContainer>
                    <MenuIcon onClick={ () => setBurgerStatus(true)}/>
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status = {burgerStatus}>
                <CloseContainer>
                    <Close onClick={ () => setBurgerStatus(false)}/>
                </CloseContainer>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Latest Model</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display : flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index : 10
`
const MenuGroup = styled.div`
    display : flex;
    position: ;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display : none
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        padding: 0 5px;
        text-transform: upercase;
        color: black;
    }
`
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`
const Close = styled(CloseIcon)``


const MenuIconContainer = styled.div`
    cursor: pointer;
    display: flex;
`

const BurgerNav = styled.div`
    position : fixed ;
    background: white;
    width : 250px ;
    top :0 ;
    right: 0;
    bottom : 0 ;
    padding : 20px ;
    list-style: none;
    z-index: 20;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in;

    li {
        padding : 15px 20px;
        border-bottom: 1px solid rgba(25, 26, 55, 0.1);
        text-align: left;
        font-weight: 600;
    }
`