import SaleCard from "./SaleCard";

const Market = () => {
    const data = [
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
        },
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
        },
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
        },
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
        },
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
        },
        {
            title:'hello hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://api.sandbox.game/assets/public/7933cc4c-8a6f-4ffc-9f93-3da9c32de4f2/preview?bafkreiheqsds5boe2bxg5bbtt2xbimmtzgcolctysgnc7kttmoormiwdje"
        },
        {
            title:'Hurrey slfn hellohi',
            link:"https://www.sandbox.game/en/shop/",
            image:"https://i.gadgets360cdn.com/large/cryptopunk_7610_larvalabs_small_1629797182539.jpg"
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