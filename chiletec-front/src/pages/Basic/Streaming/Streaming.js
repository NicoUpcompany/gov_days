/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { notification } from "antd";
import jwtDecode from "jwt-decode";
import $ from "jquery";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { isMobile } from "react-device-detect";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { getAccessTokenApi } from "../../../api/auth";
import { updateStreamTimeApi } from "../../../api/user";
import { makeQuestionApi } from "../../../api/question";
import { getTime } from "../../../api/time";
import { eventApi } from "../../../api/events";

import Agenda from "../../../components/Basic/Agenda/Agenda";
import Footer from "../../../components/Basic/Footer/Footer";

// import logoGov from "../../../assets/images/GOV DAYS.png";

// logos
import logo from "../../../assets/images/panel2.png";
import logo2 from "../../../assets/images/panel.png";
import logo3 from "../../../assets/images/panelmovil.png";
import logos1 from "../../../assets/images/MAIN-SPONSOR1.jpg";
import logos2 from "../../../assets/images/MAIN-SPONSOR2.jpg";
import logos3 from "../../../assets/images/PARTNER.jpg";
import logos4 from "../../../assets/images/MEDIA-PARTNER1.jpg";
import logos5 from "../../../assets/images/MEDIA-PARTNER2.jpg";
import logos6 from "../../../assets/images/1.jpg";
import logos7 from "../../../assets/images/2.jpg";
import logos8 from "../../../assets/images/3.jpg";

import "./Streaming.scss";

