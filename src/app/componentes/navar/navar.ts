import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navar',
  imports: [RouterLink],
  templateUrl: './navar.html',
  styleUrl: './navar.css',
})
export class Navar {

  //Propiedad para determinar el tipo de contenedor de la aplicación, con un valor predeterminado de "home"
  
  @Input() tipoAppContainer: string = "home";
}
