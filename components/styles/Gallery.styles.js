import styled, { css } from "styled-components"

export const GalleryWrapper = styled.div`
    color:white;
    height:150vh; 
    max-width:1000px;
    display:flex;
    flex-wrap: wrap;
    margin:0 auto;
    background-color:black;
    padding:55px;
    

`
export const GalleryZoom = styled.div`
    color:white;
    height:100vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5); 
    padding:55px;
    position:fixed;
    top:0;
    left:0;
    z-index: 5;
`

export const GalleryPhoto = styled.div`
    width:33%;
    text-align: center;
    background-color: white;
    border:2px solid black;
    display:flex;
    align-items: center;
    justify-content: center;
    position:relative;
    & > button {
        background-color: inherit;
        border:none;
    }
`
export const GalleryContent = styled.img`
    max-width:65%; 
    max-height:100%;
    cursor:zoom-in;
`

export const Background = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    padding:200px 0;
    
    
`

