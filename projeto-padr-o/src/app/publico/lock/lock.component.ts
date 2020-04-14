import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare var $: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'lock-cmp',
    templateUrl: './lock.component.html'
})

export class LockComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    focus;

    constructor(private element: ElementRef) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    checkFullPageBackgroundImage() {
        // tslint:disable-next-line:prefer-const
        let $page = $('.full-page');
        // tslint:disable-next-line:prefer-const
        let image_src = $page.data('image');

        if (image_src !== undefined) {
            // tslint:disable-next-line:prefer-const
            let image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
    }

    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        const sidebar = document.getElementsByClassName('navbar-collapse')[0];
        // tslint:disable-next-line:triple-equals
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
