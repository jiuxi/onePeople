require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery-2.1.0',
        'common': 'common',
        'index': 'index',
        'animate': 'swiper.animate1.0.2.min',
        'swiper': 'swiper.min'
    }
});
require(['jquery', 'common'], function ($) {
    $("body").show();
});
