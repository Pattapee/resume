import React, { useEffect, useState } from 'react';

// class Header extends Component {
const Header = (props) => {

   //   render() {
   let name = ''

   if (props.data) {
      name = props.data.name
      console.log(props.data.name)
      // setName(props.data.name)
      // let occupation = props.data.occupation;
      // let description = props.data.description;
      // let city = props.data.address.city;
      // let networks = props.data.social.map(function (network) {
      //    return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
   }

   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}.</h1>
               {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3> */}
               <hr />
               <ul className="social">
                  {/* {!props.social
                  } */}
                  {/* {networks} */}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );
   //   }
}

export default Header;
