import promisify from './tool/promisify'
const request = promisify(wx.request)
const EVENT_TYPE = ['finish']

function firstLetterUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
function observer() {
    const self = this
    self.on = (event, fn) => {
        if (EVENT_TYPE.indexOf(event) > -1) {
            self[`on${firstLetterUpper(event)}`] = fn
        } else {
            console.error(`event: ${event} is invalid`)
        }
        return self
    }
}
function getUuid() {
    const createTime = new Date().getTime()
    return `mul-${createTime}-upload`
}

class MultipleUpload {
    constructor(params) {
        this._list = []
        this._uploadingList = []        
        const _default = {}
        Object.assign(this, _default, params)
        this.observer()
    }
    add(file) {
        this._list.push({ file: file, id: getUuid() })
    }    
    async upload() {
        for (const item of this._list) {
            let {
                data
            } = await readFile({
                filePath: item['file'],
                encoding: 'base64'
            })
            this._uploadingList.push(data)
        }
        let result = await request({
            url: serverUrl,
            method: "post",
            data: {files:this._uploadingList},
            header: {
              'content-type': 'application/json' // 默认值
            }
          }) 
          this.onFinish(result)      
    }
}
MultipleUpload.prototype.observer = observer
export default MultipleUpload
