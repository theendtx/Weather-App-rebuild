export async function getWeather(city: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather data");
    }

    return data;
}