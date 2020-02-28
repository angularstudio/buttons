export class Button {

    public id?: string;
    public backgroundColor?: string;
    public fontColor?: string = '#000';
    public label: string;
    public routerPath?: string;
    public type?: 'stroked' | 'raised' = 'raised';

    public constructor(o: Button) {

        Object.assign(this, o);

    }

}
