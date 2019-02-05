import { NgModule } from '@angular/core';
import { SanitizedPipe } from './sanitized/sanitized';
@NgModule({
	declarations: [SanitizedPipe],
	imports: [],
	exports: [SanitizedPipe]
})
export class PipesModule {}
