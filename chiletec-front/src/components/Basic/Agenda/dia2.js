/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";

const Dia2 = ({ setSaveData, abrirCerrar, state }) => {
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
			<div className="row2 grey" id="row15" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:00 <span>-</span> 09:05 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha15" onClick={() => abrirCerrar("imagen15", "flecha15")} />
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
				<div className="imagenes" id="imagen15">
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
			<div className="row2" id="row16" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:05 <span>-</span> 09:15 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha16" onClick={() => abrirCerrar("imagen16", "flecha16")} />
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
				<div className="imagenes" id="imagen16">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon alvaroPortugal"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Alvaro Portugal</strong>
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
			{/* <div className="row2" id="row17" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:10 <span>-</span> 09:15 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha17" onClick={() => abrirCerrar("imagen17", "flecha17")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Saludo bienvenida autoridad Gobierno invitada</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen17">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Nombre</strong>
								</span>
								<br />
								<span className="ultimo">Jefe Gobierno Digital</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Gobierno</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="row2 grey" id="row18" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:15 <span>-</span> 09:50 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha18" onClick={() => abrirCerrar("imagen18", "flecha18")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>“La Fuerza Laboral Asistida para el nuevo Gobierno Digital”</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen18">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon veronicaQuinteros"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Verónica Quinteros</strong>
								</span>
								<br />
								<span className="ultimo">Gerenta de Consultoría y Servicios de Automatización</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Automation Anywhere</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row19" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:50 <span>-</span> 10:30 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha19" onClick={() => abrirCerrar("imagen19", "flecha19")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>
								"¿Cómo percibimos nuestros barrios? Una mirada a través de los lentes de Big Data y la Inteligencia Artificial"
							</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen19">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon hansLobel"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Dr. Hans Löbel</strong>
								</span>
								<br />
								<span className="ultimo">
									Profesor del Dpto. de Ciencia de la Computación y del Dpto. de Ingeniería de Transporte y Logística de la Escuela
									de Ingeniería UC
								</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Pontificia Universidad Católica de Chile</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row20" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							10:30 <span>-</span> 11:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha20" onClick={() => abrirCerrar("imagen20", "flecha20")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Desafíos en el Desarrollo de Software Seguro"</strong>
							{/* <strong>PYMES EN LINEA</strong> */}
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen20">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon mariaLuisa"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>María Luisa Riquelme</strong>
								</span>
								<br />
								<span className="ultimo">Gerente General y Sales & Business Development Director</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Softegrity SpA (Partner Synopsys)</strong>{" "}
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
					<p>11:00 - 11:15 hrs</p>
				</div>
			</div>
			<div className="row2" id="row21" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							11:15 <span>-</span> 12:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha21" onClick={() => abrirCerrar("imagen21", "flecha21")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Los Desafíos de la Ley de Transformación Digital en Chile</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen21">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon felipeMancini"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Felipe Mancini</strong>
								</span>
								<br />
								<span className="ultimo">CEO</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Asimov Consultores</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row22" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 13:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha22" onClick={() => abrirCerrar("imagen22", "flecha22")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>PANEL DE CONVERSACIÓN: Ley Transformación Digital</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen22">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon alvaroPortugal"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
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
			<div className="row2" id="row23" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							14:30 <span>-</span> 15:00 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha23" onClick={() => abrirCerrar("imagen23", "flecha23")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Campañas políticas en tiempos de redes"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen23">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon enzoAbbagliati"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Enzo Abbagliati</strong>
								</span>
								<br />
								<span className="ultimo">Director Ejecutivo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Factor Critico</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row24" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							15:00 <span>-</span> 15:40 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha24" onClick={() => abrirCerrar("imagen24", "flecha24")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Lo desafíos éticos de la IA</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen24">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon ricardoBaeza"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Ricardo Baeza</strong>
								</span>
								<br />
								<span className="ultimo">
									Director de Investigación del Instituto de Inteligencia Artificial Experiencial de Northeastern University en el
									Silicon Valley
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
			<div className="row2" id="row25" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							15:40 <span>-</span> 16:10 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha25" onClick={() => abrirCerrar("imagen25", "flecha25")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							HEALTHTECH GROUP
							{/* <strong>"Desafíos en el Desarrollo de Software Seguro"</strong> */}
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen25">
					<div className="espacio"></div>
					<div className="imagen">
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
			<div className="row2 grey" id="row26" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							16:10 <span>-</span> 16:40 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha26" onClick={() => abrirCerrar("imagen26", "flecha26")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Ley de Transformación Digital del Estado: Construir para el futuro, hoy"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen26">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon karenSchramm"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Kareen Schramm</strong>
								</span>
								<br />
								<span className="ultimo">
									Coordinadora de Políticas y Estudios Gobierno Digital en Ministerio Secretaría General de la Presidencia
								</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Gobierno Digital</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row27" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:40 <span>-</span> 17:10 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha27" onClick={() => abrirCerrar("imagen27", "flecha27")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Economía Digital"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen27">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon yerkaYurich"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Yerka Yukich</strong>
								</span>
								<br />
								<span className="ultimo">Secretaria Ejecutiva Centro de Economía Digital</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Cámara de Comercio de Santiago</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row28" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							17:10 <span>-</span> 17:40 hrs
						</p>
					</div>
					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha28" onClick={() => abrirCerrar("imagen28", "flecha28")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>"Planificación y gestión territorial en base al big data de movilidad"</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen28">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon julioCovarubia"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Julio Covarrubia</strong>
								</span>
								<br />
								<span className="ultimo">Líder de Geointeligencia</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Entel Ocean</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dia2;
