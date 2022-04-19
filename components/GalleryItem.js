import React from 'react'
import { GalleryPhoto } from './styles/Gallery.styles'
import Image from 'next/image'
export default function GalleryItem ({post}) {
  return (
      <>
        <GalleryPhoto>
            <Image src={post.image} alt="" layout='fill' />
        </GalleryPhoto>
        </>
    )
}