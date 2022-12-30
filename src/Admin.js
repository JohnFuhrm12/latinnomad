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
    let today = new Date().toLocaleDateString();

    const [currentUpload, setCurrentUpload] = useState('');

    // Main Info
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('Colombia');
    const [header, setHeader] = useState('');
    const [para1, setPara1] = useState('');
    const [para2, setPara2] = useState('');

    // Header Img
    const [imageUrl, setImageUrl] = useState();
    const [imageUrl1, setImageUrl1] = useState();
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [realUsername, setRealUsername] = useState('');
  const [realPassword, setRealPassword] = useState('');

  const [credentials, setCredentials] = useState([]);
  const [error, setError] = useState(false);

  const credentialsRef = collection(db, "admin");

  const getCredentials = async () => {
    const usernameRef = query(credentialsRef);
    const currentQuerySnapshot = await getDocs(usernameRef);
    setCredentials(currentQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  };

  const getReal = async () => {
    credentials.map((cred) => {
      setRealUsername(cred.username);
      setRealPassword(cred.password);
    });
  };

    useEffect(() => {     
        getCredentials();
        getReal();
    }, []);

    useEffect(() => {
      getReal();
    });

  const addPost = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'posts', title), {
      headerImg: imageUrl1,
      postName: title,
      postCountry: country,
      dateCreated: today,

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
    setCountry('Colombia');
    setImageAwaiting(false);
    setHeader('');
    setPara1('');
  };

  // Uploads images to Cloudify database
  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "LatinNomad");

    axios.post("https://api.cloudinary.com/v1_1/dvmw658s9/image/upload", formData).then((response) => {
      console.log(response);
      if (currentUpload === 'HeaderImage') {
        setImageUrl1(response.data.url);
      }
      if (currentUpload === 'Image2') {
        setImageUrl2(response.data.url);
      }
      if (currentUpload === 'Image3') {
        setImageUrl3(response.data.url);
      }
      if (currentUpload === 'Image4') {
        setImageUrl4(response.data.url);
      }
      if (currentUpload === 'Image5') {
        setImageUrl5(response.data.url);
      }
    });

    setImageSelected("");
    setImageAwaiting(true);
  };

    function refresh() {
        window.location.reload(true);
    }

    function seeStart() {
      props.setAdmin(false);
      props.setStart(true);
    }

    function seePosts() {
      props.setAdmin(false);
      props.setPosts(true);
    }

    function seeDestinations() {
      props.setAdmin(false);
      props.setDestinations(true);
    }

    function seeAbout() {
      props.setAdmin(false);
      props.setAbout(true);
    }

    function login(e) {
      if (username === realUsername && password === realPassword) {
        props.setAdminAccess(true);
      }
      else {
        setError(true);
        e.preventDefault();
      };
    };
  
    function logout() {
      props.setAdminAccess(false);
      window.location.reload(false);
    };

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
    {props.adminAccess ? 
    <>
    <h2 className='adminAccessTitle'>Logout</h2>
    <button className='logoutButton' onClick={logout}>Logout</button> 
    <h2 className='mainCatTitle'>Add Post</h2>
    <div>
        <form className='adminAddForm' onSubmit={addPost}>
            <label className='adminAddLabel' for="category">Country:</label>
            <select className='adminInput' onChange={(e) => {setCountry(e.target.value)}} name="country">
                <option value={'tortas'}>Colombia</option>
                <option value={'tartas'}>Mexico</option>
                <option value={'salado'}>Argentina</option>
            </select>   
                <label className='adminAddLabel' for="title">Post Title:</label>
                <input className='adminInput' onChange={(e) => {setTitle(e.target.value)}} name='title' value={title}/>

                <label className='adminAddLabel' for="imageUpload">Header Image:</label>
                <input name="imageUpload" type="file" onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                    setCurrentUpload('HeaderImage');
                }}></input>
                <button className='uploadButton' onClick={uploadImage}>Upload</button>

                <label className='adminAddLabel' for="header">Post Header:</label>
                <input className='adminInput' onChange={(e) => {setHeader(e.target.value)}} name='header' value={header}/>

                <label className='adminAddLabel' for="para1">Paragraph 1:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara1(e.target.value)}} name='para1' value={para1}/>

                <label className='adminAddLabel' for="para2">Paragraph 2:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara2(e.target.value)}} name='para2' value={para2}/>

                <label className='adminAddLabel' for="header2">Post Header 2:</label>
                <input className='adminInput' onChange={(e) => {setHeader2(e.target.value)}} name='header2' value={header2}/>

                <label className='adminAddLabel' for="para3">Paragraph 3:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara3(e.target.value)}} name='para3' value={para3}/>

                <label className='adminAddLabel' for="imageUpload2">Second Image:</label>
                <input name="imageUpload2" type="file" onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                    setCurrentUpload('Image2');
                }}></input>
                <button className='uploadButton' onClick={uploadImage}>Upload</button>

                <label className='adminAddLabel' for="header3">Post Header 3:</label>
                <input className='adminInput' onChange={(e) => {setHeader3(e.target.value)}} name='header3' value={header3}/>

                <label className='adminAddLabel' for="para4">Paragraph 4:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara4(e.target.value)}} name='para4' value={para4}/>

                <label className='adminAddLabel' for="imageUpload3">Third Image:</label>
                <input name="imageUpload3" type="file" onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                    setCurrentUpload('Image3');
                }}></input>
                <button className='uploadButton' onClick={uploadImage}>Upload</button>

                <label className='adminAddLabel' for="header4">Post Header 4:</label>
                <input className='adminInput' onChange={(e) => {setHeader4(e.target.value)}} name='header4' value={header4}/>

                <label className='adminAddLabel' for="para5">Paragraph 5:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara5(e.target.value)}} name='para5' value={para5}/>

                <label className='adminAddLabel' for="imageUpload4">Fourth Image:</label>
                <input name="imageUpload4" type="file" onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                    setCurrentUpload('Image4');
                }}></input>
                <button className='uploadButton' onClick={uploadImage}>Upload</button>

                <label className='adminAddLabel' for="header5">Post Header 5:</label>
                <input className='adminInput' onChange={(e) => {setHeader5(e.target.value)}} name='header5' value={header5}/>

                <label className='adminAddLabel' for="para6">Paragraph 6:</label>
                <textarea className='adminInputDesc' onChange={(e) => {setPara6(e.target.value)}} name='para6' value={para6}/>

                <label className='adminAddLabel' for="imageUpload5">Fifth Image:</label>
                <input name="imageUpload5" type="file" onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                    setCurrentUpload('Image5');
                }}></input>
                <button className='uploadButton' onClick={uploadImage}>Upload</button>

                <button className='adminAddButton'>Post</button>
        </form>
    </div>
    </>
    : 
    <>
        <h2 className='adminAccessTitle'>Admin Access</h2>
        {error ? <h1 className='errorMessage'>Username or password is incorrect!</h1> : <></>}
        <form onChange={() => {setError(false)}} onSubmit={login} className='AdminLoginForm'>
            <label className='username' for="username">Username:</label>
            <input onChange={(e) => {setUsername(e.target.value)}} className='usernameInput' name='username' value={username}></input>
            <label className='password' for="password">Password:</label>
            <input onChange={(e) => {setPassword(e.target.value)}} className='passwordInput' name='username' value={password}></input>
            <button className='loginButton'>Access</button>
        </form>
        </>}
    <div className='footer'>
        <h2 className='footerItem'>Latin Nomad</h2>
      </div>
    </div>
  );
}

export default Admin;