import React from 'react'

function Proizvod(){
    const proizvod = ({ proizvod: { title, body,
        imgUrl, price }, index }) => {
    return (
        <div className="post-container">
        <h1 className="heading">{title}</h1>
        <img className="image" src={imgUrl} alt="proizvod" />
        <p>{body}</p>
        <div className="info">      
          <h4>Price: {price}</h4>
        </div>
      </div>

    );
    };
}

export default Proizvod;
