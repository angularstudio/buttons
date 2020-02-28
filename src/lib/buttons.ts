import { Button } from './button';

export class Buttons {

    public leftButtons: Array<Button>;
    public rightButtons: Array<Button>;
    public textColor?: string;
    public textFontSize?: string = '14px';

    public constructor(o: Buttons) {

        Object.assign(this, o);

    }

}
