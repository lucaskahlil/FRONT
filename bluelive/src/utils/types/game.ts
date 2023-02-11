export interface GameResponse {
    id: string;
    Title: string;
    CoverImageUrl: string;
    Description: string;
    Year: number;
    ImdbScore: number;
    TrailerYouTubeUrl: string;
    GameplayYouTubeUrl: string;
    genres: string[];
}

export interface GamePayload {
    id: string;
    isFavorite: boolean;
    game: GameResponse;
}

export interface getAllpayloadGames {
    id: string;
    title: string;
    coverImageUrl: string;
}
