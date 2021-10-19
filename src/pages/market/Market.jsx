import SaleCard from "./SaleCard";
import Video1 from '../../asset/video/video1.mp4'
import Video2 from '../../asset/video/video2.mp4'
import Video3 from '../../asset/video/video3.mp4'
import Video4 from '../../asset/video/video4.mp4'
// import CommunityBanner from "../common/CommunityBanner";
// import Footer from "../common/Footer";

const Market = () => {
    const data = [
        {
            title:'Creator Card #1',
            link:"https://opensea.io/assets",
            video:Video1
        },
        {
            title:'Creator Card #2',
            link:"https://opensea.io/assets",
            video:Video2
        },
        {
            title:'Creator Card #3',
            link:"https://opensea.io/assets",
            video:Video3
        },
        {
            title:'Creator Card #4',
            link:"https://opensea.io/assets",
            video:Video4
        },
    ]
    return (
        <>
        <div className="fit-content df row-center market-container">
                <h1 className=" txt-large center df">NFTs</h1>

                <div className="df row grid-row">
                {data && data.length>0 && data.map((item,index)=>{
                    return (
                        <div className="grid-item df" key={index}>
                            <SaleCard data={item} />
                        </div>
                    )
                })}
                </div>
        </div>
        {/* <CommunityBanner />
        <Footer /> */}
        </>
    )
}
export default Market;