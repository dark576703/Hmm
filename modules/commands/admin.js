module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "md nazrul",
	description: "Admin info",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/AcDES0C.png"        ];
  
var callback = () => api.sendMessage({body:` --❖-- 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝐍 --❖--
✢━━━━━━━━━━━━━━━✢\n=======================
𝗔𝗗𝗠𝗜𝗡:--❖-- 𝐍𝐀𝐙𝐑𝐔𝐋 --❖--
𝗟𝗢𝗖𝗔𝗧𝗜𝗡𝗘:-𝗡𝗔𝗢𝗚𝗔𝗢𝗡.𝗥𝗔𝗝𝗦𝗛𝗔𝗛𝗜
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: বি্ঁষা্ঁক্ত্ঁ ধো্ঁয়া্ঁ
𝗔𝗚𝐄 := 19+
𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 := 𝗦𝗜𝗡𝗚𝗟𝗘
𝗪𝗢𝗥𝗞 := 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
==============================================
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞:= https://www.facebook.com/ji.li.pi.6
✢━━━━━━━━━━━━━━━✢
----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
