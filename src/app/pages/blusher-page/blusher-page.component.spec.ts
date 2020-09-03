import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusherPageComponent } from './blusher-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

describe('BlusherPageComponent', () => {
    let component: BlusherPageComponent;
    let fixture: ComponentFixture<BlusherPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlusherPageComponent,
                HeroComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlusherPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
