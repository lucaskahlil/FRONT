import { SelectProps } from "./types";

export function CardProfile(props: SelectProps) {
  return (
    <div>
      {props.nome.map((nome) => {
        return <h2>{nome}</h2>
      })}
      <img src="" alt="" />
      <button>Edit</button>
    </div>
  );
}
