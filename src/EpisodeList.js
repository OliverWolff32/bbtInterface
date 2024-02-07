function EpisodeList(props) {
  console.log(props);
  if(props.episodes.data && props.onClick) {
    return (
      <div className="episode-list">
        <div className="list-header">
          <span>Episode List</span>
        </div>
        <div className="list-container">
          {
            props.episodes.data.map((currentValue) => {
              return (
                <div className="single-episode" onClick={() => {props.onClick(currentValue.id - 2912)}}>
                  <div className="single-episode-title">
                    <span>{currentValue.name}</span>
                  </div>
                  <div className="single-episode-nums">
                    <span>S{currentValue.season}:E{currentValue.number}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  } else {
    return (
    <div>
      Error: No Data Found
    </div>)
  }
  
  }
export default EpisodeList;