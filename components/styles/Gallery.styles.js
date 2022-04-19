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
      z-index:5 !important;
    `}
    ${ props => props.visibility != props.current && css` 
      z-index:-5 !important;
    `}
    position:absolute;
    top:50%;
    margin:-275px auto; 
`

