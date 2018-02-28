import React, { Component } from 'react';
import Recaptcha from '../src';
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
import whiteHub from './media/white-hub.jpg';
import blackHub from './media/black-hub.png';
import smokeAlarm from './media/smoke-alarm.png';
import windowSensor from './media/window-sensor.png';
import motionSensor from './media/motion-sensor.png';
import smartPlug from './media/smart-plug.png';
import TSA from './media/tsa.jpg';
import './App.css';

//scroll animation and timeout
//potential of multiple coloured hub image on front page instead of just one
//one on mobile and small screens, more on bigger screens


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      scrollLocation: 0,
      scrollTriggered: false,
      email: "",
      name: "",
      subject: "",
      message: "Your Message",
      submission: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value})
  }

  handleSubmit(event) {
    console.log(this.state.name, this.state.email, this.state.subject, this.state.message);
    event.preventDefault();
    this.setState({submission: "Your email has been sent."})
  }

  handleWindowSizeChange = () => {
   this.setState({ width: window.innerWidth });
  }

  // handleScroll() {
  //   var scrollPos = window.scrollY();
  //   $('#navbar a').each(function () {
  //     var currLink = $(this);
  //     var refElement = $(currLink.attr("href"));
  //     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
  //         // $('#menu-center ul li a').removeClass("active");
  //         // currLink.addClass("active");
  //       }
  //       else{
  //         // currLink.removeClass("active");
  //       }
  //   });
  // }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    // window.addEventListener('scroll', this.handleScroll);
  }

  // handleKeyPress(keycode){
  //
  //   if(keycode === 40 || keycode === 34){
  //     this.handleScroll('down');
  //   }
  //   else if(keycode === 38 || keycode === 33){
  //     this.handleScroll('up');
  //   }
  // }
  //
  // //instead of scrolling load page with relevant #link
  //
  // handleScroll(direction){
  //
  //   if(direction === 'down'){
  //     window.scroll(0, this.state.scrollLocation + window.innerHeight);
  //   } else if(direction === 'up'){
  //     window.scroll(0, this.state.scrollLocation - window.innerHeight);
  //   }
  //
  //   this.setState ({scrollTriggered: true});
  //
  // }
  //
  //   if(window.innerWidth <= 1024 || window.innerHeight <= 1024){
  //     window.removeEventListener("keydown", (e) => {
  //       // space, page up, page down and arrow keys:
  //       if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  //         e.preventDefault();
  //         this.handleKeyPress(e.keyCode);
  //       }
  //     }, false);
  //
  //     window.removeEventListener("scroll", (event) => {
  //       if (window.scrollY > this.state.scrollLocation){
  //         this.handleScroll('down');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }else if(window.scrollY < this.state.scrollLocation){
  //         this.handleScroll('up');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }
  //       console.log(this.state.scrollLocation);
  //     }, false);
  //   }
  //
  //   if(window.innerWidth > 1024 && window.innerHeight > 768 || window.innerWidth > 768 && window.innerHeight > 1024){
  //     window.addEventListener("keydown", (e) => {
  //       // space, page up, pafodlge down and arrow keys:
  //       if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  //         e.preventDefault();
  //         this.handleKeyPress(e.keyCode);
  //       }
  //     }, false);
  //
  //     window.addEventListener("scroll", (event) => {
  //       if (window.scrollY > this.state.scrollLocation){
  //         this.handleScroll('down');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }else if(window.scrollY < this.state.scrollLocation){
  //         this.handleScroll('up');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }
  //       console.log(this.state.scrollLocation);
  //     }, false);
  //   }
  // };
  //
  //   if(window.innerWidth > 1024 && window.innerHeight > 768){
  //     window.addEventListener("keydown", (e) => {
  //       // space, page up, page down and arrow keys:
  //       if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  //         e.preventDefault();
  //         this.handleKeyPress(e.keyCode);
  //       }
  //     }, false);
  //
  //     window.addEventListener("scroll", (event) => {
  //       if (window.scrollY > this.state.scrollLocation){
  //         this.handleScroll('down');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }else if(window.scrollY < this.state.scrollLocation){
  //         this.handleScroll('up');
  //         this.setState({ scrollLocation : window.scrollY});
  //       }
  //       console.log(this.state.scrollLocation);
  //     }, false);
  //   }
  // }

