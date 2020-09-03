import {
    Component,
        OnInit,
        ChangeDetectionStrategy,
        ChangeDetectorRef
} from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-mascara-page',
    templateUrl: './mascara-page.component.html',
    styleUrls: ['./mascara-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MascaraPageComponent implements OnInit {
    public content: string = '';

    constructor(
        private contentService: ContentService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.contentService.getContent().pipe(
            take(1)
        ).subscribe((response: Response) => {
            this.content = response['mascara-page'];
            this.cdRef.detectChanges();
        });
    }
}
