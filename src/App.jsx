
import Header from './Components/Layouts/Header'
import Container from './Components/Layouts/Container'
import './App.css'
import MainHome from './Components/MainHome'
import Services from './Components/Services'
import Work from './Components/Work'

function App() {


  return (
    <>
    <Header />
     <Container>
        <div>
          <MainHome/>
          <Services/>
          <Work />  
        </div>
     </Container>
    </>
  )
}

export default App
