const fs = require("fs");
const superagent = require("superagent");

const path = require("path");
const currentDir = __dirname;
// Go one folder back
const parentDir = path.resolve(currentDir, "..");

// fs.readFile(`${parentDir}/dataAssests/dog-breed.txt`, (err, data) => {
//   console.log("Breed", `${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (res?.body?.status == "success") {
//         console.log(res.body);
//         fs.writeFile(
//           `${parentDir}/dataAssests/Dog-img.txt`,
//           res.body.message,
//           (err) => {
//             //this callback takes error optional arg
//             console.log("Random Image saved to file");
//             if (err) return console.log(err);
//           },
//         );
//       }
//       if (err) return console.log(err.message);
//     });
// });

// // Using Promise to recieve data and error
// fs.readFile(`${parentDir}/dataAssests/dog-breed.txt`,(err,data)=>{
//     console.log('Breed',`${data}`);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(
//         (res)=>{
//         if(res?.body?.status=='success') {
//             console.log(res.body)
//             fs.writeFile('Dog-img.txt',res.body.message,(err)=>{ //this callback takes error optional arg
//                 console.log('Random Image saved to file')
//                 if(err) return console.log(err)
//             });
//         }})
//     .catch(err=>{ console.log(err.message)})
// })

//creating promise for read and write file as well

readfilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Could not read File");
      resolve(data);
    });
  });
};

readfilePro(`${parentDir}/dataAssests/dog-breed.txt`)
  .then((data) => {
    console.log(`Breed ${data}`);
    superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        if (res?.body?.status == "success") {
          console.log(res.body);
          fs.writeFile("Dog-img.txt", res.body.message, (err) => {
            //this callback takes error optional arg
            console.log("Random Image saved to file");
            if (err) return console.log(err);
          });
        }
      })
      .catch((err) => console.log(err.message));
  })
  .catch((err) => console.log(err));
