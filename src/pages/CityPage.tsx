import { useParams } from "react-router-dom";

export default function CityPage() {
    const { name } = useParams();

    return (
        <h1>{name}</h1>
    );
}