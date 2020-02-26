import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { MatButtonModule }  from '@angular/material/button';
import { ButtonsComponent } from './buttons.component';

@NgModule({
    declarations: [ ButtonsComponent ],
    imports: [

        CommonModule,
        MatButtonModule

    ],
    exports: [ ButtonsComponent ]
})
export class ButtonsModule {
}
