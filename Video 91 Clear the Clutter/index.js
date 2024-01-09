// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into the folders
// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/harry.pdf
// zip/harry.zip, zip/Rohan.zip

const fs = require('fs');
const path = require('path');

const sourceDir = 'D:\\Coding\\Sigma Web Development\\Video 91 Exercise 15';

const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
};

const organizeFiles = (sourceDir) => {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error reading source directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(sourceDir, file);

      const fileExtension = path.extname(file).slice(1); 
      
      createDirectory(path.join(sourceDir, fileExtension));

      // Move the file to the corresponding directory
      const newFilePath = path.join(sourceDir, fileExtension, file);
      fs.renameSync(filePath, newFilePath);
    });

    console.log('Organizing completed.');
  });
};

organizeFiles(sourceDir);
