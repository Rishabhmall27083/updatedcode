import React, { useEffect } from "react";
import "./Website.css";
import $ from "jquery"; // Make sure to install jQuery if not already installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderRequiter from "./SliderRequiter";
import vc from '../images/vc__1_-removebg-preview.png';
import About from '../HomePage/About';
import Facilities from '../HomePage/Facilities';
import sacn from '../images/scan.jpeg';
import Our from '../HomePage/Our';
import PosI from '../images/Event1.png';
import PosI1 from '../images/Event5.png';
import PosI2 from '../images/Event14.png';
import PosI3 from '../images/Event12.png';
import logo from '../imgs/sssutms.jpg';



const Website = () => {
  // Global variables
  let element;

  // Detect onclick event
  useEffect(() => {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    } else {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    }
  }, []);

  // Scroller Nav
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("nav").addClass("fixed_nav");
    } else {
      $("nav").removeClass("fixed_nav");
    }
  };

  // Detect ESC Key Pressed
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      if ($(".overlay").css("opacity") === "1") {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      }
    }
  };

  // Dropdown
  $(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
      $(this).children("aside").show("slow");
      $(this).children("a").css("color", "var(--white)");
    } else {
      $(this).children("aside").hide("slow");
      $(this).children("a").css("color", "var(--lite)");
    }
  });

  // Global variables
  let slidestoshow, arrowmark;
  if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
  } else {
    slidestoshow = 1;
    arrowmark = false;
  }

  // Slick Slider Initialization
  //   useEffect(() => {

  //     $('.blog-slider').slick({
  //       slidesToShow: slidestoshow,
  //       slidesToScroll: 1,
  //       dots: false,
  //       arrows: arrowmark,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       infinite: true,
  //     });

  //     $('.event-slider').slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: false,
  //       arrows: false,
  //       autoplay: true,
  //       autoplaySpeed: 4000,
  //       infinite: true,
  //     });
  //   }, []);

  return (
    <>
      {/*SHORTCUT ICON
  <link rel="shortcut icon" href="assets/images/favicon.ico" />*/}
      {/*META TAGS
  <meta charset="UTF-8" />
  <meta name="language" content="ES" />
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />*/}
      {/*FONT AWESOME*/}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/*PLUGIN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />
      {/*TOP MENU*/}
      <menu className="top_menu flex">
        <section className="flex_content">
          <a href="emailto:info@lilliovi.com">
            <i className="fa fa-envelope-o" />
            SSSUTMS.AC.IN
          </a>
          <a href="tel:1234567890">
            <i className="fa fa-headphones" />
            1234567890
          </a>
        </section>
        <section className="flex_content">
          <a href="#" title="Facebook">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" title="Instagram">
            <i className="fa fa-instagram" />
          </a>
          <a href="#" title="Twitter">
            <i className="fa fa-twitter" />
          </a>
          <a href="#" title="youtube">
            <i className="fa fa-youtube" />
          </a>
        </section>
      </menu>
      {/*NAV*/}
      <nav>
        <section className="flex_content">
          <figure className="logo fixed_flex">
            <img 
            src= {logo} alt="" />
            <figcaption>
            <strong    className="title">Sri Satya Sai </strong> University Medical  & Sciences
            </figcaption>
          </figure>
        </section>
        <div style={{display:"flex"}}>
        <section className="flex_content nav_content" id="nav_content">
        <Link to='/'>
           <h5 style={{ color: "black", marginLeft: "50px" }}><b>Home</b></h5>
       </Link>
        
          <div class="dropdown">
            {/* <Link>  <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>About</h4></Link> */}
            <a href="#">
            <h5 style={{color:"black",marginLeft:"-10px"}}><b>About</b></h5>
              {/*SVG dropdown icon*/}
              <svg
                className="icon"
                width={14}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
              </svg>
            </a>
          {/* <a href="#gallery">About</a> */}
        
             <div class="dropdown-content">
              <Link to = "/background-page" >Background</Link>
              <Link to = "/institutes">Institutes</Link>
            
              <div className="dropdown">  
  
    
    
