/**
 * @fileOverview little walk
 * @author mirreal
 *
 * walk the file directory
 */

const fs = require('fs')
const path = require('path')

let fileList = [];

function walk(path) {
    const dirList = fs.readdirSync(path);
    dirList.forEach(function(item) {
        if (fs.statSync(path + '/' + item).isDirectory() && item !== 'node_modules') {
            console.log(item)

            walk(path + '/' + item);
        } else {
            fileList.push(path + '/' + item);
        }
    });
}

const filePath = path.resolve();
walk(filePath)

console.log(fileList)
