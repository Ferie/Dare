import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushesPageComponent } from './brushes-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

describe('BrushesPageComponent', () => {
    let component: BrushesPageComponent;
    let fixture: ComponentFixture<BrushesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BrushesPageComponent,
                HeroComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BrushesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
