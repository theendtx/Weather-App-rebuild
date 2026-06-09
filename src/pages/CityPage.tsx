import { useParams } from "react-router-dom";

export default function CityPage() {
    const { name } = useParams();

    return (
        <p className="route-badge">{name}</p>
    );
}
