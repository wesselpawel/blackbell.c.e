import styled from "styled-components"

export const GalleryWrapper = styled.div`
    width:100%;
    height:100vh;
    background-color:black;
    color:white;
    display:flex;
    justify-content: center;
    position:relative;
`
export const GalleryPhoto = styled.div`
    position:absolute;
    top:50%;
    margin:-275px auto;
    & > :nth-child(odd){
        z-index: -1;
    }
    & > :nth-child(n+1){
        z-index: 1;
    }
`

