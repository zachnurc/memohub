import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './media/logo.png';
import packageContents from './media/packaging-contents.jpg';
import pageBorder from './media/page-border.png';
import mobilePageBorder from './media/mobile-page-border.png';
import setupPhone from './media/Setup phone.png';
import settingsPhone from './media/Settings Phone.png';
import reassurancePhone from './media/Reassurance Phone.png';
import dashboard from './media/Dashboard in screen.png';
import connectivityImg from './media/connectivity-img.jpg';
import './App.css';

//navbar lenth fixed
//scroll animation and timeout

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
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

  handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });

  if(window.innerWidth <= 480 || window.innerHeight <= 480){
    window.removeEventListener("keydown", (e) => {
      // space, page up, page down and arrow keys:
      if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        this.handleKeyPress(e.keyCode);
      }
    }, false);

    window.removeEventListener("scroll", (event) => {
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

  if(window.innerWidth > 480 && window.innerHeight > 480){
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
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);

    if(window.innerWidth > 480 && window.innerHeight > 480){
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
  }

  render() {

    const { width } = this.state;
    const { scrollLocation } = this.state;
    const isMobile = window.innerWidth <= 480;

    if (isMobile){
      return (
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <header>
            <a href="#home" onClick={() => this.setState({scrollLocation: 0})}>
              <img className="mobile-header-logo" src={logo} alt={logo} />
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
          <div id="main">
            <div id="container">
              <div id="home" className="home">
                <div className="intro">
                  <h1>Yeah. We think it looks good too.</h1>
                  <h3>Reassurance | Independence | Insight</h3>
                </div>
              </div>

              <div id="meet-memo">
                <div className="pageBorder">
                  <h2>Meet Memo</h2>
                </div>
                <p>
                  Memo is a digital assisted living platform.
                  Memo allows individuals to stay independent, families to be
                  kept reassured and local authorities provided with actionable
                  data.
                </p>
                <p>
                  The Memo hub has the potential to connect to virtually any
                  wireless product, from speakers to door sensors, meaning
                  that as your needs evolve; so does Memo.
                </p>
                <div className="img-container">
                  <img src={packageContents} alt="Package Contents" className="package-img"/>
                </div>
              </div>

              <div id="features">
                <div className="features-container">
                  <div className="pageBorder">
                    <h2>What can Memo do?</h2>
                  </div>
                  <div>
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
                  <h2>What can Memo connect to?</h2>
                </div>
                <p>
                  Memo is designed to be a platform, allowing it to have the
                  potential to connect to nearly any 3rd party Wireless product.
                </p>
                <p>
                  Why?
                </p>
                <p>
                  Because every family's needs are different, and no single product
                  can meet those needs. But a platform can.
                </p>
                <div className="img-container">
                  <img src={connectivityImg} alt={connectivityImg} className="connectivityImg"/>
                </div>
              </div>

              <div id="memo-app">
                <div className="pageBorder">
                  <h2>What is the Memo app?</h2>
                </div>
                <p>
                  The Memo app allows family to stay updated on all products connected
                  to the hub, such as if a door has been opened in the middle of the night,
                  or a carer has failed to turn up.
                </p>
                <ul>
                  <li>
                    <p>
                      Set up the hub with the App.
                    </p>
                  </li>
                  <li>
                    <img className="app-img" src={setupPhone} alt={setupPhone} />
                  </li>
                  <li>
                    <p>
                      Decide what you want to be notified about and how.
                    </p>
                  </li>
                  <li>
                    <img className="app-img" src={settingsPhone} alt={settingsPhone} />
                  </li>
                  <li>
                    <p>
                      Be reassured that if an event happens that you want to know about,
                      you will. Immediately.
                    </p>
                  </li>
                  <li>
                    <img className="app-img" src={reassurancePhone} alt={reassurancePhone} />
                  </li>
                </ul>
              </div>

              <div id="local-authorities">
                <div className="pageBorder">
                  <h2>Integration with Local Authorities</h2>
                </div>
                <p>
                  The Memo dashboard provides an overview of all connected hubs,
                  it is configurable and provides actioanble data.
                  Memo is built using the latest software meaning it has the
                  potential to work with and integrate with multiple 3rd party
                  platforms.
                </p>
                <img src={dashboard} alt={dashboard} />
                <div>
                  <ul>
                    <li>
                      Monitor when carers have turned up and compare against carers
                      schedule.
                    </li>
                    <li>
                      Break down falls and panic events by age, gender, location
                      or condition.
                    </li>
                    <li>
                      Data comparisons, such as looking at correlations between
                      activity and falls.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="contact">
                <div className="container">
                  <div className="pageBorder">
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
      )
    } else {
      return (
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
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
          <div id="main">
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
                  Memo allows individuals to stay independent, families to be
                  kept reassured and local authorities provided with actionable
                  data.
                </p>
                <p>
                  The Memo hub has the potential to connect to virtually any
                  wireless product, from speakers to door sensors, meaning
                  that as your needs evolve; so does Memo.
                </p>
                <img src={packageContents} alt="Package Contents" className="package-img"/>
              </div>

              <div id="features">
                <div className="features-container">
                  <div className="pageBorder">
                    <img src={pageBorder} className="border-img"/>
                    <h2>What can Memo do?</h2>
                  </div>
                  <div className="left-float">
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
                <div>
                  <p>
                    Memo is designed to be a platform, allowing it to have the
                    potential to connect to nearly any 3rd party Wireless product.
                  </p>
                  <p>
                    Why?
                  </p>
                  <p>
                    Because every family's needs are different, and no single product
                    can meet those needs. But a platform can.
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
                    <img className="app-img" src={setupPhone} alt={setupPhone} />
                  </li>
                  <li>
                    <img className="app-img" src={settingsPhone} alt={settingsPhone} />
                  </li>
                  <li>
                    <img className="app-img" src={reassurancePhone} alt={reassurancePhone} />
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      Set up the hub with the App.
                    </p>
                  </li>
                  <li>
                    <p>
                      Decide what you want to be notified about and how.
                    </p>
                  </li>
                  <li>
                    <p>
                      Be reassured that if an event happens that you want to know about,
                      you will. Immediately.
                    </p>
                  </li>
                </ul>
              </div>

              <div id="local-authorities">
                <div className="pageBorder">
                  <img src={pageBorder} className="border-img"/>
                  <h2>Integration with Local Authorities</h2>
                </div>
                <p>
                  The Memo dashboard provides an overview of all connected hubs,
                  it is configurable and provides actioanble data.
                  Memo is built using the latest software meaning it has the
                  potential to work with and integrate with multiple 3rd party
                  platforms.
                </p>
                <div className="left-float">
                  <img src={dashboard} alt={dashboard} />
                </div>
                <div>
                  <ul>
                    <li>
                      Monitor when carers have turned up and compare against carers
                      schedule.
                    </li>
                    <li>
                      Break down falls and panic events by age, gender, location
                      or condition.
                    </li>
                    <li>
                      Data comparisons, such as looking at correlations between
                      activity and falls.
                    </li>
                  </ul>
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
    );
    }

  }
}

export default App;
