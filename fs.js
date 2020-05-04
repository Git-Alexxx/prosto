const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt' );

fs.writeFile(filePath, "Hello NodeJS", err => {
    if(err){
        throw err;
    }
});

fs.appendFile(filePath, '\n Hello Again', err => {
    if(err){
        throw err;
    }
});

fs.readFile(filePath, 'utf-8', (err, content) =>{
    if(err) {
        throw err;
    }

    console.log(content);
});