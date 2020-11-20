

export default function TvShowCard(props) {
    return (
        <div className="tv-show-card" onMouseOver={()=> {}}>
            <h1>{props.tvShow.name}</h1>
            <img 
                src={props.tvShow.image.medium}
                alt={props.tvShow.name}
            />
        </div>
    )
}
