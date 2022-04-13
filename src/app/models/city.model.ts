export default class City {
    city?: string;
    city_name?: string;
    condition_slug?: string;
    date?: string;
    description?: string;
    temp?: number;
    time?: string;
    humidity?: number;
    wind_speedy?: string;
    sunrise?: string;
    sunset?: string;

    constructor(city?: City){
        this.city = city?.city;
        this.city_name = city?.city_name;
        this.condition_slug = city?.condition_slug;
        this.date = city?.date;
        this.description = city?.description;
        this.temp = city?.temp;
        this.time = city?.time;
        this.humidity = city?.humidity;
        this.wind_speedy = city?.wind_speedy;
        this.sunrise = city?.sunrise;
        this.sunset = city?.sunset;
    }
}