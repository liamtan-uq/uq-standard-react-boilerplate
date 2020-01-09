/**
 * Generics
 */
export enum EHTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}
/**
 * Application specific
 */
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: ICompany;
}
export interface IUserAddress {
    street: string;
    suite?: string;
    city: string;
    zipcode: string;
    geo: ILatLng;
}
export interface ILatLng {
    lat: string;
    lng: string;
}
export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
/**
 * Global state interfaces
 */
export interface IApiState {
    users: IUser[];
    isLoading: boolean;
    error: Error | null;
}
export interface IStore {
    apiState: IApiState;
}