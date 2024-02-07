function returnHTML(props) {
  if(props.episodes.data) {
    //console.log(props);

    let ep = props.episodes.data[props.episode-1];
    let htmlSummary = {__html: ep.summary};
    
    console.log(ep.image.original);
    return (
      <div className="episode-info">
        <div className="info-header">
          <span>Episode Information</span>
        </div>

        <div className="info-container">


          <div className="info-title">
            <span>Title: {ep.name}</span>
          </div>

          <div className="info-data">
            <span>Season {ep.season}, Episode {ep.number}; {ep.runtime} minutes long.</span>
          </div>

          <div className="info-description"
          dangerouslySetInnerHTML={htmlSummary}
          ></div>

          <div>
            <img className="info-image" 
            src={ep.image.original} alt="Promotional"
            ></img>
          </div>
          


        </div>
      </div>
    )
  }
}

function EpisodeList(props) {
    return (
      returnHTML(props)
    );
}
  
export default EpisodeList;