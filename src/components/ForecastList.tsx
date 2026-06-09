import Card from './ui/Card';

type Props = {
  forecast: any[]
}

function ForecastList({ forecast }: Props) {
  return (
    <div className="forecast-list">
      {forecast.length === 0 && (
        <div className="forecast-empty">Forecast will appear after search</div>
      )}

      {forecast.map((item, index) => (
        <Card key={index}>
          <h3>
            {new Date(item.dt_txt).toLocaleDateString(
              "en-US",
              { weekday: "short" }
            )}
          </h3>
          <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
          <p className="forecast-desc">{item.weather[0].description}</p>
        </Card>
      ))}
    </div>
  )
}

export default ForecastList;
