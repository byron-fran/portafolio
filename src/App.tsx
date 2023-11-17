import {Routes, Route} from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import Componente1 from './components/Componente1';
function App() {


  return (
    <>
      <h1>Hola mundo</h1>
      {/* <Header/> */}
      <Componente1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
