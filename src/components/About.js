import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent constructor");
    }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namste React Web Series</h2>
                <User name={"Randhir Kumar (function)"}/>
                <UserClass name={"Randhir Kumar (classes)"} location={"Gurugram (classes)"} />
                <UserClass name={"Raman Kumar (classes)"} location={"Noida (classes)"} />
            </div>
        );
    }
}

export default About;
