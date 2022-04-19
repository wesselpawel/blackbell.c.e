import React from 'react'
import { GalleryWrapper, GalleryPhoto } from './styles/Gallery.styles'
import Image from 'next/image'
export default function Gallery({ posts }) {

  function GalleryItems(index){
    const array = posts.map((post, index) => index + post._id )
    console.log(array);
  }
  console.log(GalleryItems(2));
  

  return (
        <GalleryWrapper>
            {posts.map((post) => (
              <GalleryPhoto key={post._id} post={post}>
                <Image src={post.image} alt="" width={550} height={550} />
              </GalleryPhoto>
            ))}
        </GalleryWrapper>
  )
}
