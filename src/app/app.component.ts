import { Component } from '@angular/core';
import { NavItem } from './interfaces/navigation-item.interface';

@Component({
    selector: 'ra-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public navigationArray: Array<NavItem>;

    /**
     * Pass the navigation array to the component.
     */
    constructor() {
        this.navigationArray = [
            {
                index: 1,
                menuLabel: 'Blusher',
                link: '/blusher'
            },
            {
                index: 2,
                menuLabel: 'Brushes',
                link: '/brushes'
            },
            {
                index: 3,
                menuLabel: 'Mascara',
                link: '/mascara'
            },
            {
                index: 4,
                menuLabel: 'Perfume',
                link: '/perfume'
            },
            {
                index: 5,
                menuLabel: 'Hair',
                link: '/hair'
            }
        ];
    }
}