</div>
             <Link to = "/promoting-society">Promoting Society</Link>
               <a href="#about">Approvals & Ordinances</a>
              <Link to = "/vision-mission">VisionMission</Link>
              <Link to = "/core-values">Core Values</Link>
              <Link to = "/best-practicess">Best Practices</Link>
              <a href="#about">Notifications</a>
              <a href="#about">Amenities</a>
              <a href="#about">NCC</a>
            </div>
          </div>
        
          <div class="dropdown">
          {/* <a href="#about">Examination</a> */}
        {/* <Link> <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Examination</h4></Link>  */}
        <a href="#">
        <h5  style={{color:"black",marginLeft:"-10px"}}><b>Examination</b> </h5>
              
              {/*SVG dropdown icon*/}
              <svg
                className="icon"
                width={14}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
              </svg>
            </a>
             <div class="dropdown-content">
             <Link to = "/entrance-exam-alert">Entrance Exam Alert</Link>
             <Link to = "/exam-notifications">Exam Notifications</Link>
             <Link to = "/exam-schedule" >Exam Schedule</Link>
            
             <Link to = "/result">Results</Link> 
             <Link to = "/interFace">InterFace</Link> 
              
             
              
            </div>
          </div>


          <div class="dropdown">
          <a href="#">
              <h5  style={{color:"black",marginLeft:"-10px"}}><b>Academic</b></h5>
            
              {/*SVG dropdown icon*/}
              <svg
                className="icon"
                width={14}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
              </svg>
            </a>
          {/* <a href="#about">Academic</a> */}
         {/* <Link><h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Academic</h4></Link>  */}
             <div class="dropdown-content">
              <a href="#gallery">Faculties And Department</a>
              <Link to = "/phd-page">PHD</Link> 
              <Link to = "/academic-calender">Academic Calender</Link>
               <a href="#about">Committee</a>
               <Link to = "/scholarship">Scholarship</Link>
               <Link to = "/constituent-units">Constituent Units</Link>
              
                <a href="#about">Activities</a>
                <Link to = "/Hei-handbook">HEI Handbook</Link>
             
              <a href="#about">Training & Placement</a>
              <a href="#about">IQAC Cell</a>
              <Link to = "/mandatory-discIosures">Mandatory DiscIosures</Link>
              
              <a href="#about">NAAC</a>
           
              
            </div>
          </div>
  
          <div class="dropdown">
          {/* <a href="#about">Research</a> */}
         {/* <Link><h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Research</h4></Link>  */}
         <a href="#">
         <h5  style={{color:"black",marginLeft:"-10px"}}><b>Research</b> </h5>
             
              {/*SVG dropdown icon*/}
              <svg
                className="icon"
                width={14}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
              </svg>
            </a>
             <div class="dropdown-content">
             <Link to = "/director(R&D)">Director (R&D)</Link>
             <Link to = "/R&D-cell">R & D cell</Link>
             <Link to = "/consultancy-services">Council For Research</Link>
            
             
             
              <a href="#about">Research Promotion Policy</a>
               <a href="#about">Consultancy Services</a>
              <a href="#about">Pantents</a>
              <a href="#about">Collaboration & Mou</a>
              <a href="#about">IIC Cell</a>
              <a href="#about">E- Resources</a>
              <a href="#about">Exposition</a>
              <a href="#about">UG & PG Scholars Project</a>
              <a href="#about">NPTEL</a>

              
            </div>
          </div>

        
        


          <div class="dropdown">
          {/* <a href="#about">Admission</a> */}
          {/* <Link>   <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Admission</h4></Link> */}
          <a href="#">
          <h5  style={{color:"black",marginLeft:"-10px"}}><b>Admission</b>  </h5>
             
              {/*SVG dropdown icon*/}
              <svg
                className="icon"
                width={14}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
              </svg>
            </a>
       
             <div class="dropdown-content">
              <a href="#gallery">Admission Registration</a>
              <a href="#about">Admission Notice</a>
              <a href="#about">University Acount Details</a>
              <a href="#about">Fees Structure</a>
              <a href="#about">Admission Procedure</a>
              <a href="#about">Brochures</a>
              
            </div>
          </div>
          
          <div class="dropdown">
       <Link to = "/contact"><h5 style={{color:"black",marginLeft:"-10px"}}><b>Contact</b></h5></Link>
       {/* <Link> <h4 style={{ marginLeft:"30px", color:"red"}}>Erp</h4></Link>   */}
            
          </div>

          <Link to="/erp"><h5 style={{color:"red",marginLeft:"-10px"}}><b>ERP</b></h5></Link>
          <div class="dropdown">
      
       {/* <Link> <h4 style={{ marginLeft:"30px", color:"red"}}>Erp</h4></Link>   */}
            
          </div>

        </section>
        </div>

        <section className="flex_content">
          <a href="javascript:void(0)" className="ham">
            <i className="fa fa-bars" />
          </a>
        </section>
      </nav>

      {/*MENU*/}
      <menu id="menu" className="side_menu" >
        <a href="javascript:void(0)" className="close">
          <i className="fa fa-times" />
        </a>
        <strong className="fixed_flex logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
            alt="Summit"
            loading="lazy"
          />
        </strong>
        <br />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#"> EXAMINTION</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)">Mandatory Disclosure</a>
            <aside>
              <a href="#">Society registration</a>
              <a href="#">NOC</a>
            </aside>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <Link to="/erp"><a href="#">ERP</a></Link>
          </li>
          <li className="fixed_flex">
            <a href="javascript:void(0)" className="btn btn_1 chat_popup">
              SignUp/LogIn
            </a>{" "}
            <a href="#" className="btn btn_2 chat_popup">
              Admission
            </a>{" "}
          </li>
        </ul>
      </menu>
      {/*HEADER*/}
      <header className="custom-header">
        <article>
          <h1 className="title big">
            Welcome to <br />
            <em>Sri Satya Sai</em> University Medical & Science
          </h1>
          <p>
            SSSUTMS: Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
            due to the quality of education at an affordable cost, without any hidden fees policy.
            In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions
            were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to
            worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
          </p>
          <a href="#" className="btn btn_3">
            Explore more
          </a>
        </article>
        <section className="flex">
          <aside className="padding_1x">
            <h2 className="sub_title">Admission</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Prospectus</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Features</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
        </section>
      </header>
      {/*MAIN*/}
      <main>
        {/*division_2*/}
        <div className="divisions division_2 flex">
          <section className="flex_content padding_2x">
            <div className="title_header">
              <h2 className="title medium">Notifications</h2>
              <p>
                Coming soon new website www.sssutms.ac.in. Examination Form Notification B.H.M.S. & Paramedical
                Courses December - 2023 · APPOINTMENT (School of Homoeopathy).
              </p>
              <span className="bar_blue" />
            </div>
            <marquee
              direction="up"
              id="notification"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              {/*notification begining*/}
              <Link to="/notification">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={sacn}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      BHMS and BAMS Notificaton{" "}
                    </h3>
                    <p>
                      BAMS vs BHMS - Full form. BAMS is commonly
                      abbreviated as a Bachelor of Ayurvedic Medicine and Surgery (BAMS)...
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        01-01-2024
                      </span>
                      <span>
                        <i className="fa fa-clock-o" />
                        4:38 pm
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://i.postimg.cc/tJ7PYG7h/02.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title">
                    Lilliovi simple &amp; cool web designing root way{" "}
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar" />
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o" />
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              {/*notification ends*/}
              {/*notification begining*/}
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://i.postimg.cc/tJ7PYG7h/02.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title">
                    Lilliovi simple &amp; cool web designing root way{" "}
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar" />
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o" />
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              {/*notification ends*/}
              {/*notification begining*/}
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://i.postimg.cc/tJ7PYG7h/02.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title">
                    Lilliovi simple &amp; cool web designing root way{" "}
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar" />
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o" />
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              {/*notification ends*/}
              {/*notification begining*/}
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://i.postimg.cc/tJ7PYG7h/02.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title">
                    Lilliovi simple &amp; cool web designing root way{" "}
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar" />
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o" />
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              {/*notification ends*/}
            </marquee>
          </section>
          <section className="flex_content padding_2x" id="event">
            <div className="title_header">
              <h2 className="title medium">Events</h2>
              <p>
                With a passion and zeal for the lost and hurting world, our
                church is looking for ways to build bridges to a cynical and
                jaded society.
              </p>
              <span className="bar_white" />
              <ul className="logo-slider event-slider">
                <li>
                  <h3 className="title small">
                    Second Anniversary Of Lilliovi
                  </h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      25<sub>day</sub>
                    </span>
                    <span>
                      11<sub>hrs</sub>
                    </span>
                    <span>
                      30<sub>min</sub>
                    </span>
                    <span>
                      03<sub>sec</sub>
                    </span>
                  </aside>
                  <a href="#" className="btn btn_2">
                    Event details
                  </a>
                </li>
                <li>
                  <h3 className="title small">
                    Lilliovi At TheWater Mission Award
                  </h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      25<sub>day</sub>
                    </span>
                    <span>
                      11<sub>hrs</sub>
                    </span>
                    <span>
                      30<sub>min</sub>
                    </span>
                    <span>
                      03<sub>sec</sub>
                    </span>
                  </aside>
                  <a href="#" className="btn btn_2">
                    Event details
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <About />
        </div><br /><br />
        <div>
          <Facilities />
        </div><br />
        <div>
          <Our />
        </div>
        {/*division_3*/}

        {/*division_4*/}
        <div
          className="divisions division_4"
          onmousemove="animate_balls(event)"
        >
          <div className="title_header">
            <h2 className="title medium">
              We promise best future for your kids
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <aside className="fixed_flex">
              <a href="#" className="btn btn_1">
                Explore more
              </a>
              <i className="fa fa-angle-right" />
              <a href="javascript:void(0)">Gallery Portfolio</a>
            </aside>
          </div>
          <div className="cards">
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <section className="fixed_flex">
              <figure className="flex_content">
                <img
                  src={PosI}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI1}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI2}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI3}
                  alt=""
                  loading="lazy"
                />
              </figure>
            </section>
          </div>
        </div>
      </main>

      <div style={{ marginTop: "70px" }}>
        <SliderRequiter />
      </div>
      {/*FOOTER*/}
      <footer className="padding_4x" >
        <div className="top_footer flex" >
          {/* <img src={vc} style={{marginLeft:"40px",width:"180px",height:"170px",marginTop:"80px"}}/> */}
          <section className="flex_content">
            <figure>
              <img
                style={{ width: "140px", height: "150px", marginBottom: "80px", borderRadius: "40px" }}
                src={vc}
                alt=""
                loading="lazy"
              />
            </figure>
          </section>
          <section className="flex_content padding_2x">
            {/* <img src={vc}/> */}
            <h2 className="title medium">Vice Chancellor</h2>
            <p>
              Since its founding in 2023 by merging of several multi-disciplinary institutions,
              Sri Satya Sai University of Technology and Medical Sciences Sehore, Bhopal (MP)
              is acclaimed for its outstanding contribution to teaching, research and service
              in Nation building. Today, the University stands to meet the enormous aspirations
              and expectations of society. Society wants us to nurture professionals and scholars
              of high caliber, who can offer solutions to a broad range of issues.  This requires
              excellence in teaching and research at par with the best in the world.<br /><br />


              Dr Mukesh Tiwari
            </p>
          </section>
        </div>
        <div className="footer_body flex">
          <section className="flex_content padding_1x">
            <figure className="logo fixed_flex">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png" alt="" />
              <figcaption>
                <strong className="title">Sri Satya Sai </strong> University Medical & Science
              </figcaption>
            </figure>
            <a href="#">
              <i className="fa fa-map-marker" />
              SH-18, BHOPAL-INDORE ROAD ,OPP.OIL FED PLANT (M.P), Pachama, Madhya Pradesh
            </a>
            <a href="emailto:info@schotest.com">
              <i className="fa fa-envelope-o" />
              Sssutms.ac.in
            </a>
            <a href="tel:9315514145">
              <i className="fa fa-headphones" />
             1234567890
            </a>
          </section>
          <section className="flex_content padding_1x">
            <h3>Quick Links</h3>
            <a href="#">Admission</a>
            <a href="#">Prospectus</a>
            <a href="#">Student registration</a>
            <a href="#">Staff registration</a>
            <Link to="/privacy-policy">
              Privacy-Policy
            </Link>

          </section>
          <section className="flex_content padding_1x">
            <h3>Other Links</h3>
            <a href="#">About us</a>
            <a href="#">contact us</a>
            <a href="#">Raise a ticket</a>
            {/* <a href="#">Terms &amp; Conditions</a> */}
            <Link to="/terms-conditions">
              Terms &amp; Conditions
            </Link>
            <Link to="/refound-cancellation">
              Refound &amp; Cancellation
            </Link>
            {/* <a href="#">Refound &amp; Cancellation </a> */}
          </section>
          <section className="flex_content padding_1x">
            <h3>Newsletter</h3>
            <p>
              You can trust us. we only send important notifications related to
              school.
            </p>
            <fieldset className="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button className="btn btn_2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div className="flex">
          <section className="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved || website name</p>
          </section>
          <section className="flex-content padding_1x">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
          </section>
        </div>
      </footer>
      {/*ADDITIONAL*/}
      <div className="overlay" />
      <div className="cursor" />
    </>
  );
};

export default Website;