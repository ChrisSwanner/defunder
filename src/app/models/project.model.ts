export class Project {
    public targetForDefunding: 0;
    public defunded: false;

    constructor(public title: string, public founder: string, public description: string, public moneyStart: number, public fundsUse: string, public rewards: string, public projectType: string) {
        
    }
}