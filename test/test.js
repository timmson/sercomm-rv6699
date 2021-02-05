const nock = require("nock");
const fs = require("fs");
const path = require("path");
const SerCommRv6699Api = require("../index");


const options = {
	url: "http://your-route-ip",
	login: "login",
	password: "password"
};

describe("SerCommRv6699Api", () => {

	let api = new SerCommRv6699Api(options);

	describe("#getDeviceList", () => {

		beforeEach(() => {
			nock(options.url).get("/").reply(200, fs.readFileSync(path.join(__dirname, "index.html")));
		});

		it("Should return 5 devices", async () => {
			let devices = await api.getDeviceList();
			expect(devices).toHaveLength(5);
		});
	});

});