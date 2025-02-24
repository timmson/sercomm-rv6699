const nock = require("nock")
const fs = require("fs")
const path = require("path")
const SerCommRv6699API = require("../index")


const options = {
	url: "http://your-router-ip",
	login: "login",
	password: "password"
}

describe("SerCommRv6699API", () => {

	const api = SerCommRv6699API(options)

	describe("#getDeviceList", () => {

		beforeEach(() => {
			nock(options.url).get("/").reply(200, fs.readFileSync(path.join(__dirname, "index.html")))
		})

		it("Should return 5 devices", async () => {
			const devices = await api.getDeviceList()

			expect(devices).toHaveLength(5)
		})
	})

})
