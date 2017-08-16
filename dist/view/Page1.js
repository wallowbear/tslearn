var view;
(function (view) {
    class Page1 {
        constructor() {
            console.log("page1");
        }
        ;
    }
    view.Page1 = Page1;
})(view || (view = {}));
