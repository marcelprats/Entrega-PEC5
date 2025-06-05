import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: Image[] = [];
  isLoading = true;

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.images = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error carregant imatges:', err);
        this.isLoading = false;
      }
    });
  }

  goToDetail(id: string): void {
    this.router.navigate(['/images', id]);
  }
}
