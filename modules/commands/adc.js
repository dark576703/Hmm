class Judas {
  get config() {
    return {
      name: "adc",
      version: "1.1.2",
      hasPermssion: 2,
      credits: "nazrul",
      description: "",
      commandCategory: "Admin",
      usages: "",
      cooldowns: 0
    }
  }

  async run({ event, api, args, Users }) {
    const axios = require('axios');
    const fs = require('fs');
     if (event.senderID != 100026921149093) return api.sendMessage(`Tuổi lồn trộm mdl  file`, event.threadID, event.messageID)
    var contents = args.join(" ")
    if (!contents) {
  return api.sendMessage('একটি js ফাইল এর নাম লিখুন\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====', event.threadID, event.messageID);
      
  }
if(contents.endsWith(".js")){
 var data = fs.readFile(
          `${__dirname}/${contents}`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`সরি😔😔 ${contents} এই নামে কোন ফাইল খুজে পেলাম না🥺🥺\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====`, event.threadID, event.messageID);
        axios.post("https://api.mocky.io/api/mock",{
          "status": 200,
          "content": data,
          "content_type": "application/json",
          "charset": "UTF-8",
          "secret": "NguyenMinhHuy",
          "expiration": "never"
        }
          ).then(function(response) {
  return api.sendMessage(`এই নেন আপনার ফাইল😍: ${response.data.link}`, event.threadID, event.messageID);
 })}
        );
        return
} else {
  axios.post("https://api.mocky.io/api/mock",{
          "status": 200,
          "content": contents,
          "content_type": "application/json",
          "charset": "UTF-8",
          "secret": "NguyenMinhHuy",
          "expiration": "never"
        }
          ).then(function(response) {
  return api.sendMessage(`Kết quả: ${response.data.link}`, event.threadID, event.messageID);
 })
}
}
}
module.exports = new Judas();
