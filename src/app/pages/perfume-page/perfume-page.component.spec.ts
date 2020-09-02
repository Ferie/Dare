import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumePageComponent } from './perfume-page.component';

describe('PerfumePageComponent', () => {
    let component: PerfumePageComponent;
    let fixture: ComponentFixture<PerfumePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PerfumePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PerfumePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
