const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const open = require("open");
const path = require("path");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { compile, writeToFile } = require("../utils/utils");

// 新建项目
const createProjectAction = async (project) => {
  console.log("wm-cli is helping you create project!!!");

  // 1.clone项目
  await download(vueRepo, project, { clone: true });

  console.log("generate finished");

  // 2.执行npm install
//   const npm = process.platform === "win32" ? "npm.cmd" : "npm";
//   await commandSpawn(npm, ["install"], { cwd: `./${project}` });

  // 3.运行npm run serve
//   commandSpawn(npm, ["run", "serve"], { cwd: `./${project}` });

  // 4.打开浏览器
//   open("http://localhost:8080");
};

// 添加组件
const addComponentAction = async (name, dest) => {
  // 1.编译ejs模板文件
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });

  //   2.写入文件的操作
  const tragePath = path.resolve(dest, `${name}.vue`);
  writeToFile(tragePath, result);
};

module.exports = {
  createProjectAction,
  addComponentAction,
};
