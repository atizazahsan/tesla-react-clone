import React from 'react'
import styled from 'styled-components'

function Section({ title , description , backgroundImg , leftButtonText , rightButtonText}) {

    function scrollWindow () {
        window.scrollY(100)
    }
    return (
        <Container bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>{leftButtonText}</LeftButton>
                <RightMenu>{rightButtonText}</RightMenu>
            </ButtonGroup>
            <DownArrow onClick={scrollWindow} src="/images/down-arrow.svg"/ >
        </Container>
        
    )
}

export default Section

const Container = styled.div`
    background-color: blue;
    width: 100% ;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display : flex;
    flex-direction: column;
    align-items: center;
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
    display : flex;
    flex-grow : 1;
    /* justify-content : center; */
    align-items: center;
    padding-top: 50vh;

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32 ,0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color : white;
    display : flex;
    justify-content: center;
    align-items: center;
    text-transform : uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;

    
    @media (max-width: 768px) {
        width : 180px
    }
` 

const RightMenu = styled(LeftButton)`
    background-color: white;
    color: black ;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    animation:animation infinite 1.5s;
    cursor: pointer;
    padding-bottom: 10px
`