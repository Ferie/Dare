import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ContentService } from './content.service';

const content = {
    'mascara-page': {
        image: 'assets/images/eye.jpg',
        'image-alt': 'Eye',
        content: '<p class="page__content--paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p> <p class="page__content--paragraph">Sed non lobortis massa. Vivamus hendrerit dui ut velit pharetra, in aliquet ligula lobortis. Sed maximus augue at mi accumsan, sed tempor neque luctus. In eleifend eros vel massa interdum, feugiat congue lectus lacinia. Nunc ut felis lobortis, malesuada velit facilisis, aliquet massa. Aenean sit amet lacus id tellus ultricies feugiat. Morbi sodales urna nisi, ac eleifend leo aliquam in. Duis sit amet tempus mauris. Etiam laoreet volutpat tellus porta consectetur.</p> <p class="page__content--paragraph">Suspendisse posuere eros augue, quis elementum augue laoreet eget. Aliquam erat volutpat. Aenean ut ipsum nulla. Ut a nisi turpis. Suspendisse finibus orci metus, nec porta quam suscipit nec. Nullam ut ligula in purus accumsan bibendum. Cras volutpat consectetur quam, vitae tempus dolor faucibus a. Etiam tempor pulvinar purus. Maecenas egestas justo eget erat euismod, eget facilisis arcu egestas. Morbi in eros risus. Sed viverra in est eget convallis.</p>'
    },
    'perfume-page': {
        image: 'assets/images/flower.jpg',
        'image-alt': 'Flower',
        content: '<p class="page__content--paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p> <p class="page__content--paragraph">Sed non lobortis massa. Vivamus hendrerit dui ut velit pharetra, in aliquet ligula lobortis. Sed maximus augue at mi accumsan, sed tempor neque luctus. In eleifend eros vel massa interdum, feugiat congue lectus lacinia. Nunc ut felis lobortis, malesuada velit facilisis, aliquet massa. Aenean sit amet lacus id tellus ultricies feugiat. Morbi sodales urna nisi, ac eleifend leo aliquam in. Duis sit amet tempus mauris. Etiam laoreet volutpat tellus porta consectetur.</p> <p class="page__content--paragraph">Suspendisse posuere eros augue, quis elementum augue laoreet eget. Aliquam erat volutpat. Aenean ut ipsum nulla. Ut a nisi turpis. Suspendisse finibus orci metus, nec porta quam suscipit nec. Nullam ut ligula in purus accumsan bibendum. Cras volutpat consectetur quam, vitae tempus dolor faucibus a. Etiam tempor pulvinar purus. Maecenas egestas justo eget erat euismod, eget facilisis arcu egestas. Morbi in eros risus. Sed viverra in est eget convallis.</p>'
    }
};

describe('ContentService', () => {
    let httpTestingController: HttpTestingController;
    let service: ContentService;
    const productsApiURL = 'assets/data/content.json';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContentService],
            imports: [HttpClientTestingModule]
        });
        // Inject the service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(ContentService);
    });

    // Verify that there are no pending HTTP requests after test
    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('expects service to fetch content', () => {
        const data = 'data'; // Avoid `no-string-literal` from tslint
        // Call the service method
        service.getContent().subscribe((res) => {
            // Set some expectations on the response
            expect(res).toBeDefined();
            expect(res).not.toBe(null);
        });

        // Set expectation that there is only one endpoint request and that this is a GET
        const req = httpTestingController.expectOne(productsApiURL);
        expect(req.request.method).toEqual('GET');

        // Set the fake response that has to be returned
        req.flush({
            data: content
        });
    });
});
