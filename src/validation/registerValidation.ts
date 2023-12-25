import * as z from 'zod';

const registerSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters').max(10, 'Username must be at most 10 characters').nonempty('Username is required'),
    fullName: z.string().nonempty('Full Name is required'),
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/,'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 5 characters long.').required('Password is required'),
    confirmPassword: z.string().refine(data => data === z.form().password, {message: 'Passwords must match',}).nonempty('Confirm Password is required'),
    isPublic: z.boolean(),
});

export default registerSchema;
