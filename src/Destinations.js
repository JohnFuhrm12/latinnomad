import './App.css';
import {useState, useEffect} from 'react';

import mainHomeIMG from './static/homeimagetxt.jpg';
import homeImg1 from './static/slide1.jpg';
import homeImg2 from './static/slide2.jpg';

import colFeatured from './static/colFeatured.jpg'; 
import mexFeatured from './static/mexFeatured.jpg'; 
import argFeatured from './static/argFeatured.jpg'; 
import destMain from './static/destMain.jpg'; 

function Destinations( {...props} ) {

    function refresh() {
        window.location.reload(true);
    }

    function seeStart() {
      props.setDestinations(false);
      props.setStart(true);
    }

    function seePosts() {
      props.setDestinations(false);
      props.setPosts(true);
    }

    function seeAbout() {
      props.setDestinations(false);
      props.setAbout(true);
    }

  return (
    <div className='page'>
    <div className='navbar'>
        <h1 onClick={refresh} className='navHome'>Latin Nomad</h1>
        <div className='navbarRight'>
            <h1 onClick={seeStart} className='navbarItem'>Start Here</h1>
            <h1 onClick={seePosts} className='navbarItem'>Posts</h1>
            <h1 className='navbarItem'>Destinations</h1>
            <h1 onClick={seeAbout} className='navbarItem'>About</h1>
        </div>
    </div>
    <img className='headerIMG' src={destMain}/>
    <h2 className='mainCatTitle'>Explore by Country</h2>
    <div className='homeCategories'>
        <div className='catObject'>
          <img src={colFeatured} className='catImg' alt="Riviera Maya"/>
          <div className='catBlock'>
            <h2 className='catTitle'>Colombia</h2>
          </div>
        </div>
        <div className='catObject'>
          <img src={mexFeatured} className='catImg' alt="San Andrés"/>
          <h2 className='catTitle'>México</h2>
        </div>
        <div className='catObject'>
          <img src={argFeatured} className='catImg' alt="Buenos Aires"/>
          <h2 className='catTitle'>Argentina</h2>
        </div>
      </div>
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default Destinations;