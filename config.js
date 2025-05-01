const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //SADIYA-MD=mZkV0bZT#d54MuszuneGo-YWYXb8XfRVxoD8nHxfYsFG1k_Rr59w
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "", //Anuga123
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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"
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA MD"
SESSION_NAME: process.env.SESSION_NAME || "session"
};
