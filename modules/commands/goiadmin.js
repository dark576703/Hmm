module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
    credits: "nazrul",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000350435589") {
    var aid = ["100000350435589"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস রুহির বিজি আছে\n যা বলার আমাকে বলো", "মেয়ে পটাতে গেছে😁😁😁", "এমন ভাবে মেনশন না দিয়ে একটা জি এফ দাও🙈🙈", "এত ডাকিস কেন😡😡😡\n আমার বস অনেক বিজি", "বস কই তুমি\nতোমারে এক বলদে খোজ করে 😑😑😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
