import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';
import Card from './ui/Card';

type Props={
    weather: any;
    loading: boolean;
    error: string;
};

function WeatherCard({ weather, loading, error }: Props) {
    if (!weather){
        return(<p>Empty data</p>)
    }

    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error}/>


    return (
        <Card>
            <h2>{weather?.name}</h2>
            <p>{weather?.main?.temp}</p>
            <p>{weather?.weather?.[0]?.description}</p>
        </Card>
    )
}

export default WeatherCard;