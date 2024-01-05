export interface Auth {
}

export interface SignupRequest{
    firstname: string;
    password: string;
    email: string;
    lastname: string;
}

export interface LoginRequest{
    password: string;
    email: string;
}

export interface LoginResponse{
    token: string;
}