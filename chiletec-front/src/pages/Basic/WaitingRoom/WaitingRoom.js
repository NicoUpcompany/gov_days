/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Menu, Spin, notification, Drawer } from "antd";
import { UnorderedListOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import $ from "jquery";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import { isSafari, isMobileSafari } from "react-device-detect";
import { CometChat } from "@cometchat-pro/chat";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import ChatIcon from "@material-ui/icons/Chat";

import { getTime } from "../../../api/time";
import { eventApi } from "../../../api/events";
import { getAccessTokenApi } from "../../../api/auth";
import { updateWaitingRoomTimeApi } from "../../../api/user";
import { COMETCHAT_CONSTANTS } from "../../../consts";

import logo from "../../../assets/images/GOV DAYS.png";

import audio from "../../../assets/audio/audio.mp3";

import Agenda from "../../../components/Basic/Agenda/Agenda";
import Footer from "../../../components/Basic/Footer/Footer";
import Auspiciadores from "../../../components/Basic/Auspiciadores/Auspiciadores";
import { CometChatUnified } from "../../../components/CometChat";
import Socket from "../../../utils/socket";

// stands images
import standFondo from "../../../assets/images/stands/standFondo.png";
import asimovLogo from "../../../assets/images/stands/asimov/logo-exterior.png";
import kpazLogo from "../../../assets/images/stands/kpaz/logo-exterior.png";
import newtenbergLogo from "../../../assets/images/stands/newtenberg/logo-exterior.png";
import intersystemsLogo from "../../../assets/images/stands/intersystems/logo-exterior.png";
import alfapeopleLogo from "../../../assets/images/stands/alfapeople/logo-exterior.png";
import healthtechLogo from "../../../assets/images/stands/healthtech/logo-exterior.png";
import emprendetumenteLogo from "../../../assets/images/stands/emprendetumente/logo-exterior.png";
import chiletecLogo from "../../../assets/images/stands/chiletec/logo-exterior.png";
import pragmaLogo from "../../../assets/images/stands/pragma/logo-exterior.png";
import elempresarioLogo from "../../../assets/images/stands/elempresario/logo-exterior.jpg";
import whwLogo from "../../../assets/images/stands/whw/logo-exterior.png";
import ahoramujeresLogo from "../../../assets/images/stands/ahoramujeres/logo-exterior.png";
import gerenciaLogo from "../../../assets/images/stands/gerencia/logo-exterior.png";
import atomationanywhereLogo from "../../../assets/images/stands/atomationanywhere/logo-exterior.png";
import entelLogo from "../../../assets/images/stands/entel/logo-exterior.png";
import synopsysLogo from "../../../assets/images/stands/synopsys/logo-exterior.png";
import pucLogo from "../../../assets/images/stands/puc/logo-exterior.png";

// Stands components
import AsimovComponent from "../Streaming/components/Stands/asimov";
import KpazComponent from "../Streaming/components/Stands/kpaz";
import NewtenbergComponent from "../Streaming/components/Stands/newtenberg";
import IntersystemsComponent from "../Streaming/components/Stands/intersystems";
import AlfapeopleComponent from "../Streaming/components/Stands/alfapeople";
import HealthtechComponent from "../Streaming/components/Stands/healthtech";
import EmprendetumenteComponent from "../Streaming/components/Stands/emprendetumente";
import ChiletecComponent from "../Streaming/components/Stands/chiletec";
import PragmaComponent from "../Streaming/components/Stands/pragma";
import ElempresarioComponent from "../Streaming/components/Stands/elempresario";
import WhwComponent from "../Streaming/components/Stands/whw";
import AhoramujeresComponent from "../Streaming/components/Stands/ahoramujeres";
import GerenciaComponent from "../Streaming/components/Stands/gerencia";
import AtomationannywhereComponent from "../Streaming/components/Stands/atomationannywhere";
import EntelComponent from "../Streaming/components/Stands/entel";
import SynopsysComponent from "../Streaming/components/Stands/synopsys";
import PucComponent from "../Streaming/components/Stands/puc";

import "./WaitingRoom.scss";

const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const { SubMenu } = Menu;

const WaitingRoom = () => {
	const history = useHistory();
	const [current, setCurrent] = useState("mail");
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState(true);
	const [perfilState, setPerfilState] = useState(false);
	const [saveData, setSaveData] = useState(0);
	const [agendaTime, setAgendaTime] = useState(null);
	const [token, setToken] = useState(null);
	const [unreadMessage, setUnreadMessage] = useState(0);
	const [notifications, setNotifications] = useState(true);
	const [chat, setChat] = useState(false);
	const [state2, setState2] = useState(false);

	// Drawers
	const [asimovDrawer, setAsimovDrawer] = useState(false);
	const [kpazDrawer, setKpazDrawer] = useState(false);
	const [newtenbergDrawer, setNewtenbergDrawer] = useState(false);
	const [intersystemsDrawer, setIntersystemsDrawer] = useState(false);
	const [alfapeopleDrawer, setAlfapeopleDrawer] = useState(false);
	const [healthtechDrawer, setHealthtechDrawer] = useState(false);
	const [emprendetumenteDrawer, setEmprendetumenteDrawer] = useState(false);
	const [chiletecDrawer, setChiletecDrawer] = useState(false);
	const [pragmaDrawer, setPragmaDrawer] = useState(false);
	const [elEmpresarioDrawer, setElEmpresarioDrawer] = useState(false);
	const [whwDrawer, setWhwDrawer] = useState(false);
	const [ahoraMujeresDrawer, setAhoraMujeresDrawer] = useState(false);
	const [gerenciaDrawer, setGerenciaDrawer] = useState(false);
	const [automationDrawer, setAutomationDrawer] = useState(false);
	const [entelDrawer, setEntelDrawer] = useState(false);
	const [synopsysDrawer, setSynopsysDrawer] = useState(false);
	const [pucDrawer, setPucDrawer] = useState(false);

	useEffect(() => {
		let interval;
		getTime2(interval);
		const tokenAux = getAccessTokenApi();
		if (tokenAux === null) {
			history.push("/iniciarsesion");
		} else {
			const decodedToken = jwtDecode(tokenAux);
			if (!decodedToken) {
				history.push("/iniciarsesion");
			} else {
				setToken(tokenAux);
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
				if (
					decodedToken.id === "60b547ad87b4ce4f5277a549" ||
					decodedToken.id === "610300d74189b858ebb0f781" ||
					decodedToken.id === "6103058d4189b858ebb0f790" ||
					decodedToken.id === "610306394189b858ebb0f793" ||
					decodedToken.id === "610306ae4189b858ebb0f79a" ||
					decodedToken.id === "610307184189b858ebb0f79d" ||
					decodedToken.id === "60ad037387b4ce4f52779fe6" ||
					decodedToken.id === "6103091b4189b858ebb0f7a1" ||
					decodedToken.id === "610309c64189b858ebb0f7a5" ||
					decodedToken.id === "610304204189b858ebb0f78c" ||
					decodedToken.id === "60fb31d91a6e19062b20a383" ||
					decodedToken.id === "61030c874189b858ebb0f7b0" ||
					decodedToken.id === "6104036a274dde097edd08cb" ||
					decodedToken.id === "610344b5274dde097edd0869" ||
					decodedToken.id === "60a67ae80555fc01e4848c24" ||
					decodedToken.id === "61034246274dde097edd0857" ||
					decodedToken.id === "610341e8274dde097edd0854" ||
					decodedToken.id === "610309c64189b858ebb0f7a5"

				) {
					setPerfilState(true);
				}
				const data = {
					email: decodedToken.email,
				};
				updateWaitingRoomTimeApi(tokenAux, data);
				// if (!isMobileSafari && !isSafari) {
				// 	setState2(true);
				// 	const UID = decodedToken.id;
				// 	const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
				// 	const GUID = "chat_general";
				// 	const password = "";
				// 	const groupType = CometChat.GROUP_TYPE.PUBLIC;
				// 	CometChat.login(UID, apiKey).then(
				// 		(User) => {
				// 			CometChat.joinGroup(GUID, groupType, password).then(
				// 				(group) => {},
				// 				(error) => {}
				// 			);
				// 		},
				// 		(error) => {}
				// 	);
				// }
			}
		}
	}, []);

	useEffect(() => {
		let interval;
		getTime2(interval);
	}, [chat]);

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Menu";
				description = "Visitar mi Perfil";
				break;
			case 2:
				action = "Footer";
				description = "Powered By Up";
				break;
			case 3:
				action = "Agenda";
				description = "Entrar al Salón";
				break;
			case 4:
				action = "Cronometro";
				description = "Streaming";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 1) {
			history.push("/perfil");
		}
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "_blank");
		}
		if (saveData === 3 || saveData === 4) {
			history.push("/streaming");
		}
	}, [saveData]);

	useEffect(() => {
		if (!isSafari && !isMobileSafari) {
			if (notifications) {
				CometChat.addMessageListener(
					CUSTOMER_MESSAGE_LISTENER_KEY,
					new CometChat.MessageListener({
						onTextMessageReceived: (textMessage) => {
							const newAudio = new Audio(audio);
							newAudio.play();
							let message = textMessage.data.text;
							if (message.length > 25) {
								message = message.substring(0, 25) + "...";
							}
							notification["info"]({
								message: "Nuevo mensaje",
								description: message,
							});
						},
					})
				);
			} else {
				CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
			}
		}
	}, [notifications]);

	const handleClick = (e) => {
		setCurrent({ current: e.key });
	};

	const OnOffNotifications = () => {
		let action;
		if (notification) {
			action = "Silenciar notificaciones";
		} else {
			action = "Activar notificaciones";
		}
		const data = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		setNotifications(!notifications);
	};

	const changeChatStatus = () => {
		let action;
		if (chat) {
			action = "Cerrar Chat";
		} else {
			action = "Abrir Chat";
		}
		const data = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		setChat(!chat);
	};

	const getTime2 = async (interval) => {
		setLoading(true);
		try {
			const resp = await getTime();
			const timeApi = moment(resp.time).valueOf();
			setAgendaTime(resp.time);
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
						setLoading(false);
					} else {
						setState(false);
						setLoading(false);
						clearInterval(interval);
					}
					now = moment(now).add(1, "seconds").valueOf();
				}, 1000);
			});
			setLoading(false);
		} catch (exception) {
			setLoading(false);
			console.log(exception);
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
			{chat ? (
				<>
					<CometChatUnified />
					<div className="pregunta2">
						<div className="card">
							<div className="barra fadeInUpBig">
								<h3 onClick={() => changeChatStatus()}>NETWORKING</h3>
								<div className="message">
									<div className="message-container">
										<Tooltip title="Cerrar networking" placement="top">
											<ChatIcon className="mensaje" onClick={() => changeChatStatus()} />
										</Tooltip>
									</div>
									{unreadMessage > 0 ? <span className="noti">{unreadMessage}</span> : null}
									{notifications ? (
										<div onClick={OnOffNotifications} className="volumen">
											<Tooltip title="Silenciar Notificaciones" placement="top">
												<VolumeUpIcon className="icon" />
											</Tooltip>
										</div>
									) : (
										<div onClick={OnOffNotifications} className="volumen">
											<Tooltip title="Habilitar Notificaciones" placement="top">
												<VolumeOffIcon className="icon" />
											</Tooltip>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="fondo">
						<div className="menu-container">
							<div className="menu">
								<div className="logo">
									<img src={logo} alt="logo" width="180" />
								</div>
								<div className="subMenu desktop">
									<Link href="/salaespera">Sala de espera</Link>
									<a href="#agenda">Agenda</a>
									{state2 ? <Link onClick={() => changeChatStatus()}>Networking</Link> : null}
									<a href="#stands">Stands</a>
									{perfilState ? (
										<Link to="/perfil" className="perfil">
											Perfil
										</Link>
									) : null}
									{!state ? (
										<Link to="/streaming" className="perfil">
											Streaming
										</Link>
									) : null}
								</div>
								<div className="movil">
									<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
										<SubMenu key="SubMenu" icon={<UnorderedListOutlined />} title="">
											<Menu.Item key="setting:1">
												<Link className="opcion" to="/salaespera">
													Sala de espera
												</Link>
											</Menu.Item>
											<Menu.Item key="setting:2">
												<Link className="opcion" to="#agenda">
													Agenda
												</Link>
											</Menu.Item>
											{state2 ? (
												<Menu.Item key="setting:3">
													<Link className="opcion" onClick={() => changeChatStatus()}>
														Networking
													</Link>
												</Menu.Item>
											) : null}
											<Menu.Item key="setting:4">
												<Link className="opcion" to="#stands">
													stands
												</Link>
											</Menu.Item>
											{!state ? (
												<Menu.Item key="setting:5">
													<Link className="opcion" to="/streaming">
														Streaming
													</Link>
												</Menu.Item>
											) : null}
										</SubMenu>
									</Menu>
								</div>
							</div>
							<div className="header2">
								{state ? (
									<div className="centrado">
										<div className="cronometro"></div>
									</div>
								) : null}
								{!state ? (
									<div className="centrado">
										<div className="btn">
											<button onClick={() => setSaveData(4)}>Streaming</button>
										</div>
									</div>
								) : null}
							</div>
						</div>
						{state2 ? (
							<div className="pregunta2">
								<div className="card">
									<div className="barra fadeInUpBig">
										<h3 onClick={() => changeChatStatus()}>Networking</h3>
										<div className="message">
											<div className="message-container">
												<Tooltip title="Ingresar a networking" placement="top">
													<ChatIcon className="mensaje" onClick={() => changeChatStatus()} />
												</Tooltip>
											</div>
											{unreadMessage > 0 ? <span className="noti">{unreadMessage}</span> : null}
											{notifications ? (
												<div onClick={OnOffNotifications} className="volumen">
													<Tooltip title="Silenciar Notificaciones" placement="top">
														<VolumeUpIcon className="icon" />
													</Tooltip>
												</div>
											) : (
												<div onClick={OnOffNotifications} className="volumen">
													<Tooltip title="Habilitar Notificaciones" placement="top">
														<VolumeOffIcon className="icon" />
													</Tooltip>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						) : null}
						<div className="stands-container" id="stands">
							<h1>Stands</h1>
							<div className="stand-xl" onClick={() => setAsimovDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo asimov">
									<img src={asimovLogo} alt="Asimov" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setKpazDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo kpaz">
									<img src={kpazLogo} alt="Kpaz" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setAlfapeopleDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo alfapeople">
									<img src={alfapeopleLogo} alt="AlfaPeople" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setNewtenbergDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo">
									<img src={newtenbergLogo} alt="Newtenberg" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setPragmaDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo pragma">
									<img src={pragmaLogo} alt="Pragma" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setIntersystemsDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo intersystems">
									<img src={intersystemsLogo} alt="Intersystems" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setChiletecDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo">
									<img src={chiletecLogo} alt="Chiletec" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setAutomationDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo atomation">
									<img src={atomationanywhereLogo} alt="Automation Anywhere" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setEntelDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo entel">
									<img src={entelLogo} alt="Entel Ocean" />
								</div>
							</div>
							<div className="stand-xl" onClick={() => setSynopsysDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo synopsys">
									<img src={synopsysLogo} alt="Synopsys" />
								</div>
							</div>
							<div className="stand-xl center" onClick={() => setPucDrawer(true)}>
								<img src={standFondo} alt="Stand" className="stand-backgorund" />
								<div className="stand-logo puc">
									<img src={pucLogo} alt="PUC" />
								</div>
							</div>
							<div className="stand-l-container">
								<div className="stand-l" onClick={() => setHealthtechDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo healthtech">
										<img src={healthtechLogo} alt="HealthTech" />
									</div>
								</div>
								<div className="stand-l" onClick={() => setEmprendetumenteDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo emprendetumente">
										<img src={emprendetumenteLogo} alt="Emprende tu mente" />
									</div>
								</div>
								<div className="stand-l" onClick={() => setElEmpresarioDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo elempresario">
										<img src={elempresarioLogo} alt="El empresario" />
									</div>
								</div>
							</div>
							<div className="stand-l-container">
								<div className="stand-l" onClick={() => setWhwDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo whw">
										<img src={whwLogo} alt="Whw" />
									</div>
								</div>
								<div className="stand-l" onClick={() => setAhoraMujeresDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo ahoraMujeres">
										<img src={ahoramujeresLogo} alt="Ahora Mujeres" />
									</div>
								</div>
								<div className="stand-l" onClick={() => setGerenciaDrawer(true)}>
									<img src={standFondo} alt="Stand" className="stand-backgorund" />
									<div className="stand-logo gerencia">
										<img src={gerenciaLogo} alt="Gerencia / Channel news" />
									</div>
								</div>
							</div>
						</div>
						<Agenda agendaTime={agendaTime} state={state} setSaveData={setSaveData} />
						<Auspiciadores />
					</div>
					<Footer setSaveData={setSaveData} />
				</>
			)}
			{/* Drawers */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setAsimovDrawer(false)} visible={asimovDrawer}>
				<AsimovComponent visible={asimovDrawer} setVisible={setAsimovDrawer} token={token} standName="Asimov" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setKpazDrawer(false)} visible={kpazDrawer}>
				<KpazComponent visible={kpazDrawer} setVisible={setKpazDrawer} token={token} standName="KPaz" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setNewtenbergDrawer(false)}
				visible={newtenbergDrawer}
			>
				<NewtenbergComponent visible={newtenbergDrawer} setVisible={setNewtenbergDrawer} token={token} standName="Newtenberg" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setIntersystemsDrawer(false)}
				visible={intersystemsDrawer}
			>
				<IntersystemsComponent visible={intersystemsDrawer} setVisible={setIntersystemsDrawer} token={token} standName="Intersystems" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setAlfapeopleDrawer(false)}
				visible={alfapeopleDrawer}
			>
				<AlfapeopleComponent visible={alfapeopleDrawer} setVisible={setAlfapeopleDrawer} token={token} standName="AlfaPeople" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setHealthtechDrawer(false)}
				visible={healthtechDrawer}
			>
				<HealthtechComponent visible={healthtechDrawer} setVisible={setHealthtechDrawer} token={token} standName="HealthTech" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setEmprendetumenteDrawer(false)}
				visible={emprendetumenteDrawer}
			>
				<EmprendetumenteComponent
					visible={emprendetumenteDrawer}
					setVisible={setEmprendetumenteDrawer}
					token={token}
					standName="Emprende Tu Mente"
				/>
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setChiletecDrawer(false)} visible={chiletecDrawer}>
				<ChiletecComponent visible={chiletecDrawer} setVisible={setChiletecDrawer} token={token} standName="Chiletec" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setPragmaDrawer(false)} visible={pragmaDrawer}>
				<PragmaComponent visible={pragmaDrawer} setVisible={setPragmaDrawer} token={token} standName="Pragma" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setElEmpresarioDrawer(false)}
				visible={elEmpresarioDrawer}
			>
				<ElempresarioComponent visible={elEmpresarioDrawer} setVisible={setElEmpresarioDrawer} token={token} standName="El Empresario" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setWhwDrawer(false)} visible={whwDrawer}>
				<WhwComponent visible={whwDrawer} setVisible={setWhwDrawer} token={token} standName="Whw" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setAhoraMujeresDrawer(false)}
				visible={ahoraMujeresDrawer}
			>
				<AhoramujeresComponent visible={ahoraMujeresDrawer} setVisible={setAhoraMujeresDrawer} token={token} standName="Ahora Mujeres" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setGerenciaDrawer(false)} visible={gerenciaDrawer}>
				<GerenciaComponent visible={gerenciaDrawer} setVisible={setGerenciaDrawer} token={token} standName="Gerencia / Channel news" />
			</Drawer>
			<Drawer
				className="drawer-component"
				placement="right"
				closable={false}
				onClose={() => setAutomationDrawer(false)}
				visible={automationDrawer}
			>
				<AtomationannywhereComponent
					visible={automationDrawer}
					setVisible={setAutomationDrawer}
					token={token}
					standName="Automation Anywhere"
				/>
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setEntelDrawer(false)} visible={entelDrawer}>
				<EntelComponent visible={entelDrawer} setVisible={setEntelDrawer} token={token} standName="Entel Ocean" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setSynopsysDrawer(false)} visible={synopsysDrawer}>
				<SynopsysComponent visible={synopsysDrawer} setVisible={setSynopsysDrawer} token={token} standName="Synopsys" />
			</Drawer>
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setPucDrawer(false)} visible={pucDrawer}>
				<PucComponent visible={pucDrawer} setVisible={setPucDrawer} token={token} standName="Escuela de Ingeniería UC" />
			</Drawer>
		</Spin>
	);
};

export default WaitingRoom;
