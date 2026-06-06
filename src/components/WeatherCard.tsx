import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';
import Card from './ui/Card';
import type { Weather } from "../types/weather";

type Props={
    weather: Weather | null ;
    loading: boolean;
    error: string;
};

function WeatherCard({ weather, loading, error }: Props) {
    if (loading) return <Loader />
if (error) return <ErrorMessage message={error} />
if (!weather) return <p>Empty data</p>

    return (
        <Card>
            <h2>{weather?.name}</h2>
            <p>{weather?.main?.temp}</p>
            <p>{weather?.weather?.[0]?.description}</p>
        </Card>
    )
}

export default WeatherCard;