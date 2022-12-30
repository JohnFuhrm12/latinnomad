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

    function seeStart() {
      props.setPostDetail(false);
      props.setStart(true);
    }

    function seePosts() {
      props.setPostDetail(false);
      props.setPosts(true);
    }

    function seeDestinations() {
      props.setPostDetail(false);
      props.setDestinations(true);
    }

    function seeAbout() {
      props.setPostDetail(false);
      props.setAbout(true);
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
    {post.map((postInfo) => {
        return (
            <>
              <div className='postsWrapper'>
                <img className='mainPostImg' src={postInfo.headerImg}/>
                <h1 className='postHeader'>{postInfo.postHeader}</h1>
                <p className='postParagraph'>{postInfo.postParagraph1}</p>
                <p className='postParagraph'>{postInfo.postParagraph2}</p>

                <h2 className='postHeader'>{postInfo.secondHeader}</h2>
                <p className='postParagraph'>{postInfo.postParagraph3}</p>
                <img className='postImg' src={postInfo.secondImg}/>

                <h2 className='postHeader'>{postInfo.thirdHeader}</h2>
                <p className='postParagraph'>{postInfo.postParagraph4}</p>
                <img className='postImg' src={postInfo.thirdImg}/>

                <h2 className='postHeader'>{postInfo.fourthHeader}</h2>
                <p className='postParagraph'>{postInfo.postParagraph5}</p>
                <img className='postImg' src={postInfo.fourthImg}/>

                <h2 className='postHeader'>{postInfo.fifthHeader}</h2>
                <p className='postParagraph'>{postInfo.postParagraph6}</p>
                <img className='postImg' src={postInfo.fifthImg}/>
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