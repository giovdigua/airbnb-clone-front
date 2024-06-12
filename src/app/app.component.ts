import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void{
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
