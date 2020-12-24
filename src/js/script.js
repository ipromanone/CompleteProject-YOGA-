window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});