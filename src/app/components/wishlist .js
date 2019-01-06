import React from "react";
import {connect} from "react-redux";
import { setWishListData } from "../actions/wishlistActions";

 //Stateless Component
 const Wishlist =(props)=> {
        return( <div> 
            {   
                 
                 props.wishlist.data.map((n) => {
                   return (
                <img src={n} key={n}  />
                     )
                 })
               }        
                  </div>)
};


const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setWishListData:(data)=>{
            dispatch(setWishListData(data));
        }
        
    };
  };
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Wishlist);