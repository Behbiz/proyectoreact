import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Join = () => {
  return (
    <body>
        <Header/>
       <div className="join">
        <div className="txt-join">
        <h1>Join the fun</h1>
       </div>
       <div>
       <form className="formulario">
        <p>Name</p>
        <input type="Name" class="inputs"/><br/>
        <p>Email</p>
        <input type="Email" class="inputs"/><br/>
        <p>Password</p>
        <input type="Password" class="inputs"/><br/>
        <button class="btn btn">Join Now</button>
       </form>
       </div>
       </div>
       

        
    </body>
  )
}
export default Join