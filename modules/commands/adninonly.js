const { readFileSync, writeFileSync } = require("fs-extra");
const { join } = require("path");

module.exports.config = {
    name: "adminonly",
    version: "1.0.0",
    hasPermssion: 2, // শুধুমাত্র গ্রুপ অ্যাডমিন চালাতে পারবে
    credits: "ChatGPT (বাংলা অনুবাদ)",
    description: "গ্রুপে AdminOnly মোড চালু বা বন্ধ করতে ব্যবহার হয়",
    commandCategory: "গ্রুপ ম্যানেজমেন্ট",
    usages: "[on/off]",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    try {
        const pathData = join(__dirname, '../AdminOnly.json');
        let data = [];

        // ফাইল পড়া
        try {
            data = JSON.parse(readFileSync(pathData, "utf-8"));
        } catch {
            data = [];
        }

        let thread = data.find(item => item.Misc === event.threadID);

        if (!thread) {
            thread = { Misc: event.threadID, Status: 1, Onlist: [] };
            data.push(thread);
        }

        // কোনো আর্গুমেন্ট না দিলে বর্তমান স্ট্যাটাস দেখাবে
        if (!args[0]) {
            return api.sendMessage(
                `⚙️ বর্তমান অবস্থা: ${thread.Status == 2 ? "শুধু অ্যাডমিন ব্যবহার করতে পারবে (🔒)" : "সবাই ব্যবহার করতে পারবে (🔓)"}\n👉 ব্যবহার করো: ${global.config.PREFIX}adminonly on / off`,
                event.threadID
            );
        }

        const input = args[0].toLowerCase();

        // AdminOnly চালু করা
        if (input === "on") {
            thread.Status = 2;
            writeFileSync(pathData, JSON.stringify(data, null, 4), "utf-8");
            return api.sendMessage("✅ AdminOnly মোড চালু হয়েছে!\nএখন শুধুমাত্র গ্রুপ অ্যাডমিন ও বট অ্যাডমিন বটের কমান্ড ব্যবহার করতে পারবে।", event.threadID);
        } 
        // AdminOnly বন্ধ করা
        else if (input === "off") {
            thread.Status = 1;
            writeFileSync(pathData, JSON.stringify(data, null, 4), "utf-8");
            return api.sendMessage("🔓 AdminOnly মোড বন্ধ করা হয়েছে!\nএখন সবাই বটের কমান্ড ব্যবহার করতে পারবে।", event.threadID);
        } 
        // ভুল ইনপুট
        else {
            return api.sendMessage("❌ সঠিক ব্যবহার: adminonly on / off", event.threadID);
        }

    } catch (error) {
        console.error(error);
        return api.sendMessage("⚠️ কিছু ভুল হয়েছে, দয়া করে পরে আবার চেষ্টা করো!", event.threadID);
    }
};
