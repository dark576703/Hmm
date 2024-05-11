@module.exports.config = {
    name: "meta",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NAZRUL",
    refix: false,
  description: "Talk to meta",
    commandCategory: "meta",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("জি বলুন কি বলতে চান আপনি", tid, mid);
    try {
        const res = await axios.get(`https://itsxanxunder-t4.repl.co/meta?type=talk&ask=${content}`);
        const respond = res.data.answer;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("no response...!", tid, mid);
    }
};
