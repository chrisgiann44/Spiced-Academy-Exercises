///////////////////////////////////////////////////
//          writeFile & writeFileSync            //
//          We can write data to file            //
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//           readdir & readdirSync               //
//     reads directories returns and array       //
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//              stat  & statSync                 //
//        Info about file/dir i.e. size          //
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//          readFile & readFileSync              //
//        read the contents of a file            //
///////////////////////////////////////////////////

const fs = require("fs");

const myPath = __dirname;
const myText = "Let's write our first file salt";

// fs.writeFile(myPath + '/mytext.txt', myText, function(err){
//     if (err) {
//       console.log(err);
//     }
//     console.log("it worked!");
// });



// const obj = {
//     name: "Salt",
//     codingSkills: ["css", "js", "html"]
// }
//
// fs.writeFileSync(myPath + '/myFiles.json', JSON.stringify(obj, null, 4))




// fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log("files: ", files);
//
//     console.log("Is it a file? ", files[0].isFile());
//     console.log("Is it a directory? ", files[0].isDirectory());
// });


const myFiles = fs.readdirSync(myPath, { withFileTypes: true });
// console.log(myFiles[0].name);


// const myStat = fs.statSync(myFiles[0].name);
// console.log(myStat.size);

// fs.stat(myPath + "/myFolder", (err, stat) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(stat.isDirectory());
// });


// fs.readFile(myPath + "/mySecretSaltFile.js", 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("data: ", data);
// });

const myFile = fs.readFileSync(myPath + '/mySecretSaltFile.js', "utf8")
console.log(myFile);
