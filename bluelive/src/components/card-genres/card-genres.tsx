import { useNavigate } from "react-router-dom";
import { GenreResponse } from "../../utils/types/genre"

interface CardGenresProps {
    genres: GenreResponse;
}

export function CardGenres({ genres }: CardGenresProps) {
    return (
    <div>
        <button>{genres.Name}</button>
    </div>
  )
}
