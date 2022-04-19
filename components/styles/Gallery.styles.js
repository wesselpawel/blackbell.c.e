import styled, { css } from "styled-components"

export const GalleryWrapper = styled.div`
    width:100%;
    height:100vh;
    background-color:black;
    color:white;
    display:flex;
    justify-content: center;
    position:relative;
    button{
        height:20px; 
        margin-top:30px;
    }
`
export const GalleryPhoto = styled.div`
    ${ props => props.visibility === props.current && css` 
        opacity:1;
        transition:.5s;
        z-index:2;
    `} 
    ${ props => props.visibility > props.current && css`    
        transform: scale(50%) translate(800px, 0);   
        opacity:0.5;
        z-index:1;
        transition:.5s;
    `}
    ${ props => props.visibility < props.current && css`   
        transform: scale(50%) translate(-800px, 0);   
        opacity:0.5;
        z-index:1;
        transition:.5s;
    `}
    border-radius: 5%;
    position:absolute;
    top:50%;
    margin:-275px auto; 
`

