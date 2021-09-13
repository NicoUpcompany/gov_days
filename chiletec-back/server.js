const mongoose = require("mongoose");
const schedule = require("node-schedule");
const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");

const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const RealTime = require("./models/realTime");
const UserAgenda = require("./models/userAgenda");

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});

let agendaStatus = false;
let users = [];
let agendaArray = [];
let peak = {
	time: null,
	count: 0,
};

// Día 1
const agendaDateStartAux = momentTimezone.tz("2021-08-04T09:00:00", "America/Santiago");
const agendaDateStart = moment(agendaDateStartAux).format();
const activeAgendaStart = schedule.scheduleJob(agendaDateStart, function () {
	agendaArray = users;
	agendaStatus = true;
});

const agendaDateEndAux = momentTimezone.tz("2021-08-04T19:00:00", "America/Santiago");
const agendaDateEnd = moment(agendaDateEndAux).format();
const activeAgendaEnd = schedule.scheduleJob(agendaDateEnd, function () {
	agendaArray = [];
	agendaStatus = false;
});

// Día 2
const agendaDateStartAux2 = momentTimezone.tz("2021-08-05T09:00:00", "America/Santiago");
const agendaDateStart2 = moment(agendaDateStartAux2).format();
const activeAgendaStart2 = schedule.scheduleJob(agendaDateStart2, function () {
	agendaArray = users;
	agendaStatus = true;
});

const agendaDateEndAux2 = momentTimezone.tz("2021-08-05T18:40:00", "America/Santiago");
const agendaDateEnd2 = moment(agendaDateEndAux2).format();
const activeAgendaEnd2 = schedule.scheduleJob(agendaDateEnd2, function () {
	agendaArray = [];
	agendaStatus = false;
});

io.on("connection", (socket) => {
	socket.on("NEW_USER", (user) => {
		try {
			const newUser = {
				id: socket.id,
				userId: user.userId,
				name: user.name,
				lastname: user.lastname,
				email: user.email,
				phone: user.phone,
				enterprise: user.enterprise,
				position: user.position,
				sector: user.sector,
				route: user.route,
				flagIcon: user.flagIcon,
				city: user.city,
				postalCode: user.postalCode,
				continent: user.continent,
				continentCode: user.continentCode,
				country: user.country,
				countryIsoCode: user.countryIsoCode,
				locationLatLong: user.locationLatLong,
				accuracyRadius: user.accuracyRadius,
				timeZone: user.timeZone,
				region: user.region,
				regionIsoCode: user.regionIsoCode,
				ipAddress: user.ipAddress,
				ipType: user.ipType,
				isp: user.isp,
				conectionType: user.conectionType,
				navigatorName: user.navigatorName,
				operatingSystem: user.operatingSystem,
				conectionTime: new Date(moment().subtract(3, "hours").format()).getTime(),
				conectionTimeEnd: null,
			};
			users.push(newUser);
			console.log(newUser);
			io.emit("USER", newUser);
			io.emit("UPDATE_USER_LIST", users);
			if (users.length > peak.count) {
				peak.count = users.length;
				peak.time = moment().subtract(3, "hours").format("LLL");
				io.emit("PEAK", peak);
			}
			if (agendaStatus) {
				const index = agendaArray.findIndex((element) => element.id === newUser.id);
				if (index < 0) {
					agendaArray.push(newUser);
				}
			}
		} catch (error) {
			console.log(error);
		}
	});

	socket.on("UPDATE_ROUTE", (user) => {
		try {
			const index = users.findIndex((element) => element.id === socket.id);
			if (index >= 0) {
				users[index].route = user.route;
				io.emit("UPDATE_USER_LIST", users);
			}
			if (agendaStatus) {
				const index2 = agendaArray.findIndex((element) => element.id === socket.id);
				if (index2 >= 0) {
					agendaArray[index2].route = user.route;
				}
			}
		} catch (error) {
			console.log(error);
		}
	});

	socket.on("GET_USERS", () => {
		io.emit("UPDATE_USER_LIST", users);
	});

	socket.on("GET_PEAK", () => {
		io.emit("PEAK", peak);
	});

	socket.on("disconnect", () => {
		try {
			const index = users.findIndex((element) => element.id === socket.id);
			if (index >= 0) {
				const realTime = new RealTime();
				realTime.user = users[index].userId;
				realTime.flagIcon = users[index].flagIcon;
				realTime.city = users[index].city;
				realTime.postalCode = users[index].postalCode;
				realTime.continent = users[index].continent;
				realTime.continentCode = users[index].continentCode;
				realTime.country = users[index].country;
				realTime.countryIsoCode = users[index].countryIsoCode;
				realTime.locationLatLong = users[index].locationLatLong;
				realTime.accuracyRadius = users[index].accuracyRadius;
				realTime.timeZone = users[index].timeZone;
				realTime.region = users[index].region;
				realTime.regionIsoCode = users[index].regionIsoCode;
				realTime.ipAddress = users[index].ipAddress;
				realTime.ipType = users[index].ipType;
				realTime.isp = users[index].isp;
				realTime.conectionType = users[index].conectionType;
				realTime.navigatorName = users[index].navigatorName;
				realTime.operatingSystem = users[index].operatingSystem;
				realTime.conectionTime = users[index].conectionTime;
				realTime.conectionTimeEnd = new Date(moment().subtract(3, "hours").format()).getTime();
				realTime.save((err, realTimeStored) => {});
				users = users.filter((u) => u.id !== socket.id);
				io.emit("UPDATE_USER_LIST", users);
				socket.removeAllListeners();
			}
			if (agendaStatus) {
				const index2 = agendaArray.findIndex((element) => element.id === socket.id);
				if (index2 >= 0) {
					agendaArray[index2].conectionTimeEnd = new Date(moment().subtract(3, "hours").format()).getTime();
				}
			}
		} catch (error) {
			console.log(error);
		}
	});
});

