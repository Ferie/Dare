import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'ra-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent {
    @Input() opened = false;
    @Input() title: string;
    @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
