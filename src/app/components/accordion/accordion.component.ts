import {
    Component,
    ChangeDetectionStrategy,
    AfterContentInit,
    ContentChildren,
    QueryList,
    OnDestroy
} from '@angular/core';
import { PanelComponent } from 'src/app/components/panel/panel.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ra-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
    @ContentChildren(PanelComponent) public panels: QueryList<PanelComponent>;
    private _unsubscribe$: Subject<any> = new Subject<any>();

    public ngAfterContentInit(): void {
        // Open the first panel
        this.panels.toArray()[0].opened = true;
        // Loop through all panels
        this.panels.toArray().forEach((panel: PanelComponent) => {
            // subscribe panel toggle event
            panel.toggle.pipe(
                takeUntil(this._unsubscribe$)
            ).subscribe(() => {
                // Open the panel
                this.openPanel(panel);
            });
        });
    }

    /**
     * Destroy component and subscriptions.
     */
    public ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

    public openPanel(panel: PanelComponent) {
        // close all panels
        this.panels.toArray().forEach(p => p.opened = false);
        // open the selected panel
        panel.opened = true;
    }
}
