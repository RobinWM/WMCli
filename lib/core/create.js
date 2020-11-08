const pragram = require("commander");

const { createProjectAction, addComponentAction } = require("./action");

const createCommands = () => {
  pragram
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction);

  pragram
    .command("addcpn <name> [dest]")
    .description(
      "add vue component,例如：wm addcpn HelloWorld -d src/components"
    )
    .action((name) => {
      addComponentAction(name, pragram.dest || "src/components");
    });
};

module.exports = createCommands;
