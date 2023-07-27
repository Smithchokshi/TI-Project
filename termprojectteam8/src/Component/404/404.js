import React, { useEffect } from 'react';
import { Typography, Card } from 'antd';
import '../Dashboard/dashboard.css'

const { Title } = Typography;

const PageNotFound = () => {

  const cardContainerStyle = {
    justifyContent: 'center',
    background: 'white',
    border: '2px',
    paddingLeft: '10%',
    paddingRight: '10%',
  };

  useEffect(() => {
  }, [])

  return (
    <>
      <Card style={cardContainerStyle}>
        <br/>
        <br/>
        <Title > Oops! Page Not Found.</Title>
              <div className="horizontal-scroll" style={{ height: "420px" }}>
                <div style={{ fontSize: '17px' }}> The item you requested could not be found. It is possible that the item has been moved or that the address was typed incorrectly. If you typed this item's address in the address bar of your browser, make sure that it is spelled correctly. You can make corrections and try again.</div>
                <span style={{ fontSize: '17px' }}> Let's take you </span> <a href="/dashboard"><span style={{ color: "blue", fontSize: '17px' }}> HOME. </span></a>
              </div>
      </Card>

    </>
  );
};

export default PageNotFound;
