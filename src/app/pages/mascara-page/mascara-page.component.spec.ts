import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MascaraPageComponent } from './mascara-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

describe('MascaraPageComponent', () => {
    let component: MascaraPageComponent;
    let fixture: ComponentFixture<MascaraPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MascaraPageComponent,
                HeroComponent
            ],
            imports: [
                HttpClientTestingModule
            ]
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
