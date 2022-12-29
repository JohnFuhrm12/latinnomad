import './App.css';
import {useState, useEffect} from 'react';

import {Image} from 'cloudinary-react';
import axios from "axios";

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

function Admin( {...props} ) {

    const [posts, setPosts] = useState([]);

    // Main Info
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [header, setHeader] = useState('');
    const [para1, setPara1] = useState('');
    const [para2, setPara2] = useState('');

    // Header Img
    const [imageUrl, setImageUrl] = useState();
    const [imageSelected, setImageSelected] = useState("");
    const [imageAwaiting, setImageAwaiting] = useState(false);

    // Body
    const [header2, setHeader2] = useState('');
    const [para3, setPara3] = useState('');
    const [imageUrl2, setImageUrl2] = useState();

    const [header3, setHeader3] = useState('');
    const [para4, setPara4] = useState('');
    const [imageUrl3, setImageUrl3] = useState();

    const [header4, setHeader4] = useState('');
    const [para5, setPara5] = useState('');
    const [imageUrl4, setImageUrl4] = useState();

    const [header5, setHeader5] = useState('');
    const [para6, setPara6] = useState('');
    const [imageUrl5, setImageUrl5] = useState();

  const addPost = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'posts', title), {
      headerImg: imageUrl,
      postName: title,
      postCountry: country,

      postHeader: header,
      postParagraph1: para1,
      postParagraph2: para2,

      secondHeader: header2,
      postParagraph3: para3,
      secondImg: imageUrl2,

      thirdHeader: header3,
      postParagraph4: para4,
      thirdImg: imageUrl3,

      fourthHeader: header4,
      postParagraph5: para5,
      fourthImg: imageUrl4,

      fifthHeader: header5,
      postParagraph6: para6,
      fifthImg: imageUrl5
    });
    setTitle('');
    setCountry('');
    setImageAwaiting(false);
    setHeader('');
    setPara1('');
  };

  // Uploads images to Cloudify database
  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ReactDharma");

    axios.post("https://api.cloudinary.com/v1_1/dvmw658s9/image/upload", formData).then((response) => {
      console.log(response);
      setImageUrl(response.data.url);
    });

    setImageSelected("");
    setImageAwaiting(true);
  };

    function refresh() {
        window.location.reload(true);
    }

    function seeDetail(e) {
      props.setPosts(false);
      props.setPostDetail(true);
      props.setCurrentPost(e.currentTarget.title);
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
    <h2 className='mainCatTitle'>Admin</h2>
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default Admin;