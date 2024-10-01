// pages/request-help.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RequestHelp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      business: '',
      issueDescription: '',
      documents: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      business: Yup.string().required('Business name is required'),
      issueDescription: Yup.string().required('Issue description is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Submit form logic here
    },
  });

  return (
    <div>
      <h1>Request Help</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label>Business</label>
        <input
          type="text"
          name="business"
          onChange={formik.handleChange}
          value={formik.values.business}
        />
        <label>Description</label>
        <textarea
          name="issueDescription"
          onChange={formik.handleChange}
          value={formik.values.issueDescription}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestHelp;