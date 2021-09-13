/* eslint-disable react-hooks/exhaustive-deps */
// https://docs.google.com/spreadsheets/d/1V8jff3_sPolet0T0XCMzW5Tp0NGCWmlqijEatSWVPpY/edit?pli=1#gid=361398439
import React, { useState, useEffect } from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";

import Dia1 from "./dia1";
import Dia2 from "./dia2";

import "./Agenda.scss";

const Agenda = (props) => {
	const { agendaTime, state, setSaveData } = props;
	const [dia, setDia] = useState(4);
	const [agendaState1, setAgendaState1] = useState(true);
	const [agendaState2, setAgendaState2] = useState(true);
	const [agendaState3, setAgendaState3] = useState(true);
	const [agendaState4, setAgendaState4] = useState(true);
	const [agendaState5, setAgendaState5] = useState(true);
	const [agendaState6, setAgendaState6] = useState(true);
	const [agendaState7, setAgendaState7] = useState(true);
	const [agendaState8, setAgendaState8] = useState(true);
	const [agendaState9, setAgendaState9] = useState(true);
	const [agendaState10, setAgendaState10] = useState(true);
	const [agendaState11, setAgendaState11] = useState(true);
	const [agendaState12, setAgendaState12] = useState(true);
	const [agendaState13, setAgendaState13] = useState(true);
	const [agendaState14, setAgendaState14] = useState(true);
	const [agendaState15, setAgendaState15] = useState(true);
	const [agendaState17, setAgendaState17] = useState(true);
	const [agendaState18, setAgendaState18] = useState(true);
	const [agendaState19, setAgendaState19] = useState(true);
	const [agendaState20, setAgendaState20] = useState(true);
	const [agendaState21, setAgendaState21] = useState(true);
	const [agendaState22, setAgendaState22] = useState(true);
	const [agendaState23, setAgendaState23] = useState(true);
	const [agendaState24, setAgendaState24] = useState(true);
	const [agendaState25, setAgendaState25] = useState(true);
	const [agendaState26, setAgendaState26] = useState(true);
	const [agendaState27, setAgendaState27] = useState(true);
	const [agendaState28, setAgendaState28] = useState(true);
	const [agendaDay1, setAgendaDay1] = useState(true);
	const [agendaDay2, setAgendaDay2] = useState(true);

	useEffect(() => {
		getTime();
	}, [
		agendaTime,
		agendaDay1,
		agendaDay2,
		agendaState1,
		agendaState2,
		agendaState3,
		agendaState4,
		agendaState5,
		agendaState6,
		agendaState7,
		agendaState8,
		agendaState9,
		agendaState10,
		agendaState11,
		agendaState12,
		agendaState13,
		agendaState14,
		agendaState15,
		agendaState17,
		agendaState18,
		agendaState19,
		agendaState20,
		agendaState21,
		agendaState22,
		agendaState23,
		agendaState24,
		agendaState25,
		agendaState26,
		agendaState27,
		agendaState28,
	]);

	const getTime = () => {
		try {
			let now = agendaTime;
			const interval = setInterval(function () {
				const day1 = moment(momentTimezone.tz("2021-08-04T00:00:00", "America/Santiago")).valueOf();
				const day2 = moment(momentTimezone.tz("2021-08-05T00:00:00", "America/Santiago")).valueOf();
				const countDownDate1 = moment(momentTimezone.tz("2021-08-04T09:05:00", "America/Santiago")).valueOf();
				const countDownDate2 = moment(momentTimezone.tz("2021-08-04T09:10:00", "America/Santiago")).valueOf();
				const countDownDate3 = moment(momentTimezone.tz("2021-08-04T09:15:00", "America/Santiago")).valueOf();
				const countDownDate4 = moment(momentTimezone.tz("2021-08-04T09:50:00", "America/Santiago")).valueOf();
				const countDownDate5 = moment(momentTimezone.tz("2021-08-04T10:35:00", "America/Santiago")).valueOf();
				const countDownDate6 = moment(momentTimezone.tz("2021-08-04T11:05:00", "America/Santiago")).valueOf();
				const countDownDate7 = moment(momentTimezone.tz("2021-08-04T12:00:00", "America/Santiago")).valueOf();
				const countDownDate8 = moment(momentTimezone.tz("2021-08-04T13:00:00", "America/Santiago")).valueOf();
				const countDownDate9 = moment(momentTimezone.tz("2021-08-04T15:10:00", "America/Santiago")).valueOf();
				const countDownDate10 = moment(momentTimezone.tz("2021-08-04T15:55:00", "America/Santiago")).valueOf();
				const countDownDate11 = moment(momentTimezone.tz("2021-08-04T16:40:00", "America/Santiago")).valueOf();
				const countDownDate12 = moment(momentTimezone.tz("2021-08-04T17:10:00", "America/Santiago")).valueOf();
				const countDownDate13 = moment(momentTimezone.tz("2021-08-04T17:40:00", "America/Santiago")).valueOf();
				const countDownDate14 = moment(momentTimezone.tz("2021-08-04T18:00:00", "America/Santiago")).valueOf();
				const countDownDate15 = moment(momentTimezone.tz("2021-08-05T09:05:00", "America/Santiago")).valueOf();
				const countDownDate17 = moment(momentTimezone.tz("2021-08-05T09:15:00", "America/Santiago")).valueOf();
				const countDownDate18 = moment(momentTimezone.tz("2021-08-05T09:50:00", "America/Santiago")).valueOf();
				const countDownDate19 = moment(momentTimezone.tz("2021-08-05T10:30:00", "America/Santiago")).valueOf();
				const countDownDate20 = moment(momentTimezone.tz("2021-08-05T11:00:00", "America/Santiago")).valueOf();
				const countDownDate21 = moment(momentTimezone.tz("2021-08-05T12:00:00", "America/Santiago")).valueOf();
				const countDownDate22 = moment(momentTimezone.tz("2021-08-05T13:00:00", "America/Santiago")).valueOf();
				const countDownDate23 = moment(momentTimezone.tz("2021-08-05T15:00:00", "America/Santiago")).valueOf();
				const countDownDate24 = moment(momentTimezone.tz("2021-08-05T15:40:00", "America/Santiago")).valueOf();
				const countDownDate25 = moment(momentTimezone.tz("2021-08-05T16:10:00", "America/Santiago")).valueOf();
				const countDownDate26 = moment(momentTimezone.tz("2021-08-05T16:40:00", "America/Santiago")).valueOf();
				const countDownDate27 = moment(momentTimezone.tz("2021-08-05T17:10:00", "America/Santiago")).valueOf();
				const countDownDate28 = moment(momentTimezone.tz("2021-08-05T17:40:00", "America/Santiago")).valueOf();
				if (agendaDay1 && day1 < now) {
					clearInterval(interval);
					setAgendaDay1(!agendaDay1);
					setDia(4);
				}
				if (agendaDay2 && day2 < now) {
					clearInterval(interval);
					setAgendaDay2(!agendaDay2);
					setDia(5);
				}
				if (agendaState1 && countDownDate1 < now) {
					clearInterval(interval);
					setAgendaState1(!agendaState1);
					Cerrar("imagen1", "flecha1");
				}
				if (agendaState2 && countDownDate2 < now) {
					clearInterval(interval);
					setAgendaState2(!agendaState2);
					Cerrar("imagen2", "flecha2");
				}
				if (agendaState3 && countDownDate3 < now) {
					clearInterval(interval);
					setAgendaState3(!agendaState3);
					Cerrar("imagen3", "flecha3");
				}
				if (agendaState4 && countDownDate4 < now) {
					clearInterval(interval);
					setAgendaState4(!agendaState4);
					Cerrar("imagen4", "flecha4");
				}
				if (agendaState5 && countDownDate5 < now) {
					clearInterval(interval);
					setAgendaState5(!agendaState5);
					Cerrar("imagen5", "flecha5");
				}
				if (agendaState6 && countDownDate6 < now) {
					clearInterval(interval);
					setAgendaState6(!agendaState6);
					Cerrar("imagen6", "flecha6");
				}
				if (agendaState7 && countDownDate7 < now) {
					clearInterval(interval);
					setAgendaState7(!agendaState7);
					Cerrar("imagen7", "flecha7");
				}
				if (agendaState8 && countDownDate8 < now) {
					clearInterval(interval);
					setAgendaState8(!agendaState8);
					Cerrar("imagen8", "flecha8");
				}
				if (agendaState9 && countDownDate9 < now) {
					clearInterval(interval);
					setAgendaState9(!agendaState9);
					Cerrar("imagen9", "flecha9");
				}
				if (agendaState10 && countDownDate10 < now) {
					clearInterval(interval);
					setAgendaState10(!agendaState10);
					Cerrar("imagen10", "flecha10");
				}
				if (agendaState11 && countDownDate11 < now) {
					clearInterval(interval);
					setAgendaState11(!agendaState11);
					Cerrar("imagen11", "flecha11");
				}
				if (agendaState12 && countDownDate12 < now) {
					clearInterval(interval);
					setAgendaState12(!agendaState12);
					Cerrar("imagen12", "flecha12");
				}
				if (agendaState13 && countDownDate13 < now) {
					clearInterval(interval);
					setAgendaState13(!agendaState13);
					Cerrar("imagen13", "flecha13");
				}
				if (agendaState14 && countDownDate14 < now) {
					clearInterval(interval);
					setAgendaState14(!agendaState14);
					Cerrar("imagen14", "flecha14");
				}
				if (agendaState15 && countDownDate15 < now) {
					clearInterval(interval);
					setAgendaState15(!agendaState15);
					Cerrar("imagen15", "flecha15");
				}
				if (agendaState17 && countDownDate17 < now) {
					clearInterval(interval);
					setAgendaState17(!agendaState17);
					Cerrar("imagen17", "flecha17");
				}
				if (agendaState18 && countDownDate18 < now) {
					clearInterval(interval);
					setAgendaState18(!agendaState18);
					Cerrar("imagen18", "flecha18");
				}
				if (agendaState19 && countDownDate19 < now) {
					clearInterval(interval);
					setAgendaState19(!agendaState19);
					Cerrar("imagen19", "flecha19");
				}
				if (agendaState20 && countDownDate20 < now) {
					clearInterval(interval);
					setAgendaState20(!agendaState20);
					Cerrar("imagen20", "flecha20");
				}
				if (agendaState21 && countDownDate21 < now) {
					clearInterval(interval);
					setAgendaState21(!agendaState21);
					Cerrar("imagen21", "flecha21");
				}
				if (agendaState22 && countDownDate22 < now) {
					clearInterval(interval);
					setAgendaState22(!agendaState22);
					Cerrar("imagen22", "flecha22");
				}
				if (agendaState23 && countDownDate23 < now) {
					clearInterval(interval);
					setAgendaState23(!agendaState23);
					Cerrar("imagen23", "flecha23");
				}
				if (agendaState24 && countDownDate24 < now) {
					clearInterval(interval);
					setAgendaState24(!agendaState24);
					Cerrar("imagen24", "flecha24");
				}
				if (agendaState25 && countDownDate25 < now) {
					clearInterval(interval);
					setAgendaState25(!agendaState25);
					Cerrar("imagen25", "flecha25");
				}
				if (agendaState26 && countDownDate26 < now) {
					clearInterval(interval);
					setAgendaState26(!agendaState26);
					Cerrar("imagen26", "flecha26");
				}
				if (agendaState27 && countDownDate27 < now) {
					clearInterval(interval);
					setAgendaState27(!agendaState27);
					Cerrar("imagen27", "flecha27");
				}
				if (agendaState28 && countDownDate28 < now) {
					clearInterval(interval);
					setAgendaState28(!agendaState28);
					Cerrar("imagen28", "flecha28");
				}
				now = moment(now).add(1, "seconds").valueOf();
			}, 1000);
			return () => clearInterval(interval);
		} catch (exception) {
			console.log(exception);
		}
	};

	const abrirCerrar = (raw, flecha) => {
		try {
			const doc = document.getElementById(raw);
			const doc2 = document.getElementById(flecha);
			if (doc.style.display === "none") {
				doc2.style.transform = "rotate(360deg)";
				doc2.style.transitionDuration = "1s";
				doc.style.display = "block";
				doc.style.transitionDuration = "2s";
			} else {
				doc2.style.transform = "rotate(180deg)";
				doc.style.display = "none";
				doc2.style.transitionDuration = "1s";
				doc.style.transitionDuration = "1s";
			}
		} catch (error) {
			console.log("error");
		}
	};

	const Cerrar = (raw, flecha) => {
		try {
			let doc, doc2;
			doc = document.getElementById(raw);
			doc2 = document.getElementById(flecha);
			doc2.style.transform = "rotate(180deg)";
			doc.style.display = "none";
			doc2.style.transitionDuration = "1s";
			doc.style.transitionDuration = "1s";
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<>
			<div className="contenedorAgenda" id="agenda">
				<div className="days">
					<button id="4" className={dia === 4 ? "clase" : ""} onClick={() => setDia(4)}>
						<span>Miércoles 04</span>
					</button>
					<button id="5" className={dia === 5 ? "clase" : ""} onClick={() => setDia(5)}>
						<span>Jueves 05</span>
					</button>
				</div>
				{dia === 4 ? <Dia1 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
				{dia === 5 ? <Dia2 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
			</div>
		</>
	);
};

export default Agenda;
