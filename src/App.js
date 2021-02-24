// import './App.css';
import React, { Component } from "react";


class App extends Component {
  
  state = {
    productData: 'milk',
  } 
  render(){
    return (
      <div className="App">
        <h1>{this.state.productData}</h1>
      </div>
    );
  }
}
export default App;










// import './App.css';
// import React, { Component } from "react";
// import classes from './App.module.css';
// import ProductData from "./ProductData";
// import ProductDetails from './ProductDetails';
// import ProductPreview from './ProductPreview';
// import Topbar from './Topbar';

// class App extends Component {
//   constructor(){
//   super()
//   this.state = {
//     productData: ProductData,
//   }
// }
  
//   render(){
//     return (
//       <div className="App">

//           <Topbar/>
//         <div className={classes.MainContainer}>
//           <div className={classes.ProductPreview}>
//             <ProductPreview />
//           </div>
          
//           <div className={classes.ProductData}>
//             <ProductDetails /> 
//           </div>
//         </div>
//       </div>
//     );
//   }
  
// }

// export default App;
