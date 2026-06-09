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
if (!weather) return (
    <div className="weather-card empty-state">
        <span className="weather-mark">--</span>
        <h2>Choose a city</h2>
        <p>Your current weather snapshot will appear here.</p>
    </div>
)

    return (
        <Card className="weather-card">
            <div>
                <span className="weather-label">Now in</span>
                <h2>{weather?.name}</h2>
                <p className="weather-description">{weather?.weather?.[0]?.description}</p>
            </div>
            <p className="temperature">{Math.round(weather?.main?.temp)}°C</p>
        </Card>
    )
}

export default WeatherCard;
