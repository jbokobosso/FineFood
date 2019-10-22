(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <ion-title>\n      Contenu du panier\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"!dishesIsEmpty()\">\n\n    <ion-card *ngFor=\"let dish of dishes; let i=index\" [attr.data-index]=\"i\">\n      <ion-img src=\"../../assets/images/riz-gras.jpeg\"></ion-img>\n      <ion-card-header>\n        <ion-card-title> {{dish.name}} </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Prix: </ion-label>\n          <ion-item>{{dish.price}} CFA</ion-item>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Quantité: </ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col offset=\"10\"> \n            <ion-buttons>\n              <ion-button (click)=\"onDeletePanierElement(i)\"> <ion-icon name=\"trash\" color=\"danger\"></ion-icon> </ion-button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n  <ion-list>\n    <ion-item (click)=\"onShowCodePromo()\">\n      <ion-label>J'ai un code promo</ion-label>\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n    </ion-item>\n\n    <ion-item *ngIf=\"codePromo\">\n      <ion-label>Entrez code promo</ion-label>\n      <ion-input focused=\"focused\" type=\"number\" placeholder=\"ICI\"></ion-input>\n    </ion-item>\n    \n    <br>\n    <ion-button routerLink=\"/bill\" class=\"ion-text-capitalize\" block color=\"primary\">\n      Confirmer commande <ion-icon slot=\"end\" name=\"checkmark-circle\"></ion-icon>\n    </ion-button>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button routerLink=\"/wallet\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"wallet\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/signup\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"person-add\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/auth\" routerLinkActive=\"router-link-active\"  color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"log-in\"></ion-icon> </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"onFab()\"> <ion-icon [name]=\"default\"></ion-icon> </ion-fab-button>\n  </ion-fab> \n\n</ion-content>\n\n<ion-content padding *ngIf=\"dishesIsEmpty()\">\n  <h1>Ton panier est vide</h1>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button routerLink=\"/wallet\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"wallet\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/signup\" color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"person-add\"></ion-icon> </ion-fab-button>\n      <ion-fab-button routerLink=\"/auth\" routerLinkActive=\"router-link-active\"  color=\"secondary\" *ngIf=\"toggled\"> <ion-icon name=\"log-in\"></ion-icon> </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"onFab()\"> <ion-icon [name]=\"default\"></ion-icon> </ion-fab-button>\n  </ion-fab> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fab.service */ "./src/app/services/fab.service.ts");



var Tab3Page = /** @class */ (function () {
    function Tab3Page(fab_service) {
        this.fab_service = fab_service;
        this.toggled = false;
        this.default = 'add';
        this.codePromo = false;
        this.dishes = [
            { name: 'Riz Gras', price: 700 },
            { name: 'Spaghétthi blanc', price: 500 }
        ];
    }
    Tab3Page.prototype.onFab = function () {
        this.fab_service.onFabClicked();
        this.default = this.fab_service.getDefault();
        this.toggled = this.fab_service.getToggled();
    };
    Tab3Page.prototype.onDeletePanierElement = function (i) {
        this.dishes.splice(this.dishes.indexOf(i), 1);
        // console.log(this.dishes);
    };
    Tab3Page.prototype.onShowCodePromo = function () {
        this.codePromo = !this.codePromo;
    };
    Tab3Page.prototype.dishesIsEmpty = function () {
        if (this.dishes.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _services_fab_service__WEBPACK_IMPORTED_MODULE_2__["FabService"] }
    ]; };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fab_service__WEBPACK_IMPORTED_MODULE_2__["FabService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map