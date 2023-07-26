import React, { useState } from 'react';
import { Button, Calendar, Card, Col, Divider, Form, Input, Layout, List, Row, Select } from 'antd';
import ArrowRightOutlined, { EnterOutlined } from '@ant-design/icons';

import './appointment.css';

const { Option } = Select;
const Appointment = () => {
  const [showReceiptNo, setShowReceiptNo] = useState(true);
  const [showLocation, setShowLocation] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [slots, setSlots] = useState();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slot, setSlot] = useState({
    location: null,
    date: null,
    time: null,
  });

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
    setShowReceiptNo(false);
  };

  const handleLocationChange = value => {
    setSlot(prevState => ({ ...prevState, location: value }));
    setShowDatePicker(value !== '');
  };

  // const disabledDates = localStorage.getItem("appointmentDates");
  const disabledDates = ['2023-07-25', '2023-07-26', '2023-07-27', '2023-07-28', '2023-07-29'];
  const availableSlots = [
    '2023-07-28 09:00',
    '2023-07-27 09:00',
    '2023-07-27 10:00',
    '2023-07-29 11:00',
    '2023-07-29 12:00',
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
  const onDateChange = date => {
    // console.log(disabledTime());
    const filteredSlots = availableSlots.filter(item => item.startsWith(date.format('YYYY-MM-DD')));

    setSlots(filteredSlots.map(item => item.slice(11)));

    setSlot(prevState => ({ ...prevState, date: date.format('YYYY-MM-DD') }));
    setSelectedSlot(date.format('YYYY-MM-DD'));
    // console.log(date);
  };

  const onSlotSelect = e => {
    // setShowBook(true);
    setSelectedSlot(prevData => prevData + ' ' + e.value);
    // setSlot(prevState => ({ ...prevState, time: e.target.innerText }));
    console.log(e);
  };

  const onFinish = e => {
    const userData = localStorage.getItem('userData');
    userData['appointment'] = slot.date + ' ' + slot.time;
    localStorage.setItem('userData', userData);
    availableSlots.filter(item => item !== userData.appointment);
    // localStorage.setItem('availableSlots', availableSlots);
  };

  return (
    <>
      <Layout className="card-content-center backgroundImage">
        <Card title="Please enter the details" className="custom-card">
          <Form {...layout} onFinish={onFinish} className="form-container-dk">
            {showReceiptNo && (
              <Form.Item
                className={showLocation ? 'fadeaway' : 'fadein'}
                name="ReceiptNo"
                label="Receipt No."
              >
                <Input
                  addonAfter={<EnterOutlined onClick={handleReceiptNoChange} />}
                  className="receiptno"
                />
              </Form.Item>
            )}
            {showLocation && (
              <Form.Item
                className={showLocation ? 'fadein' : 'fadeaway'}
                name="location"
                label="Location"
              >
                <Select
                  className="select"
                  placeholder="Select a location"
                  style={{ width: 200 }}
                  onChange={handleLocationChange}
                >
                  <Option value="Halifax">Halifax</Option>
                  <Option value="Dartmouth">Dartmouth</Option>
                  <Option value="Sackville">Sackville</Option>
                  <Option value="Bridgewater">Bridgewater</Option>
                  <Option value="Kentville">Kentville</Option>
                </Select>
              </Form.Item>
            )}

            {showDatePicker && (
              <div>
                {/*<Divider />*/}
                <Row
                  className={`gutter-row datePicker ${showDatePicker ? 'fadein' : 'fadeaway'}`}
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
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
                    <Calendar
                      disabledDate={disabledDate}
                      fullscreen={false}
                      onChange={onDateChange}
                    />
                  </Col>
                  <Col span={12}>
                    Select Slot:
                    <List
                      className="slots"
                      grid={{ gutter: 16, column: 4 }}
                      dataSource={slots}
                      renderItem={item => (
                        <List.Item className="slot">
                          <Button
                            onClick={() => onSlotSelect(slot)}
                            type={selectedSlot === item ? 'primary' : 'default'}
                          >
                            {item}
                          </Button>
                        </List.Item>
                      )}
                    />
                    <span className="selectedSlot">{selectedSlot}</span>
                  </Col>
                </Row>
              </div>
            )}
            {showBook && (
              <Button className="button" type="primary">
                <ArrowRightOutlined />
                Book
              </Button>
            )}
          </Form>
        </Card>
      </Layout>
    </>
  );
};

export default Appointment;
