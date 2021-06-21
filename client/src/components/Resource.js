import React from 'react'

const ResourceCard = ({topic,description,address}) => {
    return (
        <div>
            <div className="container" style={{marginTop:"1.7rem"}}>
            <div className="card">
  <div className="card-header">
    {topic}
  </div>
  <div className="card-body">
    <h5 className="card-title">{topic}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-info">{address}</a>
  </div>
</div>
   
</div>
        </div>
    )
}

export default ResourceCard;
