/*
 * @Author: mario.ma
 * @Date: 2022-09-29 00:22:53
 */
import fs from 'fs';
import path from 'path';
import { fromMarkdown } from "mdast-util-from-markdown";

const buildPath = path.join(__dirname, "./template.md");
const content = fs.readFileSync(buildPath, 'utf8');
console.log(fromMarkdown(content));