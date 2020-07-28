const npm = require("child_process");

console.log("Building Library ...\n");

npm.exec("npm run acmbuild").on("exit", () => {
  console.log("Build Complete!!!\n");
});
