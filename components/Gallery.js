import React, { useState } from 'react'
import { GalleryWrapper, GalleryPhoto } from './styles/Gallery.styles'
import Image from 'next/image'

export default function Gallery({ posts }) {


  const [current, setCurrent] = useState({
    onTop: 0,
  })

  const onTop = current.onTop

  const getNext = () => {
    setCurrent({...current, onTop: onTop+1})
  }

  const getPrev = () => {
    setCurrent({...current, onTop: onTop-1})
  }

  return (
        <GalleryWrapper>
            {posts.map((post, index) => (
              <GalleryPhoto key={index} visibility={index} current={onTop} post={post}>
                <Image src={post.image} alt="" width={550} height={550}/>
              </GalleryPhoto>
            ))}
            <button onClick={getNext}>
              Next image
            </button>
            <button onClick={getPrev}>
              Previous image
            </button>
        </GalleryWrapper>
  )
}
