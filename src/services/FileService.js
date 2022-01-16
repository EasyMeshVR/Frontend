import axios from 'axios';

class FileService {
    static #FILE_SERVICE_ENDPOINT = "https://fzq7qh0yub.execute-api.us-east-2.amazonaws.com/file";

    static async requestPresignedUrl(method, params, data) {
        return await axios({ 
            method: method,
            url: this.#FILE_SERVICE_ENDPOINT,
            params: params,
            data: data
        });
    };

    static calcProgress(progressEvent) {
        if (progressEvent.total === 0) return 0;
        return Math.round(progressEvent.loaded * 100 / progressEvent.total);
    }

    static async uploadFile(file, codeType, setProgress) {
        const requestPresignedPostRes = await this.requestPresignedUrl("post", undefined, { codeType: codeType });
        const presignedPostData = requestPresignedPostRes.data;

        const data = new FormData();
        Object.entries(presignedPostData.data.fields).forEach(([k, v]) => {
            data.append(k, v);
        });
        data.append('file', file); // must be the last key/value pair

        const config = {
            onUploadProgress: (progressEvent) => {
                setProgress(this.calcProgress(progressEvent));
            }
        };

        await axios.post(presignedPostData.data.url, data, config);
        return presignedPostData.code;
    };

    static async downloadFile(fileCode, setProgress) {
        const requestPresignedGetRes = await this.requestPresignedUrl("get", { code: fileCode });
        const presignedGetData = requestPresignedGetRes.data;

        const getUrl = presignedGetData.url;

        const config = {
            responseType: 'blob',
            onDownloadProgress: (progressEvent) => {
                setProgress(this.calcProgress(progressEvent));
            }
        };

        return await axios.get(getUrl, config);
    }
}

export default FileService;