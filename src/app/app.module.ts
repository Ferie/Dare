// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
        HeroComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
