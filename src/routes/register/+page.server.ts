import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ZodError, z } from 'zod';
import { AuthApiError } from '@supabase/supabase-js';

const registerSchema = z
	.object({
		email: z
			.string({ required_error: 'required' })
			.min(1, { message: 'required' })
			.max(64, { message: 'must be less than 64 characters long' })
			.email({ message: 'must be a valid email address' }),
		username: z
			.string({ required_error: 'required' })
			.min(1, { message: 'required' })
			.max(64, { message: 'must be less than 64 characters long' })
			.trim(),
		password: z
			.string({ required_error: 'required' })
			.min(8, { message: 'must be at least 8 characters long' })
			.max(64, { message: 'must be less than 64 characters long' })
			.trim(),
		passwordConfirm: z
			.string({ required_error: 'required' })
			.min(8, { message: 'must be at least 8 characters long' })
			.max(64, { message: 'must be less than 64 characters long' })
			.trim()
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'password and confirm password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'password and confirm password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const load: PageServerLoad = async ({ locals }) => {
	// redirect users with valid session to the homepage
	const session = await locals.getSession();
	if (session) {
		throw redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	register: async ({ request, locals, url }) => {
		const formDataObj = Object.fromEntries(await request.formData()) as Record<string, string>;
		const { email, username, password } = formDataObj;

		// validation
		try {
			const res = registerSchema.parse(formDataObj);
			console.log('success');
			console.log(res);
		} catch (err) {
			const { fieldErrors: errors } = (err as ZodError).flatten();
			const { password, passwordConfirm, ...rest } = formDataObj;
			return {
				data: rest,
				errors
			};
		}

		// creating new user record
		const { data, error: err } = await locals.supabase.auth.signUp({
			email,
			password
			// options: {
			// 	emailRedirectTo: `${url.origin}/auth/callback`
			// }
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					messeage: 'invalid email or password.'
				});
			}
			return fail(500, {
				messeage: 'Server error, please try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
