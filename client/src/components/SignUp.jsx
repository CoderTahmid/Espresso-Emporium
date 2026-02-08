import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

	const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		createUser(email, password)
			.then(result => {
				console.log(result.user);
				const createdAt = result.user.metadata.creationTime;
				const newUser = {name, email, createdAt};

				// save new user info to the database
				fetch("http://localhost:5000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(newUser)
				})
					.then((res) => res.json())
					.then((data) => {
						console.log("User created to DB", data);

						if(data.insertedId) {
							console.log("User created in DB");
						}
					});
			})
			.catch(error => {
				console.error(error);
			})
    }

    return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Sign up now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
				<form onSubmit={handleSignUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<fieldset className="fieldset">
							<label className="label">Name</label>
							<input type="text" className="input" placeholder="Nmae"  name='name' />
							<label className="label">Email</label>
							<input type="email" className="input" placeholder="Email"  name='email' />
							<label className="label">Password</label>
							<input type="password" className="input" placeholder="Password"  name='password'/>
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div> 
							<button type='submit' className="btn btn-neutral mt-4">Sign up</button>
						</fieldset>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;