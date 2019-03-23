(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-customer></app-customer>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customer.component */ "./src/app/customers/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _customers_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customers/customer.component.css":
/*!**************************************************!*\
  !*** ./src/app/customers/customer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customers/customer.component.html":
/*!***************************************************!*\
  !*** ./src/app/customers/customer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <div class=\"card-header\">\n    Phase Form\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          (ngSubmit)=\"save()\"\n          [formGroup]=\"customerForm\">\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"firstNameId\">First Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"firstNameId\"\n                 type=\"text\"\n                 placeholder=\"First Name (required)\"\n                 formControlName=\"firstName\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('firstName').touched ||\n                                            customerForm.get('firstName').dirty) &&\n                                            !customerForm.get('firstName').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('firstName').errors?.required\">\n              Please enter your first name.\n            </span>\n            <span *ngIf=\"customerForm.get('firstName').errors?.minlength\">\n              The first name must be longer than 3 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"lastNameId\">Last Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"lastNameId\"\n                 type=\"text\"\n                 placeholder=\"Last Name (required)\"\n                 formControlName=\"lastName\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('lastName').touched ||\n                                            customerForm.get('lastName').dirty) &&\n                                            !customerForm.get('lastName').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('lastName').errors?.required\">\n              Please enter your last name.\n            </span>\n            <span *ngIf=\"customerForm.get('lastName').errors?.maxlength\">\n              The last name must be less than 50 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"companyId\">Company Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"companyId\"\n                 type=\"text\"\n                 placeholder=\"Company (required)\"\n                 formControlName=\"company\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('company').touched ||\n                                            customerForm.get('company').dirty) &&\n                                            !customerForm.get('company').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('company').errors?.required\">\n              Please enter the name of your company.\n            </span>\n            <span *ngIf=\"customerForm.get('company').errors?.maxlength\">\n              The Company name must be longer than 3 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div formGroupName=\"emailGroup\">\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\"\n                 for=\"emailId\">Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"emailId\"\n                   type=\"email\"\n                   placeholder=\"Email (required)\"\n                   formControlName=\"email\"\n                   [ngClass]=\"{'is-invalid': emailMessage }\" />\n            <span class=\"invalid-feedback\">\n              {{ emailMessage }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\"\n                 for=\"confirmEmailId\">Confirm Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"confirmEmailId\"\n                   type=\"email\"\n                   placeholder=\"Confirm Email (required)\"\n                   formControlName=\"confirmEmail\"\n                   [ngClass]=\"{'is-invalid': customerForm.get('emailGroup').errors ||\n                                             ((customerForm.get('emailGroup.confirmEmail').touched || \n                                              customerForm.get('emailGroup.confirmEmail').dirty) && \n                                              !customerForm.get('emailGroup.confirmEmail').valid) }\" />\n            <span class=\"invalid-feedback\">\n              <span *ngIf=\"customerForm.get('emailGroup.confirmEmail').errors?.required\">\n                Please confirm your email address.\n              </span>\n              <span *ngIf=\"customerForm.get('emailGroup').errors?.match\">\n                The confirmation does not match the email address.\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"phoneId\">Phone</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"phoneId\"\n                 type=\"tel\"\n                 placeholder=\"Phone\"\n                 formControlName=\"phone\"\n                 [ngClass]=\"{'is-invalid': !customerForm.get('phone').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('phone').errors?.required\">\n              Please enter your phone number.\n            </span>\n          </span>\n        </div>\n      </div>\n      <div formArrayName=\"addresses\"\n      *ngFor=\"let address of addresses.controls; let i=index\">\n\n   <div [formGroupName]=\"i\">\n     \n\n\n     <div class=\"form-group row mb-2\">\n       <label class=\"col-md-2 col-form-label\"\n              attr.for=\"{{'street1Id' + i}}\">Street Address 1</label>\n       <div class=\"col-md-8\">\n         <input class=\"form-control\"\n                id=\"{{'street1Id' + i}}\"\n                type=\"text\"\n                placeholder=\"Street address (required)\"\n                formControlName=\"street1\"\n                [ngClass]=\"{'is-invalid': (address.controls.street1.touched || \n                                           address.controls.street1.dirty) && \n                                           !address.controls.street1.valid }\">\n         <span class=\"invalid-feedback\">\n           <span *ngIf=\"address.controls.street1.errors?.required\">\n             Please enter your street address.\n           </span>\n         </span>\n       </div>\n     </div>\n\n     <div class=\"form-group row mb-2\">\n       <label class=\"col-md-2 col-form-label\"\n              attr.for=\"{{'street2Id' + i}}\">Street Address 2</label>\n       <div class=\"col-md-8\">\n         <input class=\"form-control\"\n                id=\"{{'street2Id' + i}}\"\n                type=\"text\"\n                placeholder=\"Street address (second line)\"\n                formControlName=\"street2\">\n       </div>\n     </div>\n\n     <div class=\"form-group row mb-2\">\n       <label class=\"col-md-2 col-form-label\"\n              attr.for=\"{{'cityId' + i}}\">City, State, Zip Code</label>\n       <div class=\"col-md-3\">\n         <input class=\"form-control\"\n                id=\"{{'cityId' + i}}\"\n                type=\"text\"\n                placeholder=\"City\"\n                formControlName=\"city\">\n       </div>\n       <div class=\"col-md-3\">\n         <select class=\"form-control\"\n                 id=\"{{'stateId' + i}}\"\n                 formControlName=\"state\">\n           <option value=\"\"\n                   disabled\n                   selected\n                   hidden>Select a State...</option>\n           <option value=\"AL\">Alabama</option>\n           <option value=\"AK\">Alaska</option>\n           <option value=\"AZ\">Arizona</option>\n           <option value=\"AR\">Arkansas</option>\n           <option value=\"CA\">California</option>\n           <option value=\"CO\">Colorado</option>\n           <option value=\"WI\">Wisconsin</option>\n           <option value=\"WY\">Wyoming</option>\n         </select>\n       </div>\n       <div class=\"col-md-2\">\n         <input class=\"form-control\"\n                id=\"{{'zipId' + i}}\"\n                type=\"number\"\n                placeholder=\"Zip Code\"\n                formControlName=\"zip\">\n       </div>\n     </div>\n   \n </div>\n</div>\n      <div class=\"card border-primary mb-3\">\n          <div class=\"card-header\" (click)=\"card1Expanded=!card1Expanded\">Phase 1</div>\n          <div class=\"card-body\" *ngIf=\"card1Expanded\">\n            <div class=\"card-deck\">\n      <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n          <div class=\"card-header\">Phase 1 Features</div>\n          <div class=\"card-body\">\n            <li>20-foot long observation chamber</li>\n            <li>10-foot long burn chamber</li>\n            <li>2-day training course for up to 10 instructors</li>\n            <li>Instructor manuals and standard operating procedures (SOPs)</li>\n            <li>Instructors receive Certification to Instruct the Drager Curriculum upon completion</li>\n\n          </div>\n        </div>\n        <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n            <div class=\"card-header\">Phase 1 Add Ons</div>\n            <div class=\"card-body\">\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\"\n                             id=\"sendp1_addon_1Id\"\n                             type=\"checkbox\"\n                             formControlName=\"p1_addon_1\">Mobile structure \n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\"\n                               id=\"sendp1_addon_2Id\"\n                               type=\"checkbox\"\n                               formControlName=\"p1_addon_2\">Custom paint colors and logos\n                      </label>\n                    </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\"\n                                 id=\"sendp1_addon_3Id\"\n                                 type=\"checkbox\"\n                                 formControlName=\"p1_addon_3\">Emergency vent hatch in burn chamber\n                        </label>\n                      </div>\n                      <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\"\n                                   id=\"sendp1_addon_4Id\"\n                                   type=\"checkbox\"\n                                   formControlName=\"p1_addon_4\">Replacement burn chamber \n                          </label>\n                        </div>\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                              <input class=\"form-check-input\"\n                                     id=\"sendp1_addon_5Id\"\n                                     type=\"checkbox\"\n                                     formControlName=\"p1_addon_5\">Temperature monitoring\n                            </label>\n                          </div>\n            </div>\n          </div>\n          \n          </div>\n          <div class=\"card-deck\">\n          <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n              <img class=\"card-img-top\" src=\"assets/Pictures/PhaseOne_picture.jpg\" alt=\"Phase 1 Picture\">\n              \n            </div>\n            <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                <img class=\"card-img-top\" src=\"assets/Pictures/PhaseOne_blueprint.PNG\" alt=\"Phase 1 Blueprint\">\n                \n              </div>\n            </div>\n          <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\"\n                       id=\"sendphase1Id\"\n                       type=\"checkbox\"\n                       formControlName=\"phase1\">Select\n              </label>\n            </div>\n          </div>\n\n\n\n\n\n</div>\n\n                <div class=\"card border-primary mb-3\">\n                    <div class=\"card-header\" (click)=\"card2Expanded=!card2Expanded\">Phase 2</div>\n                    <div class=\"card-body\" *ngIf=\"card2Expanded\">\n                      <div class=\"card-deck\">\n                <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                    <div class=\"card-header\">Phase 2 Features</div>\n                    <div class=\"card-body\">\n                      <li>Grade A 40-foot (12 meter) container</li>\n                      <li>High performance insulation</li>\n                      <li>6-gauge steel exterior</li>\n                      <li>1-gauge sheet metal covering insulation</li>\n                      <li>10-gauge steel flooring in burn chamber</li>\n                      <li>5/16” (8 mm) chain on walls, ceiling, and doors of burn areas to hold Class A materials</li>\n                      <li>Partition with entry door</li>\n                      <li>Controllable ventilation system</li>\n                      <li>Concrete paving to line entire burn chamber floor</li>\n                      <li>55-gallon crib fire drum</li>\n                      <li>Side entry doors (2) without locks</li>\n                      <li>Access for hose line</li>\n                      <li>Low flow water nozzle - 30/60/95/125 GPM (113/226/360/473 LPM)</li>\n                      <li>Paint - red oxide</li>\n                      <li>2-day train-the-trainer course with certified instructors</li>\n\n\n                      \n                    </div>\n                  </div>\n                  <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                      <div class=\"card-header\">Phase 2 Add Ons</div>\n                      <div class=\"card-body\">\n                          <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\"\n                                       id=\"sendp2_addon_1Id\"\n                                       type=\"checkbox\"\n                                       formControlName=\"p2_addon_1\">Custom paint colors and logos\n                              </label>\n                            </div>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\"\n                                         id=\"sendp2_addon_2Id\"\n                                         type=\"checkbox\"\n                                         formControlName=\"p2_addon_2\">Mobile unit for transport\n                                </label>\n                              </div>\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\"\n                                           id=\"sendp2_addon_3Id\"\n                                           type=\"checkbox\"\n                                           formControlName=\"p2_addon_3\">Emergency vent hatch - burn chamber\n                                  </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\"\n                                             id=\"sendp2_addon_4Id\"\n                                             type=\"checkbox\"\n                                             formControlName=\"p2_addon_4\">Additional 20’ (6 meter) container and burn chamber\n                                    </label>\n                                  </div>\n                                  <div class=\"form-check\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\"\n                                               id=\"sendp2_addon_5Id\"\n                                               type=\"checkbox\"\n                                               formControlName=\"p2_addon_5\">hermocouple temperature monitoring system\n                                      </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                          <input class=\"form-check-input\"\n                                                 id=\"sendp6_addon_3Id\"\n                                                 type=\"checkbox\"\n                                                 formControlName=\"p2_addon_6\">Custom container configurations\n                                        </label>\n                                      </div>\n                                      <div class=\"form-check\">\n                                          <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\"\n                                                   id=\"sendp7_addon_3Id\"\n                                                   type=\"checkbox\"\n                                                   formControlName=\"p2_addon_7\">Phase 2+ Mobile : Advanced Interior Attack \n                                          </label>\n                                        </div>\n                      </div>\n                    </div>\n                    </div>\n                    <div class=\"card-deck\">\n                        <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                            <img class=\"card-img-top\" src=\"assets/Pictures/PhaseTwo_picture.jpg\" alt=\"Phase 2 Picture\">\n                          </div>\n                          <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                              <img class=\"card-img-top\" src=\"assets/Pictures/PhaseTwo_blueprint.PNG\" alt=\"Phase 2 Blueprint\">\n                            </div>\n                          </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\"\n                                 id=\"sendphase2Id\"\n                                 type=\"checkbox\"\n                                 formControlName=\"phase2\">Select\n                        </label>\n                      </div>\n                    </div>\n\n\n   \n          \n\n        </div>\n        <div class=\"card border-primary mb-3\">\n            <div class=\"card-header\" (click)=\"card3Expanded=!card3Expanded\">Phase 3</div>\n            <div class=\"card-body\" *ngIf=\"card3Expanded\">\n            <div class=\"card-deck\">\n                <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                    <div class=\"card-header\">Phase 3 Features</div>\n                    <div class=\"card-body\">\n                      <li>One trip 20-foot container</li>\n                      <li>High performance insulation</li>\n                      <li>16 gauge steel exterior</li>\n                      <li>11 gauge sheet metal covering insulation</li>\n                      <li>11 gauge steel flooring</li>\n                      <li>5/16\" chain on walls, ceiling, and doors of burn area to hold Class A materials</li>\n                      <li>Ventilation-limited compartment</li>\n                      <li>Partition with barn-style entry door</li>\n                      <li>Interior heat protectors</li>\n                      <li>Concrete pavers lining entire floor</li>\n                      <li>Controllable ventilation system</li>\n                      <li>Compartment door to produce backdraft condition when opened</li>\n                      <li>55-gallon crib fire drum</li>\n                      <li>Paint - red oxide</li>\n                      <li>Low flow nozzle 30/60/95/125 GPM</li>\n                      <li>2-day train-the-trainer course with certified instructors</li>\n                      \n                    </div>\n                  </div>\n                  <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                      <div class=\"card-header\">Phase 3 Add Ons</div>\n                      <div class=\"card-body\">\n                          <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\"\n                                       id=\"sendp3_addon_1Id\"\n                                       type=\"checkbox\"\n                                       formControlName=\"p3_addon_1\">Custom paint colors and logos\n                              </label>\n                            </div>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\"\n                                         id=\"sendp3_addon_2Id\"\n                                         type=\"checkbox\"\n                                         formControlName=\"p3_addon_2\">Emergency vent hatch-burn chamber\n                                </label>\n                              </div>\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\"\n                                           id=\"sendp3_addon_3Id\"\n                                           type=\"checkbox\"\n                                           formControlName=\"p3_addon_3\">Thermocouple temperature monitoring system\n                                  </label>\n                                </div>\n                      </div>\n                    </div>\n\n                </div>\n                <div class=\"card-deck\">\n                    <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                        <img class=\"card-img-top\" src=\"assets/Pictures/PhaseThree_picture.PNG\" alt=\"Phase 3 Picture\">\n                      </div>\n                      <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                          <img class=\"card-img-top\" src=\"assets/Pictures/PhaseThree_blueprint.PNG\" alt=\"Phase 3 Blueprint\">\n                        </div>\n                      </div>\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\"\n                             id=\"sendphase3Id\"\n                             type=\"checkbox\"\n                             formControlName=\"phase3\">Select\n                    </label>\n                  </div>\n                </div>\n\n            \n          \n\n        </div>\n        <div class=\"card border-primary mb-3\">\n            <div class=\"card-header\" (click)=\"card4Expanded=!card4Expanded\">Phase 4</div>\n            <div class=\"card-body\" *ngIf=\"card4Expanded\">\n            <div class=\"card-deck\">\n                <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                    <div class=\"card-header\">Phase 4 Features</div>\n                    <div class=\"card-body\">\n                      <li>Two (2) 40 ft. (12.19 m) containers and one (1) 20 ft (6.09 m) container</li>\n                      <li>High performance insulation</li>\n                      <li>16 gauge steel exterior</li>\n                      <li>11 gauge sheet metal covering insulation in burn chamber</li>\n                      <li>11 gauge steel flooring in burn chamber and adjacent area</li>\n                      <li>5/16\" chain on walls, ceiling, and doors of burn areas to hold Class A materials</li>\n                      <li>Entry room leading to garage structure</li>\n                      <li>Partition from entry room to main garage area with entry door</li>\n                      <li>Double wide burn chamber in garage structure</li>\n                      <li>Controllable ventilation system</li>\n                      <li>Concrete paving to line burn area floor</li>\n                      <li>55-gallon crib fire drum (x2)</li>\n                      <li>2 side entry doors without locks in garage</li>\n                      <li>2 side entry doors without locks in entry room</li>\n                      <li>Access for hose lines</li>\n                      <li>Paint red oxide</li>\n                      <li>A/B/C/D Signage</li>\n                      <li>Low flow nozzle – 30/60/95/125 GPM</li>\n                      <li>2-day train-the-trainer course with certified instructors</li>\n                    </div>\n                  </div>\n                  <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                      <div class=\"card-header\">Phase 4 Add Ons</div>\n                      <div class=\"card-body\">\n                          <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\"\n                                       id=\"sendp4_addon_1Id\"\n                                       type=\"checkbox\"\n                                       formControlName=\"p4_addon_1\">Custom paint colors and logos\n                              </label>\n                            </div>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\"\n                                         id=\"sendp4_addon_2Id\"\n                                         type=\"checkbox\"\n                                         formControlName=\"p4_addon_2\">Car prop\n                                </label>\n                              </div>\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\"\n                                           id=\"sendp4_addon_3Id\"\n                                           type=\"checkbox\"\n                                           formControlName=\"p4_addon_3\">Emergency vent hatch-burn chamber\n                                  </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\"\n                                             id=\"sendp4_addon_4Id\"\n                                             type=\"checkbox\"\n                                             formControlName=\"p4_addon_4\">Thermocouple temperature monitoring system\n                                    </label>\n                                  </div>\n                                  <div class=\"form-check\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\"\n                                               id=\"sendp4_addon_5Id\"\n                                               type=\"checkbox\"\n                                               formControlName=\"p4_addon_5\">Custom container configurations\n                                      </label>\n                                    </div>\n                      </div>\n                    </div>\n                    </div>\n                    <div class=\"card-deck\">\n                        <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                            <img class=\"card-img-top\" src=\"assets/Pictures/PhaseFour_picture.PNG\" alt=\"Phase 4 Picture\">\n                          </div>\n                          <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                              <img class=\"card-img-top\" src=\"assets/Pictures/PhaseFour_blueprint.PNG\" alt=\"Phase 4 Blueprint\">\n                            </div>\n                          </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\"\n                                 id=\"sendphase4Id\"\n                                 type=\"checkbox\"\n                                 formControlName=\"phase4\">Select\n                        </label>\n                      </div>\n            </div>\n                \n           \n          \n\n        </div>\n        <div class=\"card border-primary mb-3\">\n            <div class=\"card-header\" (click)=\"card5Expanded=!card5Expanded\">Phase 5</div>\n            <div class=\"card-body\" *ngIf=\"card5Expanded\">\n            <div class=\"card-deck\">\n                <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                    <div class=\"card-header\">Phase 5 Features</div>\n                    <div class=\"card-body\">\n                      <li>Complete Dräger Swede Survival Phase 5 System</li>\n                      <li>2-day training course for up to 10 instructors</li>\n                      <li>Instructor manuals and SOPs</li>\n                      <li>Instructors receive Certification to Instruct the Dräger Curriculum upon completion</li>\n                    </div>\n                  </div>\n                  <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                      <div class=\"card-header\">Phase 5 Add Ons</div>\n                      <div class=\"card-body\">\n                          <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\"\n                                       id=\"sendp5_addon_1Id\"\n                                       type=\"checkbox\"\n                                       formControlName=\"p5_addon_1\">Forcible entry door\n                              </label>\n                            </div>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\"\n                                         id=\"sendp5_addon_2Id\"\n                                         type=\"checkbox\"\n                                         formControlName=\"p5_addon_2\">Denver Drill prop\n                                </label>\n                              </div>\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\"\n                                           id=\"sendp5_addon_3Id\"\n                                           type=\"checkbox\"\n                                           formControlName=\"p5_addon_3\">Breaching wall prop\n                                  </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\"\n                                             id=\"sendp5_addon_4Id\"\n                                             type=\"checkbox\"\n                                             formControlName=\"p5_addon_4\">Pitched roof\n                                    </label>\n                                  </div>\n                                  <div class=\"form-check\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\"\n                                               id=\"sendp5_addon_5Id\"\n                                               type=\"checkbox\"\n                                               formControlName=\"p5_addon_5\">Flat roof\n                                      </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                          <input class=\"form-check-input\"\n                                                 id=\"sendp5_addon_6Id\"\n                                                 type=\"checkbox\"\n                                                 formControlName=\"p5_addon_6\">Rappel bar\n                                        </label>\n                                      </div>\n                                      <div class=\"form-check\">\n                                          <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\"\n                                                   id=\"sendp5_addon_7Id\"\n                                                   type=\"checkbox\"\n                                                   formControlName=\"p5_addon_7\">Bail out prop\n                                          </label>\n                                        </div>\n                                        <div class=\"form-check\">\n                                            <label class=\"form-check-label\">\n                                              <input class=\"form-check-input\"\n                                                     id=\"sendp5_addon_8Id\"\n                                                     type=\"checkbox\"\n                                                     formControlName=\"p5_addon_8\">Moveable walls\n                                            </label>\n                                          </div>\n                                          <div class=\"form-check\">\n                                              <label class=\"form-check-label\">\n                                                <input class=\"form-check-input\"\n                                                       id=\"sendp5_addon_9Id\"\n                                                       type=\"checkbox\"\n                                                       formControlName=\"p5_addon_9\">Roof reinforcement package\n                                              </label>\n                                            </div>\n                                            <div class=\"form-check\">\n                                                <label class=\"form-check-label\">\n                                                  <input class=\"form-check-input\"\n                                                         id=\"sendp5_addon_10Id\"\n                                                         type=\"checkbox\"\n                                                         formControlName=\"p5_addon_10\">Additional staircase\n                                                </label>\n                                              </div>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                    <input class=\"form-check-input\"\n                                                           id=\"sendp5_addon_11Id\"\n                                                           type=\"checkbox\"\n                                                           formControlName=\"p5_addon_11\">Additional doors and windows\n                                                  </label>\n                                                </div>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\"\n                                                             id=\"sendp5_addon_12Id\"\n                                                             type=\"checkbox\"\n                                                             formControlName=\"p5_addon_12\">Emergency ventilation\n                                                    </label>\n                                                  </div>\n                                                  <div class=\"form-check\">\n                                                      <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\"\n                                                               id=\"sendp5_addon_13Id\"\n                                                               type=\"checkbox\"\n                                                               formControlName=\"p5_addon_13\">Customized options to meet specific requirements\n                                                      </label>\n                                                    </div>\n                      </div>\n                    </div>\n            </div>\n            <div class=\"card-deck\">\n                <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                    <img class=\"card-img-top\" src=\"assets/Pictures/PhaseFive_picture.jpg\" alt=\"Phase 5 Picture\">\n                  </div>\n                  </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\"\n                         id=\"sendphase5Id\"\n                         type=\"checkbox\"\n                         formControlName=\"phase5\">Select\n                </label>\n              </div>\n            </div>\n            \n              </div>\n              <div class=\"card border-primary mb-3\">\n                <div class=\"card-header\" (click)=\"card6Expanded=!card6Expanded\">Phase 6</div>\n                <div class=\"card-body\" *ngIf=\"card6Expanded\">\n                <div class=\"card-deck\">\n                    <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                        <div class=\"card-header\">Phase 6 Features</div>\n                        <div class=\"card-body\">\n                          <li>High performance insulation in burn chamber</li>\n                          <li>16-gauge steel exterior</li>\n                          <li>11-gauge sheet metal covering insulation</li>\n                          <li>5/16\" chain on walls, ceiling, and doors of burn chamber</li>\n                          <li>Two burn chambers―one in each of the 20-ft. containers</li>\n                          <li>Ventilation system</li>\n                          <li>Concrete paving stones lining burn chamber floor</li>\n                          <li>Side entry doors without locks</li>\n                          <li>Access for hose line</li>\n                        </div>\n                      </div>\n                      <div class=\"card border-primary mb-3\" style=\"max-width: 100rem;\">\n                          <div class=\"card-header\">Phase 6 Add Ons</div>\n                          <div class=\"card-body\">\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\"\n                                           id=\"sendp6_addon_1Id\"\n                                           type=\"checkbox\"\n                                           formControlName=\"p6_addon_1\">Custom paint colors and logos\n                                  </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\"\n                                             id=\"sendp6_addon_2Id\"\n                                             type=\"checkbox\"\n                                             formControlName=\"p6_addon_2\">Walkable roof platform―22' long x 8' wide\n                                    </label>\n                                  </div>\n                                  <div class=\"form-check\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\"\n                                               id=\"sendp6_addon_3Id\"\n                                               type=\"checkbox\"\n                                               formControlName=\"p6_addon_3\">Rooftop railings\n                                      </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                          <input class=\"form-check-input\"\n                                                 id=\"sendp6_addon_4Id\"\n                                                 type=\"checkbox\"\n                                                 formControlName=\"p6_addon_4\">Exterior stairs (with the roof platform)\n                                        </label>\n                                      </div>\n                                      <div class=\"form-check\">\n                                          <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\"\n                                                   id=\"sendp6_addon_5Id\"\n                                                   type=\"checkbox\"\n                                                   formControlName=\"p6_addon_5\">Pitched roof\n                                          </label>\n                                        </div>\n                                        <div class=\"form-check\">\n                                            <label class=\"form-check-label\">\n                                              <input class=\"form-check-input\"\n                                                     id=\"sendp6_addon_6Id\"\n                                                     type=\"checkbox\"\n                                                     formControlName=\"p6_addon_6\">Thermocouple temperature monitoring system\n                                            </label>\n                                          </div>\n                                          <div class=\"form-check\">\n                                              <label class=\"form-check-label\">\n                                                <input class=\"form-check-input\"\n                                                       id=\"sendp6_addon_7Id\"\n                                                       type=\"checkbox\"\n                                                       formControlName=\"p6_addon_7\">Custom container configurations\n                                              </label>\n                                            </div>\n                          </div>\n                        </div>\n                        </div>\n                        \n                        <div class=\"card-deck\">\n                            <div class=\"card border-primary mb-2\" style=\"max-width: 100rem;\">\n                                <img class=\"card-img-top\" src=\"assets/Pictures/PhaseSix_picture.jpg\" alt=\"Phase 6 Picture\">\n                              </div>\n                              </div>\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                              <input class=\"form-check-input\"\n                                     id=\"sendphase6Id\"\n                                     type=\"checkbox\"\n                                     formControlName=\"phase6\">Select\n                            </label>\n                          </div>\n                        </div>\n              </div>\n          \n\n\n\n \n\n      <div class=\"form-group row mb-2\">\n        <div class=\"offset-md-2 col-md-4\">\n          <button class=\"btn btn-primary mr-3\"\n                  type=\"submit\"\n                  style=\"width:80px\"\n                  [title]=\"customerForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\n                  [disabled]=\"!customerForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/customers/customer.component.ts ***!
  \*************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer */ "./src/app/customers/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
function ratingRange(min, max) {
    return function (c) {
        if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null;
    };
}
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.total = 0;
        this.validationMessages = {
            required: 'Please enter your email address.',
            email: 'Please enter a valid email address.'
        };
    }
    Object.defineProperty(CustomerComponent.prototype, "addresses", {
        get: function () {
            return this.customerForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: [null, ratingRange(1, 5)],
            sendCatalog: true,
            phase1: false,
            phase2: false,
            phase3: false,
            phase4: false,
            phase5: false,
            p1_addon_1: false,
            p1_addon_2: false,
            p1_addon_3: false,
            p1_addon_4: false,
            p1_addon_5: false,
            p2_addon_1: false,
            p2_addon_2: false,
            p2_addon_3: false,
            p2_addon_4: false,
            p2_addon_5: false,
            p2_addon_6: false,
            p2_addon_7: false,
            p3_addon_1: false,
            p3_addon_2: false,
            p3_addon_3: false,
            p4_addon_1: false,
            p4_addon_2: false,
            p4_addon_3: false,
            p4_addon_4: false,
            p4_addon_5: false,
            p5_addon_1: false,
            p5_addon_2: false,
            p5_addon_3: false,
            p5_addon_4: false,
            p5_addon_5: false,
            p5_addon_6: false,
            p5_addon_7: false,
            p5_addon_8: false,
            p5_addon_9: false,
            p5_addon_10: false,
            p5_addon_11: false,
            p5_addon_12: false,
            p5_addon_13: false,
            card1Expanded: false,
            card2Expanded: false,
            card3Expanded: false,
            card4Expanded: false,
            card5Expanded: false,
            card6Expanded: false,
            p6_addon_1: false,
            p6_addon_2: false,
            p6_addon_3: false,
            p6_addon_4: false,
            p6_addon_5: false,
            p6_addon_6: false,
            p6_addon_7: false,
            addresses: this.fb.array([this.buildAddress()])
        });
        this.customerForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(function (value) { return _this.setMessage(emailControl); });
    };
    CustomerComponent.prototype.addAddress = function () {
        this.addresses.push(this.buildAddress());
    };
    CustomerComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: 'home',
            street1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    };
    CustomerComponent.prototype.populateTestData = function () {
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
        });
        var addressGroup = this.fb.group({
            addressType: 'work',
            street1: 'Mermaid Quay',
            street2: '',
            city: 'Cardiff Bay',
            state: 'CA',
            zip: ''
        });
        this.customerForm.setControl('addresses', this.fb.array([addressGroup]));
    };
    CustomerComponent.prototype.save = function () {
        console.log(this.customerForm);
        if (this.customerForm.get('phase1')) {
            this.total = this.total + 46048;
        }
        if (this.customerForm.get('phase2')) {
            this.total = this.total + 46048;
        }
        if (this.customerForm.get('phase3')) {
            this.total = this.total + 46048;
        }
        if (this.customerForm.get('phase4')) {
            this.total = this.total + 76582;
        }
        if (this.customerForm.get('phase5')) {
            this.total = this.total + 204699;
        }
        if (this.customerForm.get('phase6')) {
            this.total = this.total + 128499;
        }
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
        console.log('Total: ', this.total);
    };
    CustomerComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        console.log(this.validationMessages);
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) { return _this.emailMessage += _this.validationMessages[key]; }).join(' ');
        }
    };
    CustomerComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customers/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customers/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer.ts":
