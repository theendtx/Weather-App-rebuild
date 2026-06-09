import { useForm } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
};

export default function SearchInput({city, setCity}: Props) {
    const {
  register,
  handleSubmit
} = useForm();

function onSubmit(data:any) {
    setCity(data.city.trim());
}

    return (
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
  <input
    aria-label="City"
    placeholder={city || "Search a city"}
    {...register("city", {
      required: "City is required"
    })}
  />

  <button>Search</button>
</form>
        
    );
}
