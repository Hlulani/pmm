import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  projects: { name: string; description: string; url: string }[] = [
    {
      name: 'Project 1',
      description: 'THis is the description',
      url: 'https://i.pinimg.com/originals/2e/65/75/2e6575d405dea87b573cb0341deacca9.jpg',
    },
    {
      name: 'Project 2',
      description: 'THis is the description',
      url: 'https://assets.airtrfx.com/media-em/af/cities/Niza-NCE.jpg?width=500&quality=80&fit=crop&format=auto&opt=true',
    },
    {
      name: 'Project 3',
      description: 'THis is the description',
      url: 'https://st2.depositphotos.com/1006220/5360/i/450/depositphotos_53607011-stock-photo-mobile-people-and-stable-buildings.jpg',
    },
    {
      name: 'Project 4',
      description: 'THis is the description',
      url: 'https://i.pinimg.com/originals/2e/65/75/2e6575d405dea87b573cb0341deacca9.jpg',
    },
    {
      name: 'Project 5',
      description: 'THis is the description',
      url: 'https://i.pinimg.com/originals/2e/65/75/2e6575d405dea87b573cb0341deacca9.jpg',
    },
  ];
  @ViewChild('cardsContainer') container: ElementRef | undefined;
  constructor() {}

  scrollLeft = () => {
    if (!this.container) {
      return;
    }
    console.log('Scroll Left');
    this.container.nativeElement.scrollTo({
      left: this.container.nativeElement.scrollRight - 200,
      behavior: 'smooth',
    });
  };

  scrollRight = () => {
    if (!this.container) {
      return;
    }
    console.log('Scroll Right');

    this.container.nativeElement.scrollTo({
      left: this.container.nativeElement.scrollLeft + 200,
      behavior: 'smooth',
    });
  };

  ngOnInit(): void {}
}
