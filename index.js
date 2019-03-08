const r = require("request");

let that = null;


function device(mac, ip, hostname, alive, last_see_time, active_time, link_type, link_speed) {
    this.mac = mac;
    this.ip = ip;
    this.hostname = hostname;
    this.alive = alive;
    this.last_see_time = last_see_time;
    this.active_time = active_time;
    this.link_type = link_type;
    this.link_speed = link_speed;
}

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
                    let lines = body.split("\n");
                    eval(lines[202]);
                    let list = device_array || [];
                    resolve(list);
                }
            }
        );
    });
};

module.exports = SerCommRv6699Api;