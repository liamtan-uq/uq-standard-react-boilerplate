export interface IUser {
    id: number;
    name: string;
}
export interface IApiState {
    users: IUser[];
    isLoading: boolean;
    error: Error | null;
}
export interface IStore {
    apiState: IApiState;
}