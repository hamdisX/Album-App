import React from "react";
import {connect} from "react-redux";
import { setAlbumData } from "../actions/albumActions";
import { setAlbumIdData } from "../actions/albumIdActions";
import lifecycle from 'react-pure-lifecycle';

import {Link} from 'react-router-dom'

 const Allbum =(props)=> {

       return(
          <ul className="list-group">
                <li className="list-group-item active">Album List</li>

 { 
      props.album.data.map((n) => {
        return (

          <Link className="list-group-item" key={n.id} to={{ pathname: '/allbumid', query:  n.id }}> {n.title} </Link>
          )
      })
    }        
       </ul>)
     
}


const methods = {
  componentWillMount(props) {
    fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
      props.setAlbumData(data)
      props.setAlbumIdData([]); 
    });
      }
};

const mapStateToProps = (state) => {
  return {
    album: state.album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAlbumData: (data) => {
          dispatch(setAlbumData(data));
      },
      setAlbumIdData: (data) => {
        dispatch(setAlbumIdData(data));
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(lifecycle(methods)(Allbum));


