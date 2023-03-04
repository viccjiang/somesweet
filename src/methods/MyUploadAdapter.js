import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

class MyUploadAdapter {
  constructor (loader) {
    // The file loader instance to use during the upload.
    this.loader = loader
  }

  // Starts the upload process.
  upload () {
    console.log('this', this)
    // 轉成 formData 格式
    const formData = new FormData()
    const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/upload`
    // 非同步行為
    return new Promise((resolve) => {
      this.loader.file
        .then((loadFile) => {
          // formData 加入一個欄位 讀到的檔案塞在 loadFile
          formData.append('file-to-upload', loadFile)
          // 送資料
          return axios.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        })
        .then((response) => {
          console.log(response.data.imageUrl)
          resolve({
            default: response.data.imageUrl // 上傳後的路徑傳回來
          })
        })
    })
    // Aborts the upload process.
  }

  abort () {
    if (this.xhr) {
      this.xhr.abort()
    }
  }

  // Prepares the data and sends the request.
  _sendRequest (file) {
    // Prepare the form data.
    const data = new FormData()

    data.append('upload', file)

    // Important note: This is the right place to implement security mechanisms
    // like authentication and CSRF protection. For instance, you can use
    // XMLHttpRequest.setRequestHeader() to set the request headers containing
    // the CSRF token generated earlier by your application.

    // Send the request.
    this.xhr.send(data)
  }
}

// ...

export default MyUploadAdapter // 匯出
