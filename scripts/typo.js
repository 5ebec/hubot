// Description:
//   へいほぅ. Not へいほー.
//
// Author:
//   heyhoe <heyhoe@5ebec.dev>

const replyAnswer = answer => {
  return msg => {
    const question = msg.match[1];
    msg.reply(`${answer}. Not ${question}.`);
  };
};

module.exports = robot => {
  const languages = [
    [/(Javascript)/, "JavaScript"],
    [/(Typescript)/, "TypeScript"],
    [/(Ocaml)/, "OCaml"],
    [/(Github)/, "GitHub"],
    [/(Youtube)/, "YouTube"],
    [/(へいほう|へいほー)/, "へいほぅ"]
  ];
  for (let language of languages) {
    robot.hear(language[0], replyAnswer(language[1]));
  }
};
