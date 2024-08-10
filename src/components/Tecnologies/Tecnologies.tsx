
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
        <div>
          <h2>Backend</h2>
          <div className='tecno__field'>
            {['django', 'django-rest', 'express', 'nestjs'].map((tec, index) => (
              <div key={index} >
                <img width={20} height={20} src={`/images/${tec}.svg`} alt={`${tec}-logo`} />
                <p >{tec.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2>Frontend</h2>
          <div className='tecno__field'>
            {['react', 'nextjs', 'angular', 'tailwindcss'].map((tec, index) => (
              <div key={index} >
                <img width={20} height={20} src={`/images/${tec}.svg`} alt={`${tec}-logo`} />
                <p>{tec.toUpperCase()}</p>
              </div>

            ))}
          </div>
        </div>
        {/* end tecnologies */}
        <div>
          <h2>Android</h2>
          <div className='tecno__field'>
            {['react-native', 'expo', 'kotlin',].map((tec, index) => (
              <div key={index}>
                <img width={20} height={20} src={`/images/${tec}.svg`} alt={`${tec}-logo`} />
                <p>{tec.toUpperCase()}</p>
              </div>

            ))}
          </div>
        </div>
        {/* end tecnologies */}
        {/* Databases and ORMS */}
        <div>
          <h2>Databases and ORMS</h2>
          <div className='tecno__field'>
            {['postgresql', 'mysql', 'mongodb', 'sequelize', 'prisma', 'mongoose'].map((tec, index) => (
              <div key={index} >
                <img width={20} height={20} src={`/images/${tec}.svg`} alt={`${tec}-logo`} />
                <p >{tec.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
        {/* end tecnologies */}
        {/* end tecnologies */}
        <div>
          <h2>Dev tools</h2>
          <div className='tecno__field'>
            {['vscode', 'figma', 'android-studio', 'postman', 'dbeaver', 'mongodb-compass'].map((tec, index) => (
              <div key={index} >
                <img width={20} height={20} src={`/images/tools/${tec}.svg`} alt={`${tec}-logo`} />
                <p>{tec.toUpperCase()}</p>
              </div>

            ))}
          </div>
        </div>
        {/* end tecnologies */}
        {/* end tecnologies */}
        <div>
          <h2>programming languages</h2>
          <div className='tecno__language'>

            <p style={{ background: '#1e40af', }}>Typescript</p>
            <p style={{ background: '#075985', }}>Python</p>
            <p style={{ background: '#6b21a8', }}>Kotlin</p>

          </div>
        </div>
        {/* end tecnologies */}

      </div>

    </div>
  )
}

export default Tecnologies