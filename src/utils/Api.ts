import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../env';
import { EHTTPMethod, IUser } from '../types';
class Api {

    private baseUrl = API_URL;

    private doRequest(method: EHTTPMethod, endpoint: string): Promise<AxiosResponse<any>> {
        console.log(this.baseUrl)
        return axios.request({
            method,
            url: `${this.baseUrl}${endpoint}`
        });
    }

    public getUsers(): Promise<AxiosResponse<IUser>> {
        return this.doRequest(EHTTPMethod.GET, '/users');
    }

}

export default new Api();