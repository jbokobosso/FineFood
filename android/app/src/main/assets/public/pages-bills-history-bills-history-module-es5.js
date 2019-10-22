(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bills-history-bills-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bills-history/bills-history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bills-history/bills-history.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        </ion-buttons>\n      <ion-title>Détails historique</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content>\n    <div id=\"bg\"></div>\n    <ion-card class=\"bg-content\">\n      <ion-card-header>\n        <ion-card-title>\n            Détails de l'achat\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n            <ion-item> <ion-label>Plat: Foufou sauce graine</ion-label> </ion-item>\n            <ion-item> <ion-label>Prix: 1250 FF</ion-label> </ion-item>\n            <ion-item> <ion-label>Date: 450 FF</ion-label> </ion-item>\n            <ion-item> <ion-label>Lieu livré: Consommé sur place</ion-label> </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/bills-history/bills-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bills-history/bills-history.module.ts ***!
  \*************************************************************/
/*! exports provided: BillsHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsHistoryPageModule", function() { return BillsHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bills_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bills-history.page */ "./src/app/pages/bills-history/bills-history.page.ts");







var routes = [
    {
        path: '',
        component: _bills_history_page__WEBPACK_IMPORTED_MODULE_6__["BillsHistoryPage"]
    }
];
var BillsHistoryPageModule = /** @class */ (function () {
    function BillsHistoryPageModule() {
    }
    BillsHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bills_history_page__WEBPACK_IMPORTED_MODULE_6__["BillsHistoryPage"]]
        })
    ], BillsHistoryPageModule);
    return BillsHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bills-history/bills-history.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/bills-history/bills-history.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGxzLWhpc3RvcnkvYmlsbHMtaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/bills-history/bills-history.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bills-history/bills-history.page.ts ***!
  \***********************************************************/
/*! exports provided: BillsHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsHistoryPage", function() { return BillsHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BillsHistoryPage = /** @class */ (function () {
    function BillsHistoryPage() {
    }
    BillsHistoryPage.prototype.ngOnInit = function () {
    };
    BillsHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bills-history',
            template: __webpack_require__(/*! raw-loader!./bills-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bills-history/bills-history.page.html"),
            styles: [__webpack_require__(/*! ./bills-history.page.scss */ "./src/app/pages/bills-history/bills-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BillsHistoryPage);
    return BillsHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bills-history-bills-history-module-es5.js.map