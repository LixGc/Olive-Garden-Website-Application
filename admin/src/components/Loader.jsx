import Loading from '../Loading.json'
import Lottie from 'lottie-react'

const loaderContainerStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
    backdropFilter: 'blur(10px)', // Apply blur effect to the background
    zIndex: 9999,
  };
  const loaderAnimationStyles = {
    width: '50%', // Adjust the width as needed
    height: '140%', // Adjust the height as needed
  };
  export const Loader = () => {
    return (
      <div style={loaderContainerStyles}>
        <div style={loaderAnimationStyles}>
          <Lottie loop autoplay speed="1" background="transparent" animationData={Loading} />
        </div>
      </div>
    );
  };