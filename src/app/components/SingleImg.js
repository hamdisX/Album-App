import React from "react";
import { setImgData } from "../actions/showImgActions";
import { setWishListData } from "../actions/wishlistActions";

import {connect} from "react-redux";
import lifecycle from 'react-pure-lifecycle';

 const SingleImg =(props)=> {
  
   
        return (
            <div>
            {

               props.imgData.data.map((n) => {
                    return (
                        <div key={n.id}>
                        <img src={n.thumbnailUrl} />
                        <h3>title : {n.title}</h3>
                        <h3>url : {n.thumbnailUrl}</h3>
                        <button  onClick={() => { props.setWishListData(n.thumbnailUrl);} }>ADD to Wishlist</button>

                        </div>
                    )
                })
            }
            
        </div>
        );
    
}



const methods = {
    componentWillMount(props) {
        console.log(props)
        let id = props.location.query
        fetch('http://jsonplaceholder.typicode.com/photos?id=' + id)
            .then(response => response.json())
            .then(data => {
               props.setImgData(data);
            });
        }
  };

const mapStateToProps = (state) => {
    return {
        imgData: state.imgData,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setImgData: (data) => {
            dispatch(setImgData(data));
        },
        setWishListData:(data)=>{
            dispatch(setWishListData(data));
        }
        
    };
  };
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(lifecycle(methods)(SingleImg));

