const styleCard = {
    backgroundColor: "#f0f0f0",
  }
const ResturantCard = (props) => {
    const {data} = props;
    
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.info.cloudinaryImageId;
  const idHandler = (id) => console.log(id)
    return (
      <div className="m-1 p-4 w-[250px] bg-gray-100 hover:bg-gray-900 rounded-sm">
        <img className="rounded-lg" alt="res-logo" src={url}/>
        <h4 className="font-bold py-1 text-lg" onClick={() => idHandler(data.info)}>{data.info.id}</h4>
        <h4 className="font-bold py-1">{data.info.name}</h4>
        <h4>{data.info.cuisine}</h4>
        <h4>{data.info.avgRating}</h4>
        <h4>{data.info.locality}</h4>
      </div>
    )
  }
  // input - ResturantCard => ResturantCardPromoted
  export const withPrometedLabel = (ResturantCard) =>{
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <ResturantCard {...props}/>
        </div>
      )
    }
  }

  export default ResturantCard;