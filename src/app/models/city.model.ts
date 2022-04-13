export default class City {
    city?: string;
    city_name?: string;
    condition_slug?: string;
    date?: string;
    description?: string;

    constructor(city?: City){
        this.city = city?.city;
        this.city_name = city?.city_name;
        this.condition_slug = city?.condition_slug;
        this.date = city?.date;
        this.description = city?.description;
    }
}