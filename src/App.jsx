import AppWorks from "./components/AppWorks"
import Choose from "./components/Choose"
import ClientSays from "./components/ClientSays"
import Drivers from "./components/Drivers"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"


function App() {
 
  return (
    <div className="w-full h-fit">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <Offer />
      <section id="why-us">
      <Choose />
      </section>
        <Drivers />
      <section id="download">
        <AppWorks />
      </section>
      <section id="reviews">
      <ClientSays />
      </section>
      <Footer />
    </div>
  )
}

export default App