// Día 1
//#region
const date1 = momentTimezone.tz("2021-08-04T09:05:00", "America/Santiago");
const finalDate1 = moment(date1).format();
const date2 = momentTimezone.tz("2021-08-04T09:10:00", "America/Santiago");
const finalDate2 = moment(date2).format();
const date3 = momentTimezone.tz("2021-08-04T09:15:00", "America/Santiago");
const finalDate3 = moment(date3).format();
const date4 = momentTimezone.tz("2021-08-04T09:50:00", "America/Santiago");
const finalDate4 = moment(date4).format();
const date5 = momentTimezone.tz("2021-08-04T10:35:00", "America/Santiago");
const finalDate5 = moment(date5).format();
const date6 = momentTimezone.tz("2021-08-04T11:05:00", "America/Santiago");
const finalDate6 = moment(date6).format();
const date7 = momentTimezone.tz("2021-08-04T12:00:00", "America/Santiago");
const finalDate7 = moment(date7).format();
const date8 = momentTimezone.tz("2021-08-04T13:00:00", "America/Santiago");
const finalDate8 = moment(date8).format();
const date9 = momentTimezone.tz("2021-08-04T15:10:00", "America/Santiago");
const finalDate9 = moment(date9).format();
const date10 = momentTimezone.tz("2021-08-04T15:55:00", "America/Santiago");
const finalDate10 = moment(date10).format();
const date11 = momentTimezone.tz("2021-08-04T16:40:00", "America/Santiago");
const finalDate11 = moment(date11).format();
const date12 = momentTimezone.tz("2021-08-04T17:10:00", "America/Santiago");
const finalDate12 = moment(date12).format();
const date13 = momentTimezone.tz("2021-08-04T17:40:00", "America/Santiago");
const finalDate13 = moment(date13).format();
const date14 = momentTimezone.tz("2021-08-04T18:00:00", "America/Santiago");
const finalDate14 = moment(date14).format();
//#endregion

