import Gallery from '../components/Gallery'
import '../styles/globals.css'
import { motion } from "framer-motion"

function myApp({ Component, pageProps, router, text }) {
  return (
    
    <motion.div
      key={router.route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Component {...pageProps} />
      <Gallery text={text}/>
    </motion.div>

  )
}

export default myApp