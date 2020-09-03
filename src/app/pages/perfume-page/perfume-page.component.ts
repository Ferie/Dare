import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-perfume-page',
    templateUrl: './perfume-page.component.html',
    styleUrls: ['./perfume-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfumePageComponent implements OnInit {
    public content: string = '';

    constructor(
        private contentService: ContentService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.contentService.getContent().pipe(
            take(1)
        ).subscribe((response: Response) => {
            this.content = response['perfume-page'];
            this.cdRef.detectChanges();
        });
    }
}
