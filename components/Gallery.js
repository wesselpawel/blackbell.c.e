import React from 'react'
import { GalleryWrapper, Background } from './styles/Gallery.styles'
import GalleryItem from './GalleryItem'

export default function Gallery({ posts }) {

  return (
      <Background>
        <a id="gallery" href="#"></a>
        <GalleryWrapper>
          {posts.map((post, index) => (
              <GalleryItem key={index} post={post} />
          ))}
        </GalleryWrapper>
      </Background>
  )
}
