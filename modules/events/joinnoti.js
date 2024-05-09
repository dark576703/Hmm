module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Rasel",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {
 
  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`🍒💜𝐑𝐁💙𝐁𝐀𝐃𝐎𝐋💛𝐁𝐎𝐓❤️🍒`, threadID, api.getCurrentUserID());
    return api.sendMessage(`🍒═══════❤️💛💙💜💚═══════🍒\n\n🤍আসসালামুআলাইকুম-কেমন-আছেন-সবাই🤍\n
💜বট সংযুক্ত গ্রুপ চ্যাটে সফলভাবে যোগ করা হচ্ছে💙\n
💛কিরে বাঁদর গুলা শয়তানি করার জন্য অ্যাড দিছস❤️\nযেকোনো কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন\n
\n\n╔═══════☆♡☆═══════╗\n\n╰┈➤উদাহারণ➤\n\n╰┈➤${global.config.PREFIX}inf ➤ \n╰┈➤${global.config.PREFIX}admin ➤ \n╰┈➤${global.config.PREFIX}owner ➤ \n╰┈➤${global.config.PREFIX}help ➤\n\n┗━━━━ ✦❘༻༺❘✦ ━━━━━┛\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n
★যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার★\n★বস ✰𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍 কে নক করতে পারেন★\n\n\n╰┈➤𝐖𝐩: wa.me/+8801782721761\n\n╰┈➤ 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/www.xxx.com61\n\n╰┈➤𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄: m.me/100000939642985\n\n🍒═══════❤️💛💙💜💚═══════🍒`, threadID);
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
 
      (typeof threadData.customJoin == "undefined") ? msg = "🍒═══════❤️💛💙💜💚═══════🍒\n\n╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ╰┈➤W⃠E⃠L⃠L⃠ C⃠O⃠M⃠E⃠➤\n\n                 ╰┈➤𝐍𝐄𝐖➤\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             ╰┈➤ {name} ➤\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🌺🌿🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🌿\n\n         🌿_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🌿\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n╔═━────━▒•✠•❀•✠• ▒━────━═╗\n╰┈➤𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑➤\n\n            ☟                     \n\n💙𝐑𝐁💜𝐁𝐀𝐃𝐎𝐋💛𝐊𝐇𝐀𝐍❤️\n┗━━━━ ✦❘༻•✠•❀•✠•༺❘✦ ━━━━━┛\n🍒═══════❤️💛💙💜💚═══════🍒\n\n▓▓▓▓▓▓▓▓\n\nআমাদের সাথে সময় দেওয়া ও পাশে থাকার অনুরোধ রইলো !!-🍂🌺🥀\n\n🦋༎❤❤༎\n\nⵗⵗ̥̥̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̥ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̊̊ \n\n🦋║ლ💞 💞 ლ║🦋\n\n💐☘️-ধন্যবাদ প্রিয়-☘️💐\n𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽.𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍♥🖤𝐑𝐀𝐉𝐀-𝐁𝐀𝐁𝐔❤️⃪⃝⃘᭄⃕❤️" : msg = threadData.customJoin;
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
 