// Día 2
//#region
const date15 = momentTimezone.tz("2021-08-05T09:05:00", "America/Santiago");
const finalDate15 = moment(date15).format();
const date16 = momentTimezone.tz("2021-08-05T09:10:00", "America/Santiago");
const finalDate16 = moment(date16).format();
const date17 = momentTimezone.tz("2021-08-05T09:15:00", "America/Santiago");
const finalDate17 = moment(date17).format();
const date18 = momentTimezone.tz("2021-08-05T09:50:00", "America/Santiago");
const finalDate18 = moment(date18).format();
const date19 = momentTimezone.tz("2021-08-05T10:30:00", "America/Santiago");
const finalDate19 = moment(date19).format();
const date20 = momentTimezone.tz("2021-08-05T11:00:00", "America/Santiago");
const finalDate20 = moment(date20).format();
const date21 = momentTimezone.tz("2021-08-05T12:00:00", "America/Santiago");
const finalDate21 = moment(date21).format();
const date22 = momentTimezone.tz("2021-08-05T13:00:00", "America/Santiago");
const finalDate22 = moment(date22).format();
const date23 = momentTimezone.tz("2021-08-05T15:00:00", "America/Santiago");
const finalDate23 = moment(date23).format();
const date24 = momentTimezone.tz("2021-08-05T15:40:00", "America/Santiago");
const finalDate24 = moment(date24).format();
const date25 = momentTimezone.tz("2021-08-05T16:10:00", "America/Santiago");
const finalDate25 = moment(date25).format();
const date26 = momentTimezone.tz("2021-08-05T16:40:00", "America/Santiago");
const finalDate26 = moment(date26).format();
const date27 = momentTimezone.tz("2021-08-05T17:10:00", "America/Santiago");
const finalDate27 = moment(date27).format();
const date28 = momentTimezone.tz("2021-08-05T17:40:00", "America/Santiago");
const finalDate28 = moment(date28).format();
//#endregion

