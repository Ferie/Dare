import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlusherPageComponent } from './pages/blusher-page/blusher-page.component';
import { BrushesPageComponent } from './pages/brushes-page/brushes-page.component';
import { MascaraPageComponent } from './pages/mascara-page/mascara-page.component';
import { PerfumePageComponent } from './pages/perfume-page/perfume-page.component';
import { HairPageComponent } from './pages/hair-page/hair-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'blusher',
        pathMatch: 'full',
        component: BlusherPageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'brushes',
        pathMatch: 'full',
        component: BrushesPageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'mascara',
        pathMatch: 'full',
        component: MascaraPageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'perfume',
        pathMatch: 'full',
        component: PerfumePageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'hair',
        pathMatch: 'full',
        component: HairPageComponent,
        data: {},
        resolve: {}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
