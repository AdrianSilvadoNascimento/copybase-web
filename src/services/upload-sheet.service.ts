import axios from 'axios';

export class UploadService {
  private readonly baseURL = 'http://localhost:3000';

  constructor() {}

  async upload(data: any) {
    const formData = new FormData();
    formData.append('file', data);

    try {
      const response = await axios.post(`${this.baseURL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
