(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bill-bill-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bill/bill.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bill/bill.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        </ion-buttons>\n      <ion-title>Facture et Livraison</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>      \n          <form [formGroup]=\"deliveryForm\" (ngSubmit)=\"onSubmit()\">\n            <ion-item-group>\n              <ion-item-divider>\n                <ion-label>Lieu de livraison</ion-label>\n              </ion-item-divider>\n              \n              <ion-item (click)=\"onEatHere()\">\n                  <ion-label>Je mange sur place</ion-label>\n                  <ion-checkbox slot=\"start\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Quartier:  <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input formControlName=\"street\" required></ion-input>\n              </ion-item>\n        \n              <ion-item>\n                <ion-label>Lieu de livraison:  <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input formControlName=\"deliveryPlace\" required></ion-input>\n              </ion-item>\n            </ion-item-group>    \n\n            <!-- <ion-item-group>\n              <ion-item-divider>\n                <ion-label>Moyen de paiement</ion-label>\n              </ion-item-divider>\n              <ion-item>\n                  <ion-label>Choisissez: </ion-label>\n                  <ion-select formControlName=\"paymentMethod\">\n                    <ion-select-option value=\"flooz\">Flooz</ion-select-option>\n                    <ion-select-option value=\"tmoney\">Tmoney</ion-select-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>Numéro de téléphone</ion-label>\n                <ion-input formControlName=\"transactionNumber\" type=\"number\"></ion-input>\n              </ion-item>\n            </ion-item-group> -->\n    \n            <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"deliveryForm.invalid\">\n              Procéder\n            </ion-button>\n          </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bill/bill.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/bill/bill.module.ts ***!
  \*******************************************/
/*! exports provided: BillPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPageModule", function() { return BillPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bill_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill.page */ "./src/app/pages/bill/bill.page.ts");







var routes = [
    {
        path: '',
        component: _bill_page__WEBPACK_IMPORTED_MODULE_6__["BillPage"]
    }
];
var BillPageModule = /** @class */ (function () {
    function BillPageModule() {
    }
    BillPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bill_page__WEBPACK_IMPORTED_MODULE_6__["BillPage"]]
        })
    ], BillPageModule);
    return BillPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bill/bill.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/bill/bill.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGwvYmlsbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/bill/bill.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/bill/bill.page.ts ***!
  \*****************************************/
/*! exports provided: BillPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPage", function() { return BillPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BillPage = /** @class */ (function () {
    function BillPage() {
        this.deliveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            deliveryPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            transactionNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    BillPage.prototype.ngOnInit = function () {
    };
    BillPage.prototype.onSubmit = function () {
        console.log(this.deliveryForm.value);
    };
    BillPage.prototype.onEatHere = function () {
        if (this.deliveryForm.disabled) {
            this.deliveryForm.enable();
        }
        else if (!this.deliveryForm.disabled) {
            this.deliveryForm.disable();
        }
        else {
            //  Make a toast for refreshing this page cause of unattended error
            console.log('Something went wrong: The form is nor enabled nor disabled when user checks to eat on the place');
            console.log(this.deliveryForm.disabled);
        }
    };
    BillPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! raw-loader!./bill.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bill/bill.page.html"),
            styles: [__webpack_require__(/*! ./bill.page.scss */ "./src/app/pages/bill/bill.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BillPage);
    return BillPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bill-bill-module-es5.js.map