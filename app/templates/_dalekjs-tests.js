module.exports = {
    // Checks if the <title> of ´github.com´ has the expected value
    'Page title is correct': function (test) {
        'use strict';
        test
            .open('app/index.html')
            .assert.title('Foundation 4')
            //.screenshot('screenshots/foundation.jpg')
            .done();
    }
};