import './style.css'
import Footer from '../common/Footer';
import CommunityBanner from '../common/CommunityBanner';
import { useState } from 'react';

const Me = () => {
    // const iframeUrl = 'https://demo.readyplayer.me/'
    const [imgUrl, setimgUrl] = useState(null);
    const [isloading, setisloading] = useState(false);

    // Listen to messages from the iframe
    if(imgUrl === null){
    window.addEventListener('message', receiveMessage, false)
    }

    
    

    //   Handle messages from the iframe
    
      function receiveMessage(event) {
        if(imgUrl === null){
        // Get URL to avatar
        const url = event.data
        
        console.log(`Avatar URL: ${url}`)
        const params = 
        {
            model: url,
            scene: "fullbody-portrait-v1",
            armature: "ArmatureTargetMale",
            blendShapes: {}
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        }; 
        if(typeof url !== 'object'){
            setisloading(true);
        fetch("https://render.readyplayer.me/render",requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data['renders'][0]);
                setimgUrl(data['renders'][0]);
                
            })  
            .catch(error => {console.log('error', error); setisloading(false)});
        }
        setisloading(false);
    }

    }


    
    return (
        <>
            <div className="flex-container">
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="John" className="profile_img" ></img>
                    <h1>John Doe</h1>
                    <p> johndoe@gmail.com</p>
                    <br />
                    
                    
                    <p className="title">CEO & Founder, Example</p>
                    <br />

                    <a href="#"><i className="fa fa-dribbble"></i> </a>
                    <a href="#"><i className="fa fa-twitter"></i> </a>
                    <a href="#"><i className="fa fa-linkedin"></i> </a>
                    <a href="#"><i className="fa fa-facebook"></i> </a>
                    <br />
                    <p><button>Contact</button></p>
                    
                </div>

                <div className="container">
                {!imgUrl  && <iframe id="iframe"
                    title="Inline Frame Example"
                    width="500"
                    height="900"
                    src="https://interality.readyplayer.me/"
                    className="content"
                    allow="camera *; microphone *">
                </iframe>}

                {imgUrl &&<img src={imgUrl} alt="Avatar" className="profile_img" ></img>}
                {isloading && <div>Loading...</div>}
                </div>
            </div>
        </>
    )
    }

export default Me;