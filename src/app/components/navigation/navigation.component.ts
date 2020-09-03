import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    OnDestroy,
    Input,
    ChangeDetectorRef
} from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavItem } from 'src/app/interfaces/navigation-item.interface';

@Component({
    selector: 'ra-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit, OnDestroy {
    @Input() public navigation: Array<NavItem>;
    public isMobile: boolean = false;
    public showMenu: boolean = false;
    private _resizeObservable$: Observable<Event>;
    private _unsubscribe$: Subject<any> = new Subject<any>();

    constructor(private cdRef: ChangeDetectorRef) {
        this.isMobile = window && window.innerWidth <= 768;
        this.showMenu = window && window.innerWidth > 768;
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
            this.showMenu = window && window.innerWidth > 768;
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

    public toggleMobileMenu() {
        this.showMenu = !this.showMenu;
    }
}
