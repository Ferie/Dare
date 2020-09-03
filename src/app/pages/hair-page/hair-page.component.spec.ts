import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HairPageComponent } from './hair-page.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

describe('HairPageComponent', () => {
    let component: HairPageComponent;
    let fixture: ComponentFixture<HairPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HairPageComponent,
                HeroComponent
            ],
            imports: [
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HairPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
