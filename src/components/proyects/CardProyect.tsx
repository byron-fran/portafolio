import { NavLink } from "react-router-dom"

interface ProyectProps {
    title: string,
    description: string,
    urlGitGub: string,
    urlWeb?: string,
    image: string,
    urlAndroid? : string,
    direction? : string
}


const CardProyect: React.FC<ProyectProps> = ({ title, description, urlGitGub, urlWeb, image, direction, urlAndroid }) => {
    return (
        <div className="proyect__card" style={{flexDirection :  direction ? 'row-reverse' : 'row'}}>
            <img src={`${image}`} alt="img-proyect" className="proyect__image" />
            <div className="proyect__info" >
                <h2 className="proyect__title">{title}</h2>
                <p className='proyect__paragraph'>{description}</p>
                <div className='proyect__links'>
                    <NavLink to={`${urlGitGub}`}>
                        <img src="/icons/github.png" alt="img-icon" className='proyect__icon' />
                    </NavLink>
                    {urlWeb && (
                        <NavLink to={`${urlWeb}`}>
                            <img height='45px' src="/icons/web.svg" alt="img-icon" className='proyect__icon' />
                        </NavLink>
                    )}
                {urlAndroid && (
                        <NavLink to={`${urlAndroid}`}>
                            <img height='45px' src="/icons/androide.png" alt="img-icon" className='proyect__icon' />
                        </NavLink>
                    )}

                </div>
            </div>
        </div>
    )
}

export default CardProyect