import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Dashboard} from './components/dashbord'



 const App =(props)=>{
		return (
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
		);
	
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'));







