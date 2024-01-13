import * as yup from 'yup';

const schema = yup.object().shape({
  title_first_name: yup.string().required('Title is required'),
  first_name: yup.string().required('Name is required'),
  dob: yup.string().required('Date of Birth is required'),
  gender: yup.string().required('Gender is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact_1: yup.string().required('Phone Number is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  category: yup.string().required('Category of Appointment is required'),
  post: yup.string().required('Post Applied For is required'),
  subpost: yup.string(),
  subject: yup.string().required('Subject is required'),
});

export default schema;
