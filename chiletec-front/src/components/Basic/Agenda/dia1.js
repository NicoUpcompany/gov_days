/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";

const Dia1 = ({ setSaveData, abrirCerrar, state }) => {
	return (
		<>
			<div className="row4 border">
				<div className="tiempo">
					<p>Tiempo</p>
				</div>
				<div className="plenario">
					<p>Plenario</p>
				</div>
			</div>
			<div className="row2 grey" id="row1" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:00 <span>-</span> 09:05 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha1" onClick={() => abrirCerrar("imagen1", "flecha1")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Saludo bienvenida autoridad Chiletec</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen1">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon franciscoMendez"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Francisco Mendez</strong>
								</span>
								<br />
								<span className="ultimo">Presidente Chiletec</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Chiletec</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row2" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:05 <span>-</span> 09:10 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha2" onClick={() => abrirCerrar("imagen2", "flecha2")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Saludo bienvenida Mesa Gobierno Chiletec</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen2">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon alvaroPortugal"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Álvaro Portugal</strong>
								</span>
								<br />
								<span className="ultimo">Lider Mesa de Gobierno de Chiletec</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Chiletec</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row3" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:10 <span>-</span> 09:15 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha3" onClick={() => abrirCerrar("imagen3", "flecha3")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Saludo bienvenida autoridad Gobierno</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen3">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon kennethPugh"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Kenneth Pugh</strong>
								</span>
								<br />
								<span className="ultimo">Senador República - Valparaíso</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Gobierno</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row4" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:15 <span>-</span> 09:50 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha4" onClick={() => abrirCerrar("imagen4", "flecha4")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Uruguay Digital: caso de éxito internacional en políticas públicas de transformación digital”</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen4">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon joseClastornik"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>José Clastornik</strong>
								</span>
								<br />
								<span className="ultimo">Consultor internacional de transformación digital</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Gobierno Uruguay</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row5" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:50 <span>-</span> 10:35 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha5" onClick={() => abrirCerrar("imagen5", "flecha5")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Red de Mediadores: interoperabilidad del Estado con la anuencia del ciudadano</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen5">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon joseFlores"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>José "Pepe" Flores Peters</strong>
								</span>
								<br />
								<span className="ultimo">CEO, Newtenberg</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>NEWTENBERG</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row6" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							10:35 <span>-</span> 11:05 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha6" onClick={() => abrirCerrar("imagen6", "flecha6")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>“Hiperautomatización en el Estado al servicio de la ciudadanía”</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen6">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon cesarLopez"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>César López</strong>
								</span>
								<br />
								<span className="ultimo">Especialista en Gestión de Procesos e Inteligencia de Negocios</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Pragma</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>11:05 - 11:20 hrs</p>
				</div>
			</div>
			<div className="row2 grey" id="row7" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							11:20 <span>-</span> 12:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha7" onClick={() => abrirCerrar("imagen7", "flecha7")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Desarrollo Digital de Chile, mirada retrospectiva”</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen7">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon alejandroBarros"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Alejandro Barros</strong>
								</span>
								<br />
								<span className="ultimo">
									Académino Asociado, Centro de Sistemas Públicos, Ingeniería Industrial de la Universidad de Chile
								</span>
								{/* <br />
								<span className="ultimo">
									{" "}
									<strong>Consultor Gobierno</strong>{" "}
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row8" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 13:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha8" onClick={() => abrirCerrar("imagen8", "flecha8")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>PANEL DE CONVERSACIÓN: Políticas públicas tecnológicas</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen8">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon alejandroBarros"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Alejandro Barros</strong>
								</span>
								<br />
								<span className="ultimo">
									Académino Asociado, Centro de Sistemas Públicos, Ingeniería Industrial de la Universidad de Chile
								</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Consultor Gobierno</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Nombre</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Break Almuerzo</span>
				</div>
				<div className="duracion">
					<p>13:00 - 14:30 hrs</p>
				</div>
			</div>
			<div className="row2 grey" id="row9" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							14:30 <span>-</span> 15:10 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha9" onClick={() => abrirCerrar("imagen9", "flecha9")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Política Pública en Salud Digital</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen9">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon didierDeSaintPierre"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Didier De Saint Pierre</strong>
								</span>
								<br />
								<span className="ultimo">ICT Strategic Management Consultant</span>
								{/* <br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row10" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							15:10 <span>-</span> 15:55 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha10" onClick={() => abrirCerrar("imagen10", "flecha10")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>RPA, Acelerando la Transformación Digital del Sector Público</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen10">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon hectorInsunsa"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Hector Insua</strong>
								</span>
								<br />
								<span className="ultimo">Gerente de Technology Solutions</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>KPAZ</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row11" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							15:55 <span>-</span> 16:40 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha11" onClick={() => abrirCerrar("imagen11", "flecha11")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Acercando a los ciudadanos al Gobierno Digital</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen11">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon jimmyMunoz"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Jimmy Muñoz</strong>
								</span>
								<br />
								<span className="ultimo">Arquitecto de Soluciones y Gerente del Área de Power Platform</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>ALFAPEOPLE</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row12" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:40 <span>-</span> 17:10 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha12" onClick={() => abrirCerrar("imagen12", "flecha12")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>
								Cooperación y coordinación entre organismos: El desafío de la implementación de interoperabilidad federada
							</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen12">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon joseFuentealba"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>José Fuentealba</strong>
								</span>
								<br />
								<span className="ultimo">Sales Manager</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>InterSystems Chile</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row13" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							17:10 <span>-</span> 17:40 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha13" onClick={() => abrirCerrar("imagen13", "flecha13")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Pobreza y protección de datos"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen13">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon danielleZaror"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Danielle Zaror</strong>
								</span>
								<br />
								<span className="ultimo">
									Investigadora del Centro de Derecho Informático de la Facultad de Derecho de la U. de Chile y Directora en el
									Observatorio para la Transparencia e Inclusión Algorítmica.
								</span>
								{/* <br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row14" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							17:40 <span>-</span> 18:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha14" onClick={() => abrirCerrar("imagen14", "flecha14")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Talento Digital para Chile: Nueva formación para los empleos de hoy"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen14">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon jeannetteEscudero"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Jeannette Escudero</strong>
								</span>
								<br />
								<span className="ultimo">Directora Ejecutiva de Talento Digital para Chile. </span>
								{/* <br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dia1;
