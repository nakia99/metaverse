import { Link } from 'react-router-dom';
import Video from '../../asset/video/fireworks.mp4'
const Home = () => {
    return (
        <div className="row fit-content df home-page-container" style={{position:'relative'}}>            
            <video className="fit-content df"  src={Video} autoplay="autoplay"  style={{objectFit:"cover"}} loop="loop" preload="auto" muted="muted"></video>            
            <div className="home-page-box">
                <h1 className="txt-large">Intrelity</h1>
                <h3 className="txt-medium">usbjkwd asdkbsf sdj usbjkwd asdkbsf sdjusbjkwd asdkbsf sdj usbjkwd asdkbsf sdjusbjkwd asdkbsf sdj</h3>
                <Link className="btn center" to="/">
                    Go Somewhere
                </Link>
            </div>
        </div>
    )
}
export default Home;