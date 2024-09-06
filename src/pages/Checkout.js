import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      cardNumber: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      address: Yup.string().required('Required'),
      cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Card number is not valid').required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}
        </div>

        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            {...formik.getFieldProps('cardNumber')}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? <div>{formik.errors.cardNumber}</div> : null}
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
