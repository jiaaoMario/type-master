/*
 * @Author: mario.ma
 * @Date: 2022-09-29 00:22:53
 */
import fs from "fs";
import path from "path";
import { fromMarkdown } from "mdast-util-from-markdown";

const buildPath = path.join(__dirname, "./template.md");
const content = fs.readFileSync(buildPath, "utf8");

const needReviewList = {};
const targetDir = path.resolve(__dirname, "../src");

function getExercisesList(dir) {}
function getExercisesDetail(exercise) {}
function getNeedReviewList(exercises) {}

function getCategory() {
  const category = [];
  fs.readdir(targetDir, (err, files) => {
    for (const file of files) {
      fs.stat
      fs.stat(file, (err, f) => {
        console.log(f)
        if (f.isDirectory()) {
          category.push(f.ino);
        }
      });
    }
    console.log(category);
  });
}

getCategory();
