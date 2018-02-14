import React, { Component } from 'react';
import logo from './media/logo.png';
import headerAnimation from './media/12.jpg';
import WearableImage from './media/wearable.jpg';
import './App.css';
import Link from './Link.js'

//scroll event listener
//e.defaultOverride()
//choose amount to scroll

//jumo site uses css transform, on scroll transforms by screensize

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollLocation: 0
    };
  }

  handleKeyPress(keycode){

    if(keycode === 40){
      this.handleScroll('down');
    }
    else if(keycode === 38){
      this.handleScroll('up');
    }
  }

//instead of scrolling load page with relevant #link

  handleScroll(direction){
    if(direction === 'down'){
      window.scroll(0, this.state.scrollLocation + window.innerHeight);
    } else if(direction === 'up'){
      window.scroll(0, this.state.scrollLocation - window.innerHeight);
    }

    this.setState({ scrollLocation: window.scrollY })

  }

  componentDidMount() {
    //   document.addEventListener('scroll', this.handleScroll);
    window.addEventListener("keydown", (e) => {
      // space, page up, page down and arrow keys:
      if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        this.handleKeyPress(e.keyCode);
      }
    }, false);

    window.addEventListener("scroll", (event) => {
      if (window.scrollY > this.state.scrollLocation){
        this.handleScroll('down');
      }else if(window.scrollY < this.state.scrollLocation){
        this.handleScroll('up');
      }
    }, false);
  }

  render() {
    return (
      <div className="App">
        <div id="main">
          <div id="container">
            <header id="home" className="header">
              <img src={headerAnimation} className="header-video" alt="header-img" />
              <div className="intro">
                <img className="page-title" src={logo} alt={logo} />
                <h1>Connected Dementia Care</h1>
                <p>
                  The number of individuals with dementia is on the rise. Alcuris is developing memo, a connected, internet of things suite of products to provide independence to those with dementia and reassurance to those around them.
                  This is the future of connected care.
                </p>
              </div>
            </header>
            <div className="products">
              <div id="products1" className="product">
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
              <div className="product">
                <div className="product-left">
                  <img className="product-image" src={WearableImage} alt="placeholder"/>
                </div>
                <div className="product-desc">
                  <h3 className="product-title">IoT Sensor</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                  </p>
                </div>
              </div>
              <div id="products2" className="product-full">
                <div className="product-images">
                  <img className="product-full-image" src={headerAnimation} alt="Memo Hub" />
                  <img className="product-full-image" src={headerAnimation} alt="Memo Hub" />
                </div>
                <div className="product-full-desc">
                  <h1>Memo Hub</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
                  </p>
                </div>
              </div>
            </div>
            <div id="contact" className="contact">
              <h1>Contact</h1>
            </div>
            <footer className="footer">
              <h3>Copyright</h3>
            </footer>
          </div>
          <div id="navbar">
            <ul>
              <li>
                <Link ref='home' href='#home' class="active"/>
              </li>
              <li>
                <Link ref='products1' href='#products1'/>
              </li>
              <li>
                <Link ref='products2' href='#products2'/>
              </li>
              <li>
                <Link ref='contact' href='#contact'/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
