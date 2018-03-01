import React, { Component } from 'react';
import Recaptcha from '../src';
import $ from 'jquery';
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

//email form send email

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      email: "",
      name: "",
      subject: "",
      message: "Your Message",
      submission: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.resetNavbar = this.resetNavbar.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleFormKeyUp = this.handleFormKeyUp.bind(this);
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

    this.resetForm();

    if (this.state.name === ""){
      this.contactName.setAttribute("class", "input-box input-box-error");
      this.setState({submission: "Please enter your name."});
    } else if (this.state.email === "") {
      this.contactEmail.setAttribute("class", "input-box input-box-error");
      this.setState({submission: "Please enter your email address."});
    } else if (this.state.subject === "") {
      this.contactSubject.setAttribute("class", "input-box input-box-error");
      this.setState({submission: "Please enter the email subject."});
    } else if (this.state.message === "Your Message" || this.state.message === "") {
      this.contactMessage.setAttribute("class", "input-box input-box-error");
      this.setState({submission: "Please type a message."});
    } else {
      $.ajax({

        type: 'POST',
        url: './static/php/mailer.php',
        data: {
          "form_name": this.state.name,
          "form_email": this.state.email,
          "form_message": this.state.message,
          "form_subject": this.state.subject
        },
        cache: false,
        success: function(data) {

          // Success..
          this.setState({submission: "Your email has been sent."});

        }.bind(this),

        error: function(xhr, status, err) {

          this.setState({submission: "Sorry, there has been an error.  Please try again later or email info@alcuris.co.uk"});

        }.bind(this)

      });
    }
  }

  handleFormKeyUp(event) {
      if (event.keyCode == 13) {
        this.handleSubmit(event);
      }
  }

  resetForm(){
    this.contactName.setAttribute("class", "input-box");
    this.contactEmail.setAttribute("class", "input-box");
    this.contactSubject.setAttribute("class", "input-box");
    this.contactMessage.setAttribute("class", "input-box");
  }

  resetNavbar(){
    $('#navbar a').each(function () {

      var currLink = $(this);
      currLink.removeClass("active");

    });
  }

  handleWindowSizeChange = () => {
   this.setState({ width: window.innerWidth });
  }

  handleScroll() {

    console.log("scroll");

    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#navbar a').removeClass("active");
        currLink.addClass("active");
        window.location.hash = 'section' + this.hash;
      }
      else{
        currLink.removeClass("active");
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);

    var h = window.location.hash.replace('section', '');
    h = h.substr(1);
    if (h) {
      $(document).off("scroll");
      var target = h,
      location = target;
      target = $(target);
      if(!(target.offset() == undefined )){
        $('html, body').stop().animate({
          'scrollTop': target.offset().top+2
        }, 1000, 'swing', function () {
          window.location.hash = 'section' + location;
          $(document).on("scroll", this.handleScroll);
        });
      }
    }

        window.addEventListener('scroll', this.handleScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
        location = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = 'section' + location;
            $(document).on("scroll", this.handleScroll);
        });
    });

  }

  render() {

    var isMobile = window.innerWidth <= 480;
    var isTablet = false;

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
          <header ref={(input) => { this.header = input; }}>
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

            <div id="navbar" ref={(input) => { this.navbar = input; }} >
              <a ref={(input) => { this.navHome = input; }} href="#home" class="active">HOME</a>
              <a ref={(input) => { this.navMeetMemo = input; }} href="#meet-memo" class="">MEET MEMO</a>
              <a ref={(input) => { this.navFeatures = input; }} href="#features" class="">FEATURES</a>
              <a ref={(input) => { this.navConnectivity = input; }} href="#connectivity" class="">CONNECTIVITY</a>
              <a ref={(input) => { this.navMemoApp = input; }} href="#memo-app" class="">MEMO APP</a>
              <a ref={(input) => { this.navLocalAuthorities = input; }} href="#local-authorities" class="">LOCAL AUTHORITIES</a>
              <a ref={(input) => { this.navContact = input; }} href="#contact" class="">CONTACT US</a>
            </div>
          </header>
          <div id="main">
            <div id="container">
              <div ref={(input) => { this.Home = input; }} id="home" className="section">
                <div className="intro">
                  <h1>Yeah. We think it looks good too.</h1>
                  <h3>Reassurance | Independence | Insight</h3>
                </div>
              </div>

              <div ref={(input) => { this.MeetMemo = input; }} id="meet-memo" className="section">
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

              <div ref={(input) => { this.Features = input; }} id="features" className="section">
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

              <div ref={(input) => { this.Connectivity = input; }} id="connectivity" className="section">
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

              <div ref={(input) => { this.MemoApp = input; }} id="memo-app" className="section">
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

              <div ref={(input) => { this.LocalAuthorities = input; }} id="local-authorities" className="section">
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

              <div ref={(input) => { this.Contact = input; }} id="contact" className="section">
                <div className="pageBorder">
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="col-wide">
                      <input
                        ref={(input) => { this.contactName = input; }}
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
                        ref={(input) => { this.contactEmail = input; }}
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
                        ref={(input) => { this.contactSubject = input; }}
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
                        ref={(input) => { this.contactMessage = input; }}
                        className="input-box"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-wide margin-top display-block">
                      <input
                        className="input-box"
                        type="Submit"
                        value="Send"
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
          <header ref={(input) => { this.header = input; }}>
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

            <div id="navbar" ref={(input) => { this.navbar = input; }} >
              <a ref={(input) => { this.navHome = input; }} href="#home" class="active">HOME</a>
              <a ref={(input) => { this.navMeetMemo = input; }} href="#meet-memo" class="">MEET MEMO</a>
              <a ref={(input) => { this.navFeatures = input; }} href="#features" class="">FEATURES</a>
              <a ref={(input) => { this.navConnectivity = input; }} href="#connectivity" class="">CONNECTIVITY</a>
              <a ref={(input) => { this.navMemoApp = input; }} href="#memo-app" class="">MEMO APP</a>
              <a ref={(input) => { this.navLocalAuthorities = input; }} href="#local-authorities" class="">LOCAL AUTHORITIES</a>
              <a ref={(input) => { this.navContact = input; }} href="#contact" class="">CONTACT US</a>
            </div>
          </header>
          <div id="main">
            <div id="container">
              <div ref={(input) => { this.Home = input; }} id="home"  className="section">
                <div className="intro">
                  <h1>Yeah. We think it looks good too.</h1>
                  <h3>Reassurance | Independence | Insight</h3>
                </div>
              </div>

              <div ref={(input) => { this.MeetMemo = input; }} id="meet-memo" className="section">
                <div className="meet-memo-container">
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
              </div>

              <div ref={(input) => { this.Features = input; }} id="features" className="section">
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

              <div ref={(input) => { this.Connectivity = input; }} id="connectivity" className="section">
                <div className="connectivity-container">
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
              </div>

              <div ref={(input) => { this.MemoApp = input; }} id="memo-app" className="section">
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

              <div ref={(input) => { this.LocalAuthorities = input; }} id="local-authorities" className="section">
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

              <div ref={(input) => { this.Contact = input; }} id="contact" className="section">
                <div className="pageBorder">
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="col-wide">
                      <input
                        ref={(input) => { this.contactName = input; }}
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
                        ref={(input) => { this.contactEmail = input; }}
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
                        ref={(input) => { this.contactSubject = input; }}
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
                        ref={(input) => { this.contactMessage = input; }}
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
                          type="Submit"
                          value="Send"
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
          <header ref={(input) => { this.header = input; }}>
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

            <div id="navbar" ref={(input) => { this.navbar = input; }} >
              <a ref={(input) => { this.navHome = input; }} href="#home" className="active">HOME</a>
              <a ref={(input) => { this.navMeetMemo = input; }} href="#meet-memo" className="">MEET MEMO</a>
              <a ref={(input) => { this.navFeatures = input; }} href="#features" className="">FEATURES</a>
              <a ref={(input) => { this.navConnectivity = input; }} href="#connectivity" className="">CONNECTIVITY</a>
              <a ref={(input) => { this.navMemoApp = input; }} href="#memo-app" className="">MEMO APP</a>
              <a ref={(input) => { this.navLocalAuthorities = input; }} href="#local-authorities" className="">LOCAL AUTHORITIES</a>
              <a ref={(input) => { this.navContact = input; }} href="#contact" className="">CONTACT US</a>
            </div>
          </header>
          <div id="main">
            <div id="container">
              <div ref={(input) => { this.Home = input; }} id="home" className="section">
                <div className="intro">
                  <h1>Yeah. We think it looks good too.</h1>
                  <h3>Reassurance | Independence | Insight</h3>
                </div>
              </div>

              <div ref={(input) => { this.MeetMemo = input; }} id="meet-memo" className="section">
                <div className="meet-memo-container">
                  <div className="pageBorder">
                    <img src={pageBorder} alt={pageBorder} className="border-img"/>
                    <h2>Meet Memo</h2>
                  </div>
                  <div>
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
                </div>
              </div>

              <div ref={(input) => { this.Features = input; }} id="features" className="section">
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

              <div ref={(input) => { this.Connectivity = input; }} id="connectivity" className="section">
                <div className="connectivity-container">
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
              </div>

              <div ref={(input) => { this.MemoApp = input; }} id="memo-app" className="section">
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

              <div ref={(input) => { this.LocalAuthorities = input; }} id="local-authorities" className="section">
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

              <div ref={(input) => { this.Contact = input; }} id="contact" className="section">
                <div className="pageBorder">
                  <img src={pageBorder} alt={pageBorder} className="border-img"/>
                  <h2>Contact</h2>
                </div>
                <p>If you have any questions please get in touch by filling in the form below or emailing info@alcuris.co.uk.</p>
                <div>
                  <form onSubmit={this.handleSubmit} onKeyUp={this.handleFormKeyUp}>
                    <div className="col-wide">
                      <div className="col-small no-left-padding">
                        <input
                          ref={(input) => { this.contactName = input; }}
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
                          ref={(input) => { this.contactEmail = input; }}
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
                          ref={(input) => { this.contactSubject = input; }}
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
                        ref={(input) => { this.contactMessage = input; }}
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
                          type="Submit"
                          value="Send"
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
