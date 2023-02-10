import { useNavigate } from "react-router-dom";
import { GenreResponse } from "../../utils/types/genre"

interface CardGenresProps {
    genres: any;
}

export function CardGenres({ genres }: CardGenresProps) {
    return (
    <div>
        <h2>{genres.Name}</h2>
    </div>
  )
}
