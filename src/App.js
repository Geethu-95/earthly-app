import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/carousel';
import Product from './components/product';
import About from './components/about';
import Footer from './components/footer';
import ProductNew from './components/productNew';
import Home from './components/home';
import { useState } from 'react';
import HomeNew from './components/homeNew';



function App() {

 
  return (
    <div className="App">
     <Header/>
     <HomeNew/>
     <ProductNew/>
     <Footer/>
    </div>
  );
}

export default App;
