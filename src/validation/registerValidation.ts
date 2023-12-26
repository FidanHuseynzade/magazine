import * as z from 'zod';

const registerSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }).max(10, { message: 'Username must be at most 10 characters' }),
    fullName: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 5 characters long.'),
    confirmPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 5 characters long.'),
    isPublic: z.boolean(),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'the password did not match'
        })
    }
})

export default registerSchema;
