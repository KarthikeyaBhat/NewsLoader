import React from 'react'
import { Link} from "react-router-dom";
import axios from 'axios';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {weather:"--",date:""}
    }
    componentDidMount = () =>{
        axios.get("/getWeather").then((response)=>{
            this.setState(
                {weather: response.data.temp_c}
            )
        }) 
        axios.get("/getDate").then((response)=>{
            this.setState(
                {date: response.data.fullDate}
            )
        }) 
    }
    render(){
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PESU News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        </ul>
                        <div className="d-flex flex-column justify-content-evenly mb-2 mb-lg-0 ">
                            <div className="h-50 text-info"><small>{`${this.state.weather}°C`}</small></div>
                            <div className="h-50 text-light"><small>{`${this.state.date}`}</small></div>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )}

}

export default NavBar