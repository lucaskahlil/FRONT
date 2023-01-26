export type LoginRequest = {
    Email: string; 
    Password: string;
}

export type EditProfile = {
    id: string;
    Title: string;
    ImageURL: string;
}

export type CreateProfile = {
    Title: string;
    ImageURL: string;
}