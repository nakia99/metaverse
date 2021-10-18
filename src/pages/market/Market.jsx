import SaleCard from "./SaleCard";
import Video1 from '../../asset/video/video1.mp4'
import Video2 from '../../asset/video/video2.mp4'
import Video3 from '../../asset/video/video3.mp4'
import Video4 from '../../asset/video/video4.mp4'

const Market = () => {
    const data = [
        {
            title:'Creator Card #1',
            link:"https://www.sandbox.game/en/shop/",
            video:Video1
        },
        {
            title:'Creator Card #2',
            link:"https://www.sandbox.game/en/shop/",
            video:Video2
        },
        {
            title:'Creator Card #3',
            link:"https://www.sandbox.game/en/shop/",
            video:Video3
        },
        {
            title:'Creator Card #4',
            link:"https://www.sandbox.game/en/shop/",
            video:Video4
        },
    ]
    return (
        <div className="fit-content df row-center market-container">
                <h1 className=" txt-large center df">Weclome to NFT Services</h1>

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
    )
}
export default Market;