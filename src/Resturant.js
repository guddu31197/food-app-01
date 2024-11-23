const styleCard = {
    backgroundColor: "#f0f0f0",
  }
export const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
  
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="res-logo" src="megna-food.png"/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 start</h4>
        <h4>38 minutes</h4>
      </div>
    )
  }