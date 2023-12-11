// import { Canvas, } from '@react-three/fiber'

import CardProyect from './CardProyect'
const Proyects = () => {

    return (
        <main className='main__proyect'>
            <section className='container__proyect'>
                <h2 className='title__proyect'>Proyects with react</h2>
                <div className="proyect__grid">
                    <CardProyect
                        image='/proyects/bebidas.png'
                        description='It is a small app to search for drink recipes and uses an API to consult the recipes'
                        title='App recipes drinks'
                        urlGitGub='https://github.com/byron-fran/App_Bebidas_react'
                        urlWeb='https://peppy-daffodil-64026f.netlify.app/'
                    />
                    {/* Card */}
                    <CardProyect
                        image='/proyects/tecno.png'
                        title='Tecno store'
                        description="It's a small laptop store. It is made with useContext for global state, useReducer, react-router-dom and pure css"
                        urlGitGub='https://github.com/byron-fran/E-commerce-laptops'
                        urlWeb='https://e-commerce-laptops.vercel.app/'
                        direction='row-reverse'

                    />
                    <CardProyect
                        image='/proyects/prestamo.png'
                        title='Prestamos'
                        description='It is a mini-app that calculates the total amount of interest when making a loan'
                        urlGitGub='https://github.com/byron-fran/app-presupuesto'
                        urlWeb='https://chimerical-taffy-75180b.netlify.app/'
                        direction='row-reverse'
                    />

                </div>
            </section>
            {/* End section */}
            <section className='container__proyect'>
                <h2 className='title__proyect'>Proyects with react native for android</h2>
                <div className="proyect__grid">
                    <CardProyect
                        image='/proyects/android/presupuesto.png'
                        title='presupuesto App'
                        urlAndroid='https://www.mediafire.com/file/0am6c8uf93lc476/presupuestoApp.apk/file'
                        description='It is an application for Android, which is used to calculate the budget spent'
                        urlGitGub='https://github.com/byron-fran/App-Android-Presupuesto'
                    />
                </div>
            </section>
            {/* Proyects with django */}
            <section className='container__proyect'>
                <h2 className='title__proyect'>Proyects with Django</h2>
                <div className="proyect__grid">
                    <CardProyect
                    image='/proyects/Django1.png'
                    title='App Task'
                    urlGitGub='https://github.com/byron-fran/App-Django_Task'
                    description='It is a full-stack web application and handles a CRUD of tasks and has authentication'
                    />
                </div>
            </section>
            <section>
                {/* <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas> */}
            </section>



        </main>


    )
}

export default Proyects