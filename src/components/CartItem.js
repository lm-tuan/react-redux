import React, {Component} from 'react';
import * as actions from './../actions/index';
import * as messages from './../contants/message';
import {connect} from 'react-redux';


class CartItem extends Component {

    onDeleteProductCart = () =>{
        this.props.onDeleteProductCart(this.props.product);
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_CART);
    }  
  render(){
   
      const {product} = this.props.product;
      
    return (
        <tr>
            <th scope="row">
                <img src={product.imageLink}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.name}</strong>
                </h5>
            </td>
            <td>{product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{this.props.product.quanlity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a href={"#"} >—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{product.price *this.props.product.quanlity}$</td>
            <td>
                <button onClick = {this.onDeleteProductCart} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
     </tr>
    );
  }
}

const mapStateToProps = state => {
    return {
      
    }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
      onDeleteProductCart: (product) => {
          dispatch(actions.OnDeleteProductCart(product));
      },
      onChangeMessage: (message) => {
        dispatch(actions.onChangeMessage(message));
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartItem);
