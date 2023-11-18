import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Background from './pages/Background';


function App() {


  return (
    <>
      <Background/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
