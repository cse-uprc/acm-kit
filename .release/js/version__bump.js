const readline = require("readline");
const npm = require("child_process");
const { exit } = require("process");

console.log("Starting Version Bump ...");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let versionBumpType = "";
rl.question("What type of version bump? ", function (bumpType) {
  versionBumpType = "npm run version:" + bumpType;

  npm.exec(versionBumpType).on("exit", () => {
    console.log(
      "Version Change -- " +
        bumpType +
        ": " +
        require("../../projects/acmkit-lib/package.json").version
    );
    exit();
  });
});
