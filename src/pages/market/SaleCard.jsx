const SaleCard = (props) => {
    return (
        <a href={props.data.link} className="sale-card df">
            <div className="sale-card-img-box">
                <img className="fit-content" src={props.data.image} alt="" />
            </div>
            <h2 className="df center row">{props.data.title}</h2>
        </a>
    )
}
export default SaleCard;