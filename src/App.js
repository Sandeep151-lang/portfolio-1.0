//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { Container } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import me from '../src/assets/sandeep4.png';
import certificate from '../src/assets/GuviCertification.png'
import certificate1 from '../src/assets/sample2.png'
import aboutimage from '../src/assets/sandeepcontact.png';
import { Line } from 'rc-progress';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io';
import axios from 'axios';
import ScrollReveal from 'scrollreveal'




const App = () => {
  const sr = ScrollReveal({ origin: 'top', distance: '80px', duration: 2000, reset: true })
  sr.reveal('.home-section', {})
  sr.reveal('.about-section', {})
  sr.reveal('.skill-section', {})
  sr.reveal('.project-flex', {})
  sr.reveal('.certificate', {})
  sr.reveal('.inter-achieve', {})
  sr.reveal('.contact-section', { delay: 200 })
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const contact = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-section.herokuapp.com/message', { name, email, message });
      setname("")
      setemail("")
      setmessage("")
      alert('message sent')
    } catch (error) {
      console.log(error.response)
      alert('invalid')
    }
  }


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid n w3-card ">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">

                <a className="nav-link  home" aria-current="page" href="#home">Home</a>
              </li>

            </ul>
            <form className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-list">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skill">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#certificate">Certificate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#interest">Interest/Achievements</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      {/* 
      --------------------------section home start----------------------------------------- */}


      <section className='d-flex justify-content-space-around mt-5 home-section' id="home">
        <Container className='left '>
          <h1>Hello,</h1>
          <p>I' am <span className='my-name'> Sandeep Nandanwar</span></p>
          <p>Web designer</p>
          <a href='#contact'><button className='btn btn-primary hire-button' >Hire Me</button></a>
          <button className='btn btn-primary resume-button'>Resume</button>
        </Container>
        <Container className='right text-center center'>
          <img src={me} alt="me" className='about-image' />
        </Container>
      </section>


      {/* 
      --------------------------section home end----------------------------------------- */}

      {/* 
      --------------------------section about start----------------------------------------- */}
      <h1 className='text-center mt-5 about-head' id="about">About</h1>
      <section className='d-flex justify-content-space-around about-section'>

        <Container className='right text-center center'>
          <img src={aboutimage} alt="me" className='about-image' />
        </Container>
        <Container className='center p-3'>
          <h4><span className='about_heading_section'>Hello ,</span> I'm Sandeep Nandanwar</h4>
          <hr />
          <p className='about-para'>I'm enthusiastic about tech in coding and learning new things about computers
            and what they can do. I've been dabbling coding with coding since roughly age
            of 15, until I Started studying computer Science from S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
            at Rashtrasant Tukadoji Maharaj Nagpur University at 19 where my interest really peaked.</p>
          <p className='about-para'>I'm interested in building something awesome with code , currently focused on Web Development.</p>
          <p className='about-para'>When I'm not coding I play games with my friends, watch some show on prime video , or if the weather's
            good , play cricket.</p>
          <p className='about-para'>
            <span className='about_sub_para'>School:</span> S.T. Vishna R.R.Nector
          </p>
          <p className='about-para'>
            <span className='about_sub_para'>College:</span> B.E. from  S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
          </p>
          <p className='about-para'>
            <span className='about_sub_para'>Stream: </span>Computer Science & Engineering
          </p>
          <hr />
          <a href="https://github.com/Sandeep151-lang?tab=repositories" target="_blank" rel="noreferrer" className='text-center' style={{ "fontWeight": "bold" }}><AiFillGithub style={{ width: 20, height: 20 }} /> Github</a>
        </Container>
      </section>



      {/* 
      --------------------------section about end----------------------------------------- */}


      {/* 
      --------------------------section skill start----------------------------------------- */}

      <h1 className='text-center mt-5 about-head' id="skill">Skills</h1>
      <div className='d-flex container skill-section'>
        <Container>
          <div className='w3-card-4 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <AiFillHtml5 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>HTML</p>
              </div>
            </div>

            <Line percent="50" strokeWidth="1" strokeColor="blue" prefixCls="rc-progress" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <DiCss3 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>CSS3</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <SiJavascript style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>Javascript</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <RiReactjsFill style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>ReactJS</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <IoLogoNodejs style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>NodeJS</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <AiFillHtml5 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>ExpressJS</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
          <div className='w3-card-4 mt-3 container' style={{ 'borderRadius': '5px', width: '80%' }}>
            <div>
              <div className='d-flex justify-content-space-around'>
                <SiMongodb style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2'>MongoDB</p>
              </div>
            </div>
            <Line percent="50" strokeWidth="1" strokeColor="blue" />
          </div>
        </Container>
        <Container className='right text-center center'>
          <img src='https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt="me" className='about-image' width='100%' height={300} style={{ opacity: '0.7', borderRadius: '5px', marginTop: '10%' }} />
        </Container>
      </div>

      {/* 
      --------------------------section skill end----------------------------------------- */}

      {/* 
      --------------------------section project start----------------------------------------- */}
      <section className=' main-project mt-5 ' id="project">
        <h1 className='text-center mt-5 about-head '>Project</h1>
        <div className='d-flex justify-content-evenly project-flex'>
          <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
            <div className="row g-0">

              <div className="col-md-10">

                <div className="card-body">
                  <h5 className="card-title">Ecommerce Clone</h5>
                  <p className="card-text">E-commerce (electronic commerce) is the activity of electronically buying or selling of
                    products on online services or over the Internet. E-commerce draws on technologies such as
                    mobile commerce, electronic funds transfer,
                    supply chain management, Internet marketing, online transaction processing,</p>
                  <a href="https://ecomerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary my-2'>view User App</button></a>
                  <a href="https://github.com/Sandeep151-lang/project1-ecommerce-user-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                  <br />
                  <a href="https://edcommerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view Admin App</button></a>
                  <a href="https://github.com/Sandeep151-lang/project1-admin-panel-ecommerce-clone" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
            <div className="row g-0">

              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Equipment Hiring</h5>
                  <p className="card-text">Rental, also known as hiring or letting is an agreement where payment is made for the
                    temporary use of a good, service or property owened by another.
                    A gross lease is when the tenant pays a flat rental amount and the landlords pays for
                    all property charges regularly incurred by the ownership</p>

                  <a href="https://hiring-project-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                  <a href="https://github.com/Sandeep151-lang/hackathon-2-hiring-product" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex project-flex justify-content-evenly'>
          <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
            <div className="row g-0">

              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Movie Ticket Booking</h5>
                  <p className="card-text">Online Movie Ticket Booking System” is the process whereby consumers directly buy
                    movie tickets online from a multiplex website interactively in real-time without an
                    intermediary service over the Internet. The Given System provides the detailed working of the
                    Online Movie Ticket Booking Processing and what all happens whenever we or any one of us goes to
                    book movie tickets online.</p>

                  <a href="https://movieticketbook.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                  <a href="https://github.com/Sandeep151-lang/TicketBooking" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
            <div className="row g-0">

              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Chat App</h5>
                  <p className="card-text">A web chat is a system that allows users to communicate in real-time using
                    easily accessible web interfaces. It is a type of Internet online chat distinguished by its simplicity and accessibility
                    to users who do not wish to take the time to install and learn to use specialized chat software.</p>

                  <a href="https://quizzical-hodgkin-b1f619.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                  <a href="https://github.com/Sandeep151-lang/chat-app/tree/main" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      --------------------------section project end----------------------------------------- */}


      {/* 
      --------------------------section certificate start----------------------------------------- */}
      <section id="certificate" className='mt-5 certificate'>
        <h1 className='text-center mt-5 about-head'>Certificate</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide contact-part" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={certificate} className="d-block w-100" alt="..." height={450} style={{ objectFit: 'contain' }} />

            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={certificate1} className="d-block w-100" alt="..." height={450} style={{ objectFit: 'contain' }} />

            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section>

      {/* 
      --------------------------section certificate end----------------------------------------- */}

      {/* 
      --------------------------section Interest/Achievements start----------------------------------------- */}

      {/* <h1 className='text-center mt-5 about-head mt-5' id="interest">Interest/Achievements</h1> */}
      <Container className='d-flex text-center  inter-achieve mt-5' id="interest">
        <Container className='inter-para'>
          <h1 className='justify-content-evenly text-center'>Interest</h1>
          <hr />
          <p>Watching Movies</p>
          <p>Sports</p>
          <p>Gaming</p>
          <p>Traveling</p>
          <p>Cooking</p>
          <p>Art</p>
          <p>Reading</p>
        </Container>
        <Container className='achievemnets'>
          <h1 className='justify-content-evenly text-center'>Achievements</h1>
          <hr />
          <p>Developed or implemented new procedures or systems</p>
          <p>Come up with a new idea that improved things</p>
          <p>Contributed to good customer service</p>
          <p>Identified a problem and solved it</p>

        </Container>
      </Container>

      {/* 
      --------------------------section Interest/Achievements end----------------------------------------- */}


      {/* 
      --------------------------section Contact start----------------------------------------- */}


      <h1 className='text-center mt-5 about-head' id="contact">Contact</h1>
      <div className='container contact-section'>
        <form className='contact-part'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="name" value={name} onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
          </div>
          <button className="btn btn-primary submit-button" onClick={contact}>Submit</button>
        </form>
      </div>
      {/* 
      --------------------------section Contact start----------------------------------------- */}


      {/* 
      --------------------------section Footer start----------------------------------------- */}
      <section className='foot mt-5'>
        <div className=' text-white text-center d-flex justify-content-space-around  foot-page'>
          <Container className='mt-5'>
            <p>Email : sandeepnandanwar92@gmail.com</p>
          </Container>
          <Container className='mt-5'>
            <h5 className='copyright'>&#169; COPYRIGHT 2022</h5>
          </Container>
        </div>
      </section>
      {/* 
      --------------------------section Footer end----------------------------------------- */}
    </div>  
  );
}

export default App;
