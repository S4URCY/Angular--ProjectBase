import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {LoginService} from '../../shared/service/login/login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    focus;
    focus1;
    focus2;
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    emailPattern = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    loginForm: FormGroup = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    constructor(private element: ElementRef, private router: Router, private loginService: LoginService) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        localStorage.clear();
    }

    checkFullPageBackgroundImage() {
        const $page = $('.full-page');
        const image_src = $page.data('image');

        if (image_src !== undefined) {
            const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }


    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
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

    login() {

        // chamar o service do login.
        this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
            (sucess) => {
                console.log(sucess);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        )
        // this.router.navigateByUrl('/admin').then(r => r);
    }
}
