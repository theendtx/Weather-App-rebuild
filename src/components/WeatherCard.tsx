type Props={
    weather: any
};

function WeatherCard({ weather }: Props) {
    if (!weather){
        return(<p>Empty data</p>)
    }

    return (
        <div>
            <h2>{weather?.name}</h2>
            <p>{weather?.main?.temp}</p>
            <p>{weather?.weather?.[0]?.description}</p>
        </div>
    )
}

export default WeatherCard;