import axios from 'axios'
import config from './config'
class Api {
    constructor() {
        this.axios = axios.create({
            baseURL: config.baseUrl,
            timeout: 10000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        });
    }

    async findByEmail(email) {
        return await this.axios.request({
            url: config.user.findByEmail.url,
            method: config.user.findByEmail.method,
            data: {
                email
            }
        })
    }
}