import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button, Table, message, Popconfirm } from 'antd';
import { CalendarTwoTone, MailTwoTone, EnvironmentTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import '../Dashboard/dashboard.css'
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const About = () => {
    const navigate = useNavigate();

    const cardContainerStyle = {
        justifyContent: 'center',
        background: 'white',
        border: '2px',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '161vh'
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
        localStorage.setItem('testBooked', false)
        setTestBooked(localStorage.getItem("testBooked"))
        const response = await fetch('https://nek3owgq6i.execute-api.us-east-1.amazonaws.com/1/cancel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, testLocation: testLocation, testDate: testDate, name: name })
        });
    };
    const cancel = (e) => {
    };

    const [testBooked, setTestBooked] = useState(null);
    const [testDate, setTestDate] = useState(null);
    const [testLocation, setTestLocation] = useState(null);
    const [licenseLocation, setLicenseLocation] = useState(null);
    const [name, setName] = useState(null);
    const [licenseNumber, setLicenseNumber] = useState(null);
    const [receiptNumber, setReceiptNumber] = useState(null);
    const [classNumber, setClassNumber] = useState(null);
    const [locations, setLocations] = useState(null);
    const [email, setEmail] = useState(null);

    const dataSource = [
        { key: '1', name: name, license: licenseNumber, receipt: receiptNumber, class: classNumber },
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
        const userData = JSON.parse(localStorage.getItem('userData'));
        const locations = JSON.parse(localStorage.getItem('locations'));
        const place = userData[0].testLocation

        let foundValue;
        for (const key in locations) {
            if (key === place) {
                foundValue = locations[key];
                setTestLocation(foundValue)
                break;
            }
        }

        setTestBooked(localStorage.getItem("testBooked"))
        setTestDate(userData[0].testDate)
        setLicenseLocation(userData[0].address)
        setName(userData[0].fullName)
        setLicenseNumber(userData[0].driverLicenseNumber)
        setReceiptNumber(userData[0].receiptNumber)
        setClassNumber(localStorage.getItem('classNumber'))
        setLocations(locations)
        setEmail(userData[0].username)
    }, [])

    return (
        <>
            <Card style={cardContainerStyle}>
                <Title >Access Nova Scotia: About Us</Title>
                <Row style={{ marginTop: '15px' }} gutter={[16, 16]}>
                    <Col span={16}>
                        <div className="scroll-height">
                            <br />
                            <Title style={{ fontSize: '20px' }}>What we do</Title>
                            <div className="ullist" style={{ fontSize: '17px' }}>
                                The Department of Community Services helps people live more independent and healthier lives by providing a range of social services. We work together with organizations across the province to administer social programs, including employment support and skills training, income assistance, affordable housing and youth and family supports.
                            </div>
                            <br />
                            <div className="ullist" style={{ fontSize: '17px' }}>
                                We’re also responsible for child protection services, the foster care system and disability support programs.
                            </div>
                            <br />
                            <Title style={{ fontSize: '20px' }}>Responsibilities </Title>
                            <div style={{ fontSize: '17px' }}> We're responsible for:</div>
                            <ul className="ullist" style={{ fontSize: '17px' }}>
                                <li>helping make sure that children receive care essential for their wellbeing</li>
                                <li>providing employment support and income assistance</li>
                                <li>working with other departments and community housing organizations to provide supports for people who are experiencing homelessness</li>
                                <li>providing programs to help youth at risk</li>
                                <li>managing the Nova Scotia Child Benefit Program, which helps low-income families with the cost of raising children</li>
                                <li>helping create inclusive opportunities for people with intellectual disabilities, long-term mental illness and physical disabilities to live more independent and self-reliant lives</li>
                                <li>working with the Nova Scotia Advisory Council on the Status of Women to make sure that issues affecting women (like equality and fairness) are part of government’s planning</li>
                            </ul>
                            <br />
                            <Title style={{ fontSize: '20px' }}>Who we are</Title>
                            <div className="ullist" style={{ fontSize: '17px' }}>
                                The Department of Community Services has about 1,500 staff in 30 offices across the province.
                            </div>
                            <br />
                            <Title style={{ fontSize: '20px' }}>Priorities</Title>
                            <div className="ullist" style={{ fontSize: '17px' }}>
                                Our priorities are:
                            </div>
                            <ul className="ullist" style={{ fontSize: '17px' }}>
                                <li>helping individuals living with disabilities become more independent through increased community-based programming</li>
                                <li>providing employment support, skills training and funding for post-secondary education to help people get the skills and experience they need for work</li>
                                <li>improving the way the department supports people in need, including people experiencing intergenerational poverty and in racialized communities</li>
                                <li>working with partners and communities to find ways to reduce poverty and address homelessness throughout the province</li>
                                <li>working with partners to support recommendations and plans from the Restorative Inquiry on the Nova Scotia Home for Colored Children</li>
                                <li>continuing to expand placement options for children and youth in the child welfare system</li>
                                <li>completing a review of the foster care program to inform changes that will help recruit and retain the next generation of foster families</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default About;
