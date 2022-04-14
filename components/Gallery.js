import React from 'react'
import { GalleryItem, GalleryBox } from './styles/Gallery.styles'
import Image from 'next/image'
import sectionImg from '../images/section.png'

export default function Gallery({ posts }) {
  return (
    <>
        <GalleryBox>
          <div>
          
            
          </div>
        </GalleryBox>
    </>
  )
}
export const getStaticProps = async () => {
  const res = await fetch (`http://localhost/rest/api/post/read.php`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}