/*!***************************************!*\
  !*** ./src/app/customers/customer.ts ***!
  \***************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, email, sendCatalog, addressType, street1, street2, city, state, phase1, phase2, phase3, phase4, phase5, p1_addon_1, p1_addon_2, p1_addon_3, p1_addon_4, p1_addon_5, p2_addon_1, p2_addon_2, p2_addon_3, p2_addon_4, p2_addon_5, p2_addon_6, p2_addon_7, p3_addon_1, p3_addon_2, p3_addon_3, p4_addon_1, p4_addon_2, p4_addon_3, p4_addon_4, p4_addon_5, p5_addon_1, p5_addon_2, p5_addon_3, p5_addon_4, p5_addon_5, p5_addon_6, p5_addon_7, p5_addon_8, p5_addon_9, p5_addon_10, p5_addon_11, p5_addon_12, p5_addon_13, p6_addon_1, p6_addon_2, p6_addon_3, p6_addon_4, p6_addon_5, p6_addon_6, p6_addon_7, card1Expanded, card2Expanded, card3Expanded, card4Expanded, card5Expanded, card6Expanded, total, company, zip) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (sendCatalog === void 0) { sendCatalog = false; }
        if (addressType === void 0) { addressType = 'home'; }
        if (state === void 0) { state = ''; }
        if (phase1 === void 0) { phase1 = false; }
        if (phase2 === void 0) { phase2 = false; }
        if (phase3 === void 0) { phase3 = false; }
        if (phase4 === void 0) { phase4 = false; }
        if (phase5 === void 0) { phase5 = false; }
        if (p1_addon_1 === void 0) { p1_addon_1 = false; }
        if (p1_addon_2 === void 0) { p1_addon_2 = false; }
        if (p1_addon_3 === void 0) { p1_addon_3 = false; }
        if (p1_addon_4 === void 0) { p1_addon_4 = false; }
        if (p1_addon_5 === void 0) { p1_addon_5 = false; }
        if (p2_addon_1 === void 0) { p2_addon_1 = false; }
        if (p2_addon_2 === void 0) { p2_addon_2 = false; }
        if (p2_addon_3 === void 0) { p2_addon_3 = false; }
        if (p2_addon_4 === void 0) { p2_addon_4 = false; }
        if (p2_addon_5 === void 0) { p2_addon_5 = false; }
        if (p2_addon_6 === void 0) { p2_addon_6 = false; }
        if (p2_addon_7 === void 0) { p2_addon_7 = false; }
        if (p3_addon_1 === void 0) { p3_addon_1 = false; }
        if (p3_addon_2 === void 0) { p3_addon_2 = false; }
        if (p3_addon_3 === void 0) { p3_addon_3 = false; }
        if (p4_addon_1 === void 0) { p4_addon_1 = false; }
        if (p4_addon_2 === void 0) { p4_addon_2 = false; }
        if (p4_addon_3 === void 0) { p4_addon_3 = false; }
        if (p4_addon_4 === void 0) { p4_addon_4 = false; }
        if (p4_addon_5 === void 0) { p4_addon_5 = false; }
        if (p5_addon_1 === void 0) { p5_addon_1 = false; }
        if (p5_addon_2 === void 0) { p5_addon_2 = false; }
        if (p5_addon_3 === void 0) { p5_addon_3 = false; }
        if (p5_addon_4 === void 0) { p5_addon_4 = false; }
        if (p5_addon_5 === void 0) { p5_addon_5 = false; }
        if (p5_addon_6 === void 0) { p5_addon_6 = false; }
        if (p5_addon_7 === void 0) { p5_addon_7 = false; }
        if (p5_addon_8 === void 0) { p5_addon_8 = false; }
        if (p5_addon_9 === void 0) { p5_addon_9 = false; }
        if (p5_addon_10 === void 0) { p5_addon_10 = false; }
        if (p5_addon_11 === void 0) { p5_addon_11 = false; }
        if (p5_addon_12 === void 0) { p5_addon_12 = false; }
        if (p5_addon_13 === void 0) { p5_addon_13 = false; }
        if (p6_addon_1 === void 0) { p6_addon_1 = false; }
        if (p6_addon_2 === void 0) { p6_addon_2 = false; }
        if (p6_addon_3 === void 0) { p6_addon_3 = false; }
        if (p6_addon_4 === void 0) { p6_addon_4 = false; }
        if (p6_addon_5 === void 0) { p6_addon_5 = false; }
        if (p6_addon_6 === void 0) { p6_addon_6 = false; }
        if (p6_addon_7 === void 0) { p6_addon_7 = false; }
        if (card1Expanded === void 0) { card1Expanded = false; }
        if (card2Expanded === void 0) { card2Expanded = false; }
        if (card3Expanded === void 0) { card3Expanded = false; }
        if (card4Expanded === void 0) { card4Expanded = false; }
        if (card5Expanded === void 0) { card5Expanded = false; }
        if (card6Expanded === void 0) { card6Expanded = false; }
        if (total === void 0) { total = 0; }
        if (company === void 0) { company = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sendCatalog = sendCatalog;
        this.addressType = addressType;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.phase1 = phase1;
        this.phase2 = phase2;
        this.phase3 = phase3;
        this.phase4 = phase4;
        this.phase5 = phase5;
        this.p1_addon_1 = p1_addon_1;
        this.p1_addon_2 = p1_addon_2;
        this.p1_addon_3 = p1_addon_3;
        this.p1_addon_4 = p1_addon_4;
        this.p1_addon_5 = p1_addon_5;
        this.p2_addon_1 = p2_addon_1;
        this.p2_addon_2 = p2_addon_2;
        this.p2_addon_3 = p2_addon_3;
        this.p2_addon_4 = p2_addon_4;
        this.p2_addon_5 = p2_addon_5;
        this.p2_addon_6 = p2_addon_6;
        this.p2_addon_7 = p2_addon_7;
        this.p3_addon_1 = p3_addon_1;
        this.p3_addon_2 = p3_addon_2;
        this.p3_addon_3 = p3_addon_3;
        this.p4_addon_1 = p4_addon_1;
        this.p4_addon_2 = p4_addon_2;
        this.p4_addon_3 = p4_addon_3;
        this.p4_addon_4 = p4_addon_4;
        this.p4_addon_5 = p4_addon_5;
        this.p5_addon_1 = p5_addon_1;
        this.p5_addon_2 = p5_addon_2;
        this.p5_addon_3 = p5_addon_3;
        this.p5_addon_4 = p5_addon_4;
        this.p5_addon_5 = p5_addon_5;
        this.p5_addon_6 = p5_addon_6;
        this.p5_addon_7 = p5_addon_7;
        this.p5_addon_8 = p5_addon_8;
        this.p5_addon_9 = p5_addon_9;
        this.p5_addon_10 = p5_addon_10;
        this.p5_addon_11 = p5_addon_11;
        this.p5_addon_12 = p5_addon_12;
        this.p5_addon_13 = p5_addon_13;
        this.p6_addon_1 = p6_addon_1;
        this.p6_addon_2 = p6_addon_2;
        this.p6_addon_3 = p6_addon_3;
        this.p6_addon_4 = p6_addon_4;
        this.p6_addon_5 = p6_addon_5;
        this.p6_addon_6 = p6_addon_6;
        this.p6_addon_7 = p6_addon_7;
        this.card1Expanded = card1Expanded;
        this.card2Expanded = card2Expanded;
        this.card3Expanded = card3Expanded;
        this.card4Expanded = card4Expanded;
        this.card5Expanded = card5Expanded;
        this.card6Expanded = card6Expanded;
        this.total = total;
        this.company = company;
        this.zip = zip;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hookt\OneDrive\Documents\Drager Demo\drager-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map