import React from 'react';

const About = (props) => {
  
  let name = ''
  let profilepic = ''
  let bio = ''
  let street = ''
  let city = ''
  let state = ''
  let zip =''
  let phone = ''
  let email = ''

  if(props.data){
    name = props.data.name;
    profilepic = "/images/" + props.data.image;
    bio = props.data.bio;
    street = props.data.address.street;
    city = props.data.address.city;
    state = props.data.address.state;
    zip = props.data.address.zip;
    phone = props.data.phone;
    email = props.data.email;
  }
  
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}. <br></br>My Dream I'm very determined to go abroad for learning they way of life. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/files/resume.pdf" target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
export default About;
