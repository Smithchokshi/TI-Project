import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col  } from 'antd';
import '../Dashboard/dashboard.css'

const { Title } = Typography;

const About = () => {

    const cardContainerStyle = {
        justifyContent: 'center',
        background: 'white',
        border: '2px',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '95vh'
    };

    const tollfreeStyle = {
        fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
        fontSize: '15px',
        fontWeight: 400,
    };

    useEffect(() => {
    }, [])

    return (
        <>
            <Card style={cardContainerStyle}>
                <Title >Access Nova Scotia: Contact Us</Title>
                <Row style={{ marginTop: '15px' }} gutter={[16, 16]}>
                    <Col span={16}>
                            <div className="scroll-height">
                                <br />
                                <div className="ullist" style={{ fontSize: '17px' }}>
                                Public Enquiries responds to requests for information on provincial government programs and initiatives. The department operates a province wide, toll free telephone and email enquiry service and maintains a comprehensive database of information.                                </div>
                                {/* <div className="ullist" style={{ fontSize: '17px' }}>
                                    We’re also responsible for child protection services, the foster care system and disability support programs.
                                </div> */}
                                <br/>
                                <Title style={{ fontSize: '20px' }}>Contact Us </Title>
                                <div style={{ fontSize: '17px' }}> We're responsible for:</div>
                                <ul className="ullist" style={{ fontSize: '17px' }}>
                                    <li> 
                                    <span style={tollfreeStyle}> Toll-free: </span> <span style={{ color: "blue" }}> 1-800-898-7668 </span>
                                    </li>
                                    <li>
                                    <span style={tollfreeStyle}> Email: </span> <span style={{ color: "blue" }}> accessnovascotia@gmail.com </span>
                                    </li>
                                </ul>
                                <Title style={{ fontSize: '20px' }}>Holidays observed 2023</Title>
                                <ul className="ullist" style={{ fontSize: '15px' }}>
                                    <li> 
                                        New Years Day – January 1st
                                    </li>
                                    <li>
                                        Heritage Day – February 15th
                                    </li>
                                    <li> 
                                        Good Friday – April 2nd
                                    </li>
                                    <li> 
                                        Easter Monday – April 5th
                                    </li>
                                    <li> 
                                        Victoria Day – May 24th
                                    </li>
                                    <li> 
                                        Canada Day – July 1st
                                    </li>
                                    <li> 
                                        Natal Day – August 2nd
                                    </li>
                                    <li> 
                                        Labour Day – September 6th
                                    </li>
                                    <li> 
                                        Truth and Reconciliation Day - September 30th
                                    </li>
                                    <li> 
                                        Thanksgiving – October 11th
                                    </li>
                                    <li> 
                                        Remembrance Day – November 11th
                                    </li>
                                    <li> 
                                        Christmas Eve – December 24th (Half Day – Closed at noon)
                                    </li>
                                    <li> 
                                        Christmas Day – December 27th (Christmas falls on Saturday)
                                    </li>
                                    <li> 
                                        Boxing Day – December 28th (Boxing Day falls on Sunday)
                                    </li>
                                </ul>
                                <br />
                            </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default About;
