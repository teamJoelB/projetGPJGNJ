import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
    exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
})

export class MaterialModule { }