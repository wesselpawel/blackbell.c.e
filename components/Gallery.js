import React from 'react'
import { GalleryBox } from './styles/Gallery.styles'
import GalleryItem from './GalleryItem'

export default function Gallery({ posts }) {
  return (
    <>
        <GalleryBox>
        {posts.map((post) => (
          <GalleryItem key={post.id} post={post}/>
        ))}
        </GalleryBox>
    </>
  )
}
