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

function PostDetail( {...props} ) {

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {     
      getDbmessages();
    }, []);

  const postsRef = collection(db, "posts");
  const commentsRef = collection(db, "comments");

  const getDbmessages = async () => {
    const postsRefer = query(postsRef, where('postName', '==', props.currentPost));
    const currentQuerySnapshot = await getDocs(postsRefer);
    setPost(currentQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));

    const commentsRefer = query(commentsRef, where('post', '==', props.currentPost));
    const currentQuerySnapshotC = await getDocs(commentsRefer);
    setComments(currentQuerySnapshotC.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  };

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
    {post.map((postInfo) => {
        return (
            <>
              <img className='mainPostPhoto' src={postInfo.PostImg}/>
              <h2 className='mainCatTitle'>{postInfo.postName}</h2>
              <div className='postsWrapper'>
                <p className='postParagraph'>{postInfo.PostParagraph1}</p>
              </div>
            </>
        )
    })}
    {comments.map((comment) => {
        return (
            <>
            <div className='commentsSection'>
              <h2 className='commentName'>{comment.username}</h2>
              <h2 className='commentBody'>{comment.commentBody}</h2>
            </div>
            </>
        )
    })}
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default PostDetail;