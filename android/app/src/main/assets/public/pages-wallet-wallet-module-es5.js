(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wallet/wallet.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wallet/wallet.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n      </ion-buttons>\n    <ion-title>Portefeuille</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div id=\"bg\"></div>\n  <ion-card class=\"bg-content\">\n    <ion-card-header>\n      <ion-card-title>\n          Porte-monnaie FineFood\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <ion-img src=\"../../../assets/images/logo.jpg\"></ion-img> -->\n      <ion-item>\n        <ion-icon name=\"wallet\"  slot=\"start\"></ion-icon>\n        <ion-label>2500 FF</ion-label>\n      </ion-item>\n      <p class=\"ion-text-center\">\n        Votre argent vous est compté en unités FF: 1 FF ==> 1 F CFA\n      </p>\n\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card class=\"bg-content-history\">\n   <ion-row> \n     <ion-col offset=\"3\" size=\"4\"> \n        <ion-button (click)=\"onViewHistory()\" >\n          Historique <ion-chip color=\"#fff\" mode=\"md\" outline=\"false\"><ion-icon name=\"eye\"></ion-icon></ion-chip> \n        </ion-button> \n    </ion-col> \n  </ion-row>\n\n   <ion-list *ngIf=\"history\" >\n     <ion-item button routerLink=\"/bills-history\"> <ion-label>Burger -- 650 FF</ion-label> </ion-item>\n     <ion-item button routerLink=\"/bills-history\"> <ion-label>Frites au poulet -- 1250 FF</ion-label> </ion-item>\n     <ion-item button routerLink=\"/bills-history\"> <ion-label>Riz au gras -- 450 FF</ion-label> </ion-item>\n     <ion-item button routerLink=\"/bills-history\"> <ion-label>Riz cantonnais -- 650 FF</ion-label> </ion-item>\n   </ion-list>\n\n  </ion-card>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/wallet/wallet.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/wallet/wallet.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]
    }
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-content-history {\n  position: absolute;\n  top: 45%;\n  left: 10%;\n  width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NwYXJ0YW5vdmljaC93b3Jrc3BhY2UvcHJvZmV0aW9uYWwgUHJvamVjdHMvRmluZUZvb2Qvc3JjL2FwcC9wYWdlcy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC93YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbnRlbnQtaGlzdG9yeSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDUlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIuYmctY29udGVudC1oaXN0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.ts ***!
  \*********************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WalletPage = /** @class */ (function () {
    function WalletPage() {
        this.history = false;
    }
    WalletPage.prototype.ngOnInit = function () {
    };
    WalletPage.prototype.onViewHistory = function () {
        this.history = !this.history;
    };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! raw-loader!./wallet.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/pages/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WalletPage);
    return WalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wallet-wallet-module-es5.js.map