import { NavLink, Route } from 'react-router-dom'

import Allbum from "./allbum";
import AllbumID from "./allbumId"
import SingleImg from "./SingleImg"
import Wishlist from "./wishlist "
import React from 'react';

export class Dashboard extends React.Component {
    render() {
        const divStyle = {
            fontSize: 20,
            textAlign: 'center',

          };
        return (
           
<div style={divStyle}>
            <nav className="navbar navbar-default ">
            <div className="container ">
                <div className="navbar-header ">
                    <ul className="nav navbar-nav ">
                   <li><NavLink exact to="/allbum" >Allbum</NavLink></li> 
                    <li><NavLink exact to="/wishlist">Wishlist</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>
           
                  

                    <Route exact path="/allbum" component={Allbum} />
                    <Route exact path="/" component={Allbum} />
                    <Route exact path="/allbumid" component={AllbumID} />
                    < Route exact path="/photo" component={SingleImg} />
                    < Route exact path="/wishlist" component={Wishlist} />

                    </div>
        );
    }
}