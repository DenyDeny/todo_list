import axios from 'axios'
import config from './config'

export default class Api {
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

    async login(email, password) {
        return await this.axios.request({
            url: config.user.login.url,
            method: config.user.login.method,
            data: {
                email,
                password
            }
        })
    }

    async logout(email) {
        return await this.axios.request({
            url: config.user.logout.url,
            method: config.user.logout.method,
            data: {
                email
            }
        })
    }

    async register(email, password) {
        return await this.axios.request({
            url: config.user.register.url,
            method: config.user.register.method,
            data: {
                email,
                password
            }
        })
    }

    async updateInfo(email) {
        return await this.axios.request({
            url: config.userActions.updateInfo.url,
            method: config.userActions.updateInfo.method,
            data: {
                email
            }
        })
    }

    async getInfo(email) {
        return await this.axios.request({
            url: config.userActions.getInfo.url,
            method: config.userActions.getInfo.method,
            data: {
                email
            }
        })
    }

    async terminate(email) {
        return await this.axios.request({
            url: config.userActions.terminateSession.url,
            method: config.userActions.terminateSession.method,
            data: {
                email
            }
        })
    }
}