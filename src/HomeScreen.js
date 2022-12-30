import './App.css';
import {useState, useEffect} from 'react';

import mainHomeIMG from './static/homeimagetxt.jpg';
import homeImg1 from './static/slide1.jpg';
import homeImg2 from './static/slide2.jpg';

import rmMe from './static/rm-me.jpg'; 
import saMe from './static/sa-me.jpg'; 
import baMe from './static/ba-me.jpg'; 

function HomeScreen( {...props} ) {

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

    function seeStart() {
      props.setHome(false);
      props.setStart(true);
    }

    function seePosts() {
      props.setHome(false);
      props.setPosts(true);
    }

    function seeDestinations() {
      props.setHome(false);
      props.setDestinations(true);
    }

    function seeAbout() {
      props.setHome(false);
      props.setAbout(true);
    }

    function seeAdmin() {
      props.setHome(false);
      props.setAdmin(true);
    }

    function seeDetail(e) {
      props.setHome(false);
      props.setPostDetail(true);
      props.setCurrentPost(e.currentTarget.title);
  }

  return (
    <div className='page'>
    <div className='navbar'>
        <h1 onClick={refresh} className='navHome'>Latin Nomad</h1>
        <div className='navbarRight'>
            <h1 onClick={seeStart} className='navbarItem'>Start Here</h1>
            <h1 onClick={seePosts} className='navbarItem'>Posts</h1>
            <h1 onClick={seeDestinations} className='navbarItem'>Destinations</h1>
            <h1 onClick={seeAbout} className='navbarItem'>About</h1>
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
    <h2 className='mainCatTitle'>Featured Posts</h2>
    <div className='homeCategories'>
        <div className='catObject'>
          <img onClick={seeDetail} title='Explore The Riviera Maya' src={rmMe} className='catImg' alt="Riviera Maya"/>
          <div className='catBlock'>
            <h2 className='catTitle'>Explore The Riviera Maya</h2>
            <h2 className='catInfo'>Mexico's Paradise</h2>
          </div>
        </div>
        <div className='catObject'>
          <img onClick={seeDetail} title='See San Andrés' src={saMe} className='catImg' alt="San Andrés"/>
          <h2 className='catTitle'>See San Andrés</h2>
          <h2 className='catInfo'>Colombia's Best Beaches</h2>
        </div>
        <div className='catObject'>
          <img onClick={seeDetail} title='Tour Buenos Aires' src={baMe} className='catImg' alt="Buenos Aires"/>
          <h2 className='catTitle'>Tour Buenos Aires</h2>
          <h2 className='catInfo'>Paris in South America</h2>
        </div>
      </div>
    <div className='featuredBlock'>

    </div>
    <div className='footer'>
        <h2 onClick={seeAdmin} className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default HomeScreen;