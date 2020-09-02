import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';

import { NavigationComponent } from './navigation.component';

const menuList = [
    {
        index: 1,
        menuLabel: 'Blusher',
        link: '/blusher'
    },
    {
        index: 2,
        menuLabel: 'Brusher',
        link: '/brusher'
    },
    {
        index: 3,
        menuLabel: 'Mascara',
        link: '/mascara'
    }
];

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NavigationComponent],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(NavigationComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should subscribe to the navigationService on initialization', () => {
    //     const object = Observable.of(menuList);
    //     spyOn(navigationService, 'getNavigation').and.returnValue(object);
    //     component.ngOnInit();
    //     fixture.detectChanges();
    //     expect(navigationService.getNavigation).toHaveBeenCalled();
    // });

    // it('should insert an `active` class in the DOM to the element just clicked', () => {
    //     navigationService.setNavigation(menuList);
    //     navigationService.navigationArray.subscribe(data => {
    //         fixture.detectChanges();
    //         const links = fixture.debugElement.queryAll(By.css('a'));
    //         expect(links.length).toBeGreaterThan(0);
    //         const link = links[0].nativeElement;
    //         link.click();
    //         fixture.detectChanges();
    //         expect(link.className).toContain('active');
    //     });
    // });
});
