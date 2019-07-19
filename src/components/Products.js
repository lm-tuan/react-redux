import React, {Component} from 'react';
import Product from './Product';


class Products extends Component {
  render(){
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
                          < Product/>
                      </div>
                  </section> 
              </div>
          </main>
             
         </div>
      </div>
    );
  }
}

export default Products;
