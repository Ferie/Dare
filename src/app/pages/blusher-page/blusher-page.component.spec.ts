import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlusherPageComponent } from './blusher-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { PanelComponent } from 'src/app/components/panel/panel.component';

describe('BlusherPageComponent', () => {
    let component: BlusherPageComponent;
    let fixture: ComponentFixture<BlusherPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlusherPageComponent,
                HeroComponent,
                AccordionComponent,
                PanelComponent
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
