import axios from 'axios'

export class UploadService {
  constructor() {}

  async upload(data: File) {
    const response = await axios
      .post('http://localhost:3000/upload', data)
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        console.error(e)
      })

    return response
  }
}
