(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"primary\">\n  <ion-title>\n    Au menu aujourd'hui\n  </ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides mode=\"md\" pager=\"md\" scrollbar=\"md\">\n    <ion-slide *ngFor=\"let dish of dishes\">\n      <ion-card>\n        <ion-img src=\"../../assets/images/{{dish.image}}\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>{{dish.name}}</ion-card-title>\n          <ion-card-subtitle>{{dish.price}} Francs FCFA</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <p>{{dish.description}}</p>\n          <ion-button>Commander <ion-icon name=\"pricetags\" slot=\"end\"></ion-icon> </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button routerLink=\"/wallet\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"wallet\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/signup\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"person-add\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/auth\" routerLinkActive=\"router-link-active\"  color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"log-in\"></ion-icon> </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"onFab()\"> <ion-icon [name]=\"default\"></ion-icon> </ion-fab-button>\n  </ion-fab> \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NwYXJ0YW5vdmljaC93b3Jrc3BhY2UvcHJvZmV0aW9uYWwgUHJvamVjdHMvRmluZUZvb2Qvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fab.service */ "./src/app/services/fab.service.ts");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(menu, fab_service) {
        this.menu = menu;
        this.fab_service = fab_service;
        this.toggled = false;
        this.default = 'add';
        this.dishes = [
            { name: 'Riz au gras', image: 'atieke.jpeg', price: 700, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?' },
            { name: 'Pizza mozarella', image: 'riz-gras.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?' },
            { name: 'Pizza africain', image: 'atieke.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?' },
            { name: 'Frites au poulet', image: 'riz-gras.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?' },
            { name: 'Riz contonnais', image: 'atieke.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?' },
        ];
    }
    Tab1Page.prototype.onFab = function () {
        this.fab_service.onFabClicked();
        this.default = this.fab_service.getDefault();
        this.toggled = this.fab_service.getToggled();
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_fab_service__WEBPACK_IMPORTED_MODULE_3__["FabService"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_fab_service__WEBPACK_IMPORTED_MODULE_3__["FabService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map