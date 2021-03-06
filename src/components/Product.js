import React, {Component} from 'react';
import * as actions from './../actions/index';
import * as messages from './../contants/message';
import {connect} from 'react-redux';


class Product extends Component {
   
    showRating  = (rate) => {
        var result =  [];
        var key = 0;
        if(rate>0) {
            for(var i = 0;i<rate;i++){
                result.push(<i key={key} className="fa fa-star"></i>);
                key++;
            }
            for(var j = 0;j<(5-rate);j++){
                result.push(<i key={key} className="fa fa-star-o"></i>);
                key++;
            }
        }
        return result;
    }

    onAddToCart = () =>{
        this.props.onAddToCart(this.props.product,1);
        this.props.onChangeMessage(messages.MSG_ADD_TO_CART_OF_YOU);
    }

    
  render(){
      
     
      const { name,description,price,rating,imageLink} = this.props.product.product;
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={imageLink}
                        className="img-fluid" alt="" />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                       <li>
                            {
                              this.showRating(rating)
                            }
                       </li>
                      
                    </ul>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{price}$</span>
                        <span className="right">
                            <a onClick = {this.onAddToCart} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
    </div>   
    );
  }


 
}  


const mapStateToProps = state => {
    return {
      
    }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
      onAddToCart:(product,quanlity)=>{
          dispatch(actions.onAddToCart(product,quanlity));
      },
      onChangeMessage: (message) => {
        dispatch(actions.onChangeMessage(message));
      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
