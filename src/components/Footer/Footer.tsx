import React from 'react';
import './style.css';

type Types = {
  apply: string;
  facebook: string;
  instagram: string;
};

const Footer = (props: Types): React.ReactElement => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <footer id="footer">
        <div className="career">
          <h3>Career</h3>
          <p>Wanna work at Pizza Ha-ha?</p>
          <button
            className="apply-btn"
            onClick={() => openInNewTab(props.apply)}
          >
            Apply
          </button>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>To book a table or order Pickup</p>
          <p>At: 0702******</p>
        </div>
        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="btn-container">
            <button
              className="social-btn"
              onClick={() => openInNewTab(props.facebook)}
            >
              Button
            </button>
            <button
              className="social-btn"
              onClick={() => openInNewTab(props.instagram)}
            >
              Button
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
