import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascaraPageComponent } from './mascara-page.component';

describe('MascaraPageComponent', () => {
    let component: MascaraPageComponent;
    let fixture: ComponentFixture<MascaraPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MascaraPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MascaraPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
