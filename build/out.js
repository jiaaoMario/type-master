var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// build/generate.js
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var buildPath = import_path.default.join(__dirname, "./template.md");
var content = import_fs.default.readFileSync(buildPath, "utf8");
var targetDir = import_path.default.resolve(__dirname, "../src");
function getCategory() {
  const category = [];
  import_fs.default.readdir(targetDir, (err, files) => {
    for (const file of files) {
      import_fs.default.stat(file, (err2, f) => {
        console.log(f);
        if (f.isDirectory()) {
          category.push(f.ino);
        }
      });
    }
    console.log(category);
  });
}
getCategory();
