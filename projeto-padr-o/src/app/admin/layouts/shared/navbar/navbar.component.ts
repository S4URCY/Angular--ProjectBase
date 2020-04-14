import {Component, OnInit, ViewChild, ElementRef, Directive, Renderer2} from '@angular/core';
import {RouteInfo, ROUTES} from '../sidebar/sidebar.component';
import {Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Subscription} from 'rxjs/Subscription';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: RouteInfo[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    private _router: Subscription;
    public open = false;
    @ViewChild('navbar-cmp') button;

    constructor(
        location: Location,
        private renderer: Renderer2,
        private element: ElementRef,
        private titleService: Title,
        private router: Router) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            const $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    }

    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];

        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;

        } else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');

                misc.sidebar_mini_active = true;
            }, 300);
        }

        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }

    isMobileMenu() {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
    }

    sidebarToggle() {
        // tslint:disable-next-line:triple-equals
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle() {
        let nomeComponenteAcess;
        let titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            const parent = this.listTitles[item];
            if (parent.path === titlee) {
                return nomeComponenteAcess = parent.nameNav;
            } else if (parent.children) {
                const children_from_url = titlee.split('/')[3];
                const children_from_url2 = titlee.split('/')[4];
                const children_from_url3 = titlee.split('/')[5];
                for (let current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return nomeComponenteAcess = parent.children[current].nameNav;
                    } else {
                        if (parent.children[current].path === children_from_url2) {
                            return nomeComponenteAcess = parent.children[current].nameNav;
                        } else {
                            if (parent.children[current].path === children_from_url3) {
                                return parent.children[current].nameNav;
                            } else {
                                return this.titleService.getTitle();
                            }
                        }
                    }
                }
            }
        }
    }

    getPath() {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
}
