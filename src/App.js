import React, { Component } from 'react';
import logo from './media/logo.png';
import headerAnimation from './media/header-video.mp4';
import packageContents from './media/packaging-contents.jpg';
import pageBorder from './media/page-border.png';
import features from './media/features.png';
import './App.css';

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
          <header>
            <img className="header-logo" src={logo} alt={logo} />
          </header>
          <div id="container">
            <div id="home" className="home">
              <div className="intro">
                <h1>Yeah. We think it looks good too.</h1>
                <h3>Reassurance | Independence | Insight</h3>
                <video className="home-video" src={headerAnimation} autoplay />
              </div>
            </div>

            <div id="meet-memo">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>Meet Memo</h2>
              </div>
              <p>
                Memo is a digital assisted living platform.
                With the potential to connect to virtually any IoT sensor,
                meaning that as your needs evolve, so does memo.
              </p>
              <img src={packageContents} alt="Package Contents" className="package-img"/>
            </div>

            <div id="features">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>What can Memo do?</h2>
              </div>
              <div className="features-container">
                <p>
                  3G - Can call a family memberor monitoring centre, and connect to the internet.
                </p>
                <p>
                  Multi protocol - If it's wireless we should be able to connect to it.
                </p>
                <p>
                  Memo app - keeps family updated and reassured.
                </p>
                <p>
                  Carer logging - via a key fob, carers can touch in and out, giving reassurance they have arrived.
                </p>
                <p>
                  Works out of the box - just 3 mins setup via the Memo app.
                </p>
              </div>
            </div>

            <div id="connectivity">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>What can Memo connect to?</h2>
              </div>
            </div>

            <div id="memo-app">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>What is the Memo app?</h2>
              </div>
              <p>
                The Memo app allows family to stay updated on all products connected
                to the hub, such as if a door has been opened in the middle of the night,
                or a carer has failed to turn up.
              </p>
            </div>

            <div id="local-authorities">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>Integration with Local Authorities</h2>
              </div>
            </div>

            <div id="contact">
              <div className="pageBorder">
                <img src={pageBorder} className="border-img"/>
                <h2>Contact</h2>
              </div>
            </div>
            <footer className="footer">
              <h3>Copyright</h3>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
