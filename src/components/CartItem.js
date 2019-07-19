import React, {Component} from 'react';


class CartItem extends Component {
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
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
     </tr>
    );
  }
}

export default CartItem;
