/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { notification } from "antd";
import jwtDecode from "jwt-decode";
import { CometChat } from "@cometchat-pro/chat";
import { isSafari, isMobileSafari } from "react-device-detect";

import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { COMETCHAT_CONSTANTS } from "../../../consts";
import { emailValidation } from "../../../utils/formValidation";

import "./LoginForm.scss";

const LoginForm = (props) => {
	const [inputs, setInputs] = useState({
		email: "",
	});
	const [formValid, setFormValid] = useState({
		email: false,
	});
	const { setLoading, setSaveData } = props;

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const inputValidation = async (e) => {
		const { type, name } = e.target;

		if (type === "email") {
			setFormValid({
				...formValid,
				[name]: emailValidation(e.target),
			});
		}
	};

	const signIn = async () => {
		setLoading(true);
		const result = await signInApi(inputs);
		if (!result.ok) {
			notification["error"]({
				message: result.message,
			});
			setLoading(false);
		} else {
			const { accessToken, refreshToken } = result;
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);
			const decodedToken = jwtDecode(accessToken);
			localStorage.setItem("userID", decodedToken.id);
			setSaveData(2);
		}
	};

	return (
		<form
			className="formLogin"
			onChange={changeForm}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				signIn();
			}}
		>
			<div className="campo">
				<input type="email" id="email" placeholder="Email" name="email" value={inputs.email} onChange={inputValidation} />
				<label>Email</label>
			</div>
			<div className="campobutton">
				<button className="btn">Ingresar </button>
			</div>
			<a onClick={() => setSaveData(1)} className="enlace">
				Aún no estoy registrado
			</a>
		</form>
	);
};

export default LoginForm;
