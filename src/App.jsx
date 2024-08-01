import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="BIENVENIDO A CERCENASCO TIENDA DE MODA MASCULINA"/>
      <Footer/>
    </>
  );
}

export default App;
