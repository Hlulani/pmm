import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  headingDetails = {
    title: 'Here\'s our value proposition',
    subTitle: 'we\'re awesome',
    description: 'This example creates a full page background image. Try to resize the ' +
      'browser window to see how it always will cover the full screen (when scrolled to top), ' +
      'and that it scales nicely on all screen sizes.'
  }
  services = [{
    srNum: 1,
    title: 'Awesome service',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia'
  }, {
    srNum: 2,
    title: 'Awesome service',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia'
  }, {
    srNum: 3,
    title: 'Awesome service',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia'
  }]

  philosophy = {
    title: 'Our Philosophy',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia'
  }

  mission = {
    title: 'Our Mission',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia'
  }

  hero = {
    designation: 'FOUNDER & CEO',
    name: 'Pabi Moloi'
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  bookNow() {
    this.router.navigateByUrl('/contact');
  }

}
