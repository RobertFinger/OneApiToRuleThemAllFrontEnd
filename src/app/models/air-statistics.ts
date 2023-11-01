export class AirStatistics {
    id!: number;
    date!: string;
    city!: string;
    weather!: Weather;
    temperature!: number;
    celcius!: boolean;  

    constructor() {
        this.weather = Weather.Freezing; 
    }
}


enum Weather {
    Freezing,
    Bracing,
    Chilly,
    Cool,
    Mild,
    Warm,
    Balmy,
    Hot,
    Sweltering,
    Scorching
}