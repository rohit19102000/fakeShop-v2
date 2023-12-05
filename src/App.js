import { BrowserRouter as Router ,Route , Routes,  }  from 'react-router-dom';
import { useState ,createContext }  from 'react';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Details from './Pages/Details';
import Authentication from './Pages/Authentication';
import NotFound from './Pages/NotFound';
import BuyNow from './Pages/BuyNow';
import { DetailsContext } from './components/Products/DetailsContext';
import ContactUs from './Pages/ContactUs';


function App() {
const [details,setDetails] = useState({})
const getDetails = (product) => {
  setDetails(product);
}
  return (
<DetailsContext.Provider value={{ details, getDetails }}>
   <Router>
     <div className="flex flex-col justify-between h-screen">
     <NavBar />
     <main className="container mx-auto px-3 pb-12">
       <Routes>
         <Route path="/" element={<Home getDetails={getDetails} />} />
         <Route path="/about" element={<About />} />
         <Route path="/Auth" element={<Authentication />} />
         <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/*" element={<NotFound />} />
 
         <Route path="/details" element={<Details  details={details} />} />
         <Route path="/BuyNow" element={<BuyNow />} />
       </Routes>

     </main>
     <Footer/>
     </div>

   </Router>
  </DetailsContext.Provider>
  );
}

export default App;
