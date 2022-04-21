import React, { useState } from 'react'
import { GalleryPhoto, GalleryContent, GalleryZoom } from './styles/Gallery.styles'
import Link from 'next/link'

export default function GalleryItem ({post}) {

    const [isClicked, setClicked] = useState({
        isClicked:false,
    })
    const clicked = isClicked.isClicked
    function handleClick(){
        setClicked({...isClicked, isClicked:true})
    }
    function handleClose(){
        setClicked({...isClicked, isClicked:false})
    }

  return (
        <GalleryPhoto>
                <button onClick={handleClick}>
                    <GalleryContent src={post.image} alt=""/>
                </button>
                {clicked 
                ? 
                (<button onClick={handleClose}><GalleryZoom>
                    <GalleryContent src={post.image} alt=""/>
                </GalleryZoom></button>
                ) : (null)}
        </GalleryPhoto>
    )
}

