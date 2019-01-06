import React from "react";
import {connect} from "react-redux";
import { setAlbumIdData } from "../actions/albumIdActions";
import {setImgData} from '../actions/showImgActions'
import {Link} from 'react-router-dom'
import lifecycle from 'react-pure-lifecycle';



 const AllbumID =(props) => {
  
        return( <div>
            
            {   
                props.albumId.data.map((n) => {
                   return (
                
                <Link key={n.id}  to={{ pathname: '/photo', query:  n.id }}> <img src={n.thumbnailUrl} /> </Link>
                     )
                 })
               }        
                  </div>)


    
}



const methods = {
    componentWillMount(props) {
       let id=props.location.query
        fetch('http://jsonplaceholder.typicode.com/photos?albumId='+id)
          .then(response => response.json())
          .then(data => {
            props.setAlbumIdData(data);   
            props.setImgData([])
          });
  
        }
  };


const mapStateToProps = (state) => {
    return {
        albumId: state.albumId,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setAlbumIdData: (data) => {
            dispatch(setAlbumIdData(data));
        },
        setImgData: (data) => {
            dispatch(setImgData(data));
        }
    };
  };
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(lifecycle(methods)(AllbumID));
