function Card(props){
    return (
        <div className="card">
            <div className="text_card">
                <h3>{props.song}</h3>
                <h4>{props.band}</h4>
                <h4>{props.album}</h4>
            </div>
            <div className="container_album">
            <img className="img_album" src={props.urlAlbum}/>
            </div>
        </div>
    )
}

export default Card;