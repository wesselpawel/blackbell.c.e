import React from 'react'
import { GalleryItem, GalleryBox } from './styles/Gallery.styles'
import Image from 'next/image'
import sectionImg from '../images/section.png'
export default function Gallery({ text }) {
  return (
    <>
        <GalleryBox>
          <div>
            {text}
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
          </div>
        </GalleryBox>
    </>
  )
}