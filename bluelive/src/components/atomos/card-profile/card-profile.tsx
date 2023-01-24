import { SelectProps } from "./types";

export function CardProfile({ Title, ImageURL, selectedCard }: SelectProps) {
  return (
    <div>
      <h2>{Title}</h2>
      <img src={ImageURL} alt="" />
      <button onClick={selectedCard}>Entrar</button>
      <button>Editar</button>
    </div>
  );
}
