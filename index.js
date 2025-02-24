const axios = require("axios")

const SerCommRv6699API = (options) => {
	const url = options.url
	const login = options.login
	const password = options.password

	return {
		getDeviceList: async () => {
			try {
				const config = {auth: {username: login, password: password}}
				const response = await axios.get(url, config)
				const src = response.data.split("\n")
					.filter((l, i) => ((i >= 188 && i <= 199) || i === 202))
					.map((l, i, a) => (i === a.length - 1) ? l.split("=")[1] : l)
					.join("\n")
				return eval(src)
			} catch (e) {
				console.log(e)
				throw e
			}
		}
	}
}

module.exports = SerCommRv6699API
