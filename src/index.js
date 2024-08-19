import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


function Data(){
    axios.get("https://jsonplaceholder.typicode.com/posts").
    then(res => console.log(res.data));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Data/>
);




