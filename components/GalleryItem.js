import React from 'react'
import Link from 'next/link'
import { GalleryPhoto } from './styles/Gallery.styles'

export const ArticleItem = ({post}) => {
  return (
      <>
        <GalleryPhoto>
            <h3>{post.title} &rarr;</h3>
            <p>{post.body}</p>
        </GalleryPhoto>
        </>
    )
}