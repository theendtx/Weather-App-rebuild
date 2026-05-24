type Props = {
    city: string;
    temp: number;
}

function WeatherCard({ city, temp }: Props) {
    return (
        <div>
            <h2>{city}</h2>
            <p>{temp}°C</p>
        </div>
    );
}

export default WeatherCard;