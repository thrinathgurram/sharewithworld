import React, { Component,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../actions/actions';
import { withRouter } from 'react-router-dom';
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";


import {
  Form,
  Input,
  Button,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Signup(props) {
  const dispatch = useDispatch();
  const [formErrorMessage, setFormErrorMessage] = useState('')
  return (

    <Formik
      initialValues={{
        email: '',
        lastName: '',
        name: '',
        password: '',
        confirmPassword: '',
        bio: '',
        username: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('First Name is required'),
        bio: Yup.string()
          .required('about you is required'),
        username: Yup.string()
          .required('user name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            username:values.username,
            email: values.email,
            password: values.password,
            firstName: values.name,
            lastName: values.lastName,
            bio:values.bio,
            profileImage: `https://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(signup(dataToSubmit)).then(response => {
            if (response.data.success) {
              setTimeout(() => {
                setFormErrorMessage("congratulations you have succesfully registered. "+response.data.message)
              }, 8000);
            } else {
              alert(response.payload.err.errmsg)
            }
          })            
          .catch(error => {
            if(error){
            setFormErrorMessage(error.response.data.message)}
            setTimeout(() => {
              setFormErrorMessage("")
            }, 3000);
          });

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="forms" style={{margin:'40px'}}>
            <h4>Sign up</h4>
            <Form  {...formItemLayout} size="small" onSubmit={handleSubmit} >

              <Form.Item required label="First Name">
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Last Name">
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>
              <Form.Item required label="User Name">
                <Input
                  id="username"
                  placeholder="Enter your Use Name"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? 'text-input error' : 'text-input'
                  }
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>
              <Form.Item required label="About You">
                <TextArea
                  id="bio"
                  placeholder="Please write something about yourself"
                  cols="40" 
                  rows="3"
                  value={values.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.bio && touched.bio ? 'text-input error' : 'text-input'
                  }
                ></TextArea>
                {errors.bio && touched.bio && (
                  <div className="input-feedback">{errors.bio}</div>
                )}
              </Form.Item>

              <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>
              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}
              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default withRouter(connect(null, { signup })(Signup));