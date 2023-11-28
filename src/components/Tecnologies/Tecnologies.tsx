
import { TypeAnimation } from 'react-type-animation'

const Tecnologies = () => {

  return (
    <div className='tecno__container'>
      <TypeAnimation
        sequence={[
          'Languages and frameworks, what to usually use',
          1000
        ]
      }
      className='tecno__title'
      speed={50}
      />
      <div className="tecno__grids">
        <div className="tecno__field">

          <img src="/images/django.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/csharp-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/css3-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/javascript-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/mongodb-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/mysql-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/nodejs-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/php-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/python-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/react-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/redux-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/sass-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/typescript-original.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/vuejs-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/html5-original-wordmark.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/tailwindcss-icon.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
      </div>
    </div>
  )
}

export default Tecnologies