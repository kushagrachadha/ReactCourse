import React from 'react';
import ReactDom from 'react-dom';

const App= () => {
    return (
        <div>
            <label for="name">Enter Your Name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor :'blue',color:'white'}} >
                Submit
            </button>
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);