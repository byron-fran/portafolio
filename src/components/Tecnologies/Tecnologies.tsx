
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

          <img src="/images/csharp.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/css.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/javascript.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/mongodb.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/mysql.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/nodejs.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/php.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/python.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/react.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/redux.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/sass.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/typescript.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/vuejs.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/html.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
        <div className="tecno__field">

          <img src="/images/tailwindcss.svg" alt="image tecnology" className="tecno__image" />
        </div>
        {/* End div field */}
      </div>
    </div>
  )
}

export default Tecnologies