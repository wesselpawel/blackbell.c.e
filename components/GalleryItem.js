import React, { useState } from 'react'
import { GalleryPhoto, GalleryContent, GalleryZoom } from './styles/Gallery.styles'

export default function GalleryItem ({post}) {

    const [isClicked, setClicked] = useState(false)

    function handleOpen(){
        setClicked(!isClicked)
    }

  return (
        <GalleryPhoto>
                <button onClick={handleOpen}>
                    <GalleryContent src={post.image} alt=""/>
                </button>
                {isClicked
                ? 
                (<button onClick={handleOpen}>
                    <GalleryZoom>
                        <GalleryContent src={post.image} alt=""/>
                    </GalleryZoom></button>
                ) : (null)}
        </GalleryPhoto>
    )
}

