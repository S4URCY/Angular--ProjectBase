import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fixedplugin-cmp',
    templateUrl: 'fixedplugin.component.html'
})

export class FixedPluginComponent implements OnInit {
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let $sidebar = $('.sidebar');
        const $off_canvas_sidebar = $('.off-canvas-sidebar');
        const window_width = window.outerWidth;

        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }

        }

        $('.fixed-plugin a').click(function (event) {
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });

        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            const new_color = $(this).data('color');

            // tslint:disable-next-line:triple-equals
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);

            }

            // tslint:disable-next-line:triple-equals
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-color', new_color);
            }
        });

        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            const new_color = $(this).data('color');

            // tslint:disable-next-line:triple-equals
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }

            // tslint:disable-next-line:triple-equals
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    }
}
