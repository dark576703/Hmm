touconst fs = require("fs");
const login = require("fca-priyansh");

var credentials = {email: "msnur5767@gmail.com", password: "rtrrtr12"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('ayanstate.json', JSON.stringify(api.getappState())); //create ayanstate
});
