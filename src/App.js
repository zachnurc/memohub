import React, { Component } from 'react';
import logo from './media/logo.png';
import headerAnimation from './media/12.jpg';
import WearableImage from './media/wearable.jpg';
import './App.css';

//scroll event listener
//e.defaultOverride()
//choose amount to scroll

class App extends Component {

  // componentDidMount() {
  //   document.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll(event){
  //   window.scrollBy(0, 10);
  // }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={headerAnimation} className="header-video" />
          <div className="intro">
            <img className="page-title" src={logo} alt={logo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat  pretium vulputate, non metus. Cras aliquet hendrerit lectus. Sed auctor vestibulum feugiat. Pellentesque tempus libero non neque elementum bibendum. Morbi nibh orci, consequat ac hendrerit nec, feugiat eget metus. Etiam malesuada orci eu nunc cursus viverra. Duis eros purus, ornare eu maximus fringilla, lacinia a erat. Cras convallis elementum imperdiet. Nulla facilisi. Aliquam sed venenatis nisl.
            </p>
          </div>
        </header>
        <div className="products">
          <div className="product">
            <img className="product-left" src={WearableImage} alt="placeholder"/>
            <div className="product-desc">
              <h3 className="product-title">Wearable Panic Button</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
              </p>
            </div>
          </div>
          <div className="product">
            <div className="product-desc">
              <h3 className="product-title">IoT Sensor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
              </p>
            </div>
            <img className="product-right" src={WearableImage} alt="placeholder"/>
          </div>
          <div className="product">
            <img className="product-left" src={WearableImage} alt="placeholder"/>
            <div className="product-desc">
              <h3 className="product-title">Memo App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
              </p>
            </div>
          </div>
          <div className="product">
            <div className="product-desc">
              <h3 className="product-title">Memo Hub</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et condimentum est. Sed sit amet convallis metus. Nam vel cursus justo. Curabitur dictum sollicitudin nulla non rhoncus. Nulla finibus hendrerit tellus vitae consequat. Suspendisse imperdiet magna enim. Cras eget mi metus. Ut facilisis vestibulum sem eu iaculis. Donec nec lorem velit. Aliquam magna sapien, rutrum et risus vitae, aliquam venenatis ex. Ut sit amet blandit urna. Fusce sagittis tellus eu ipsum volutpat pretium vulputate non metus.
              </p>
            </div>
            <img className="product-right" src={WearableImage} alt="placeholder"/>
          </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
        </div>
        <footer className="footer">
          <h3>Copyright</h3>
        </footer>
      </div>
    );
  }
}

export default App;
