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
    private resizeObservable$: Observable<Event>;
    private unsubscribe: Subject<any> = new Subject<any>();

    constructor(private cdRef: ChangeDetectorRef) {
        this.isMobile = window.innerWidth <= 768;
        this.showMenu = window.innerWidth > 768;
    }

    /**
     * Initialize `on resize` subscription to show the different
     * resolutions menus.
     */
    public ngOnInit(): void {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeObservable$.pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(evt => {
            this.isMobile = window.innerWidth <= 768;
            this.showMenu = window.innerWidth > 768;
            this.cdRef.detectChanges();
        });
    }

    /**
     * Destroy component and subscriptions.
     */
    public ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    public toggleMobileMenu() {
        this.showMenu = !this.showMenu;
    }
}
