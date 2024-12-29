export async function SignIn({
	email,
	password,
}: {
	email: string
	password: string
}): Promise<void> {
	console.log({ email, password })
}
