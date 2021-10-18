import { Link } from 'react-router-dom';
import Logo from '../../asset/images/logo.png'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
const NavBar = (props) => {
    const location = useLocation();
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })
    const [navbarVisiblity, setnavBarVisiblity] = useState(!(windowSize.width < 900))
    const onResize = () => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => { return window.removeEventListener('resize', onResize) }
    }, [])
    return (
        <>
            <div className="df row" style={{ height: "100vh" }}>


                <header className="df row row-center bg-primary" >
                    {windowSize.width < 900 && 
                    <button onClick={()=>{setnavBarVisiblity(!navbarVisiblity)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M6.93408 9.33319H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                                <path d="M6.93408 16H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                                <path d="M6.93408 22.6664H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect x="5.60059" y="8" width="20" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>}
                    <img src={Logo} alt="" />
                </header>

                <div className="nav bg-primary" style={{ transform: navbarVisiblity ? "translateX(0%)" : "translateX(-100%)" }}>
                    <ul className="df row-center">
                        <li>
                            <Link to="/" className={location.pathname === "/" ? "center df active" : "center df"}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 10.4673C3 9.54148 3.42742 8.66756 4.15818 8.09919L10.1582 3.43253C11.2415 2.58994 12.7585 2.58994 13.8418 3.43253L19.8418 8.0992C20.5726 8.66756 21 9.54148 21 10.4673V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10.4673Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 22V12.5C9 12.2239 9.22386 12 9.5 12H14.5C14.7761 12 15 12.2239 15 12.5V22" strokeWidth="2" strokeLinecap="round" style={{ fill: "black" }} strokeLinejoin="round"></path></svg>
                                </div>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/market" className={location.pathname === "/market" ? "center df active" : "center df"}>
                                <div>
                                    <svg version="1.1" id="Capa_1" x="0px" y="0px" height="25" width="25" viewBox="0 0 296.934 296.934" >
                                        <path d="M294.737,209.65l-39.61-39.611l37.811-75.622c4.003-8.005,4.076-16.19,0.202-22.459c-3.874-6.268-11.228-9.862-20.177-9.862  H220.1c-13.01-27.539-41.045-46.646-73.471-46.646c-32.421,0-60.454,19.107-73.464,46.646h-31.61V17.013c0-4.143-3.357-7.5-7.5-7.5  H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h19.055v221.924c0,4.143,3.357,7.5,7.5,7.5h9.612  c-1.838,3.271-2.894,7.056-2.894,11.089c0,12.349,9.852,22.396,21.961,22.396c12.11,0,21.963-10.047,21.963-22.396  c0-4.033-1.057-7.817-2.894-11.089h76.465c-1.837,3.271-2.893,7.056-2.893,11.089c0,12.349,9.851,22.396,21.961,22.396  c12.11,0,21.963-10.047,21.963-22.396c0-4.033-1.057-7.817-2.893-11.089h12.921c4.143,0,7.5-3.357,7.5-7.5  c0-4.143-3.357-7.5-7.5-7.5H41.555v-21.625h161.3c7.549,0,15.564-2.494,22.692-6.621l34.077,34.075  c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.304-2.197l24.507-24.509  C297.666,217.327,297.666,212.579,294.737,209.65z M177.337,257.63c3.839,0,6.963,3.317,6.963,7.396s-3.124,7.396-6.963,7.396  c-3.838,0-6.961-3.317-6.961-7.396S173.499,257.63,177.337,257.63z M62.734,257.63c3.839,0,6.963,3.317,6.963,7.396  s-3.124,7.396-6.963,7.396c-3.838,0-6.961-3.317-6.961-7.396S58.896,257.63,62.734,257.63z M245.589,155.573h-4.927l-21.781-21.782  c1.661-3.222,3.113-6.544,4.322-9.958h38.255L245.589,155.573z M272.963,77.095c3.634,0,6.338,1.002,7.417,2.749  c1.08,1.746,0.767,4.613-0.858,7.863l-10.563,21.126H226.94c0.597-3.994,0.903-8.06,0.903-12.173c0-6.745-0.841-13.295-2.398-19.565  H272.963z M146.631,30.448c36.51,0.001,66.213,29.703,66.213,66.213c0.001,17.685-6.886,34.312-19.393,46.818  c-12.507,12.506-29.135,19.393-46.82,19.393c-36.509,0-66.211-29.703-66.211-66.212C80.423,60.152,110.124,30.448,146.631,30.448z   M41.555,77.095h26.264c-1.557,6.271-2.398,12.82-2.398,19.565c0,4.137,0.315,8.2,0.915,12.173h-24.78V77.095z M79.136,202.312  H41.555v-31.738h37.581V202.312z M41.555,155.573v-31.74h28.557c2.272,6.381,5.313,12.398,9.024,17.934v13.807H41.555z   M94.136,202.312v-31.738h18.91c5.885,2.686,12.141,4.686,18.672,5.903v25.835H94.136z M184.3,202.312h-37.582v-24.44  c11.797-0.013,23.2-2.539,33.621-7.298h3.961V202.312z M202.854,202.312H199.3v-17.866l15.105,15.104  C210.541,201.285,206.522,202.312,202.854,202.312z M264.927,228.856l-68.253-68.249c2.566-2.016,5.04-4.178,7.384-6.52  c2.343-2.343,4.505-4.817,6.52-7.383l68.249,68.25L264.927,228.856z" />
                                    </svg>
                                </div>
                                <span>Market</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === "/about" ? "center df active" : "center df"}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" /></svg>
                                </div>
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/me" className={location.pathname == "/me" ? "center df active" : "center df"}>
                                <div style={{ marginBottom: "-5px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024" fill="none">
                                        <rect width="1024" height="1024" fill="black" />
                                        <path d="M491 256.701C473.5 259.501 458.3 264.701 446.6 271.701C428.5 282.501 412 298.901 401.2 316.701C395.6 325.901 390.6 338.701 387.8 350.501C384.9 363.001 384.2 388.001 386.4 400.601C392.8 437.401 414.9 468.601 448.2 487.701C481 506.501 524.7 508.101 560.6 491.901C572.6 486.501 583.9 478.201 595.6 466.601C621.8 440.401 633.3 410.601 631.7 373.801C630.2 341.101 619.1 315.401 596.3 292.301C578.1 273.801 555.4 261.901 530.3 257.501C522.4 256.101 497.6 255.601 491 256.701Z" />
                                        <path d="M397 503.601C384.4 505.501 376 508.001 365.8 513.101C346.3 522.701 331.6 538.601 320 562.501C305.4 592.601 298 629.501 298 673.101C298 699.501 299.9 708.901 308.3 725.501C311.4 731.601 314.6 735.701 321.5 742.601C331.3 752.501 339.8 758.101 351.7 762.301C368.2 768.301 362.7 768.101 515.6 767.801L655.5 767.501L664 764.901C674.8 761.501 680.5 759.001 687.7 754.401C704.4 743.801 716.7 727.001 722 708.001C725.2 696.101 726.1 681.901 725 660.001C720 562.001 682.8 506.801 619.5 503.301C605.9 502.601 605.7 502.601 582.4 517.601C564.4 529.101 551.9 534.801 535.3 539.101C522.8 542.401 500.4 542.401 488 539.201C470.3 534.601 458.4 529.101 440.4 517.401C433.8 513.101 425.7 508.101 422.2 506.301C416.4 503.301 415.1 503.001 407.7 503.101C403.2 503.201 398.4 503.401 397 503.601Z" />
                                    </svg>
                                </div>
                                <span>Me</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <main style={{ height: windowSize.height - 70 + "px", width: windowSize.width < 900 ? windowSize.width + "px" : windowSize.width - 100 + "px" }}>{props.children}</main>
            </div>
        </>
    )
}
export default NavBar;