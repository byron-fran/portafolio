import { Canvas, } from '@react-three/fiber'

import CardProyect from './CardProyect'
const Proyects = () => {

    return (
        <main>
            <section className='container__proyect'>
                <h2 className='title__proyect'>Proyects with react</h2>
                <div className="proyect__grid">
                    <CardProyect
                        image='/proyects/recetas.png'
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
                </div>
            </section>
            {/* End section */}
            <section>
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
            </section>



        </main>


    )
}

export default Proyects