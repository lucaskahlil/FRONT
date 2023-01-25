export type LoginRequest = {
    Email: string; 
    Password: string;
}

export type EditProfile = {
    id: string;
    Title: string;
    ImageURL: string;
}