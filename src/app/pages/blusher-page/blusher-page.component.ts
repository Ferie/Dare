import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-blusher-page',
    templateUrl: './blusher-page.component.html',
    styleUrls: ['./blusher-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlusherPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
