const program = require("commander");

const helpOptions = () => {
  // 增加option
  program.option("-w --wm", "a wm cli");
  program.option("-d --dest <dest>", "a destination folder,例如：-d src/components");
};

module.exports = helpOptions;
