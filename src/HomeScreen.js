import './App.css';
import {useState, useEffect} from 'react';

import mainHomeIMG from './static/homeimagetxt.jpg';
import homeImg1 from './static/slide1.jpg';
import homeImg2 from './static/slide2.jpg';

function HomeScreen() {

  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]")
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        })
    });
    });

    function refresh() {
        window.location.reload(true);
    }

  return (
    <div className='page'>
    <div className='navbar'>
        <h1 onClick={refresh} className='navHome'>Latin Nomad</h1>
        <div className='navbarRight'>
            <h1 className='navbarItem'>Start Here</h1>
            <h1 className='navbarItem'>Posts</h1>
            <h1 className='navbarItem'>Destinations</h1>
            <h1 className='navbarItem'>About</h1>
        </div>
    </div>
    <div className='carouselBlock'>
        <div className="carousel" data-carousel>
            <button className="prev" data-carousel-button="prev">&#8249;</button>
            <button className="next" data-carousel-button="next">&#8250;</button>
            <ul data-slides>
                <li className="slide" data-active><img src={mainHomeIMG} className="home-image" alt="Tayrona"/></li>
                <li className="slide"><img src={homeImg1} className="home-image" alt="Tayrona"/></li>
                <li className="slide"><img src={homeImg2} className="home-image" alt="Tayrona"/></li>
            </ul>
        </div>
    </div>
    <div className='homeCategories'>
        <div className='catObject'>
          <h2 className='catTitle'>SWELL</h2>
          <img src={homeImg2} className='catImg' alt="Swell"/>
        </div>
        <div className='catObject'>
          <h2 className='catTitle'>SWELL</h2>
          <img src={homeImg2} className='catImg' alt="Swell"/>
        </div>
        <div className='catObject'>
          <h2 className='catTitle'>SWELL</h2>
          <img src={homeImg2} className='catImg' alt="Swell"/>
        </div>
      </div>
    <div className='featuredBlock'>

    </div>
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default HomeScreen;