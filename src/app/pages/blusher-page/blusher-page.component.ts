import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-blusher-page',
    templateUrl: './blusher-page.component.html',
    styleUrls: ['./blusher-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlusherPageComponent implements OnInit {
    public contentArray: Array<any>;

    constructor(
        private contentService: ContentService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.contentService.getContent().pipe(
            take(1)
        ).subscribe((response: Response) => {
            this.contentArray = response['blusher-page'];
            this.cdRef.detectChanges();
        });
    }
}
