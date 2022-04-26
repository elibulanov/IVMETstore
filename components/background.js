
import Image from 'next/image'
// import ViewSource from '../components/view-source'


const Background = () => (
  <div>
    {/* <ViewSource pathname="pages/background.js" /> */}
    <div>
      <Image
        alt="summer"
        src="/summer.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  
  </div>
)

export default Background