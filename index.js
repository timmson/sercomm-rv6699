const axios = require("axios")

let that = null

function SerCommRv6699Api(options) {
	if (options) {
		this.url = options.url
		this.login = options.login
		this.password = options.password
	}
	that = this
	that.errCount = 0
}

SerCommRv6699Api.prototype.getDeviceList = () => {
	return new Promise((resolve, reject) => {
		axios.get(that.url, {
			auth: {
				username: that.login,
				password: that.password
			}
		}).then((response, error) => {
			if (error) {
				console.log(error)
				reject(error)
			} else {
				let src = response.data.split("\n")
					.filter((l, i) => ((i >= 188 && i <= 199) || i === 202))
					.map((l, i, a) => (i === a.length - 1) ? l.split("=")[1] : l)
					.join("\n")
				let deviceArray = eval(src)
				resolve(deviceArray)
			}
		})

	})
}

module.exports = SerCommRv6699Api
