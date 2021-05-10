import Header from '../component/Header'
import Footer  from '../component/Footer'
import Productlist from '../component/productlist'
import React,{ Component } from 'react';
import axios from 'axios';
class Home extends Component {
  constructor(props){
    super(props);
    this.state ={product: ""}
  }
  render(){
  return (
    <div >
        <Header/>
        <Productlist  product={this.state.product}/>
        <Footer/>
    </div>
  );
  }
}

export default Home;
