import React from 'react'
import Lottie from 'react-lottie'
import { Fade } from 'react-reveal'

const CustomAnimation = ({ name, height, width, message, customClass }) => { 
    const defaultOptions = {
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require(`../../public/${name}`),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            } 
    }
  return (
    <Fade className={customClass}>
        <Lottie options={defaultOptions} width={width} height={height} />
        <span className='message-text'>{message}</span>
    </Fade>
  )
}

export default CustomAnimation