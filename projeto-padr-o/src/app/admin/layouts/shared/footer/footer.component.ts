import {Component, OnInit} from '@angular/core';
import { version } from '../../../../../../package.json';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit{
    test: Date = new Date();
    public version: string = version;
    ngOnInit(): void {
    }
}
