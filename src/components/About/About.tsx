import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='about__container'>
        <h1></h1>
        <div className="about__grids">
          <div className="about__field">
            <h2 className='about__title'>About me</h2>
            <p className='about__information'>
            Hello! I am a passionate web developer in constant search for knowledge in the latest technologies. With experience in both web and mobile development, I have carried out projects that have strengthened my skills in areas such as React native, Django, Node js, Express, Typescrip etc. My focus is to continue learning and applying these skills to create innovative and efficient solutions. I'm excited about the opportunities the tech world has to offer and eager to contribute my experience to new projects!
            </p>
          </div>
          <div className="about__field">
            <img src="/icons/byron-fran.jpg" alt="image-user" className='about__user' />
            <h2 className='about__contact'>contact</h2>
            <div className="about__contacts">
              <NavLink to=''>
              <svg className='about__icon' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>CodePen icon</title><path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"/></svg>
              </NavLink>
              <NavLink to=''>
              <svg className='about__icon'   viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>CodeSandbox icon</title><path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/></svg>
              </NavLink>
              <NavLink to='https://github.com/byron-fran'>
              <img src="/icons/github.svg" alt="image-contact" className='about__icon' />
              </NavLink>
              <NavLink to='https://www.linkedin.com/in/byron-chanax-64427a21b/'>
              <img src="/icons/linkedin.png" alt="image-contact" className='about__icon' />
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About