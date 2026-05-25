type Props={
    weather: any;
    loading: boolean;
    error: string;
};

function WeatherCard({ weather, loading, error }: Props) {
    if (!weather){
        return(<p>Empty data</p>)
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return (
        <div>
            <h2>{weather?.name}</h2>
            <p>{weather?.main?.temp}</p>
            <p>{weather?.weather?.[0]?.description}</p>
        </div>
    )
}

export default WeatherCard;