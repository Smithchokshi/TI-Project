import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, notification } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import useSimpleReactValidator from '../../Helper/validator';
import { AuthenticationManin, FormMain } from '../Login/authentication-style';
import Logo from '../../Assets/logo.svg';

const settings = {
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5500,
  fade: true,
  cssEase: 'linear',
};

const initialState = {
  fullName: '',
  username: '',
  password: '',
  driverLicenseNumber: '',
  address: '',
  confirmPassword: '',
};

const Register = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState(initialState);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const dummy = [
    {
      key: '1',
      image: `${Logo}`,
    },
  ];

  const [validator, showValidationMessage] = useSimpleReactValidator(
    {},
    {
      matchPassword: {
        message: 'Password doesn`t match',
        rule: (val, params, validator) => {
          return val === fields?.password;
        },
      },
    }
  );

  const handleChange = (field, value) => {
    setFields(prev => ({
      ...prev,
      [field]: value.target.value,
    }));
  };

  const submit = async e => {
    e.preventDefault();
    try {
      if (validator.allValid()) {
        setIsSubmitLoading(true);
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
          const data = [
            {
              username: fields.username,
              fullName: fields.fullName,
              driverLicenseNumber: fields.driverLicenseNumber,
              password: fields.password,
              address: fields.address
            },
          ];

          localStorage.setItem('userData', JSON.stringify(data));

          notification.success({
            message: 'Success',
            description: 'Registered Successfully',
          });
          navigate('/login');
        } else if (
          !userData.find(cur => {
            return (
              cur.username === fields.username ||
              cur.driverLicenseNumber === fields.driverLicenseNumber
            );
          })
        ) {
          userData.push({
            username: fields.username,
            fullName: fields.fullName,
            driverLicenseNumber: fields.driverLicenseNumber,
            password: fields.password,
            address: fields.address
          });

          localStorage.setItem('userData', JSON.stringify(userData));

          notification.success({
            message: 'Success',
            description: 'Registered Successfully',
          });
          navigate('/login');
        } else {
          notification.error({
            message: 'Error',
            description:
              'Account with given email or driver license already exist please try to login',
          });
        }
        setFields(initialState);

        setIsSubmitLoading(false);
      } else {
        setIsSubmitLoading(false);
        setErrors(validator.getErrorMessages());
        showValidationMessage(true);
      }
    } catch (e) {
      setIsSubmitLoading(false);
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      });
    }
  };

  return (
    <AuthenticationManin className="full-width">
      <div className="left-auth">
        <Slider {...settings}>
          {dummy.map(element => (
            <div className="full-width" key={element.key}>
              <div
                className="full-width slide-image bgimg-main"
                style={{ backgroundImage: `url(${element.image})` }}
              />
            </div>
          ))}
        </Slider>

        <div className="title-section full-width">
          <ScrollAnimation animateOnce className="full-width" animateIn="fadeInLeft" delay={500}>
            <div className="full-width auth-top-logo mobile-show">
              <Link to="/">
                <img className="" src={Logo} alt="logo" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div
        className="right-auth large-screen-height-center single-section"
        style={{ padding: '0px' }}
      >
        <div className="full-width right-auth-inner">
          <ScrollAnimation
            animateOnce
            className="full-width"
            style={{ opacity: 1 }}
            animateIn="fadeIn"
            delay={500}
          >
            <div className="full-width auth-top-logo desktop-show" style={{ paddingBottom: '0px' }}>
              <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
              </Link>
            </div>

            <div className="full-width left-right-auth">
              <div className="right-auth-right">
                <div className="full-width flex-center my-lang-switch">
                  <h2 className="auth-head full-width">Register</h2>
                </div>

                <FormMain onSubmit={submit} className="global-form full-width">
                  {/* FullName */}
                  <div className="full-width form-field">
                    <div className="label">Fullname</div>
                    <Input
                      type="text"
                      value={fields?.fullName}
                      onChange={e => handleChange('fullName', e)}
                      placeholder="Fullname"
                      className={errors?.fullName ? 'invalid' : ''}
                    />
                    {validator.message('Fullname', fields?.fullName, `required`)}
                  </div>

                  {/* Driver License */}
                  <div className="full-width form-field">
                    <div className="label">Driver License</div>
                    <Input
                      type="text"
                      value={fields?.driverLicenseNumber}
                      onChange={e => handleChange('driverLicenseNumber', e)}
                      placeholder="Driver License"
                      className={errors?.driverLicenseNumber ? 'invalid' : ''}
                    />
                    {validator.message('Driver License', fields?.driverLicenseNumber, `required`)}
                  </div>

                  {/* Username */}
                  <div className="full-width form-field">
                    <div className="label">Email</div>
                    <Input
                      type="text"
                      value={fields?.username}
                      onChange={e => handleChange('username', e)}
                      placeholder="Email"
                      className={errors?.username ? 'invalid' : ''}
                    />
                    {validator.message('Email', fields?.username, `required|email`)}
                  </div>

                  {/* Address */}
                  <div className="full-width form-field">
                    <div className="label">Address</div>
                    <Input
                        type="text"
                        value={fields?.address}
                        onChange={e => handleChange('address', e)}
                        placeholder="Address"
                        className={errors?.address ? 'invalid' : ''}
                    />
                    {validator.message('Address', fields?.address, `required`)}
                  </div>

                  {/* password */}
                  <div className="full-width form-field">
                    <div className="label">Password</div>
                    <Input.Password
                      type="text"
                      placeholder="Password"
                      value={fields?.password}
                      onChange={e => handleChange('password', e)}
                      className={errors?.password ? 'invalid' : ''}
                      autocomplete="new-password"
                    />
                    {validator.message('Password', fields?.password, 'required')}
                  </div>

                  {/*confirm password  */}
                  <div className="full-width form-field">
                    <div className="label">Confirm Password</div>
                    <Input.Password
                      type="text"
                      placeholder="Confirm Password"
                      value={fields?.confirmPassword}
                      onChange={e => handleChange('confirmPassword', e)}
                      className={errors?.confirmPassword ? 'invalid' : ''}
                      autocomplete="new-password"
                    />
                    {validator.message(
                      'Confirm Password',
                      fields?.confirmPassword,
                      'required|matchPassword'
                    )}
                  </div>
                  <div className="full-width form-field text-checkbox top-margin flex-center">
                    <Link className="recovery-text" to="/login">
                      Already have account ?
                    </Link>
                  </div>
                  <div className="full-width form-field flex-center">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submit-btn full-width"
                      loading={isSubmitLoading}
                    >
                      <span>Login</span>
                    </Button>
                  </div>
                </FormMain>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </AuthenticationManin>
  );
};

export default Register;
