import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-hair-page',
    templateUrl: './hair-page.component.html',
    styleUrls: ['./hair-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HairPageComponent implements OnInit {
    public content: string = '';

    constructor(
        private contentService: ContentService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.contentService.getContent().pipe(
            take(1)
        ).subscribe((response: Response) => {
            this.content = response['hair-page'];
            this.cdRef.detectChanges();
        });
    }
}
