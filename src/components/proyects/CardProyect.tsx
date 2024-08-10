import { NavLink } from "react-router-dom"

interface ProyectProps {
    title: string,
    description: string,
    urlGitGub: string,
    urlWeb?: string,
    image: string,
    urlAndroid?: string,
    direction?: string,
    technologies : string[],
    iconWidth? : number,
    iconHeight? : number
}


const CardProyect: React.FC<ProyectProps> = ({ title, description, urlGitGub, urlWeb, image, direction, urlAndroid, technologies, iconHeight = 35, iconWidth=35 }) => {

    return (

        <div className="proyect__container">

            <div className="proyect__card" style={{ flexDirection: direction ? 'row-reverse' : 'row' }}>
                <img src={`${image}`} alt="img-proyect" className="proyect__image" />

                <div className="proyect__info" >
                    <h2 className="proyect__title">{title}</h2>
                    <p className='proyect__paragraph'>{description}</p>
                    <div className='proyect__links'>
                        <NavLink to={`${urlGitGub}`} target="_blank">
                            <img height='22px' src="/icons/github.svg" alt="img-icon" className='proyect__icon' />
                        </NavLink>
                        {urlWeb && (
                            <NavLink to={`${urlWeb}`} target="_blank">
                                <img height='25px' src="/icons/link.svg" alt="img-icon" className='proyect__icon' />
                            </NavLink>
                        )}
                        {urlAndroid && (
                            <NavLink to={`${urlAndroid}`} target="_blank">
                                <img height='22px' src="/icons/android.svg" alt="img-icon" className='proyect__icon' />
                            </NavLink>
                        )}

                    </div>

                </div>

            </div>
            <div className="proyect__technologies">
        
                  {technologies.map(( tec, i) => (
                    <img key={i}  width={iconWidth} height={iconHeight} style={{objectFit : 'contain'}} src={`/images/${tec}.svg`} alt={`icon-${tec}`} />
                  ))}

            </div>
        </div>
    )
}

export default CardProyect