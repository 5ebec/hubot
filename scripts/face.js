// Description:
//   register/unregister face images with DB
//
// Commands:
//   hubot face add - DMに送った顔写真を登録します．
//   hubot face remove <image file> - 顔写真の登録を解除します．
//   hubot face remove all - 全ての顔写真の登録を解除します．
//
// Author:
//   heyhoe <heyhoe@5ebec.dev>

const { WebClient } = require("@slack/web-api");
const OAUTH_ACCESS_TOKEN = process.env.SLACK_OAUTH_ACCESS_TOKEN;

module.exports = robot => {
  const web = new WebClient(OAUTH_ACCESS_TOKEN);
  robot.respond(/face add/i, async msg => {
    try {
      const allImages = await web.files.list({
        channel: msg.envelope.room,
        user: msg.envelope.user.id,
        types: "images"
      });
      const privateImages = allImages.files.filter(file => !file.is_public);
      for (const image of privateImages) {
        msg.send(`${image.url_private_download} を登録しました`);
      }
      msg.send(
        `@${msg.message.user.name}さんの${privateImages.length}枚の顔写真を登録しました`
      );
    } catch (error) {
      const data = {
        attachments: [
          {
            text: `*Error*: ${error.details}`,
            color: "danger",
            mrkdwn_in: ["text"]
          }
        ]
      };
      msg.send(data);
    }
  });
};
