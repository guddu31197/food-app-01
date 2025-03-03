import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "Default"
            },
        };
        // console.log("Child constructor");
        
    }

    async componentDidMount() {
        // console.log("Child Component Did Mount");

        // Api calls this method.........
        const data =await fetch("https://api.github.com/users/guddu31197");
        const json =await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("compone will unmount");
        
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
           <div className="user-card">
            <img src={avatar_url} alt="foto"/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @guddunishi</h4>
          </div>
        ); 
    }
}


export default UserClass;