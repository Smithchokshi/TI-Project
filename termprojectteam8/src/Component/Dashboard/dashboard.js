import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button, Table, message, Popconfirm  } from 'antd';
import { CalendarTwoTone, MailTwoTone, EnvironmentTwoTone, RightCircleTwoTone  } from '@ant-design/icons';
import '../Dashboard/dashboard.css'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

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

  const confirm = async (e) => {
    console.log(e);
    message.success('Appointment Canceled');
    const tempData = {
      address: loggedInUser.address,
      driverLicenseNumber: loggedInUser.driverLicenseNumber,
      fullName: loggedInUser.fullName,
      isAdmin: false,
      password: loggedInUser.password,
      receiptNumber: null,
      testBooked: false,
      testDate: null,
      testLocation: null,
      username: loggedInUser.username
    }
    localStorage.setItem('loggedInUser',JSON.stringify(tempData))
    setLoggedInUser(tempData)
    // setTestBooked(localStorage.getItem("testBooked"))
    const response = await fetch('https://nek3owgq6i.execute-api.us-east-1.amazonaws.com/1/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, testLocation: testLocation, testDate: date, name: loggedInUser?.fullName } )
      });

  };
  const cancel = (e) => {
  };

  const [testLocation, setTestLocation] = useState(null);
  const [classNumber, setClassNumber] = useState(null);
  const [locations, setLocations] = useState(null);
  const [email, setEmail] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')));
  const date = dayjs(loggedInUser.testDate, 'YYYY-MM-DD HH:mm').format('D MMMM, YYYY h:mm a')

  const dataSource = [
    { key: '1', name: loggedInUser?.fullName, license: loggedInUser?.driverLicenseNumber, receipt: loggedInUser?.receiptNumber, class: classNumber },
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

  const handleButtonClick = () => {
    navigate("/appointments");

  };

  useEffect(() => {
    const locations = JSON.parse(localStorage.getItem('locations')); 
    const place = loggedInUser.testLocation

    let foundValue;
    for (const key in locations) {
      if (key === place) {
        foundValue = locations[key];
        setTestLocation(foundValue)
        break; 
      }
    }

    setClassNumber(localStorage.getItem('classNumber'))
    setLocations(locations)
    setEmail(loggedInUser?.username)
  }, [])

  return (
    <>
      <Card style={cardContainerStyle}>
        <Title > Access Nova Scotia: Online Services</Title>
        {console.log(date)}
        <Card style={innerCardStyle}>
          <Title style={customStyle}> You can book road test appointment at Access Nova Scotia. Appointment options may vary depending on the location and services available. </Title>
        </Card>
        <Row style={{ marginTop: '15px' }} gutter={[16, 16]}>
          <Col span={16}>
            {loggedInUser?.testBooked &&
              <div className="horizontal-scroll" style={{ height: "350px", paddingLeft: "15px" }}>
                <div style={{ fontSize: '17px' }}> You need to pay for a road test (driving test) before you can schedule and take the test. Keep a copy of the road test receipt (you need this as proof that you paid for the test). </div>
                <br />
                <Title style={{ fontSize: '20px' }}>Make sure you have below for online Road Test Booking:</Title>
                <ul className="ullist" style={{ fontSize: '17px' }}>
                  <li>know the type of road test you want to take</li>
                  <li>have your driver’s licence number (you can find this on the front of your driver’s licence)</li>
                  <li>know your receipt number</li>
                  <li>know your email address or cell phone number to get instructions, reminders and notifications about your appointment</li>
                </ul>
                <Title style={{ fontSize: '20px' }}>After booking: </Title>
                <div style={{ fontSize: '17px' }}> After you book an appointment, you receive a confirmation email with your confirmation number, location details and the date and time of your appointment. You also receive a reminder the day before your appointment. </div>
                <br />
                <Title style={{ fontSize: '20px' }}>Cancelling and rescheduling: </Title>
                <span style={{ fontSize: '17px' }}> If you need to change your appointment, follow this </span> <a href="/appointments"><span style={{ color: "blue", fontSize: '17px' }}> link. </span></a>

              </div>
            }
            {!loggedInUser?.testBooked &&
              <div className="scroll-height">
                <div style={{ fontSize: '17px' }}> You need to pay for a road test (driving test) before you can schedule and take the test. Keep a copy of the road test receipt (you need this as proof that you paid for the test). </div>
                <br />
                <Title style={{ fontSize: '20px' }}>Make sure you have below for online Road Test Booking:</Title>
                <ul className="ullist" style={{ fontSize: '17px' }}>
                  <li>know the type of road test you want to take</li>
                  <li>have your driver’s licence number (you can find this on the front of your driver’s licence)</li>
                  <li>know your receipt number</li>
                  <li>know your email address or cell phone number to get instructions, reminders and notifications about your appointment</li>
                </ul>
                <Title style={{ fontSize: '20px' }}>After booking: </Title>
                <div style={{ fontSize: '17px' }}> After you book an appointment, you receive a confirmation email with your confirmation number, location details and the date and time of your appointment. You also receive a reminder the day before your appointment. </div>
              </div>
            }
          </Col>
          <Col span={8}>
            <div style={{ height: '100px', background: '#f1f1f0', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Title style={contactStyle}> Contact </Title>
              <span style={tollfreeStyle}> Toll-free: </span> <span style={{ color: "blue" }}> 1-800-898-7668 </span>
            </div>
          </Col>
        </Row>

        {!loggedInUser?.testBooked &&
          <div>
            <Title style={{ fontSize: '20px' }}>Make your appointment here: </Title>
            <Button size="medium" style={bookButtonStyle} onClick={handleButtonClick}>Book here <RightCircleTwoTone twoToneColor={['white', 'black']} /></Button>
            <br />
          </div>
        }

        {loggedInUser?.testBooked &&
          <Card style={appointmentCard}>
            <Row>
              <Col span={16}>
                <span style={customstyleAppointment}>Current Status: </span> <span style={customstyleAppointment1}>Scheduled</span>
              </Col>
              <Col span={4}>
                <Button style={greenButtonStyle} onClick={handleButtonClick}>Reschedule</Button>
              </Col>
              <Col span={4}>
                  <Popconfirm
                  title="Cancel Appointment"
                  description="Are you sure you want to cancel your appointment?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={greenButtonStyle}>Cancel Appointment</Button>
                </Popconfirm>
              </Col>
            </Row>
            <Card style={examDetails}>
              <CalendarTwoTone style={{ fontSize: '18px' }} /> <span style={customStypeRoadAppointment}>Road Test Appointment: </span> <span style={customStypeRoadAppointment1} >{date} Atlantic Standard Time</span>
              <br />
              <br />
              <EnvironmentTwoTone style={{ fontSize: '18px' }} /> <span style={customStypeRoadAppointment}>Test Location: </span> <span style={customStypeRoadAppointment1} > {testLocation}</span>
              <br />
              <br />
              <MailTwoTone style={{ fontSize: '18px' }} /> <span style={customStypeRoadAppointment}>License Delivery Location: </span> <span style={customStypeRoadAppointment1} >{loggedInUser.address}</span>

            </Card>
            <br />
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
