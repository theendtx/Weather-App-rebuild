import { useForm } from "react-hook-form";

type Props = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
};

function SearchInput({city, setCity}: Props) {
    const {
  register,
  handleSubmit
} = useForm();

function onSubmit(data:any) {
    console.log(data);
}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("city", {
      required: "City is required"
    })}
  />

  <button>Search</button>
</form>
        
    );
}

export default SearchInput;