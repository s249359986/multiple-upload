import MultipleUpload from './src/index'

let multipleUploadInstance = new MultipleUpload()
multipleUploadInstance.push('/path/my.png')
multipleUploadInstance.push('/path/my1.png')
multipleUploadInstance.onFinish((data)=>{
    console.log('result',data)
})