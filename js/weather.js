class Weather {
    constructor(city , state){
        this.apiKey = '86b0bd9b76517148d71f0967cc7de574'
        this.city = city,
        this.state = state
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
        
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }
    }

    changeLocation(city , state){
        this.city = city,
        this.state = state
        console.log(city , state);
    }

    get location(){
        return 'شهر: ' + this.city + ' / ' + 'استان: ' + this.state;
    }
}
