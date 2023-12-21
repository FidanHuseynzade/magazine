// import * as Yup from 'yup';

// interface RegisterFormValues {
//   username: string;
//   fullName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   isPublic?: boolean;
// }

// const registerSchema = Yup.object().shape({
//   username: Yup.string().min(3, 'Username must be at least 3 characters').max(10, 'Username must be at most 10 characters').required('Username is required'),
//   fullName: Yup.string().required('Full Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().matches(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/,
//     'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 5 characters long.'
//   ).required("Required"),
//   confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
//   isPublic: Yup.boolean(),
// });

// export default registerSchema;
