import React from 'react';
import '../styles/top.css';
import '../styles/style.css';

const HeaderBar = () => {
  return (
    <div className="top">
      <div className="socials">
        <a href="mailto:atikahussain248@gmail.com" className="fa fa-envelope"style={{ fontSize: '18px' }}></a>
        <a href="https://www.linkedin.com/in/atikaahussain248"><i class="fa-brands fa-linkedin"style={{ fontSize: '18px' }}></i></a>
       <a href="https://medium.com/@atikaahussain"><i className="fa fa-pencil"style={{ fontSize: '18px' }}></i>
</a>

      </div>
    </div>
  );
};

export default HeaderBar;
