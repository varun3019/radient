import Navbar from "./pages/Navbar"; 
import Home from './pages/Home'
import RelatedDeals from "./pages/RelatedDeals";
import SignUp from "./pages/SignUp";
import Fotter from "./pages/Fotter";


function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <div style={{ display: 'flex'}}>
     <RelatedDeals/>
     <RelatedDeals/>
     <RelatedDeals/>
     </div>
     <SignUp/>
     <Fotter/>
    </div>
  );
}

export default App;
