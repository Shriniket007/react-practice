import React from 'react';

const Home = () => {
  return (
    <div className="home">
          <div className="container grid">
            <div>
            <h1>Easier Deployment</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur est dolorem rerum quia? Dignissimos qui alias atque totam rerum beatae quasi, hic iure sequi sapiente eveniet. Aliquid facere consequuntur dolorum quam? Explicabo possimus adipisci reiciendis ipsum perferendis placeat nisi.</p>
            </div>
            <div className="form card container">
              <h1>form</h1>
              <div className='flex'>
              <input type="text"  placeholder='Name' />
              <input type="text"  placeholder='Company' />
              <input type="text"  placeholder='email' />
              </div>
              
            </div>
            
          </div>     
    </div>
  )
}

export default Home