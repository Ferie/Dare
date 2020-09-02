import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-brushes-page',
    templateUrl: './brushes-page.component.html',
    styleUrls: ['./brushes-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrushesPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
