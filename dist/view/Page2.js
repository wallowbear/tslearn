var view;
(function (view) {
    class Page2 {
        constructor() {
            console.log("page2");
        }
    }
    view.Page2 = Page2;
})(view || (view = {}));
