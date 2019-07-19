import React, {Component} from 'react';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render(){
    return (
      <div className="hidden-sn animated deep-purple-skin">
         <div> 
         <Header/>
          <main id="mainContainer">
              <div className="container">
                  {/* <!-- Products --> */}
                  <Products/>
                  {/* <!-- Message --> */}
                  <Message/>
                  {/* <!-- Cart --> */}
                  <Cart/>
              </div>
          </main>
          {/* <!-- Footer --> */}
          
      </div>
      </div>
    );
  }
}

export default App;
