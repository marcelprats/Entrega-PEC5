import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image!: Image;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imageService.getImageById(id).subscribe({
        next: (data) => {
          this.image = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error carregant detall:', err);
          this.isLoading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/images']);
  }
}