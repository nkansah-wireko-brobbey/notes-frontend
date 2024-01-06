export interface Auth {
}

export interface SignupRequest{
    firstName: string;
    password: string;
    email: string;
    lastName: string;
}

export interface LoginRequest{
    password: string;
    email: string;
}

export interface LoginResponse{
    token: string;
}