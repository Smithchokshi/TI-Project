import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button, Table } from 'antd';
import { CalendarTwoTone, MailTwoTone, EnvironmentTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import '../Dashboard/dashboard.css'
const { Title } = Typography;

const Dashboard = () => {

  const cardContainerStyle = {
    justifyContent: 'center',
    background: 'white',
    border: '2px',
    paddingLeft: '10%',
    paddingRight: '10%',
  };
  const customStyle = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '18px',
    fontWeight: 600,
  };

  const contactStyle = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '18px',
    fontWeight: 600,
    paddingTop: '6%'
  };

  const innerCardStyle = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    border: '1px solid #0066cc',
    borderWidth: '0 0 0 5px',
    background: '#f1f1f0',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  const appointmentCard = {
    marginTop: '20px',
    borderRadius: '4px',
    border: '1px solid #0066cc',
    borderWidth: '0 0 0 5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  const greenButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const bookButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const customstyleAppointment = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '18px',
    fontWeight: 600,
    color: '#0066cc'
  };

  const customstyleAppointment1 = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '17px',
    fontWeight: 600,
    color: 'black'
  };

  const examDetails = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    background: '#f1f1f0',
    fontSize: '15px',
    fontWeight: 600,
    color: 'black',
    marginTop: '20px'
  };

  const customStypeRoadAppointment = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '15px',
    fontWeight: '600',
    color: 'black'
  };

  const customStypeRoadAppointment1 = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '15px',
    fontWeight: '10',
    color: 'black'
  };

  const tollfreeStyle = {
    fontFamily: 'open_sansregular,Helvetica,Arial,Tahoma,sans-serif',
    fontSize: '15px',
    fontWeight: 400,
  };

  const iconStyle = {
    color: 'white',
  };


  const dataSource = [
    { key: '1', name: 'Khushi Hirenbhai Shah', license: 'SHAHK1234', receipt: 'MAY202312345896', class: 'Class 5 - Single Vehicle or Combination' },
  ];
  
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'License Number', dataIndex: 'license', key: 'license' },
    { title: 'Recipt Number', dataIndex: 'receipt', key: 'receipt' },
    { title: 'Class Number', dataIndex: 'class', key: 'class' },
  ];

  const tableStyle = {
    borderRadius: '10px', 
    border: '1px groove ', 
  };

  const [testBooked, setTestBooked] = useState(null);

  useEffect(() => {
    setTestBooked(localStorage.getItem("testbooked"))
  }, [])



  return (
    <>
        <Card style = {cardContainerStyle}>
            <Title > Access Nova Scotia: Online Services</Title>
            <Card style = {innerCardStyle}>
                <Title style={customStyle}> You can book road test appointment at Access Nova Scotia. Appointment options may vary depending on the location and services available. </Title>
            </Card>
                <Row style = {{ marginTop: '15px'}}gutter={[16, 16]}>
                    <Col span={16}>
                        {testBooked === 'true' &&
                        <div className= "horizontal-scroll" style = {{height: "350px", paddingLeft: "15px"}}>
                            <div style = {{fontSize: '17px'}}> You need to pay for a road test (driving test) before you can schedule and take the test. Keep a copy of the road test receipt (you need this as proof that you paid for the test). </div>
                            <br/>
                            <Title style = {{fontSize: '20px'}}>Make sure you have below for online Road Test Booking:</Title>
                            <ul className = "ullist" style = {{fontSize: '17px'}}>
                                <li>know the type of road test you want to take</li>
                                <li>have your driver’s licence number (you can find this on the front of your driver’s licence)</li>
                                <li>know your receipt number</li>
                                <li>know your email address or cell phone number to get instructions, reminders and notifications about your appointment</li>
                            </ul>    
                            <Title style = {{fontSize: '20px'}}>After booking: </Title>
                            <div style = {{fontSize: '17px'}}> After you book an appointment, you receive a confirmation email with your confirmation number, location details and the date and time of your appointment. You also receive a reminder the day before your appointment. </div>
                            <br/>
                            <Title style = {{fontSize: '20px'}}>Cancelling and rescheduling: </Title>
                            <div style = {{fontSize: '17px'}}> If you need to change your appointment, follow this link.</div>                     
                        </div>
                        }
                        {testBooked === 'false' &&
                        <div className="scroll-height">
                            <div style = {{fontSize: '17px'}}> You need to pay for a road test (driving test) before you can schedule and take the test. Keep a copy of the road test receipt (you need this as proof that you paid for the test). </div>
                            <br/>
                            <Title style = {{fontSize: '20px'}}>Make sure you have below for online Road Test Booking:</Title>
                            <ul className = "ullist" style = {{fontSize: '17px'}}>
                                <li>know the type of road test you want to take</li>
                                <li>have your driver’s licence number (you can find this on the front of your driver’s licence)</li>
                                <li>know your receipt number</li>
                                <li>know your email address or cell phone number to get instructions, reminders and notifications about your appointment</li>
                            </ul>    
                            <Title style = {{fontSize: '20px'}}>After booking: </Title>
                            <div style = {{fontSize: '17px'}}> After you book an appointment, you receive a confirmation email with your confirmation number, location details and the date and time of your appointment. You also receive a reminder the day before your appointment. </div>
                            <br/>
                            <Title style = {{fontSize: '20px'}}>Cancelling and rescheduling: </Title>
                            <div style = {{fontSize: '17px'}}> If you need to change your appointment, follow this link.</div>                     
                        </div>
                        }
                    </Col>
                    <Col span={8}>
                        <div style={{ height: '100px', background: '#f1f1f0', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                            <Title style={contactStyle}> Contact </Title>
                            <span style={tollfreeStyle}> Toll-free: </span> <span style = {{color : "blue"}}> 1-800-898-7668 </span>
                        </div>
                    </Col>
                </Row>

            {testBooked === 'false' && 
            <div>
                <br/>
                <Title style = {{fontSize: '20px'}}>Make your appointment here: </Title>
                <Button size = "medium" style={bookButtonStyle}>Book here <RightCircleTwoTone twoToneColor={['white', 'black']} /></Button>
                <br/>
            </div>  
            }

            {testBooked === 'true' &&
            <Card style = {appointmentCard}>
                <Row>
                    <Col span= {20}> 
                        <span style={customstyleAppointment}>Current Status: </span> <span style={customstyleAppointment1}>Scheduled</span>                
                     </Col>
                    <Col span= {4}>     
                        <Button style={greenButtonStyle}>Reschedule</Button>
                    </Col>
                </Row>
                <Card style = {examDetails}>
                    <CalendarTwoTone style={{ fontSize: '18px' }} /> <span style={customStypeRoadAppointment}>Road Test Appointment: </span> <span style={customStypeRoadAppointment1} >28th July, 2023, 10:15, Atlantic local time</span> 
                    <br/>
                    <br/>
                    <EnvironmentTwoTone style={{ fontSize: '18px' }}/> <span style={customStypeRoadAppointment}>Test Location: </span> <span style={customStypeRoadAppointment1} > 250 Baker Dr, Dartmouth, Nova Scotia, B2W 6L4</span> 
                    <br/>
                    <br/>
                    <MailTwoTone style={{ fontSize: '18px' }}/> <span style={customStypeRoadAppointment}>License Delivery Location: </span> <span style={customStypeRoadAppointment1} >1333 South Park Street, Halifax, Nova Scotia, B3J 2K9</span> 
     
                </Card>
                <br/>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    style={tableStyle}
                    pagination={false}
                />            
            </Card>     
            }
        </Card>
        
      </>
  );
};

export default Dashboard;
