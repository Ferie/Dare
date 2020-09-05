// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppRoutingModule } from './app-routing.module';
// Page Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlusherPageComponent } from './pages/blusher-page/blusher-page.component';
import { BrushesPageComponent } from './pages/brushes-page/brushes-page.component';
import { MascaraPageComponent } from './pages/mascara-page/mascara-page.component';
import { PerfumePageComponent } from './pages/perfume-page/perfume-page.component';
import { HairPageComponent } from './pages/hair-page/hair-page.component';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        BlusherPageComponent,
        BrushesPageComponent,
        MascaraPageComponent,
        PerfumePageComponent,
        HairPageComponent,
        HeaderComponent,
        NavigationComponent,
        HeroComponent,
        AccordionComponent,
        PanelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            extras: {
                lazyRender: true
            },
            validationMessages: [
                {
                    name: 'required',
                    message: 'This field is required'
                }
            ]
        }),
        FormlyBootstrapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
