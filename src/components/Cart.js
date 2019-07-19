import React, {Component} from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import {connect} from 'react-redux';


class Cart extends Component {
    
  render(){
      
      var {carts} = this.props;
      const elementCarts = carts.map( (product, index) => {
          
          return <CartItem product = {product} key ={index}  />
      } );

    return (
        <section className="section">
        <div className="table-responsive">
            <table className="table product-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { elementCarts }
                    <CartResult/>
                </tbody>
            </table>
        </div>
    </section>
    );
  }
}


const mapStateToProps = state => {
    return {
        carts:state.carts
    }
}
const mapDispatchToProps = (dispatch,props) => {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
