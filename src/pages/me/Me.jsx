import './style.css'
import Footer from '../common/Footer';

const Me = () => {
    // const iframeUrl = 'https://demo.readyplayer.me/'

    // Listen to messages from the iframe
    window.addEventListener('message', receiveMessage, false)

    function receiveMessage(event){
        console.log(event.data);
    }

    //   // Handle messages from the iframe
    //   function receiveMessage(event) {
    //     // Get URL to avatar
    //     const url = event.data
    //     console.log(`Avatar URL: ${url}`)
    //     document.querySelector('#avatarUrl').innerHTML = `Avatar URL: ${url}`
    //     document.querySelector('.container').removeChild(iframe)
    //   }

    //   function loadIframe() {
    //     let iframe = document.getElementById('iframe')

    //     if (!iframe) {
    //       iframe = document.createElement('iframe')
    //       document.querySelector('.container').appendChild(iframe)
    //     }
    //     iframe.id = 'iframe'
    //     iframe.src = iframeUrl
    //     iframe.className = 'content'
    //     iframe.allow = 'camera *; microphone *'
    //   }
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
                <iframe id="iframe"
                    title="Inline Frame Example"
                    width="500"
                    height="900"
                    src="https://interality.readyplayer.me/"
                    className="content"
                    allow="camera *; microphone *">
                        
                </iframe>
                </div>
            </div>

            <div className="img_container">
            <img src="https://ik.imagekit.io/ikmedia/accessories_banner.jpg?tr=w-1200,h-400" height="300px" alt="Snow" className="profile_img" />
            
            <div className="top-right">
                <h1 style={{"color":"black","fontSize":"35px"}}>Join Our Community</h1>
                <p style={{"color":"black","fontSize":"15px"}}>Be part of our amazing community and stay
    tuned for the news.</p>
                <button className="join-btn"style={{"fontSize":"20px"}} onClick={ () => {
                    window.location.href = 'https://www.interality.io/'
                }} >Join Us</button>
            </div>
            </div>
            <Footer />
                        </>
    )
}
export default Me;