// Día 1
//#region
const d1 = schedule.scheduleJob(finalDate1, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Saludo bievenida autoridad Chiletec";
	userAgenda.hour = "09:00";
	userAgenda.hourEnd = "09:05";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d2 = schedule.scheduleJob(finalDate2, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Saludo bievenida Mesa Gobierno Chiletec";
	userAgenda.hour = "09:05";
	userAgenda.hourEnd = "09:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d3 = schedule.scheduleJob(finalDate3, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Saludo bievenida autoridad Gobierno invitada";
	userAgenda.hour = "09:10";
	userAgenda.hourEnd = "09:15";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d4 = schedule.scheduleJob(finalDate4, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Charla invitado internacional (caso éxito políticas públicas)";
	userAgenda.hour = "09:15";
	userAgenda.hourEnd = "09:50";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d5 = schedule.scheduleJob(finalDate5, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Red de Mediadores: interoperabilidad del estado con la anuencia del ciudadano.";
	userAgenda.hour = "09:50";
	userAgenda.hourEnd = "10:35";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d6 = schedule.scheduleJob(finalDate6, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Hiperautomatización en el Estado al servicio de la ciudadanía";
	userAgenda.hour = "10:35";
	userAgenda.hourEnd = "11:05";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d7 = schedule.scheduleJob(finalDate7, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Desarrollo Digital de Chile, mirada retrospectiva";
	userAgenda.hour = "11:20";
	userAgenda.hourEnd = "12:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d8 = schedule.scheduleJob(finalDate8, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "PANEL DE CONVERSACIÓN: Políticas públicas tecnológicas";
	userAgenda.hour = "12:00";
	userAgenda.hourEnd = "13:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d9 = schedule.scheduleJob(finalDate9, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Política Pública en Salud Digital";
	userAgenda.hour = "14:30";
	userAgenda.hourEnd = "15:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d10 = schedule.scheduleJob(finalDate10, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "RPA, Acelerando la Transformación Digital del Sector Público";
	userAgenda.hour = "15:10";
	userAgenda.hourEnd = "15:55";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d11 = schedule.scheduleJob(finalDate11, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Acercando a los ciudadanos al Gobierno Digital";
	userAgenda.hour = "15:55";
	userAgenda.hourEnd = "16:40";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d12 = schedule.scheduleJob(finalDate12, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Cooperación y coordinación entre organismos: El desafío de la implementación de interoperabilidad federada";
	userAgenda.hour = "16:40";
	userAgenda.hourEnd = "17:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d13 = schedule.scheduleJob(finalDate13, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Pobreza y protección de datos";
	userAgenda.hour = "17:10";
	userAgenda.hourEnd = "17:40";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d14 = schedule.scheduleJob(finalDate14, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 4;
	userAgenda.title = "Talento Digital para Chile: Nueva formación para los empleos de hoy";
	userAgenda.hour = "17:40";
	userAgenda.hourEnd = "18:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});
//#endregion

// Día 2
//#region
const d15 = schedule.scheduleJob(finalDate15, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Saludo bievenida autoridad Chiletec";
	userAgenda.hour = "09:00";
	userAgenda.hourEnd = "09:05";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d16 = schedule.scheduleJob(finalDate16, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Saludo bievenida Mesa Gobierno Chiletec";
	userAgenda.hour = "09:05";
	userAgenda.hourEnd = "09:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d17 = schedule.scheduleJob(finalDate17, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Saludo bievenida autoridad Gobierno invitada";
	userAgenda.hour = "09:10";
	userAgenda.hourEnd = "09:15";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d18 = schedule.scheduleJob(finalDate18, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "La Fuerza Laboral Asistida para el nuevo Gobierno Digital";
	userAgenda.hour = "09:15";
	userAgenda.hourEnd = "09:50";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d19 = schedule.scheduleJob(finalDate19, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "¿Cómo percibimos nuestros barrios? Una mirada a través de los lentes de Big Data y la Inteligencia Artificial";
	userAgenda.hour = "09:50";
	userAgenda.hourEnd = "10:30";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d20 = schedule.scheduleJob(finalDate20, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Desafíos en el Desarrollo de Software Seguro";
	userAgenda.hour = "10:30";
	userAgenda.hourEnd = "11:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d21 = schedule.scheduleJob(finalDate21, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Los Desafíos de la Ley de Transformación Digital en Chile";
	userAgenda.hour = "11:15";
	userAgenda.hourEnd = "12:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d22 = schedule.scheduleJob(finalDate22, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "PANEL DE CONVERSACIÓN: Ley Transformación Digital";
	userAgenda.hour = "12:00";
	userAgenda.hourEnd = "13:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d23 = schedule.scheduleJob(finalDate23, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Campañas políticas en tiempos de redes";
	userAgenda.hour = "14:30";
	userAgenda.hourEnd = "15:00";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d24 = schedule.scheduleJob(finalDate24, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Lo desafíos éticos de la IA";
	userAgenda.hour = "15:00";
	userAgenda.hourEnd = "15:40";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d25 = schedule.scheduleJob(finalDate25, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "PYMES EN LINEA";
	userAgenda.hour = "15:40";
	userAgenda.hourEnd = "16:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d26 = schedule.scheduleJob(finalDate26, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Ley de Transformación Digital del Estado: Construir para el futuro, hoy";
	userAgenda.hour = "16:10";
	userAgenda.hourEnd = "16:40";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d27 = schedule.scheduleJob(finalDate27, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Economíaa Digital";
	userAgenda.hour = "16:40";
	userAgenda.hourEnd = "17:10";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});

const d28 = schedule.scheduleJob(finalDate28, function () {
	const userAgenda = new UserAgenda();
	userAgenda.day = 5;
	userAgenda.title = "Planificación y gestión territorial en base al big data de movilidad";
	userAgenda.hour = "17:10";
	userAgenda.hourEnd = "17:40";
	userAgenda.users = agendaArray;
	userAgenda.peakCount = peak.count;
	userAgenda.peakTime = peak.time;
	userAgenda.method = "Automatic";
	userAgenda.save((err, userAgendaStored) => {});
	agendaArray = users;
	peak = {
		time: null,
		count: 0,
	};
});
//#endregion

const port = process.env.PORT || 8080;

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/Chiletec3`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
	if (err) {
		throw err;
	} else {
		server.listen(port, function () {
			console.log("--------------------------------");
			console.log("|          Chiletec 3          |");
			console.log("--------------------------------");
			console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
		});
	}
});
