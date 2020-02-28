import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button }                                 from './button';
import { Buttons }                                from './buttons';

@Component({

    selector: 'buttons',
    template: `

        <div class="wrapper">

            <div class="left">

                <div *ngFor="let button of config.leftButtons">

                    <button *ngIf="button.type === 'raised'"
                            [style.background-color]="button.backgroundColor"
                            (click)="onButtonClick.emit(button)"
                            mat-raised-button>

                        {{ button.label }}

                    </button>

                    <button *ngIf="button.type === 'stroked'"
                            [style.background-color]="button.backgroundColor"
                            (click)="onButtonClick.emit(button)"
                            mat-raised-button>

                        {{ button.label }}

                    </button>

                </div>

            </div>

            <div class="center"
                 [style.color]="config.textColor"
                 [style.font-size]="config.textFontSize">

                <ng-content></ng-content>

            </div>

            <div class="right">

                <div *ngFor="let button of config.rightButtons">

                    <button *ngIf="button.type === 'raised'"
                            [style.background-color]="button.backgroundColor"
                            (click)="onButtonClick.emit(button)"
                            mat-raised-button>

                        {{ button.label }}

                    </button>

                    <button *ngIf="button.type === 'stroked'"
                            [style.background-color]="button.backgroundColor"
                            (click)="onButtonClick.emit(button)"
                            mat-raised-button>

                        {{ button.label }}

                    </button>

                </div>

            </div>

        </div>

    `,
    styleUrls: [ 'buttons.component.scss' ]

})
export class ButtonsComponent {

    @Input() public config: Buttons;

    @Output() public onButtonClick: EventEmitter<Button> = new EventEmitter();

}
