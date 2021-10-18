const SaleCard = (props) => {
    return (
        <a href={props.data.link} className="sale-card df">
            <div className="sale-card-img-box">                
                <video className="fit-content df"  src={props.data.video} autoplay="autoplay"  style={{objectFit:"cover"}} loop="loop" preload="auto" muted="muted"></video>
            </div>
            <h2 className="df center row">{props.data.title}</h2>
        </a>
    )
}
export default SaleCard;