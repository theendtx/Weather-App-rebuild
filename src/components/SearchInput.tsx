type Props = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
};

function SearchInput({city, setCity}: Props) {
    return (
        <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
    );
}

export default SearchInput;