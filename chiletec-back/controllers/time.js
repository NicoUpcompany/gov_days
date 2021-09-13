const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");

function getTime(req, res) {
	const time = moment().format();
	const eventTime = momentTimezone.tz("2021-08-04T09:00:00", "America/Santiago");
	res.status(200).send({ ok: true, time, eventTime });
}

module.exports = {
	getTime,
};
