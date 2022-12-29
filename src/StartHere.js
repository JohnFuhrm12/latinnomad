import './App.css';
import {useState, useEffect} from 'react';

import mainHomeIMG from './static/homeimagetxt.jpg';
import homeImg1 from './static/slide1.jpg';
import homeImg2 from './static/slide2.jpg';

import rmMe from './static/rm-me.jpg'; 
import saMe from './static/sa-me.jpg'; 
import baMe from './static/ba-me.jpg'; 
import startMain from './static/startMain.jpg'; 

function StartHere( {...props} ) {

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
    <img className='headerIMG' src={startMain}/>
    <h2 className='mainCatTitle'>Start Here</h2>
    <div className='paragraphBlock'>
        <p className='headerParagraph'>Hey! I'm John, and I've fallen in love with Latin America. So what did I do about it? I set out to travel to each and every country it has of course!</p>
        <p className='headerParagraph'>Here you can find easy to read information about the places I've been to and my personal experiences there, as well as home helpful guides and tips on traveling in the region!</p>
    </div>
    <h2 className='mainCatTitle'>About Latin Nomad</h2>
    <div className='paragraphBlock'>
        <p className='headerParagraph'>At 19 years old, I dropped everything and booked a one-way solo trip to Colombia, and I have never looked back since.</p>
        <p className='headerParagraph'>I started this blog to share my experiences, as well as help any new backpackers and solo-travelers to start traveling and guide them through exactly what I went through.</p>
    </div>
    <h2 className='mainCatTitle'>Recent Posts</h2>
    <div className='recentPosts'>
        <h1 className='headerParagraph' >RECENT POSTS HERE</h1>
    </div>
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default StartHere;