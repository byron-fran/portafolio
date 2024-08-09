import Header from "./Header"
import Proyects from "../components/proyects/Proyects"
import About from "../components/About/About";
import Tecnologies from "../components/Tecnologies/Tecnologies";


const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Header />
      <About />
      <Proyects />
      <Tecnologies />
    </div>
  )
}

export default Home