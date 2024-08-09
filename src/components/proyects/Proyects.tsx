// import { Canvas, } from '@react-three/fiber'

import CardProyect from './CardProyect';

const Proyects = () => {

    return (
        <main className='main__proyect'>
            <section className='container__proyect'>
                <h2 className='title__proyect'>Proyects </h2>
                <div className="proyect__grid">
                    <CardProyect
                        image='/proyects/bebidas.png'
                        description='It is a small app to search for drink recipes and uses an API to consult the recipes'
                        title='App recipes drinks'
                        urlGitGub='https://github.com/byron-fran/App_Bebidas_react'
                        urlWeb='https://peppy-daffodil-64026f.netlify.app/'
                        technologies={['react', 'tailwindcss']}
                    />

                    <CardProyect
                        image='/proyects/prestamo.png'
                        title='Prestamos'
                        description='It is a mini-app that calculates the total amount of interest when making a loan'
                        urlGitGub='https://github.com/byron-fran/app-presupuesto'
                        urlWeb='https://chimerical-taffy-75180b.netlify.app/'
                        direction='row-reverse'
                        technologies={['react', 'tailwindcss']}

                    />
                    <CardProyect
                        image='/proyects/Redux-Task.png'
                        description='It is a task application. a CRUD and uses redux, tailwindcss and localStorage'
                        urlGitGub='https://github.com/byron-fran/App_Tareas_redux_React'
                        urlWeb='https://spiffy-halva-d19f74.netlify.app/'
                        title='Task-App'
                        technologies={['react', 'tailwindcss']}

                    />
                    <CardProyect
                        image='/proyects/Quiosko-App.jpg'
                        description='It is a simple kiosk, to order fast food dishes. It can also be added and deleted from the administration panel.'
                        urlGitGub='https://github.com/byron-fran/Quiosko-Nextjs'
                        urlWeb='https://quiosko-nextjs.vercel.app/order/cafe'
                        title='Quiosko-Food'
                        technologies={['nextjs', 'tailwindcss', 'prisma']}

                    />
                    <CardProyect
                        image='/proyects/cybernook.webp'
                        description='It is a complete ecommerce for electronic products. It has authentication, filters, pagination, and a payment method with Stripe. It is also available for Android.'
                        urlGitGub='https://github.com/byron-fran/CyberNook'
                        urlWeb='https://cyber-nook-8wwr.vercel.app/'
                      // !todo add url apk android
                        title='Cybernook'
                        technologies={['react', 'react-native', 'redux', 'tailwindcss', 'nodejs', 'express', 'postgresql', 'sequelize']}

                    />
                    <CardProyect
                        image='/proyects/UpTask2.webp'
                        description='This app is used to create projects, assign tasks and add members. Each task has different statuses and the history of changes will be saved.'
                        urlGitGub='https://github.com/byron-fran/UpTask-2024'
                        // !todo add url web

                        title='UpTask'
                        technologies={['react', 'react-query', 'redux', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'mongoose']}

                    />
                    {/* Project with react native */}
                    <CardProyect
                        image='/proyects/android/presupuesto.png'
                        title='presupuesto App'
                        // !todo add url web
                 
                        urlAndroid='https://www.mediafire.com/file/0am6c8uf93lc476/presupuestoApp.apk/file'
                        description='It is an application for Android, which is used to calculate the budget spent'
                        urlGitGub='https://github.com/byron-fran/App-Android-Presupuesto'
                        technologies={['react-native',]}

                    />

                    {/* Proyects with django */}
                    <CardProyect
                        image='/proyects/TodoApp.webp'
                        title='TodoApp'
                        // !todo add url deploy
                        urlGitGub='https://github.com/byron-fran/Todo-App'
                        description='It is a simple app to create notes and mark them as completed. It has authentication so that the user can save their notes in a database.'
                        technologies={['python', 'django', 'djangorest', 'angular', 'angular-material', 'mysql']}

                    />
                    <CardProyect
                        image='/proyects/Dev-store.webp'
                        title='Dev Store'
                        // !todo add url deploy
                        urlGitGub='https://github.com/byron-fran/Dev-Store-Django'
                        description='It is a store for programmers where they can buy products such as: t-shirts, caps, mugs, and much more.'
                        technologies={['python', 'django', 'tailwindcss', 'mysql']}

                    />
                    <CardProyect
                        image='/proyects/Django1.png'
                        title='App Task'
                        // !todo add url deploy
                        urlGitGub='https://github.com/byron-fran/App-Django_Task'
                        description='It is a full-stack web application and handles a CRUD of tasks and has authentication'
                        technologies={['python', 'django']}

                    />

                </div>



            </section>
            {/* End section */}



        </main>


    )
}

export default Proyects