import React from 'react';

const Footer = (props) => {
    let networks = ''
    if (props.data) {
      networks = props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            <ul className="copyright">
              <li>Thank you for Website Template &copy; Copyright 2017 <a href="https://github.com/tbakerx"  without rel="noopener noreferrer" target="_blank">Tim Baker</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
export default Footer;
