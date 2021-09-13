import React from "react";
import MAINSPONSOR from "../../../assets/images/MAIN-SPONSOR3.jpg";
import MAINSPONSOR2 from "../../../assets/images/MAIN-SPONSOR2.jpg";
import sponsor1 from "../../../assets/images/1.jpg";
import sponsor2 from "../../../assets/images/2.jpg";
import sponsor3 from "../../../assets/images/3.jpg";
import chiletecLogo from "../../../assets/images/chiletec-logo.png";

import "./Auspiciadores.scss";

const Auspiciadores = () => {
	return (
		<>
			<div className="fondoblanco">
				<div className="contenedor">
					<div className="titulo">
						<h2>Organizador</h2>
					</div>
					<div className="imagenes">
						<img className="chiletec" src={chiletecLogo} alt="MAINSPONSOR" />
					</div>
				</div>
				<div className="contenedor">
					<div className="titulo">
						<h2>Main Sponsor</h2>
					</div>
					<div className="imagenes">
						<img className="organizadores" src={MAINSPONSOR} alt="MAINSPONSOR" />
					</div>
					<div className="imagenes">
						<img className="organizadores organizadores2" src={MAINSPONSOR2} alt="MAINSPONSOR2" />
					</div>
				</div>
			</div>
			<div className="fondoblanco">
				<div className="contenedor">
					<div className="titulo">
						<h2>Media Partner</h2>
					</div>
					<div className="imagenes">
						<img className="mainsponsor" src={sponsor1} alt="sponsor1" />
					</div>
					<div className="imagenes">
						<img className="sponsorplatinum" src={sponsor2} alt="sponsor1" />
					</div>
					<div className="imagenes">
						<img width="100%" src={sponsor3} alt="sponsor3" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Auspiciadores;