const Streaming = () => {
	const history = useHistory();
	const [questionInput, setQuestionInput] = useState("");
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [saveData, setSaveData] = useState(0);
	const [agendaTime, setAgendaTime] = useState(null);

	useEffect(() => {
		let interval;
		getTime2(interval);
		if (!isMobile) {
			$(window).scroll(function () {
				const distanceY = window.pageYOffset || document.documentElement.scrollTop;
				const shrinkOn = 430;
				if (distanceY > shrinkOn) {
					$(".transmission").addClass("scroll");
				} else {
					$(".transmission").removeClass("scroll");
				}
			});
		}
		const token = getAccessTokenApi();
		if (token === null) {
			window.location.href = "/iniciarsesion";
		} else {
			const decodedToken = jwtDecode(token);
			if (!decodedToken) {
				window.location.href = "/iniciarsesion";
			} else {
				setToken(token);
				setUser(decodedToken);
				const data = {
					email: decodedToken.email,
				};
				updateStreamTimeApi(token, data);
			}
		}
	}, []);

	useEffect(() => {
		let time;
		$(function () {
			var veces = 0;
			time = setInterval(function () {
				veces++;
				if (veces === 3) {
					$(".img1").fadeOut("fast", function () {
						$(".img2").fadeIn("fast");
					});
				}
				if (veces === 6) {
					$(".img2").fadeOut("fast", function () {
						$(".img1").fadeIn("fast");
					});
					veces = 0;
				}
			}, 60000);
		});
		return () => clearInterval(time);
	}, []);

	useEffect(() => {
		let time;
		$(function () {
			var veces = 0;
			time = setInterval(function () {
				veces++;
				if (veces === 3) {
					$(".img3").fadeOut("fast", function () {
						$(".img4").fadeIn("fast");
					});
				}
				if (veces === 6) {
					$(".img4").fadeOut("fast", function () {
						$(".img3").fadeIn("fast");
					});
					veces = 0;
				}
			}, 60000);
		});
		return () => clearInterval(time);
	}, []);

	useEffect(() => {
		let time;
		$(function () {
			var veces = 0;
			time = setInterval(function () {
				veces++;
				if (veces === 3) {
					$(".Q1").fadeOut("fast", function () {
						$(".Q2").fadeIn("fast");
					});
				}
				if (veces === 6) {
					$(".Q2").fadeOut("fast", function () {
						$(".Q3").fadeIn("fast");
					});
				}
				if (veces === 9) {
					$(".Q3").fadeOut("fast", function () {
						$(".Q1").fadeIn("fast");
					});
					veces = 0;
				}
			}, 60000);
		});
		return () => clearInterval(time);
	}, []);

	useEffect(() => {
		let action = "pageView";
		switch (saveData) {
			case 1:
				action = "Enviar Pregunta";
				break;
			case 2:
				action = "Boton Powered By Up";
				break;
			case 3:
				action = "Boton Volver al Lobby";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/streaming",
			action,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "__blank");
		}
		if (saveData === 3) {
			history.push("/salaespera");
		}
	}, [saveData]);

	const onChange = (e) => {
		setQuestionInput(e.target.value);
	};

	const sendQuestion = async () => {
		const userQuestion = questionInput;
		if (userQuestion.trim() !== "") {
			const data = {
				user: user.id,
				question: userQuestion,
			};
			const result = await makeQuestionApi(token, data);

			if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
			} else {
				notification["success"]({
					message: result.message,
				});
				setSaveData(1);
				setQuestionInput("");
			}
		}
	};

	const getTime2 = async (interval) => {
		try {
			const resp = await getTime();
			const timeApi = moment(resp.time).valueOf();
			setAgendaTime(moment(resp.time).format());
			$(".cronometro").each(function () {
				const $this = $(this);
				let now = timeApi;

				interval = setInterval(function () {
					const countDownDate = moment(resp.eventTime).valueOf();
					const distance = countDownDate - now;
					const days_t = Math.floor(distance / (1000 * 60 * 60 * 24));
					const hours_t = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					const minutes_t = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					const seconds_t = Math.floor((distance % (1000 * 60)) / 1000);
					let days, m1, m2, hours, minutes, seconds;
					if (days_t < 10) {
						days = "0" + days_t;
					} else {
						m1 = String(days_t).substring(0, 1);
						m2 = String(days_t).substring(1, 2);
						days = m1 + m2;
					}
					if (hours_t < 10) {
						hours = "0" + hours_t;
					} else {
						m1 = String(hours_t).substring(0, 1);
						m2 = String(hours_t).substring(1, 2);
						hours = m1 + m2;
					}
					if (minutes_t < 10) {
						minutes = "0" + minutes_t;
					} else {
						m1 = String(minutes_t).substring(0, 1);
						m2 = String(minutes_t).substring(1, 2);
						minutes = m1 + m2;
					}
					if (seconds_t < 10) {
						seconds = "0" + seconds_t;
					} else {
						m1 = String(seconds_t).substring(0, 1);
						m2 = String(seconds_t).substring(1, 2);
						seconds = m1 + m2;
					}
					$this.empty();
					if (countDownDate > now) {
						$this.append("<div><h1>" + days + "</h1><span>Días</span></div>");
						$this.append("<div><h1>" + hours + "</h1><span>Horas</span></div>");
						$this.append("<div><h1>" + minutes + "</h1><span>Minutos</span></div>");
						$this.append("<div><h1>" + seconds + "</h1><span>Segundos</span></div>");
					} else {
						clearInterval(interval);
					}
					now = moment(now).add(1, "seconds").valueOf();
				}, 1000);
			});
		} catch (exception) {
			console.log(exception);
		}
	};

	return (
		<div className="streaming-container">
			{/* <div className="fondo">
				<div className="menu">
					<div className="logo">
						<img src={logoGov} alt="siemens" width="130" />
					</div>
				</div>
			</div>
			<div className="streaming">
				<iframe
					title="streaming"
					width="560"
					height="315"
					className="transmission"
					src="https://player.vimeo.com/video/461210981"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div> */}
			<div className="contenedorStreaming">
				<div className="responsive2">
					<div className="boton1">
						<a onClick={() => setSaveData(3)}>
							{" "}
							<ArrowLeftOutlined /> VOLVER AL LOBBY
						</a>
					</div>
					<div className="logos2 fadeInDownBig">
						<img src={logo} alt="logo" width="100%" />
						<div className="imagenes">
							<img className="img1 imgP" src={logos1} alt="Logos 1" />
							<img className="img2 imgS" src={logos2} alt="Logos 2" />
						</div>
					</div>
				</div>
				<div className="streaming">
					<div className="col desktop fadeInLeftBig">
						<img className="img" src={logo2} alt="logo2" />
						<div className="imagenes">
							<img src={logos3} alt="logos4" className="I1" />
						</div>
					</div>
					<div className="col2 fadeInUpBig">
						<iframe
							title="streaming"
							width="560"
							height="315"
							className="transmission"
							src="https://vimeo.com/event/1173217/embed"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="col desktop fadeInRightBig">
						<img className="img" src={logo2} alt="logo2" />
						<div className="imagenes">
							<img src={logos4} alt="logos5" className="I2 img3" />
							<img src={logos5} alt="logos5" className="I2 img4 imgNone" />
						</div>
					</div>
					<div className="columnaMovil movil">
						<div className="fadeInLeftBig">
							<img className="fondoImagen" src={logo} alt="logo5" width="100%" />
							<div className="imagenes">
								<img src={logos6} alt="logos6" className="Q1" />
								<img src={logos7} alt="logos7" className="Q2 imgNone" />
								<img src={logos8} alt="logos8" className="Q3 imgNone" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="question-container">
				<h1>Envía aquí tus preguntas o saludos</h1>
				<input type="text" placeholder="Escribe aquí..." name="question" id="question" value={questionInput} onChange={onChange} />
				<button onClick={sendQuestion}>Enviar</button>
			</div>

			<LazyLoadComponent>
				<div className="fondo">
					<Agenda agendaTime={agendaTime} state={true} setSaveData={setSaveData} />
				</div>
			</LazyLoadComponent>
			<Footer setSaveData={setSaveData} />
		</div>
	);
};

export default Streaming;
