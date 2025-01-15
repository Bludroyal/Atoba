//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517,2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349038898756";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dPaTNvT3h0VnJrUk5aaG85Y2V3c2tYQS8xbXlMYlhOcGF6WjZDZTRFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJFOENaTXNmN0lzNEFhMVBmT2NrbnhpcTUySzgrS2w5cGFsdFVtTEsxRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TDR2TmtNSE9zNXROeFFCYnJTa2NoWVhEYkk1Sk5xWXJjbXl0OHcvLzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTjlpVGliYnhESnJ3YXorZmhUeWl2eDYreTY3NE9tNElrTmNubzlmRlZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHa09IZVpjRFZVZjRlN2UvOFRwTExWaXd4aVVjcVJ0SFVMVWRZRjdNM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVTktZU1lDZGNjeE9SUWlRUGkzZ0RyT2VEY216SVpmV1dwTkR4dW1aR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0x4cDVkdUZ0NHdzKzVodEpiSnRVWTJGR2VKZnVKRHhwSmMzN0o4c3gxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHpHQWhtU0lmM1M0VnBwYnR6ZmhqSkRxZ21NZFZ0VzVKMXQ0TytmbDdHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QTk9OVHVhZ3Q2MjQ1Nkw2dEFxUUpRRUpFNVhpSmdlNkFZRnRENE9qWVBzcXFFYi9ZOFIrQmZIV05jQlN0RUppb2FoYmJFcEN1cVorMVRzakNkMmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJuUlZMUnZoczd2V0hjbllYaXJTUTE0OGd5K1FDR2c4M1JqOXNZVWpsTjFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIM25sSjhhUFRXYWI2dDY5SlNPTjN3IiwicGhvbmVJZCI6ImUyNTg1ZjAxLTA4YzUtNGI0Mi04NTE5LTFiNjA1MDBlOTg3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcjdJMXQ2dUVGcndxa1AwWFFKK3F4UzM2Vm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzNyTjRxWVNOM2V0S3Z4RGxUdUd6aDUvUTI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxGVldCMUdaIiwibWUiOnsiaWQiOiIyMzQ5MDM4ODk4NzU2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JajmPCdk5DwnZO98J2TuPCdk6vwnZOq8JajmCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHkrc2FVREVPaWVvTHdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ08vczhuMjh3SWgzcGZacVh5MmZNdk15TTU5QWFKZ2cxWC8reGt3WkNCaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSFUwL0RwTnMyZzlLSHRpSnpncThabitkZjZoWExFekVtSHJRMTJ2L2xFQnVXbnp5M1BUNUtNYXQ1ZFNFN3lkOGJnakZYeFlTRCs0UUt3SnF4dmNjQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImUvakpXeEtJM0l4ZjRtdCtuOFp6cTluVjRrckE0bmVUNlQxQS9wZmdtRVRiMlF6cHhlTGpvQ0VUV0o2MTNiYTZwWjJ0M3pNaFFPeDdkdEJxUnJGWGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzODg5ODc1NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllEdjdQSjl2TUNJZDZYMmFsOHRuekx6TWpPZlFHaVlJTlYvL3NaTUdRZ1oifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY5NzAxMDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnFPIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
