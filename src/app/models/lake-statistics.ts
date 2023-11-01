export class LakeStatistics {
    id!: number;
    name!: string;
    celsius!: boolean;
    temperature!: number;
    weatherDate!: string;
    waves!: Wave;

    constructor() {
        this.waves = Wave.Calm; 
    }

}

enum Wave {
   Calm,
   Choppy,
   Rough,
   Tidal
}