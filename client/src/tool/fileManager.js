import promisify from  './promisify'
const fileSystemManager = wx.getFileSystemManager()
const readFile = promisify(fileSystemManager.readFile)
export { readFile }