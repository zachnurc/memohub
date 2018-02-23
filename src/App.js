import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './media/logo.png';
import headerAnimation from './media/header-video.mp4';
import packageContents from './media/packaging-contents.jpg';
import pageBorder from './media/page-border.png';
import setupPhone from './media/Setup phone.png';
import settingsPhone from './media/Settings Phone.png';
import reassurancePhone from './media/Reassurance Phone.png';
import dashboard from './media/Dashboard in screen.png';
import './App.css';

//edit background image on features needs stretching sideways
//scroll handler needs to cause link call not just scroll potentially use a select case

//select case for all possible pages
//when a tag clicked or on scroll call function which has a switch case
//switch case opens correct page using url

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollLocation: 0
    };
  }

  handleKeyPress(keycode){

    if(keycode === 40 || keycode === 34){
      this.handleScroll('down');
    }
    else if(keycode === 38 || keycode === 33){
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
  }

  componentDidMount() {
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
        this.setState({ scrollLocation : window.scrollY});
      }else if(window.scrollY < this.state.scrollLocation){
        this.handleScroll('up');
        this.setState({ scrollLocation : window.scrollY});
      }
      console.log(this.state.scrollLocation);
    }, false);
  }

  render() {

    const { scrollLocation } = this.state;

    // if(scrollLocation === 1){
    //   return <Redirect to='#meet-memo'/>;
    // } else if(scrollLocation === 2){
    //   return <Redirect to='#features'/>;
    // } else if(scrollLocation === 3){
    //   return <Redirect to='#connectivity'/>;
    // } else if (scrollLocation === 4) {
    //   return <Redirect to='#memo-app'/>;
    // } else if (scrollLocation === 6) {
    //   return <Redirect to='#local-authorities'/>;
    // } else if (scrollLocation === 5) {
    //   return <Redirect to='#contact'/>;
    // } else

    return (
      // <Router>
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <div id="main">
            <header>
              <a href="#home" onClick={() => this.setState({scrollLocation: 0})}>
                <img className="header-logo" src={logo} alt={logo} />
              </a>

              <label for="show-menu" class="show-menu">
                <FontAwesome
                  name='fas fa-bars'
                  size='2x'
                />
              </label>
              <input type="checkbox" id="show-menu" role="button" />

              <div id="navbar" >
                <ul>
                  <li>
                    <a href="#meet-memo" onClick={() => this.setState({scrollLocation: window.scrollY})}>Meet Memo</a>
                  </li>
                  <li>
                    <a href="#features" onClick={() => this.setState({scrollLocation: window.scrollY})}>Features</a>
                  </li>
                  <li>
                    <a href="#connectivity" onClick={() => this.setState({scrollLocation: window.scrollY})}>Connectivity</a>
                  </li>
                  <li>
                    <a href="#memo-app" onClick={() => this.setState({scrollLocation: window.scrollY})}>Memo App</a>
                  </li>
                  <li>
                    <a href="#local-authorities" onClick={() => this.setState({scrollLocation: window.scrollY})}>Local Authorities</a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => this.setState({scrollLocation: window.scrollY})}>Contact Us</a>
                  </li>
                </ul>
              </div>

            </header>
            <div id="container">
              <div id="home" className="home">
                <div className="intro">
                  <h1>Yeah. We think it looks good too.</h1>
                  <h3>Reassurance | Independence | Insight</h3>
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
                <div className="features-container">
                  <div className="pageBorder">
                    <img src={pageBorder} className="border-img"/>
                    <h2>What can Memo do?</h2>
                  </div>
                  <div className="left-half">
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
              </div>

              <div id="connectivity">
                <div className="pageBorder">
                  <img src={pageBorder} className="border-img"/>
                  <h2>What can Memo connect to?</h2>
                </div>
                <div className="left-half">
                  <p>We are launching Memo with our own sensors:</p>
                  <ul>
                    <li>Panic button</li>
                    <li>Smoke detector</li>
                    <li>Motion detector</li>
                    <li>Temperature sensor</li>
                    <li>Door sensor</li>
                    <li>Smart plug</li>
                  </ul>
                  <p>Coming Soon: <br></br>
                  Compatability with any Z-wave, Zigbee or Bluetooth sensor, such as:</p>
                  <ul>
                    <li>Heart rate monitor</li>
                    <li>Wireless speaker</li>
                    <li>Voice alerts</li>
                    <li>Smart lightbulbs</li>
                  </ul>
                </div>
                <div className="right-half">
                  <p>
                    We have designed Memo to be a platform, allowing it to have the
                    potetial to connect to any 3rd party Wireless product. <br/>
                    Why? <br />
                    Because every family's needs are different, and no single product
                    can meet those needs.
                  </p>
                  <p>
                    Assistive technology isn't just about panic buttons, it's about
                    helping individuals stay independent for longer, whether that be via
                    gentle reminders or just an easier way to listen to music.
                  </p>
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
                <ul>
                  <li>
                    <p>Set up the hub with the App.
                    </p>
                  </li>
                  <li>
                    <p>Add some useful information such as medication lists and conditions.</p>
                  </li>
                  <li>
                    <p>Decide what you want to be notified about and how.
                    </p>
                  </li>
                  <li>
                    <p>Be reassured that if an event happens that you want to know about,
                      you will. Immediately.
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img className="app-img" src={setupPhone} alt={setupPhone} />
                  </li>
                  <li>
                    <img className="app-img" src={setupPhone} alt={setupPhone} />
                  </li>
                  <li>
                    <img className="app-img" src={settingsPhone} alt={settingsPhone} />
                  </li>
                  <li>
                    <img className="app-img" src={reassurancePhone} alt={reassurancePhone} />
                  </li>
                </ul>
              </div>

              <div id="local-authorities">
                <div className="pageBorder">
                  <img src={pageBorder} className="border-img"/>
                  <h2>Integration with Local Authorities</h2>
                </div>
                <div className="left-half">
                  <img src={dashboard} alt={dashboard} />
                </div>
              </div>

              <div id="contact">
                <div className="container">
                  <div className="pageBorder">
                    <img src={pageBorder} className="border-img"/>
                    <h2>Contact</h2>
                  </div>
                  <div>
                    <form />
                  </div>
                </div>
                <footer className="footer">
                  <img className="footer-logo" src={logo} alt={logo} />
                  <h3>Copyright Memohub 2018</h3>
                </footer>
              </div>
            </div>
          </div>
        </div>
      // </Router>
    );
  }
}

export default App;
