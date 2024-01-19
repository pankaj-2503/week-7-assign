import React from "react";

const profile = () => {
  return (
    <div className="main">
      
        <div className="outer">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1" />
          <h2>Eliana <span >32</span></h2>
          <p>London</p>
          <hr />
    
        </div>
        <div className="bottom">
         
         
           <div className="followers">
              <h2>80k</h2>
              <p>Followers</p>
           </div>
           <div className="followers">
              <h2>803k</h2>
              <p>Likes</p>
           </div>
           <div className="followers">
              <h2>1.4k</h2>
              <p>Photos</p>
           </div>
           
        </div>

    </div>
  
  );
};

export default profile;
