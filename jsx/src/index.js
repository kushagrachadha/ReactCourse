import React from 'react';
import ReactDom from 'react-dom';
import faker from  'faker'

const App= () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
            </div>
            <div className="comment">
                <a href="/" className="author">
                    Kushagra
                </a>
            </div>
            <div className="metadata">
                <span className="date">Posted at 6:00 pm</span>
            </div>
            <div className="text">
                Nice Blog
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
            </div>
            <div className="comment">
                <a href="/" className="author">
                    Kushagra
                </a>
            </div>
            <div className="metadata">
                <span className="date">Posted at 6:00 pm</span>
            </div>
            <div className="text">
                Nice Blog
            </div>
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);