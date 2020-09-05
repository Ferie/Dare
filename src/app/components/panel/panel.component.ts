import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'ra-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
    @Input() public title: string;
    @Input() public opened = false;
    @Output() public toggle: EventEmitter<any> = new EventEmitter<any>();
}
