import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'ra-brushes-page',
    templateUrl: './brushes-page.component.html',
    styleUrls: ['./brushes-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrushesPageComponent {
    public form = new FormGroup({});
    public model = {
        email: 'email@gmail.com'
    };
    public fields: FormlyFieldConfig[] = [
        {
            key: 'fullName',
            type: 'input',
            templateOptions: {
                label: 'Full Name:',
                placeholder: 'e.g. John Smith',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                label: 'Email Address:',
                placeholder: 'e.g. john.dove@email.com',
                required: true
            }
        },
        {
            key: 'phone',
            type: 'input',
            templateOptions: {
                label: 'Phone Number',
                placeholder: 'e.g. 07440 12346',
                required: true
            }
        },
        {
            key: 'bithDate',
            type: 'input',
            templateOptions: {
                label: 'User Date of Birth:',
                placeholder: 'e.g. 01/01/1970',
                required: true
            }
        },
        {
            key: 'select',
            type: 'select',
            templateOptions: {
                label: 'Country',
                placeholder: 'Select your country',
                required: true,
                options: [
                    { value: 'FR', label: 'France' },
                    { value: 'IT', label: 'Italy' },
                    { value: 'DE', label: 'Germany' },
                    { value: 'ES', label: 'Spain' },
                    { value: 'UK', label: 'United Kingdom' },
                    { value: 'US', label: 'United States' }
                ]
            }
        },
        {
            key: 'checkbox',
            type: 'checkbox',
            templateOptions: {
                label: 'Current products used:',
                required: true,
                options: [
                    { value: 1, label: 'Slightly' },
                    { value: 2, label: 'Moderate' },
                    { value: 3, label: 'Severe' },
                    { value: 4, label: 'Very severe' },
                    { value: 5, label: 'Extremely severe' }
                ]
            }
        },
        {
            key: 'radio',
            type: 'radio',
            templateOptions: {
                label: 'Approximately how oily is your skin?',
                required: true,
                options: [
                    { value: 1, label: 'Slightly' },
                    { value: 2, label: 'Moderate' },
                    { value: 3, label: 'Severe' },
                    { value: 4, label: 'Very severe' },
                    { value: 5, label: 'Extremely severe' }
                ]
            }
        }
    ];

    public onSubmit() {
        if (this.form.valid) {
            alert(JSON.stringify(this.model, null, 2));
        }
        console.log('this.model', this.model);
    }
}
