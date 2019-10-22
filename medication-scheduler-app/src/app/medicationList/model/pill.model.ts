import { PortionEnum } from './portionEnum.enum';

export class Pill {

    name: string = 'Something';
    portion: PortionEnum = PortionEnum.FULL;
    scheduler: Number[] = [1, 0, 0];

    constructor(name: string, portion: PortionEnum, scheduler: Number[]) {
        this.name = name;
        this.portion = portion;
        this.scheduler = scheduler;
    }

}
