const styleCard = {
    backgroundColor: "#f0f0f0",
  }
const ResturantCard = (props) => {
    const {data} = props;
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.info.cloudinaryImageId;
  
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="res-logo" src={url}/>
        <h4>{data.info.id}</h4>
        <h4>{data.info.name}</h4>
        <h4>{data.info.cuisine}</h4>
        <h4>{data.info.avgRating}</h4>
        <h4>{data.info.locality}</h4>
      </div>
    )
  }

  export default ResturantCard;