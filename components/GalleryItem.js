import React from 'react'
import { GalleryPhoto } from './styles/Gallery.styles'

export default function GalleryItem ({post}) {
  return (
      <>
        <GalleryPhoto>
            <h3>{post.title} &rarr;</h3>
            <p>{post.description}</p>
        </GalleryPhoto>
        </>
    )
}