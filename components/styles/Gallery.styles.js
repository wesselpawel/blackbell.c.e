import styled from "styled-components"


export const GalleryItem = styled.div`
    background-color: white;
    width:250px;
    height:250px;
    margin:5px;

`
export const GalleryBox = styled.div`
    width:100%;
    height:auto;
    background-color:black;
    color:white;
    display:flex;
    align-items: center;
    padding:10vh 0;
    & > div{
        width:50%;
        margin:0 auto;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`