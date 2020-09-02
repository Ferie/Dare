import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-hair-page',
    templateUrl: './hair-page.component.html',
    styleUrls: ['./hair-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HairPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
