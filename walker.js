const fs = require('fs');
const path = require('path');

const checkIfDirectoryShouldBeIgnored = fullPath => !!fullPath
  .match(/node_modules/);

  const checkIfFileShouldBeIgnored = (fullPath) => {
    const hasJsExtension = fullPath.trim().match(/\.[jt]sx?$/);
    return !hasJsExtension
  }

const walk = (rootDir="C:/jupiter1/jupiter/ui", allFiles = []) => {

    const files = fs.readdirSync(rootDir);
    files.forEach((file) => {
        const fullPath = path.join(rootDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!checkIfDirectoryShouldBeIgnored(fullPath)) {
                walk(fullPath, allFiles);
            }
        } else if (!checkIfFileShouldBeIgnored(fullPath)) {
            allFiles.push(fullPath)
        }
    })
    return allFiles;
}

exports.walk = walk;