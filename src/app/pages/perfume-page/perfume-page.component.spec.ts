import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfumePageComponent } from './perfume-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

describe('PerfumePageComponent', () => {
    let component: PerfumePageComponent;
    let fixture: ComponentFixture<PerfumePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PerfumePageComponent,
                HeroComponent
            ],
            imports: [
                HttpClientTestingModule
            ]
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
