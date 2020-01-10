import { Component } from '@angular/core';

@Component({
    // selector: 'app-dashboard',
    templateUrl: 'home_page.component.html'
})
export class HomePageComponent {
    constructor() { }

    getUrl() {
        return "url('https://cfnewsads.thomasnet.com/images/cmsimage/image/plastic-bottles.jpg')";
    }
}
