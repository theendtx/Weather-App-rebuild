import Card from './ui/Card';

type Props = {
  forecast:any[]
}

function ForecastList({ forecast }: Props) {

  return (
    <div>
      {forecast.map((item,index) => (

        <Card key={index}>
          <h3>{new Date(item.dt_txt)
              .toLocaleDateString(
                "en-US",
                { weekday:"short" }
              )}</h3>
          <p>{item.main.temp}°C</p>
          <p>{item.weather[0].description}</p>
        </Card>

      ))}
    </div>
  )

}

export default ForecastList;