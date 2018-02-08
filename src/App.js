import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './media/logo.png';
import headerAnimation from './media/12.jpg';
import WearableImage from './media/wearable.jpg';
import './App.css';

//scroll event listener
//e.defaultOverride()
//choose amount to scroll

//jumo site uses css transform, on scroll transforms by screensize

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    navCounter: 0
  };
}


  handleScroll(keycode){
    var activeNav = [
      ReactDOM.findDOMNode(this.refs.home),
      ReactDOM.findDOMNode(this.refs.PanicButton),
      ReactDOM.findDOMNode(this.refs.IoTSensor),
      ReactDOM.findDOMNode(this.refs.MemoApp),
      ReactDOM.findDOMNode(this.refs.MemoHub),
      ReactDOM.findDOMNode(this.refs.contact)]

    if(keycode == 40){
      if(this.state.navCounter < 6){
        this.state.navCounter++;
      }
    }
    else if(keycode == 38){
      if(this.state.navCounter > 0){
        this.state.navCounter--;
      }
    }

    activeNav[this.state.navCounter].focus();
  }

  componentDidMount() {
    //   document.addEventListener('scroll', this.handleScroll);
    window.addEventListener("keydown", (e) => {
      // space, page up, page down and arrow keys:
      if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        this.handleScroll(e.keyCode);
      }
    }, false);
  }

  render() {
    return (
      <div className="App">
        <div id="main">
          <header id="home" className="header">
            <img src={headerAnimation} className="header-video" />
            <div className="intro">
              <img className="page-title" src={logo} alt={logo} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat  pretium vulputate, non metus. Cras aliquet hendrerit lectus. Sed auctor vestibulum feugiat. Pellentesque tempus libero non neque elementum bibendum. Morbi nibh orci, consequat ac hendrerit nec, feugiat eget metus. Etiam malesuada orci eu nunc cursus viverra. Duis eros purus, ornare eu maximus fringilla, lacinia a erat. Cras convallis elementum imperdiet. Nulla facilisi. Aliquam sed venenatis nisl.
              </p>
            </div>
          </header>
          <div className="products">
            <div id="PanicButton" className="product">
              <div className="product-left">
                <img className="product-image" src={WearableImage} alt="placeholder"/>
              </div>
              <div className="product-desc">
                <h3 className="product-title">Wearable Panic Button</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                </p>
              </div>
            </div>
            <div id="IoTSensor" className="product">
              <div className="product-desc">
                <h3 className="product-title">IoT Sensor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                </p>
              </div>
              <div className="product-right">
                <img className="product-image" src={WearableImage} alt="placeholder"/>
              </div>
            </div>
            <div id="MemoApp" className="product">
              <div className="product-left">
                <img className="product-image" src={WearableImage} alt="placeholder"/>
              </div>
              <div className="product-desc">
                <h3 className="product-title">Memo App</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                </p>
              </div>
            </div>
            <div id="MemoHub" className="product">
              <div className="product-desc">
                <h3 className="product-title">Memo Hub</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                </p>
              </div>
              <div className="product-right">
                <img className="product-image" src={WearableImage} alt="placeholder"/>
              </div>
            </div>
          </div>
          <div id="contact" className="contact">
            <h1>Contact</h1>
          </div>
          <footer className="footer">
            <h3>Copyright</h3>
          </footer>
          <div id="navbar">
            <ul>
              <li>
                <a ref="home" href="#home"><span></span></a>
                <a ref="PanicButton" href="#PanicButton"><span></span></a>
                <a ref="IoTSensor" href="#IoTSensor"><span></span></a>
                <a ref="MemoApp" href="#MemoApp"><span></span></a>
                <a ref="MemoHub" href="#MemoHub"><span></span></a>
                <a ref="contact" href="#contact"><span></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
