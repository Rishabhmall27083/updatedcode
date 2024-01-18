import React from 'react'

const Our = () => {
  return (
    <>
    <style>
      {
        `
        .tit{
          text-align: center;
          text-transform: capitalize;
          color: #726a95;
          margin: 10px 0;
          position: relative;
      }
      
      .tit::after{
          content: "";
          position: absolute;
          width: 20%; height: 2px;
          background-image: linear-gradient(to left, transparent 5%, #726a95);
          bottom: -10px; left: 50%;
          transform: translate(-50%);
      }
      
      .team-row{
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 40px 0;
      }
      
      .member{
          flex: 1 1 250px;
          margin: 20px;
          text-align: center;
          padding: 20px 10px;
          cursor: pointer;
          max-width: 300px;
          transition: all 0.3s;
      }
      
      .member:hover{
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: translateY(-20px);
      }
      
      .member img{
          display: block;
          width: 150px; height: 150px;
          object-fit: cover;
          border:4px solid #726a95;
          border-radius: 50%;
          margin: 0 auto;
      }
      
      .member h2{
          text-transform: uppercase;
          font-size: 24px;
          color: #726a95;
          margin: 15px 0;
      }
      
      .member p{
          font-size: 15px;
          color: #838383;
          line-height: 1.6;
      }`
      }
    </style>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OUR TEAM SECTION</title>
    <link rel="stylesheet" href="style.css" />
    <section>
      <h1 className="tit">our team</h1>
      <div className="team-row">
        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
            alt=""
          />
          <h2>ben smith</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            similique eligendi numquam.
          </p>
        </div>
        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <h2>jason</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            similique eligendi numquam.
          </p>
        </div>
        <div className="member">
          <img
            src="https://miro.medium.com/max/814/1*Ri024ZNn0dtXQDmswflYFw.jpeg"
            alt=""
          />
          <h2>chris jones</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            similique eligendi numquam.
          </p>
        </div>

        
      </div>
    </section>
  </>
  )
}

export default Our

