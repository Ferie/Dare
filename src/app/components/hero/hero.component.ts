import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ra-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    @Input() public backgroundImage: string;
    @Input() public pageTitle: string;
}
