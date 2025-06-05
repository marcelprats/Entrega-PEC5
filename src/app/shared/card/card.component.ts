import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image!: Image;
}