import { CgClose } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { login, register } from "../../api/auth";
import toast from "react-hot-toast";
import { useGlobalContext } from "../../context/ContextProvider";

const LoginForm = ({ setLoginModal, loginModal, setRegisterModal }) => {
	const { setIsLogged } = useGlobalContext();
	const [inputs, setInputs] = useState({
		email: `chetan@gmail.com`,
		password: "chetan2345",
	});
	const modalRef = useRef();
	const handleOutSideCloseModal = (e) => {
		if (e.target === modalRef.current) {
			setLoginModal(false);
		}
	};
	useEffect(() => {
		document.body.style.overflow = loginModal ? "hidden" : "auto";
	}, [loginModal]);

	const handleChange = (e) => {
		setInputs((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	const handleLogin = async (e) => {
		console.log("");
		e.preventDefault();
		const toastId = toast.loading("Logging in, please wait!");
		try {
			const { data } = await login(inputs);
			localStorage.setItem("jwtToken", data.jwtToken);
			console.log(data);
			toast.remove(toastId);
			toast.success("Logging in, successful!");
			setLoginModal(false);
			setIsLogged(true);

			console.log(data);
		} catch (error) {
			toast.dismiss(toastId);
			console.log(error);
			toast.error("Somthing went wrong.");
		}
	};
	return (
		<>
			{loginModal && (
				<div
					ref={modalRef}
					onClick={handleOutSideCloseModal}
					className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
				>
					<form
						onSubmit={handleLogin}
						method="post"
						className="bg-white max-w-[500px] relative  p-10 flex flex-col w-[60%] min-h-[300px] rounded"
					>
						<div className="flex-grow  flex gap-4 flex-col">
							<div>
								<input
									type="email"
									placeholder="Email"
									name="email"
									value={inputs.email}
									onChange={handleChange}
									id="email"
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={inputs.password}
									onChange={handleChange}
									id="password"
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="bg-purple-600 mt-5 py-2 rounded-md text-lg text-white text-center"
						>
							Login
						</button>
						<p className="text-center mt-2">
							if you don't have account?{" "}
							<button
								type="button"
								onClick={() => {
									setLoginModal(false);
									setRegisterModal(true);
								}}
								className="text-blue-600"
							>
								Register.
							</button>
						</p>
						<button
							type="button"
							onClick={() => setLoginModal(false)}
							className="absolute -top-6 -right-6 text-white text-2xl"
						>
							<CgClose />
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default LoginForm;
