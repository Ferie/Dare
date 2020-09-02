import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-perfume-page',
    templateUrl: './perfume-page.component.html',
    styleUrls: ['./perfume-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfumePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
