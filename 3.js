const fs = require('fs')
const data = fs.readFileSync('/file.md') // blocks here until file is read
console.log(data)
// moreWork(); will run after console.log

// const fs = require('fs')
// fs.readFile('/file.md', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
// // moreWork(); will run before console.log

// const fs = require('fs')
// fs.readFile('/file.md', (readFileErr, data) => {
//   if (readFileErr) throw readFileErr
//   console.log(data)
//   fs.unlink('/file.md', (unlinkErr) => {
//     if (unlinkErr) throw unlinkErr
//   })
// })