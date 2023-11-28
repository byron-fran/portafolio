import { TypeAnimation } from 'react-type-animation'
import AnimationData from '../../assets/AnimationPrograming.json';
import Lottie from 'lottie-react'

const Presentation = () => {

  return (
    <div className="container">

      <div className='animation__container' >
        
        <div className='animation__flex'>
          <div className='animation__div'>
            <p>Hello I'm</p>
            <section className="animation">
              <div className="first"><div>Byron Chanax</div></div>
              <div className="second"><div>Web developer</div></div>
              <div className="third"><div>Mobile developer</div></div>
            </section>
          </div>
          <TypeAnimation
            sequence={[
             "Hello, i'm Byron",
              1000,
              'Web and mobile developer in training',
              1000,
              'Committed to continuous learning',
              1000,
              'Learning new technologies',
              1000
            ]}
            className="title-animation"
            speed={50}

          />
        </div>
        <div className='animation__lottie'>
          <Lottie
            animationData={AnimationData}
          />
        </div>

      </div>

    </div>
  )
}

export default Presentation