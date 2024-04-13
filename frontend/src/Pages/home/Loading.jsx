import Lottie from 'react-lottie';
import Messenger from "../../assets/lottie/Messenger.json";

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Messenger,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className='flex h-[100vh] justify-center items-center'>
        <Lottie 
          options={defaultOptions}
          height={"full"}
          width={"full"}
        />
      </div>
    );
  }
  