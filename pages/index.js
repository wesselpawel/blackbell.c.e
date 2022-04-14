import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import React, { useState } from 'react';

const svgVariants = {
    hidden:{
      opacity: 1,
      pathLength: 0,
    },
    visible: {
      opacity:1,
      pathLength:1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  
  }
  
function Home() {

    const [active, setActive] = useState({isOpen:false})
    const isOpen = active.isOpen

    return (
      <>

      <div className={styles.background}></div>
      <div className={styles.main}>
        <div className={styles.mainBox}>
          <div className={styles.leftTop}>
              <svg version="1.1"
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="250.2px" height="250.2px" viewBox="-30 0 1181.2 970.5">
                  <motion.path 
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.triangle} 
                    d="M424.7,596.1c12.3-12.8,31.4-30,58-45c69.4-39.1,137.1-33.1,158-31c80.1,8.1,132.8,49.4,151,64
                    c0,0,78.4,62.9,120,244c1.8,7.8,4.5,21.1,1,37c-7.2,32.8-35.5,52.3-53,64c-66.3,44.3-156.5,52.1-189,54H0L556.6,0l566.1,983.1
                    M561.7,617.1c6.7,4.5,25,15.8,51,16c25.8,0.2,44.2-10.6,51-15 M535.7,675.1l-33,49 M605.7,686.1v63 M684.7,681.1l26,53"
                  />
              </svg>
          </div>
          <div className={styles.leftBottom}>
              <h1>Blackbell<span>.</span></h1>
              <h2>Art is my life<span>.</span></h2>
              <div className={styles.relativeBox}>
                <button className={styles.more}>Learn more</button>
              </div>
          </div>
          <div className={styles.rightTop}>
            <div className={styles.topText}>
              <h1>Blackbell.c.e</h1>
              <ul>
                <li>
                  <motion.div key="fb" whileHover={{
                    position:'relative',
                    zIndex: 1,
                    scale: [1, 1.3, 1.1],
                    color:'orange',
                    transition: {
                    duration: .2
                  }}}
                  >
                  <p><a href="#gallery">Gallery</a></p>
                  </motion.div>
                </li>
                <li>
                  <motion.div key="fb" whileHover={{
                    position:'relative',
                    zIndex: 1,
                    scale: [1, 1.3, 1.1],
                    color:'orange',
                    transition: {
                    duration: .2
                  }}}>
                  <p>About me</p>
                  </motion.div>
                </li>
                <li>
                  <motion.div key="fb" whileHover={{
                    position:'relative',
                    zIndex: 1,
                    scale: [1, 1.3, 1.1],
                    color:'orange',
                    transition: {
                    duration: .2
                  }}}>
                  <p>Contact</p>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <div className={styles.socialMedia}>
              <a href="">
                <motion.div key="fb" whileHover={{
                  position:'relative',
                  zIndex: 1,
                  scale: [1, 1.3, 1.1],
                  transition: {
                    duration: .2
                  }
                }}>
                  <Image className={styles.img} src={fb} alt=""/>
                </motion.div>
              </a>
              <a href="https://www.instagram.com/blackbell.ce/?hl=pl">
              <motion.div key="fb" whileHover={{
                  position:'relative',
                  zIndex: 1,
                  scale: [1, 1.3, 1.1],
                  transition: {
                    duration: .2
                  }
                }}
              >  
                <Image className={styles.img} src={ig} alt=""/>
              </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      </>
    )
  }
  export default Home

