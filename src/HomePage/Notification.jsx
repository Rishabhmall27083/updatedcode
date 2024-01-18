import React from 'react';
import scan from "../images/scan.jpeg";

function Notification() {
  return (
    <div style={{ backgroundColor: ' #a3ffff', padding: '20px' }}>
      <img src={scan} style={{ height: '597px', width: '550px', marginTop: '40px', marginLeft: '440px' }} alt="Scan" />
    </div>
  );
}

export default Notification;