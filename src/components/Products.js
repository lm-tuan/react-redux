import React, {Component} from 'react';
import Product from './Product';
import {connect} from 'react-redux';


class Products extends Component {
  
  render(){
    
    var {products} = this.props;
    const elementProducts = products.map( (product, index) =>{
        return <Product product = {product} key = {index}/>
     });
    return (
      
      <div className="hidden-sn animated deep-purple-skin">
         <div> 
         <main id="mainContainer">
              <div className="container">
                  {/* <!-- Products --> */}
                  <section className="section">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                      <div className="row">
                          {/* <!-- Product --> */}
                         {elementProducts}
                      </div>
                  </section> 
              </div>
          </main>
             
         </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      products:state.products
    }
}
const mapDispatchToProps = (dispatch,props) => {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
