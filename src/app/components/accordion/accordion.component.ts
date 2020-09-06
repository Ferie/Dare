import {
    Component,
    ChangeDetectionStrategy,
    AfterContentInit,
    ContentChildren,
    QueryList,
    OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PanelComponent } from 'src/app/components/panel/panel.component';

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
            // Subscribe each panel to its own `toggle` event
            panel.toggle.pipe(
                takeUntil(this._unsubscribe$)
            ).subscribe(() => {
                // Toggle the panel
                this.togglePanel(panel);
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

    /**
     * Close all the panels before opening the selected one
     * @param panel: PanelComponent
     */
    public togglePanel(panel: PanelComponent): void {
        const opened = panel.opened;
        this.panels.toArray().forEach(p => p.opened = false);
        panel.opened = !opened;
    }
}
