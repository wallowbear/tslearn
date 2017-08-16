define("view/Page1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var view;
    (function (view) {
        var Page1 = (function () {
            function Page1() {
                console.log("indexpage");
            }
            return Page1;
        }());
        view.Page1 = Page1;
    })(view = exports.view || (exports.view = {}));
});
define("view/Page2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var view;
    (function (view) {
        var Page2 = (function () {
            function Page2() {
                console.log("page2");
            }
            return Page2;
        }());
        view.Page2 = Page2;
    })(view = exports.view || (exports.view = {}));
});
/// <reference path="./view/Page1.ts" />
/// <reference path="./view/Page2.ts" />
new view.Page2();
new view.Page1();
