const r = require("request");

let that = null;

function SerCommRv6699Api(options) {
	if (options) {
		this.url = options.url;
		this.login = options.login;
		this.password = options.password;
	}
	that = this;
	that.errCount = 0;
}

SerCommRv6699Api.prototype.getDeviceList = () => {
	return new Promise((resolve, reject) => {
		r(
			{
				uri: that.url,
				auth: {
					user: that.login,
					pass: that.password,
					sendImmediately: false
				}
			}, (err, response, body) => {
				if (err) {
					console.log(err);
					reject(err);
				} else {
					let src = body.split("\n")
						.filter((l, i) => ((i >= 188 && i <= 199) || i === 202))
						.map((l, i, a) => (i === a.length - 1) ? l.split("=")[1] : l)
						.join("\n");
					let deviceArray = eval(src);
					resolve(deviceArray);
				}
			}
		);
	});
};

module.exports = SerCommRv6699Api;