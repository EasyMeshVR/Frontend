import axios from 'axios';

class FileService {
    static #FILE_SERVICE_ENDPOINT = "https://fzq7qh0yub.execute-api.us-east-2.amazonaws.com/file";

    static async requestPresignedUrl(method) {
        return await axios({ 
            method: method,
            url: this.#FILE_SERVICE_ENDPOINT
        });
    };

    static async uploadFile(file, setProgress) {
        const requestPresignedPostRes = await this.requestPresignedUrl("post");
        const presignedPostData = requestPresignedPostRes.data;

        const data = new FormData();
        Object.entries(presignedPostData.data.fields).forEach(([k, v]) => {
            data.append(k, v);
        });
        data.append('file', file); // must be the last key/value pair

        const config = {
            onUploadProgress: (progressEvent) => {
                setProgress(Math.round(progressEvent.loaded * 100 / progressEvent.total));
            }
        };

        await axios.post(presignedPostData.data.url, data, config);
        return presignedPostData.nameCode;
    };

    static downloadFile(fileCode) {

    }
}

export default FileService;