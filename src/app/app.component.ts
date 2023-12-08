import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController) {}

  /**
   * Event-Handler-Methode für Schließen des Hamburger-Menüs.
   */
  onMenuSchliessen() {

    this.menuController.close();
  }

}