//   // site key
//   const sitekey = 'xxxxxxx';
//
// // specifying your onload callback function
//   const callback = () => {
//     console.log('Done!!!!');
//   };
//
//   const verifyCallback = (response) => {
//     console.log(response);
//   };
//
// const expiredCallback = () => {
//   console.log(`Recaptcha expired`);
//   };
//
// // define a variable to store the recaptcha instance
//   let recaptchaInstance;
//
// // handle reset
//   const resetRecaptcha = () => {
//     recaptchaInstance.reset();
//   };

  render() {

    // const { scrollLocation } = this.state;
    var isMobile = window.innerWidth <= 480;
    var isTablet = false;

    console.log(window.innerWidth);

    if (window.innerWidth <= 480) {
      isMobile = true;
    } else if (window.innerHeight <= 480){
      isMobile = true;
    }

    if (window.innerWidth <= 1024 && !isMobile) {
      isTablet = true;
    }

    if (isMobile){
      return (
        <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
          <header>
            <a href="#home">
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
              <a href="#home">HOME</a>
              <a href="#meet-memo">MEET MEMO</a>
              <a href="#features">FEATURES</a>
              <a href="#connectivity">CONNECTIVITY</a>
              <a href="#memo-app">MEMO APP</a>
              <a href="#local-authorities">LOCAL AUTHORITIES</a>
              <a href="#contact">CONTACT US</a>
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
                {/* <div className="img-container">
                  <img src={whiteHub} alt={whiteHub}/>
                  <p>Hub</p>
                  </div>
                  <div className="img-container">
                  <img src={motionSensor} alt={motionSensor}/>
                  <p>Motion Sensor</p>
                  </div>
                  <div className="img-container">
                  <img src={smokeAlarm} alt={smokeAlarm}/>
                  <p>Smoke Alarm</p>
                  </div>
                  <div className="img-container">
                  <img src={smartPlug} alt={smartPlug}/>
                  <p>Smart Plug</p>
                  </div>
                  <div className="img-container">
                  <img src={windowSensor} alt={windowSensor}/>
                  <p>Window Sensor</p>
                </div> */}
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
                <div className="pageBorder">
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={this.state.myName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <textarea
                        className="input-box"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide margin-top display-block">
                      <input
                        className="input-box"
                        type="button"
                        value="Send"
                        onClick={this.handleSubmit}
                      />
                      <p>{this.state.submission}</p>
                    </div>
                    {/* <div id="recaptcha" className="col-small no-left-padding">
                      <Recaptcha
                        ref={e => recaptchaInstance = e}
                        sitekey={sitekey}
                        size="compact"
                        render="explicit"
                        verifyCallback={verifyCallback}
                        onloadCallback={callback}
                        expiredCallback={expiredCallback}
                      />
                    </div> */}
                  </form>
                </div>
              </div>

              <footer>
                <p><a href="www.alcuris.co.uk">Memo is an Alcuris brand</a></p>
                <p><a href="http://www.alcuris.co.uk/terms-and-conditions/">Privacy Notice</a></p>
                <div>
                  <img src={TSA} alt={TSA}/>
                </div>
                <p>Copyright 2018</p>
              </footer>
            </div>
          </div>
        </div>
      )
    } else if (isTablet){
      return(
        <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <header>
            <a href="#home">
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
              <a href="#home">HOME</a>
              <a href="#meet-memo">MEET MEMO</a>
              <a href="#features">FEATURES</a>
              <a href="#connectivity">CONNECTIVITY</a>
              <a href="#memo-app">MEMO APP</a>
              <a href="#local-authorities">LOCAL AUTHORITIES</a>
              <a href="#contact">CONTACT US</a>
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
              </div>

              <div id="features">
                <div className="features-container">
                  <div className="pageBorder">
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
                <div className="pageBorder">
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={this.state.myName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <input
                        className="input-box"
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide">
                      <textarea
                        className="input-box"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide margin-top">
                      <div id="recaptcha" className="col-small no-left-padding">
                        {/* <Recaptcha
                          ref={e => recaptchaInstance = e}
                          sitekey={sitekey}
                          size="compact"
                          render="explicit"
                          verifyCallback={verifyCallback}
                          onloadCallback={callback}
                          expiredCallback={expiredCallback}
                        /> */}
                      </div>
                      <div className="col-small" >
                        <p>{this.state.submission}</p>
                      </div>
                      <div className="col-small">
                        <input
                          className="input-box"
                          type="button"
                          value="Send"
                          onClick={this.handleSubmit}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <footer>
                <p><a href="www.alcuris.co.uk">Memo is an Alcuris brand</a></p>
                <p><a href="http://www.alcuris.co.uk/terms-and-conditions/">Privacy Notice</a></p>
                <div>
                  <img src={TSA} alt={TSA}/>
                </div>
                <p>Copyright 2018</p>
              </footer>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="build/react.js"></script>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <header>
            <a href="#home">
              <img className="header-logo" src={logo} alt={logo} />
            </a>

            <label htmlFor="show-menu" className="show-menu">
              <FontAwesome
                name='fas fa-bars'
                size='2x'
              />
            </label>
            <input type="checkbox" id="show-menu" role="button" />

            <div id="navbar" >
              <a href="#home" className="active">HOME</a>
              <a href="#meet-memo">MEET MEMO</a>
              <a href="#features">FEATURES</a>
              <a href="#connectivity">CONNECTIVITY</a>
              <a href="#memo-app">MEMO APP</a>
              <a href="#local-authorities">LOCAL AUTHORITIES</a>
              <a href="#contact">CONTACT US</a>
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
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
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
              </div>

              <div id="features">
                <div className="features-container">
                  <div className="pageBorder">
                    <img src={pageBorder} alt={pageBorder} className="border-img"/>
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
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
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
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
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
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
                  <h2>Integration with Local Authorities</h2>
                </div>
                <p>
                  The Memo dashboard provides an overview of all connected hubs,
                  it is configurable and provides actioanble data.
                  Memo is built using the latest software meaning it has the
                  potential to work with and integrate with multiple 3rd party
                  platforms.
                </p>
                <div className="left-float dashboard-img">
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
                <div className="pageBorder">
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form>
                    <div className="col-wide">
                      <div className="col-small no-left-padding">
                        <input
                          className="input-box"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          value={this.state.myName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-small">
                        <input
                          className="input-box"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-small">
                        <input
                          className="input-box"
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          value={this.state.subject}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-wide">
                      <textarea
                        className="input-box"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide margin-top">
                      <div id="recaptcha" className="col-small no-left-padding">
                        {/* <Recaptcha
                          ref={e => recaptchaInstance = e}
                          sitekey={sitekey}
                          size="compact"
                          render="explicit"
                          verifyCallback={verifyCallback}
                          onloadCallback={callback}
                          expiredCallback={expiredCallback}
                        /> */}
                      </div>
                      <div className="col-small">
                        <p>{this.state.submission}</p>
                      </div>
                      <div className="col-small">
                        <input
                          className="input-box"
                          type="button"
                          value="Send"
                          onClick={this.handleSubmit}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <footer>
                <p><a href="www.alcuris.co.uk">Memo is an Alcuris brand</a></p>
                <p><a href="http://www.alcuris.co.uk/terms-and-conditions/">Privacy Notice</a></p>
                <div>
                  <img src={TSA} alt={TSA}/>
                </div>
                <p>Copyright 2018</p>
              </footer>
            </div>
          </div>
        </div>
    );
    }

  }
}

export default App;
