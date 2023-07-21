import React, { useState } from 'react';
import {
  Button,
  Calendar,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Grid,
  Input,
  Layout,
  List,
  Row,
  Select,
  TimePicker,
} from 'antd';
import ArrowRightOutlined from '@ant-design/icons';
import dayjs from 'dayjs';
import './appointment.css';
import logo from '../../Assets/logo.svg';
// import customParseFormat from 'dayjs/plugin/customParseFormat';

const { Option } = Select;

const Appointment = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  // dayjs.extend(customParseFormat);
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const handleReceiptNoChange = event => {
    const receiptNo = event.target.value;
    setShowLocation(receiptNo !== '');
    setShowDatePicker(false);
  };

  const handleLocationChange = value => {
    setShowDatePicker(value !== '');
  };

  // const disabledDates = localStorage.getItem("appointmentDates");
  const disabledDates = ['2023-07-25', '2023-07-26', '2023-07-27', '2023-07-28', '2023-07-29'];
  const slots = [
    { time: '09:00 AM', status: 'Available' },
    { time: '10:00 AM', status: 'Booked' },
    { time: '11:00 AM', status: 'Available' },
    // Add more slot data as needed
  ];

  const disabledDate = current => {
    const formattedCurrent = current.format('YYYY-MM-DD');
    return !disabledDates.includes(formattedCurrent);
  };

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

  const disabledTime = () => ({
    disabledHours: () => range(0, 9).concat(range(17, 24)),
    // disabledMinutes: () => range(),
  });
  const onChange = (date, dateString) => {
    console.log(disabledTime());
    console.log(date, dateString);
  };

  const onSlotSelect = e => {
    console.log(e.target.innerText);
  };

  const onFinish = () => {};

  return (
    <>
      <Layout className="card-content-center backgroundImage">
        <Card title="Please enter the details" className="custom-card">
          <Form {...layout} onFinish={onFinish} className="form-container">
            <Form.Item name="ReceiptNo" label="Receipt No.">
              <Input className="receiptno" onChange={handleReceiptNoChange} />
            </Form.Item>
            {showLocation && (
              <Form.Item name="location" label="Location">
                <Select
                  className="select"
                  placeholder="Select a location"
                  style={{ width: 200 }}
                  onChange={handleLocationChange}
                >
                  <Option value="Halifax">Halifax</Option>
                  <Option value="Dartmouth">Dartmouth</Option>
                  <Option value="East Passage">East Passage</Option>
                  <Option value="Lunenberg">Lunenberg</Option>
                </Select>
              </Form.Item>
            )}
            <Divider />
            {showDatePicker && (
              <Row className="gutter-row datePicker" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="calendar" span={12}>
                  Select Date:
                  {/*<Form.Item name="slot">*/}
                  {/*  <DatePicker*/}
                  {/*    className="datePicker"*/}
                  {/*    format="YYYY-MM-DD HH:mm"*/}
                  {/*    disabledDate={disabledDate}*/}
                  {/*    // disabledTime={disabledTime}*/}
                  {/*    onChange={onChange}*/}
                  {/*    // showTime={{*/}
                  {/*    //   defaultValue: dayjs('09:00:00', 'HH:mm:ss'),*/}
                  {/*    //   hideDisabledOptions: true,*/}
                  {/*    //   format: 'HH:mm',*/}
                  {/*    //   minuteStep: 30,*/}
                  {/*    // }}*/}
                  {/*  />*/}
                  {/*</Form.Item>*/}
                  <Calendar disabledDate={disabledDate} fullscreen={false} />
                </Col>
                <Col className="slots" span={12}>
                  Select Slot:
                  <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={slots}
                    renderItem={item => (
                      <List.Item className="slot">
                        <Card onClick={onSlotSelect}>{item.time}</Card>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            )}
            <Button className="button" type="primary">
              <ArrowRightOutlined />
              Book
            </Button>
          </Form>
        </Card>
      </Layout>
    </>
  );
};

export default Appointment;
