import React, { useEffect, useRef, useState } from 'react';
import { Button, Calendar, Card, Col, Form, Input, Layout, List, Row, Select } from 'antd';
import ArrowRightOutlined, { EnterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './appointment.css';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const Appointment = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

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
  const [availableSlots, setAvailableSlots] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [user, setUser] = useState({});

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const handleReceiptNoChange = () => {
    setUser(prevUser => ({
      ...prevUser,
      receiptNumber: inputRef.current?.input.value,
    }));
    const receiptNo = inputRef.current?.input.value;
    console.log(inputRef.current?.input.value);
    setShowLocation(receiptNo !== '');
    setShowDatePicker(false);
    setShowReceiptNo(false);
    setAvailableDates(Array.from(new Set(availableSlots.map(item => item.slice(0, 10)))));
  };

  const handleLocationChange = value => {
    setSlot(prevState => ({ ...prevState, location: value }));
    setUser(prevUser => ({
      ...prevUser,
      testLocation: value,
    }));
    setShowDatePicker(value !== '');
    console.log('availableSlots: ', availableSlots);
    console.log('availableDates', availableDates);
  };

  const disabledDate = current => {
    const formattedCurrent = current.format('YYYY-MM-DD');
    return !availableDates.includes(formattedCurrent);
  };

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

  const onDateChange = date => {
    // console.log(disabledTime());
    const filteredSlots = availableSlots.filter(item => item.startsWith(date.format('YYYY-MM-DD')));
    setSlots(filteredSlots.map(item => item.slice(11)));
    setSlot(prevState => ({ ...prevState, date: date.format('YYYY-MM-DD') }));
    setSelectedSlot(date.format('Do MMMM, YYYY'));
  };

  const onSlotSelect = e => {
    setShowBook(true);
    const date = slot.date;
    const time = e.target.textContent;
    setSelectedSlot(
      dayjs(date, 'YYYY-MM-DD').format('Do MMMM, YYYY') +
        ' ' +
        dayjs(time, 'HH:mm').format('h:mm a')
    );
    setSlot(prevState => ({ ...prevState, time: e.target.textContent }));
    setUser(prevUser => ({
      ...prevUser,
      testDate: date + ' ' + time,
    }));
    // console.log(e);
  };

  const onFinish = e => {
    localStorage.setItem('userData', JSON.stringify([user]));
    availableSlots.filter(item => item !== user.testDate);
    localStorage.setItem('testBooked', true);
    // fetch()
    //   .then()
    //   .catch(err => console.log(err));
    // console.log(user);
    // navigate('/dashboard');
  };

  useEffect(() => {
    const getAvailableSlots = () => {
      const availableSlots = localStorage.getItem('availableSlots');
      return availableSlots ? JSON.parse(availableSlots) : [];
    };
    const getUserDetails = () => {
      const user = localStorage.getItem('userData');
      return user ? JSON.parse(user)[0] : {};
    };
    const slotsData = getAvailableSlots();
    const userData = getUserDetails();
    setAvailableSlots(slotsData);
    setUser(userData);
  }, []);

  return (
    <div className="backgroundImage">
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
                  ref={inputRef}
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
                <Row
                  className={`gutter-row datePicker ${showDatePicker ? 'fadein' : 'fadeaway'}`}
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                  <Col className="calendar" span={12}>
                    Select Date:
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
                            onClick={e => onSlotSelect(e)}
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
              <Button className="button" type="primary" htmlType="submit">
                <ArrowRightOutlined />
                Book
              </Button>
            )}
          </Form>
        </Card>
      </Layout>
    </div>
  );
};

export default Appointment;
