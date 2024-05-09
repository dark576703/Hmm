module.exports.config = {
  name: "🤗",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "sand best islamick Video",
  commandCategory: "noprefix",
  usages: "🤗",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("🤗")==0 || (event.body.indexOf("🤗")==0) || event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0 ||
event.body.indexOf("🤗")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/ZdUyW1Q.mp4",
        ];
     var callback = () => api.sendMessage({body:`•—»✨ [ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n-যদি দেখেন আপনার দয়া কবুল হচ্ছে নাহ অনেক দিন দরে -🥺💙!!\nতাহলে আপনি ওজু অবস্থায় ২ রাকাত নামাজ পরেন-❤️🌸!!\n ও ভালো কাজ করে আল্লাহর কাছে দোয়া চান..🤲\n হে আল্লাহ তমার সন্তুষ্টির জন্য - ভালো কাজ করলাম_😊🥰\nআল্লাহ তুমার তাওহীদ - লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ (স:) 🌸❤️\n এর অছিলায় আমার দোয়া কবুল করো-❤️🌸🤲!!\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭 ]✨«—•\n[🐰] → 𝗣𝗿𝗲𝗳𝗶𝘅: [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🤗\n[⌛] → 𝐃𝐚𝐭𝐞  : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🍒] → ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`http://toan-culi.tutoan205.repl.co/text/cadao`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}
  
  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
		"successText": `🧠`,
	},
	"bn": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["🤗"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
	else data["🤗"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🤗"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
