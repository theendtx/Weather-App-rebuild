export interface ForecastItem {
    dt_txt: string;
    main: {
        temp: number;
    };

    weather: {
        description: string;
    }[];

}