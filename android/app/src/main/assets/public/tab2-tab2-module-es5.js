(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Nos plats\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-card *ngFor=\"let dish of dishes\">\n        <ion-img src=\"../../assets/images/riz-gras.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>{{dish.name}}</ion-card-title>\n          <ion-card-subtitle>{{dish.price}} Francs CFA</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab facilis praesentium iste commodi laudantium? Nam quam eum, nostrum porro, adipisci aliquam corporis ut ad consequatur corrupti aliquid eaque nihil perferendis!\n          </p>\n          <ion-row>\n            <ion-col pull=\"-5\">\n                <ion-button>Commander <ion-icon name=\"pricetags\" slot=\"end\"></ion-icon> </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button routerLink=\"/wallet\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"wallet\"></ion-icon> </ion-fab-button>\n          <ion-fab-button routerLink=\"/signup\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"person-add\"></ion-icon> </ion-fab-button>\n          <ion-fab-button routerLink=\"/auth\" routerLinkActive=\"router-link-active\"  color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"log-in\"></ion-icon> </ion-fab-button>\n          <ion-fab-button color=\"secondary\" (click)=\"onFab()\"> <ion-icon [name]=\"default\"></ion-icon> </ion-fab-button>\n      </ion-fab> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fab.service */ "./src/app/services/fab.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(fab_service) {
        this.fab_service = fab_service;
        this.toggled = false;
        this.default = 'add';
        this.dishes = [
            { name: 'Riz au gras', price: 700 },
            { name: 'Pizza mozarella', price: 500 },
            { name: 'Pizza africain', price: 500 },
            { name: 'Frites au poulet', price: 500 },
            { name: 'Riz contonnais', price: 500 },
        ];
    }
    Tab2Page.prototype.onFab = function () {
        this.fab_service.onFabClicked();
        this.default = this.fab_service.getDefault();
        this.toggled = this.fab_service.getToggled();
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _services_fab_service__WEBPACK_IMPORTED_MODULE_2__["FabService"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fab_service__WEBPACK_IMPORTED_MODULE_2__["FabService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map