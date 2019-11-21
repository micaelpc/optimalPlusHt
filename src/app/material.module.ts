import { NgModule } from "@angular/core";
import { MatButtonModule, MatInputModule,MatFormFieldModule,MatListModule,MatToolbarModule,MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  imports: [MatButtonModule,MatInputModule,MatFormFieldModule,MatListModule,MatToolbarModule,MatProgressSpinnerModule],
  exports: [MatButtonModule,MatInputModule,MatFormFieldModule,MatListModule,MatToolbarModule,MatProgressSpinnerModule]
})
export class MaterialModule {}
