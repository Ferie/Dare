import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    OnDestroy,
    Input,
    ChangeDetectorRef
} from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ra-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
    @Input() public backgroundImage: string;
    @Input() public pageTitle: string;
    @Input() public fullPageHero: boolean; // Home page with full page hero also on mobile
    public isMobile: boolean = false; // On mobile heroes are smaller
    private _resizeObservable$: Observable<Event>;
    private _unsubscribe$: Subject<any> = new Subject<any>();

    constructor(private cdRef: ChangeDetectorRef) {
        this.isMobile = window && window.innerWidth <= 768;
    }

    /**
     * Initialize `on resize` subscription to show the different
     * resolutions menus.
     */
    public ngOnInit(): void {
        this._resizeObservable$ = fromEvent(window, 'resize');
        this._resizeObservable$.pipe(
            takeUntil(this._unsubscribe$)
        ).subscribe(evt => {
            this.isMobile = window && window.innerWidth <= 768;
            this.cdRef.detectChanges();
        });
    }

    /**
     * Destroy component and subscriptions.
     */
    public ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
