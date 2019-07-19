import React, {Component} from 'react';
import {connect} from 'react-redux';


class CartResult extends Component {
    
  render(){
    const {carts} = this.props;
    
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{this.OnTotalAmount(carts)}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
  }
  OnTotalAmount = (products) => {
    var total = 0;
    for(var i = 0;i < products.length;i++){
        total += products[i].product.price *  products[i].quanlity;
    }

    return total;

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

export default connect(mapStateToProps,mapDispatchToProps)(CartResult);
