import './App.css';
import {useState, useEffect} from 'react';

import mainHomeIMG from './static/homeimagetxt.jpg';
import homeImg1 from './static/slide1.jpg';
import homeImg2 from './static/slide2.jpg';

import aboutMain from './static/aboutMain.png'; 
import profilePic from './static/profilePic.jpg'; 
import pyramidMe from './static/pyramidMe.jpg'; 
import startMain from './static/startMain.jpg'; 

// Firebase imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { collection, doc, setDoc, deleteDoc, getDocs, query, where, limit } from "firebase/firestore";

// Initialize Firebase Database
firebase.initializeApp({
    apiKey: "AIzaSyBJ1VbXDBvz8PMXdKF3V7pHd_pfoh9GnK8",
    authDomain: "latinnomad-691e3.firebaseapp.com",
    projectId: "latinnomad-691e3",
    storageBucket: "latinnomad-691e3.appspot.com",
    messagingSenderId: "652932402744",
    appId: "1:652932402744:web:c5737815bdaafbc37ea0cd"
});

// Firebase Database
const db = firebase.firestore();

function Posts( {...props} ) {

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
    <img className='headerIMG' src={aboutMain}/>
    <h2 className='mainCatTitle'>Posts</h2>
    <div className='aboutWrapper'>
        <div className='aboutBlock'>
            <div className='aboutBlockText'>
                <p className='aboutTxt'>I'm John. I was born in New Jersey, but after a family vacation in Costa Rica, I realized that there were more interesting places to be in the world. Namely, Latin America.</p>
            </div>
            <img className='catImg' src={profilePic}></img>
        </div>
        <div className='aboutBlock'>
            <div className='aboutBlockText'>
                <p className='aboutTxt'>I'm not Latin myself, I just love traveling the region! After making that first trip I was hooked, I quickly learnt Spanish as I knew my future involved a whole lot of being around Spanish speakers. At 19 years old, I took on a real challenge, a solo trip to Colombia, with no return ticket.</p>
            </div>
            <img className='catImg' src={pyramidMe}></img>
        </div>
    </div>
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default Posts;