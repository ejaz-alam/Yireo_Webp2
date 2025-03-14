define([
    'jquery',
    './has-webp'
], function($, hasWebP) {
    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
            if (hasWebP()) {
                $('body').addClass('webp');
            } else {
                $('body').addClass('no-webp');
            }
        }
    }
});
