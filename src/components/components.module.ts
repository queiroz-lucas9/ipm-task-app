import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [PopoverComponent,
    ],
	imports: [],
	exports: [
    PopoverComponent,
    FormsModule,
    ]
})
export class ComponentsModule {}
