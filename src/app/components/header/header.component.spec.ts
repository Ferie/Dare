import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(HeaderComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
