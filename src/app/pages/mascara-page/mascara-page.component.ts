import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-mascara-page',
    templateUrl: './mascara-page.component.html',
    styleUrls: ['./mascara-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MascaraPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
