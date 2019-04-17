 import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule],
    exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule],
})

export class MaterialModule { }