import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonItem, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonIcon, IonLabel, IonFab, IonFabButton, IonFabList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.page.html',
  styleUrls: ['./boton.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFabButton, IonFab, IonLabel, IonIcon, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonBackButton, IonItem, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BotonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
