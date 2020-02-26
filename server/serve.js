const promisefy = require('pify')
const uuidv4 = require('uuid/v4')
let dir = '/path'
const fs = require('fs')
const writeFile = promisefy(fs.writeFile)
function getFileName() {
  const uuid = uuidv4()
  return "/" + uuid //待合成路径
}
/*
*/
function dataToFile(data, decode) {
  return new Promise(function (resolve, reject) {
    let path = dir + getFileName()    
    let decodeImg = Buffer.from(data, 'base64')
    writeFile(path, decodeImg, 'base64').then((data => {      
      resolve({ code: 0, msg: "成功", data: { path: path } })
    })).catch(err => {
      resolve({ code: 1, msg: "失败", data: err })
    })
  })
}
module.exports = dataToFile