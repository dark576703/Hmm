module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "nazrul",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {
 
  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`❤️💛𝗡𝗔𝗭𝗥𝗨𝗟 𝗕𝗢𝗧❤️💛`, threadID, api.getCurrentUserID());
    return api.sendMessage(`🥀🥀আসসালামু আলাইকুম 🥀🥀\nআসা করি সাবাই আল্লাহ রহমতে ভালো আছেন\nযে কোন কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন\n╔══════☆♡☆══════╗\n\n╰┈➤উদাহারণ➤\n\n╰┈➤${global.config.PREFIX}inf ➤ \n╰┈➤${global.config.PREFIX}admin ➤ \n╰┈➤${global.config.PREFIX}owner ➤ \n╰┈➤${global.config.PREFIX}help ➤\n\n┗━━━ ✦❘༻༺❘✦ ━━━━┛\n
★যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার★\n★বস 𝗡𝗔𝗭𝗥𝗨𝗟 কে নক করতে পারেন★\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/ji.la.pi.6\n𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄: https://m.me/ji.la.pi.6`, threadID);
  }
  else {
    try {
    const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
 
      var mentions = [], nameArray = [], memLength = [], i = 0;
 
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
 
        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });
 
        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
 
      (typeof threadData.customJoin == "undefined") ? msg = "╔════•|      ✿      |•════╗\n আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ\n╚════•|      ✿      |•════╝\n\n  {name}\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺\n{threadName}\nএ্ঁর্ঁ প্ঁক্ষ্ঁ থে্ঁকে্ঁ\nভা্ঁলো্ঁবা্ঁসা্ঁ অ্ঁভি্ঁরা্ঁম্ঁ\n✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ\nন্ঁজ্ঁরু্ঁল্ঁ গ্রুঁপেঁরঁ পঁক্ষঁ থেঁকেঁ আঁপঁনাঁকেঁ স্বাঁগঁতঁমঁ♥\n🥰🥀ᏔᎬᏞᏟϴᎷᎬ 🥀🥰 \n   ┌────♣─────┐\n   😘♦ -জিঁলাঁপিঁ-  ♦😘\n   └────♣─────┘\n \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			
 
      var link = [
"https://i.imgur.com/i6bqJPo.mp4",
"https://i.imgur.com/i6bqJPo.mp4",
"https://i.imgur.com/i6bqJPo.mp4",
"https://i.imgur.com/i6bqJPo.mp4",
      ];
        var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.mp4"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.mp4"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.mp4")).on("close", () => callback());       
            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
        }
 
