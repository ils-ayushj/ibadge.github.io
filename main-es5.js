function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-details/profile-details.component */
    "./src/app/profile-details/profile-details.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");
    /* harmony import */


    var _moderator_moderator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./moderator/moderator.component */
    "./src/app/moderator/moderator.component.ts");
    /* harmony import */


    var _assign_badge_assign_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./assign-badge/assign-badge.component */
    "./src/app/assign-badge/assign-badge.component.ts");
    /* harmony import */


    var _badges_badges_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./badges/badges.component */
    "./src/app/badges/badges.component.ts");
    /* harmony import */


    var _create_badge_create_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./create-badge/create-badge.component */
    "./src/app/create-badge/create-badge.component.ts");
    /* harmony import */


    var _practice_practice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./practice/practice.component */
    "./src/app/practice/practice.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'profile',
      component: _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_2__["ProfileDetailsComponent"]
    }, {
      path: 'userdetails',
      component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"]
    }, {
      path: 'moderator',
      component: _moderator_moderator_component__WEBPACK_IMPORTED_MODULE_5__["ModeratorComponent"]
    }, {
      path: 'assign-Badge',
      component: _assign_badge_assign_badge_component__WEBPACK_IMPORTED_MODULE_6__["AssignBadgeComponent"]
    }, {
      path: 'badges',
      component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_7__["BadgesComponent"]
    }, {
      path: 'create',
      component: _create_badge_create_badge_component__WEBPACK_IMPORTED_MODULE_8__["CreateBadgeComponent"]
    }, {
      path: 'practice',
      component: _practice_practice_component__WEBPACK_IMPORTED_MODULE_9__["PracticeComponent"]
    }, {
      path: 'update',
      component: _update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"]
    }, {
      path: 'view',
      component: _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "title",
        value: function title(_title) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-details/profile-details.component */
    "./src/app/profile-details/profile-details.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");
    /* harmony import */


    var _moderator_moderator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./moderator/moderator.component */
    "./src/app/moderator/moderator.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _assign_badge_assign_badge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./assign-badge/assign-badge.component */
    "./src/app/assign-badge/assign-badge.component.ts");
    /* harmony import */


    var _badges_badges_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./badges/badges.component */
    "./src/app/badges/badges.component.ts");
    /* harmony import */


    var _create_badge_create_badge_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./create-badge/create-badge.component */
    "./src/app/create-badge/create-badge.component.ts");
    /* harmony import */


    var _practice_practice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./practice/practice.component */
    "./src/app/practice/practice.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"],
        useValue: {
          hasBackdrop: false
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"]], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_5__["ProfileDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"], _moderator_moderator_component__WEBPACK_IMPORTED_MODULE_9__["ModeratorComponent"], _assign_badge_assign_badge_component__WEBPACK_IMPORTED_MODULE_14__["AssignBadgeComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_15__["BadgesComponent"], _create_badge_create_badge_component__WEBPACK_IMPORTED_MODULE_16__["CreateBadgeComponent"], _practice_practice_component__WEBPACK_IMPORTED_MODULE_17__["PracticeComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_21__["UpdateComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_22__["ViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"]],
        exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_5__["ProfileDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"], _moderator_moderator_component__WEBPACK_IMPORTED_MODULE_9__["ModeratorComponent"], _assign_badge_assign_badge_component__WEBPACK_IMPORTED_MODULE_14__["AssignBadgeComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_15__["BadgesComponent"], _create_badge_create_badge_component__WEBPACK_IMPORTED_MODULE_16__["CreateBadgeComponent"], _practice_practice_component__WEBPACK_IMPORTED_MODULE_17__["PracticeComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_21__["UpdateComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_22__["ViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"]],
          exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"]],
          entryComponents: [_practice_practice_component__WEBPACK_IMPORTED_MODULE_17__["PracticeComponent"]],
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"],
            useValue: {
              hasBackdrop: false
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/assign-badge/assign-badge.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/assign-badge/assign-badge.component.ts ***!
    \********************************************************/

  /*! exports provided: AssignBadgeComponent */

  /***/
  function srcAppAssignBadgeAssignBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignBadgeComponent", function () {
      return AssignBadgeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AssignBadgeComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Assign badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AssignBadgeComponent =
    /*#__PURE__*/
    function () {
      function AssignBadgeComponent(dialog) {
        _classCallCheck(this, AssignBadgeComponent);

        this.dialog = dialog;
        this.badges = [{
          Badge: 'assets/images/badge.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }, {
          Badge: 'assets/images/badge1.png'
        }];
      }

      _createClass(AssignBadgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }]);

      return AssignBadgeComponent;
    }();

    AssignBadgeComponent.ɵfac = function AssignBadgeComponent_Factory(t) {
      return new (t || AssignBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    AssignBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssignBadgeComponent,
      selectors: [["app-assign-badge"]],
      decls: 4,
      vars: 0,
      consts: [["mat-button", "", "color", "primary", 3, "click"], ["myDialog1", ""], [1, "card", "cover"], [1, "upper-section"], [1, "text"], [1, "close-Image"], ["align", "end"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "back-img"], [1, "lower-section"], [1, "badge-images"], [1, "img"], ["src", "assets/images/badge1.png", 1, "eye-img"], ["src", "assets/images/badge3.png", 1, "eye-img"], ["src", "assets/images/badge4.png", 1, "eye-img"], [1, "assign-btn"], ["type", "submit", 1, "btn-assign"]],
      template: function AssignBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignBadgeComponent_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.openDialogWithTemplateRef(_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignBadgeComponent_ng_template_2_Template, 49, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".cover[_ngcontent-%COMP%]{\r\n    width: 562px;\r\n    height: 319px;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    box-shadow: 0px 0px 15px #00000029;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: 50%;\r\n   left: 50%;\r\n   -webkit-transform:translate(-50%,-50%);\r\n           transform:translate(-50%,-50%); \r\n\r\n\r\n}\r\n.upper-section[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #F8FBFF;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n    padding-left: 20px;\r\n    float:left;\r\n    width: 50%;\r\n\r\n}\r\n.close-Image[_ngcontent-%COMP%]{\r\n \r\nfloat: right;\r\nwidth: 50%;\r\npadding-top: 20px;\r\n    padding-right: 10px;\r\n\r\n}\r\n.back-img[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('/assets/images/Close.png') ;\r\n    opacity: 1;\r\n    background-repeat: no-repeat;\r\n    float: right;\r\n}\r\n.badge-images[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n}\r\n.img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.eye-img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px 5px 0px 5px ;\r\n}\r\n.assign-btn[_ngcontent-%COMP%]{\r\n    padding-left: 20px;\r\n    margin-top: -24px;\r\n\r\n}\r\n.btn-assign[_ngcontent-%COMP%]{\r\n    width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\ntext-align: left;\r\nfont: Regular 22px/27px Roboto;\r\nletter-spacing: 0;\r\ncolor: #FFFFFF;\r\nopacity: 1;\r\nborder: none;\r\ntext-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduLWJhZGdlL2Fzc2lnbi1iYWRnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0Msa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtHQUNULFNBQVM7R0FDVCxzQ0FBOEI7V0FBOUIsOEJBQThCOzs7QUFHakM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVixnQkFBZ0I7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7O0FBRWQ7QUFDQTs7QUFFQSxZQUFZO0FBQ1osVUFBVTtBQUNWLGlCQUFpQjtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbi1iYWRnZS9hc3NpZ24tYmFkZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3ZlcntcclxuICAgIHdpZHRoOiA1NjJweDtcclxuICAgIGhlaWdodDogMzE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgIGxlZnQ6IDUwJTtcclxuICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxuXHJcblxyXG59XHJcbi51cHBlci1zZWN0aW9ue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGOEZCRkY7XHJcbn1cclxuLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBCb2xkIDIwcHgvMjRweCBSYWxld2F5O1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMyMjJDM0M7XHJcbm9wYWNpdHk6IDE7XHJcbm1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbn1cclxuLmNsb3NlLUltYWdle1xyXG4gXHJcbmZsb2F0OiByaWdodDtcclxud2lkdGg6IDUwJTtcclxucGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG4uYmFjay1pbWd7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvQ2xvc2UucG5nJykgO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJhZGdlLWltYWdlc3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uZXllLWltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHggNXB4IDtcclxufVxyXG4uYXNzaWduLWJ0bntcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG5cclxufVxyXG4uYnRuLWFzc2lnbntcclxuICAgIHdpZHRoOiA1MTZweDtcclxuaGVpZ2h0OiA2MHB4O1xyXG5iYWNrZ3JvdW5kOiAjMjU3OEI1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyOiAxcHggc29saWQgIzIyNzlCQztcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogUmVndWxhciAyMnB4LzI3cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICNGRkZGRkY7XHJcbm9wYWNpdHk6IDE7XHJcbmJvcmRlcjogbm9uZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-assign-badge',
          templateUrl: './assign-badge.component.html',
          styleUrls: ['./assign-badge.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/badges/badges.component.ts":
  /*!********************************************!*\
    !*** ./src/app/badges/badges.component.ts ***!
    \********************************************/

  /*! exports provided: BadgesComponent */

  /***/
  function srcAppBadgesBadgesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
      return BadgesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BadgesComponent_th_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_td_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r58.position, " ");
      }
    }

    function BadgesComponent_th_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Badges");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_td_48_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r59.Badge, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BadgesComponent_td_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BadgesComponent_td_48_span_1_Template, 2, 1, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.badges);
      }
    }

    function BadgesComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Badge Discription");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r63.Badgediscription);
      }
    }

    function BadgesComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_td_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r64.status, " ");
      }
    }

    function BadgesComponent_th_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_td_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BadgesComponent_td_57_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          return ctx_r66.openDialogWithTemplateRef(_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BadgesComponent_td_57_Template_a_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

          return ctx_r68.openDialogWithTemplateRef(_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_tr_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
      }
    }

    function BadgesComponent_tr_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
      }
    }

    function BadgesComponent_ng_template_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "change badge picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "H5", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Update badge info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Super friend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Helps everyone in personal and professional problems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "H5", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_ng_template_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Assign badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BadgesComponent_ng_template_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "change badge picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "H5", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create new badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 20, 30];
    };

    var BadgesComponent =
    /*#__PURE__*/
    function () {
      function BadgesComponent(dialog) {
        _classCallCheck(this, BadgesComponent);

        this.dialog = dialog;
        this.displayedColumns = ['position', 'Badge', 'Badgediscription', 'status', 'Action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.badges = [{
          Badge: 'assets/images/badge.png'
        }];
        this.Actions = [{
          Action: 'assets/images/eye.png'
        }, {
          Action: 'assets/images/add.png'
        }, {
          Action: 'assets/images/delete.png'
        }];
      }

      _createClass(BadgesComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }]);

      return BadgesComponent;
    }();

    BadgesComponent.ɵfac = function BadgesComponent_Factory(t) {
      return new (t || BadgesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    BadgesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BadgesComponent,
      selectors: [["app-badges"]],
      viewQuery: function BadgesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 69,
      vars: 5,
      consts: [[1, "left"], [1, "Admin"], [1, "Moderator"], [1, "left-border"], [1, "User"], [1, "User_symbol"], ["routerLink", "/moderator", 1, "User_type"], [1, "Badges"], [1, "badge_symbol"], ["routerlink", "#", 1, "badge-text"], [1, "Logout_section"], [1, "logout_symbol"], ["type", "submit", 1, "logout-btn"], [1, "right"], [1, "right-border"], [1, "right-btn"], [1, "plus-img"], [1, "addnew-section", 3, "click"], [1, "User-section"], [1, "user-text"], [1, "search-cover"], [1, "drp-cover"], [1, "sort-by"], [1, "sort-clr"], [1, "sort-symbol"], [1, "sort-text"], [1, "search-bar"], [1, "search-btn"], ["matInput", "", "placeholder", "search", 3, "keyup"], [1, "search-symbol"], [1, "table-section"], ["mat-table", "", 1, "back-clr", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "class", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Badge"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Badgediscription"], ["matColumnDef", "status"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["myDialog", ""], ["myDialog1", ""], ["myDialog3", ""], ["myDialog4", ""], ["mat-header-cell", "", 1, ""], ["mat-cell", ""], ["mat-header-cell", ""], [4, "ngFor", "ngForOf"], [1, "badge-img", 3, "src"], [1, "edit-cover-image", 3, "click"], ["src", "assets/images/eye.png", 1, "eye-img1"], ["src", "assets/images/edit.png", 1, "edit-img"], ["href", "#"], ["src", "assets/images/delete.png", 1, "delete-img"], ["mat-header-row", ""], ["mat-row", ""], [1, "card-cover"], [1, "upper-section"], [1, "text"], [1, "close-Image"], ["align", "end"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "back-img"], [1, "lower-section"], [1, "left-badge"], ["src", "assets/images/badge3.png", 1, "badge-cover-img"], [1, "badge-picture"], ["href", ""], [1, "right-section"], [1, "right-text"], ["type", "text", "placeholder", "super firend", 1, "input-text"], [1, "upper-text"], [1, "discription"], [1, "upper-discription"], ["type", "text", "placeholder", "Helps everyone in personal and professional problems", 1, "discription-text-input"], [1, "switch-section"], [1, "status"], ["id", "status", "data-toggle", "buttons", 1, "btn-group", "btn-switch"], [1, "btn", "btn-default", "btn-on", "active"], ["type", "radio", "value", "1", "name", "multifeatured_module[module_id][status]", "checked", "checked", 1, "btn-switch"], [1, "btn", "btn-default", "btn-off"], ["type", "radio", "value", "0", "name", "multifeatured_module[module_id][status]", 1, "btn-switch"], [1, "create-btn"], [1, "btn-create"], [1, "text-right"], [1, "upper-text-view"], [1, "discription-view"], [1, "upper-discription-view"], [1, "discription-text-view"], [1, "card", "cover"], [1, "badge-images"], [1, "img"], ["src", "assets/images/badge1.png", 1, "assign-view-section"], ["src", "assets/images/badge3.png", 1, "assign-view-section"], ["src", "assets/images/badge4.png", 1, "assign-view-section"], [1, "assign-btn"], ["type", "submit", 1, "btn-assign"], [1, "text-update"], [1, "update-btn"], [1, "update-section"]],
      template: function BadgesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VINAY SINGH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Moderator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Badges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BadgesComponent_Template_a_click_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return ctx.openDialogWithTemplateRef(_r56);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "add new badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Badges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Show All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "user type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BadgesComponent_Template_input_keyup_39_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BadgesComponent_th_44_Template, 2, 0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BadgesComponent_td_45_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BadgesComponent_th_47_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BadgesComponent_td_48_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BadgesComponent_th_50_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BadgesComponent_td_51_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BadgesComponent_th_53_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BadgesComponent_td_54_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, BadgesComponent_th_56_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BadgesComponent_td_57_Template, 7, 0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, BadgesComponent_tr_58_Template, 1, 0, "tr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, BadgesComponent_tr_59_Template, 1, 0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-paginator", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, BadgesComponent_ng_template_61_Template, 37, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, BadgesComponent_ng_template_63_Template, 33, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BadgesComponent_ng_template_65_Template, 49, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, BadgesComponent_ng_template_67_Template, 37, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n   \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n   \r\n  .back-clr[_ngcontent-%COMP%]{\r\n   border: none;\r\n  \r\n  }\r\n   \r\n  .edit-img[_ngcontent-%COMP%]{\r\n    width: 24px;\r\nheight: 24px;\r\n  }\r\n   \r\n  .delete-img[_ngcontent-%COMP%]{\r\n    width: 20px;\r\nheight: 24px;\r\nmargin-left: 10px;\r\n  }\r\n   \r\n  .badge-img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 10px;\r\n  }\r\n   \r\n  .head-cover[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color:#2A3F4C ;\r\n \r\n    text-align: center;\r\n    color: white;\r\n\r\n}\r\n   \r\n  .head-cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n}\r\n   \r\n  .no.head[_ngcontent-%COMP%]{\r\n  color: #222C3C;\r\n}\r\n   \r\n  .eye-img1[_ngcontent-%COMP%]{\r\n  width: 27px;\r\nheight: 14px;\r\n  margin: 0px 13px 0px 5px;\r\n}\r\n   \r\n  tr.mat-header-row[_ngcontent-%COMP%] {\r\n  height: 56px;\r\n  background: #DFEBFF 0% 0% no-repeat padding-box;\r\n  opacity: 1;\r\n  color:#222C3C\r\n}\r\n   \r\n  th.mat-header-cell[_ngcontent-%COMP%]{\r\n  color:#222C3C;\r\n  font: Bold 18px/21px Raleway;\r\n  opacity: 100%;\r\n  padding-left: 49px;\r\n \r\n}\r\n   \r\n  th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  padding-left: 41px;\r\n  border-bottom-width: 1px;\r\n  border-bottom-style: solid;\r\n}\r\n   \r\n  tr.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background: #F8FBFF 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n  }\r\n   \r\n  th.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n    padding-left: 30px;\r\n    \r\n    width: 10px;}\r\n   \r\n  \r\n   \r\n  .left[_ngcontent-%COMP%]{\r\n    width: 250px;\r\nheight: 1080px;\r\nbackground: #222C3C 0% 0% no-repeat padding-box;\r\nopacity: 1;\r\nfloat: left;\r\n}\r\n   \r\n  .Moderator[_ngcontent-%COMP%]{\r\n    top: 96px;\r\nleft: 42px;\r\nwidth: 73px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Light 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #ABB4C2;\r\nopacity: 1;\r\nposition: relative;\r\n\r\n}\r\n   \r\n  .Admin[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 66px;\r\nleft: 42px;\r\nwidth: 133px;\r\nheight: 24px;\r\ntext-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #FFFFFF;\r\ntext-transform: uppercase;\r\nopacity: 1;\r\n}\r\n   \r\n  .User[_ngcontent-%COMP%]{\r\n  top: 155px;\r\nleft: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\n}\r\n   \r\n  .User[_ngcontent-%COMP%]:hover{\r\n\r\nwidth: 233px;\r\nheight: 44px;\r\nbackground: #131A24 0% 0% no-repeat padding-box;\r\nborder-radius: 20px 0px 0px 20px;\r\ncolor: white;\r\nopacity: 1;\r\n\r\n}\r\n   \r\n  .User_symbol[_ngcontent-%COMP%]{\r\n  top: 12px;\r\nleft: 21px;\r\nwidth: 28px;\r\nheight: 18px;\r\nbackground: url('/assets/images/Livello_98.png');\r\nopacity: 1;\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\nbackground-repeat: no-repeat;\r\nposition: absolute;\r\n}\r\n   \r\n  .User_type[_ngcontent-%COMP%]{\r\n  top: 11px;\r\n  left: 69px;\r\nwidth: 41px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #5C7295;\r\nopacity: 1;\r\nposition: absolute;\r\ncursor: pointer;\r\n}\r\n   \r\n  .User_type[_ngcontent-%COMP%]:hover{\r\ncursor: pointer;\r\n}\r\n   \r\n  .Badge_type[_ngcontent-%COMP%]{\r\ntop: 11px;\r\nleft: 54px;\r\nwidth: 41px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #5C7295;\r\nopacity: 1;\r\nposition: absolute;\r\n\r\n}\r\n   \r\n  .Badges[_ngcontent-%COMP%]{\r\ntop: 210px;\r\nleft: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\n}\r\n   \r\n  .badge_symbol[_ngcontent-%COMP%]{\r\nposition: absolute;\r\ntop: 9px;\r\nleft: 23px;\r\nwidth: 16px;\r\nheight: 18px;\r\nbackground:url('/assets/images/stack.png');\r\nopacity: 1;\r\n\r\n}\r\n   \r\n  .Badges[_ngcontent-%COMP%]:hover{\r\nposition: absolute;\r\ntop: 210px;\r\nleft: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\nbackground: #131A24 0% 0% no-repeat padding-box;\r\nborder-radius: 20px 0px 0px 20px;\r\ncolor: white;\r\n}\r\n   \r\n  .badge-text[_ngcontent-%COMP%]{\r\n  top: 9px;\r\n  left: 59px;\r\n  width: 53px;\r\n  height: 19px;\r\n  text-align: left;\r\n  font: Regular 16px/19px Roboto ;\r\n  letter-spacing: 0;\r\n  color: #E9E9E9;\r\n  opacity: 1;\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n   \r\n  .badge-text[_ngcontent-%COMP%]:hover{\r\n\r\n\r\n\r\n\r\n}\r\n   \r\n  .plus-img[_ngcontent-%COMP%]{\r\n  background:url('/assets/images/plus.png');\r\n  top: 65px;\r\nleft: 1280px;\r\nwidth: 26px;\r\nheight: 26px;\r\nposition: absolute;\r\n}\r\n   \r\n  .addnew-section[_ngcontent-%COMP%]{\r\n  text-align: right;\r\nfont: Bold 20px/24px Roboto;\r\nletter-spacing: 0;\r\ncolor: #428DC5;\r\nopacity: 1;\r\nwidth: 143px;\r\nheight: 24px;\r\nposition: absolute;\r\ntop: 65px;\r\nleft: 1308px;\r\n\r\ncursor: pointer;\r\n\r\n}\r\n   \r\n  .addnew-section[_ngcontent-%COMP%]:hover{\r\n  color: #428DC5; ;  \r\n}\r\n   \r\n  .right-btn[_ngcontent-%COMP%]{\r\n  padding-top:20px;\r\n  float: right;\r\n}\r\n   \r\n  .logout-btn[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 19px;\r\n  text-align: left;\r\n  font: Regular 16px/19px Roboto;\r\n  letter-spacing: 0;\r\n  color: #E9E9E9;\r\n  opacity: 1;\r\n  position: relative;\r\n  top: 30px;\r\n  border: none;\r\n  left: 80px;\r\n  background-color: #222C3C;\r\n}\r\n   \r\n  .logout_symbol[_ngcontent-%COMP%]{\r\n  \r\nwidth: 14px;\r\nheight: 15px;\r\nbackground:  url('/assets/images/Icons with numbers.png');\r\nopacity: 1;\r\nposition: absolute;\r\n    left: 53px;\r\n    top: 32px;\r\n\r\n}\r\n   \r\n  .Logout_section[_ngcontent-%COMP%]{\r\n    top: 1011px;\r\n    left: 17px;\r\n    width: 221px;\r\n    height: 0px;\r\n    border: 1px solid #161E2B;\r\n    opacity: 1;\r\n    position: absolute;\r\n}\r\n   \r\n  .right[_ngcontent-%COMP%]{\r\n    float:left;\r\n    width:80%;\r\n}\r\n   \r\n  .User-section[_ngcontent-%COMP%]{\r\n  top: 60px;\r\n  left: 305px;\r\n  width: 64px;\r\n  height: 55px;\r\n  background: url(/assets/images/satck1.png);\r\n  opacity: 1;\r\n  position: absolute;\r\n  background-repeat: no-repeat;\r\n  background-origin: content-box;\r\n\r\n}\r\n   \r\n  .user-text[_ngcontent-%COMP%]{\r\n    top: 51px;\r\nleft: 337px;\r\nwidth: 87px;\r\nheight: 37px;\r\ntext-align: left;\r\nfont: Bold 32px/37px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;   \r\nposition: absolute;\r\n\r\n}\r\n   \r\n  .sort-by[_ngcontent-%COMP%]{\r\n  width: 139px;\r\n  height: 40px;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 3px;\r\n  opacity: 1;\r\n  \r\n}\r\n   \r\n  .sort-clr[_ngcontent-%COMP%]\r\n{\r\n  width: 75px;\r\n  height: 19px;\r\n  text-align: left;\r\n  font: Regular 16px/19px Raleway;\r\n  letter-spacing: 0;\r\n  color: #161E2B;\r\n  opacity: 1;\r\n  padding-top: 7px;\r\n  padding-left: 9px;\r\n   \r\n}\r\n   \r\n  .sort-symbol[_ngcontent-%COMP%]{\r\n \r\nwidth: 18px;\r\nheight: 10px;\r\nbackground-image: url('/assets/images/down-chevron.png');\r\nopacity: 1;\r\nbackground-repeat: no-repeat;\r\nposition: absolute;\r\n    top: 16px;\r\n    left: 92px;\r\n\r\n}\r\n   \r\n  .sort-text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Raleway;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nwidth: 48px;\r\n    height: 14px;\r\n    position: relative;\r\n    top: -45px;\r\n    left: 12px;\r\n    background-color: white;\r\n\r\n}\r\n   \r\n  .search-bar[_ngcontent-%COMP%]{\r\n  position: relative;\r\n    top: 15%;\r\n    left: -10%;\r\n    opacity: 0.8;\r\n\r\n}\r\n   \r\n  .search-btn[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 29px;\r\n    border: none;\r\n    border-bottom: 1px solid #A4A4A4;\r\n padding-left: 10px;\r\n    text-align: left;\r\nfont: Regular 16px/19px Raleway;\r\nletter-spacing: 0;\r\ncolor: #A4A4A4;\r\nopacity: 1;\r\n}\r\n   \r\n  .search-symbol[_ngcontent-%COMP%]{\r\n   \r\nwidth: 18px;\r\nheight: 18px;\r\nbackground:url('/assets/images/search.png');\r\nopacity: 1;\r\nmargin-left: -22px;\r\nposition: absolute;\r\ntop: 2px;\r\n}\r\n   \r\n  .user-section-border[_ngcontent-%COMP%]{\r\n    border-top: 1px solid black;\r\n}\r\n   \r\n  \r\n   \r\n  .table-section[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 726px;\r\n    float:left;\r\n    margin-left: 24px;\r\n   \r\n}\r\n   \r\n  .search-cover[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  height: 140px;\r\n  width: 151px;\r\n  float: right;\r\n \r\n}\r\n   \r\n  .drp-cover[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 44%;\r\n  left: -118%;\r\n}\r\n   \r\n  th.mat-header-cell[_ngcontent-%COMP%] {\r\n    color: #222C3C;\r\n    width: 102px;\r\n}\r\n   \r\n  \r\n   \r\n  .card-cover[_ngcontent-%COMP%]{\r\n  width: 562px;\r\nheight: 453px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nbox-shadow: 0px 0px 15px #00000029;\r\nborder-radius: 10px;\r\nopacity: 1;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%); \r\n}\r\n   \r\n  .upper-section[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #F2F6FE;\r\n  width: 562px;\r\n  height: 83px;\r\n  opacity: 1;\r\n}\r\n   \r\n  .text[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n  padding-left: 20px;\r\n  float:left;\r\n  width: 50%;\r\n\r\n}\r\n   \r\n  .back-img[_ngcontent-%COMP%]{\r\n  width: 24px;\r\n  height: 24px;\r\n  background: url('/assets/images/Close.png') ;\r\n  opacity: 1;\r\n  background-repeat: no-repeat;\r\n  float: right;\r\n}\r\n   \r\n  .lower-section[_ngcontent-%COMP%]{\r\n  width: 562px;\r\n  height: 253px;\r\n}\r\n   \r\n  .badge-cover-img[_ngcontent-%COMP%]{\r\n  width: 73px;\r\n  height: 73px;\r\n  margin-top: 31px;\r\n  margin-left: 31px;\r\n\r\n}\r\n   \r\n  .left-badge[_ngcontent-%COMP%]{\r\n  width: 142px;\r\n  height: 142px;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px dashed #707070;\r\n  border-radius: 10px;\r\n  opacity: 1;\r\n  margin-top: 20px;\r\n  margin-left: 20px;\r\n  float: left;\r\n}\r\n   \r\n  .right-section[_ngcontent-%COMP%]{\r\n  width: 350px;\r\n  height: 265px;\r\n  float: left;\r\n \r\n}\r\n   \r\n  .text-right[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\nfloat: left;\r\npadding-left: 10px;\r\npadding-top: 10px;\r\n}\r\n   \r\n  .input-text[_ngcontent-%COMP%]{\r\n  width: 349px;\r\n  height: 50px;\r\n  padding-left: 10px;\r\n}\r\n   \r\n  .right-text[_ngcontent-%COMP%]{\r\n  width: 350px;\r\nheight: 50px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nborder: 1px solid #C8CFD9;\r\nborder-radius: 3px;\r\nopacity: 1;\r\nmargin-top: 24px;\r\nmargin-left: 21px;\r\n}\r\n   \r\n  .upper-text[_ngcontent-%COMP%]{\r\n  width: 69px;\r\nheight: 14px;\r\ntext-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1.7;\r\nbackground-color: white;\r\nposition: relative;\r\ntop: -60px;\r\nleft: 8px;\r\n}\r\n   \r\n  .discription[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n  margin-top: 20px;\r\n  \r\n}\r\n   \r\n  .discription-text-input[_ngcontent-%COMP%]{\r\n\r\n  width: 349px;\r\n  height: 78px;\r\n  border: 1px solid #b7aeae;\r\n  padding-bottom: 30px;\r\n    padding-left: 10px;\r\n}\r\n   \r\n  .upper-discription[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  \r\n  width: -4px;\r\n  height: 10px;\r\n  \r\n  \r\n  position: relative;\r\n  top: 10px;\r\n  left: 10px;\r\n\r\n}\r\n   \r\n  \r\n   \r\n  .switch-section[_ngcontent-%COMP%]{\r\n  width: 159px;\r\nheight: 64px;\r\nmargin-top: 7px;\r\nmargin-left: 20px;\r\n}\r\n   \r\n  .status[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Regular 12px/14px Raleway;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\n}\r\n   \r\n  .btn-default.btn-on.active[_ngcontent-%COMP%]{color: white;\r\n  border-radius: 0px 20px 20px 0px;\r\n  opacity: 1;\r\n  background-color: #5BB75B;\r\n  padding-top: 10px;\r\n  color: white;\r\n}\r\n   \r\n  .btn-default.btn-on[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  color: #A4A4A4;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 0px 20px 20px 0px;\r\n  opacity: 1;\r\n  font-size: 14px;\r\n\r\n}\r\n   \r\n  .btn-default.btn-off[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  color: #A4A4A4;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 0px 20px 20px 0px;\r\n  opacity: 1;\r\n  font-size: 14px;\r\n\r\n}\r\n   \r\n  .btn-default.btn-off.active[_ngcontent-%COMP%]{background-color: #DA4F49;color: white;\r\n  \r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 0px 20px 20px 0px;\r\n  padding-top: 10px;\r\n  color: white;\r\n  opacity: 1;}\r\n   \r\n  .btn-switch[_ngcontent-%COMP%]{\r\n      border-radius: 0px 20px 20px 0px;\r\n      width: 150px;\r\n      height: 43px;\r\n      font-size: 14px;\r\n  }\r\n   \r\n  .btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:first-child:not(:last-child):not(.dropdown-toggle) {\r\n      \r\n      \r\n      border-radius: 20px 0px 0px 20px;\r\n  }\r\n   \r\n  .create-btn[_ngcontent-%COMP%]{\r\n      width: 516px;\r\n      height: 60px;\r\n      margin:10px auto;\r\n      padding-top: 29px;;\r\n  }\r\n   \r\n  .btn-create[_ngcontent-%COMP%]{\r\n      width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\nopacity: 1;\r\ncolor:white;\r\n      font-size:20px;\r\n      border: none;\r\n      \r\n  }\r\n   \r\n  .update-btn[_ngcontent-%COMP%]{\r\n    width: 516px;\r\n    height: 60px;\r\n    margin:10px auto;\r\n    padding-top: 29px;;\r\n}\r\n   \r\n  .update-section[_ngcontent-%COMP%]{\r\n  width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\nopacity: 1;\r\ncolor:white;\r\n  font-size:20px;\r\n  border: none;\r\n  \r\n}\r\n   \r\n  .edit-cover-image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n   \r\n  \r\n   \r\n  .cover[_ngcontent-%COMP%]{\r\n    width: 562px;\r\n    height: 319px;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    box-shadow: 0px 0px 15px #00000029;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: 50%;\r\n   left: 50%;\r\n   -webkit-transform:translate(-50%,-50%);\r\n           transform:translate(-50%,-50%); \r\n\r\n\r\n}\r\n   \r\n  .upper-section[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #F8FBFF;\r\n}\r\n   \r\n  .text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n    padding-left: 20px;\r\n    float:left;\r\n    width: 50%;\r\n\r\n}\r\n   \r\n  .badge-picture[_ngcontent-%COMP%] {\r\n  padding-top: 45px;\r\n}\r\n   \r\n  .close-Image[_ngcontent-%COMP%]{\r\n  float: right;\r\n  width: 50%;\r\n  padding-top: 9px;\r\n  padding-right: 20px;\r\n}\r\n   \r\n  .back-img[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('/assets/images/Close.png') ;\r\n    opacity: 1;\r\n    background-repeat: no-repeat;\r\n    float: right;\r\n}\r\n   \r\n  .badge-images[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n}\r\n   \r\n  .img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n   \r\n  .assign-view-section[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px 5px 0px 5px ;\r\n}\r\n   \r\n  .assign-btn[_ngcontent-%COMP%]{\r\n    padding-left: 20px;\r\n    margin-top: -24px;\r\n\r\n}\r\n   \r\n  .btn-assign[_ngcontent-%COMP%]{\r\n    width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\ntext-align: left;\r\nfont: Regular 22px/27px Roboto;\r\nletter-spacing: 0;\r\ncolor: #FFFFFF;\r\nopacity: 1;\r\nborder: none;\r\ntext-align: center;\r\n}\r\n   \r\n  .text-update[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  padding-left: 20px;\r\n  width: 250px;\r\n  float: left;\r\n}\r\n   \r\n  \r\n   \r\n  .left-border[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #161E2B;\r\n    width: 200px;\r\n    padding-top: 100px;\r\n    margin: 20px auto;\r\n\r\n}\r\n   \r\n  .right-border[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #ccd2da38;\r\n    width: 98%;\r\n    padding-top: 119px;\r\n    margin: 20px auto;\r\n\r\n}\r\n   \r\n  .upper-text-view[_ngcontent-%COMP%]{\r\n  width: 69px;\r\nheight: 14px;\r\ntext-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 0.7;\r\nbackground-color: white;\r\nposition: relative;\r\ntop: -10px;\r\nleft: -82px;\r\n}\r\n   \r\n  .discription-view[_ngcontent-%COMP%]{\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 3px;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n  margin-left: 25px;\r\n  width: 350px;\r\n  height: 99px;\r\n}\r\n   \r\n  .discription-text-view[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\n\r\nmargin-left: 10px;\r\nopacity: 1;\r\n}\r\n   \r\n  .upper-discription-view[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nposition: relative;\r\n  opacity: 0.7;\r\n  left: 10px;\r\n  top: -10px;\r\n  background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtHQUNDLFlBQVk7O0VBRWI7O0VBQ0E7SUFDRSxXQUFXO0FBQ2YsWUFBWTtFQUNWOztFQUNBO0lBQ0UsV0FBVztBQUNmLFlBQVk7QUFDWixpQkFBaUI7RUFDZjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5Qjs7SUFFekIsa0JBQWtCO0lBQ2xCLFlBQVk7O0FBRWhCOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFDQTtFQUNFLFdBQVc7QUFDYixZQUFZO0VBQ1Ysd0JBQXdCO0FBQzFCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxVQUFVO0VBQ1Y7QUFDRjs7RUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQjs7QUFFcEI7O0VBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0VBRUU7SUFDRSwrQ0FBK0M7SUFDL0MsVUFBVTtFQUNaOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXLENBQUM7O0VBRWQsY0FBYzs7RUFDZDtJQUNFLFlBQVk7QUFDaEIsY0FBYztBQUNkLCtDQUErQztBQUMvQyxVQUFVO0FBQ1YsV0FBVztBQUNYOztFQUNBO0lBQ0ksU0FBUztBQUNiLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysa0JBQWtCOztBQUVsQjs7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IsVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1Y7O0VBQ0E7RUFDRSxVQUFVO0FBQ1osVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osVUFBVTtBQUNWLGtCQUFrQjtBQUNsQjs7RUFDQTs7QUFFQSxZQUFZO0FBQ1osWUFBWTtBQUNaLCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEMsWUFBWTtBQUNaLFVBQVU7O0FBRVY7O0VBQ0E7RUFDRSxTQUFTO0FBQ1gsVUFBVTtBQUNWLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0RBQWdEO0FBQ2hELFVBQVU7QUFDVix3QkFBZ0I7QUFBaEIsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEI7O0VBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmOztFQUNBO0FBQ0EsZUFBZTtBQUNmOztFQUNBO0FBQ0EsU0FBUztBQUNULFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysa0JBQWtCOztBQUVsQjs7RUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1YsWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCOztFQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixVQUFVO0FBQ1YsV0FBVztBQUNYLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsVUFBVTs7QUFFVjs7RUFDQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osVUFBVTtBQUNWLGtCQUFrQjtBQUNsQiwrQ0FBK0M7QUFDL0MsZ0NBQWdDO0FBQ2hDLFlBQVk7QUFDWjs7RUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztFQUNBOzs7QUFHQTs7OzthQUlhOztBQUViOztFQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkIsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxZQUFZOztBQUVaLGVBQWU7O0FBRWY7O0VBQ0E7RUFDRSxjQUFjO0FBQ2hCOztFQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7RUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztFQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1oseURBQXlEO0FBQ3pELFVBQVU7QUFDVixrQkFBa0I7SUFDZCxVQUFVO0lBQ1YsU0FBUzs7QUFFYjs7RUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7RUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0VBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDhCQUE4Qjs7QUFFaEM7O0VBQ0E7SUFDSSxTQUFTO0FBQ2IsV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVixrQkFBa0I7O0FBRWxCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVOztBQUVaOztFQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjs7RUFFQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLHdEQUF3RDtBQUN4RCxVQUFVO0FBQ1YsNEJBQTRCO0FBQzVCLGtCQUFrQjtJQUNkLFNBQVM7SUFDVCxVQUFVOztBQUVkOztFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFdBQVc7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCOztBQUUzQjs7RUFDQTtFQUNFLGtCQUFrQjtJQUNoQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7O0FBRWhCOztFQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0NBQ25DLGtCQUFrQjtJQUNmLGdCQUFnQjtBQUNwQiwrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7O0VBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSOztFQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztFQUNBOzs7Ozs7Ozs7Ozs7OztHQWNHOztFQUNIO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjs7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7RUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztFQUNBLGlCQUFpQjs7RUFFakI7RUFDRSxZQUFZO0FBQ2QsYUFBYTtBQUNiLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFNBQVM7QUFDVCxzQ0FBOEI7UUFBOUIsOEJBQThCO0FBQzlCOztFQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVixnQkFBZ0I7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7O0FBRVo7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7RUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5COztFQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7O0FBRWI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxZQUFZO0FBQ2QsWUFBWTtBQUNaLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCOztFQUNBO0VBQ0UsV0FBVztBQUNiLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFNBQVM7QUFDVDs7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOztFQUNBOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtJQUNsQixrQkFBa0I7QUFDdEI7O0VBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7O0FBRVo7O0VBR0EsbUJBQW1COztFQUNuQjtFQUNFLFlBQVk7QUFDZCxZQUFZO0FBQ1osZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQiwrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7O0VBR0UsMkJBQTJCLFlBQVk7RUFDdkMsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGVBQWU7O0FBRWpCOztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwrQ0FBK0M7RUFDL0MseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsZUFBZTs7QUFFakI7O0VBQ0UsNEJBQTRCLHlCQUF5QixDQUFDLFlBQVk7O0VBRWxFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVLENBQUM7O0VBQ1g7TUFDSSxnQ0FBZ0M7TUFDaEMsWUFBWTtNQUNaLFlBQVk7TUFDWixlQUFlO0VBQ25COztFQUNBO01BQ0ksZ0NBQWdDO01BQ2hDLG1DQUFtQztNQUNuQyxnQ0FBZ0M7RUFDcEM7O0VBQ0E7TUFDSSxZQUFZO01BQ1osWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7O0VBQ0E7TUFDSSxZQUFZO0FBQ2xCLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBQ3pCLFVBQVU7QUFDVixXQUFXO01BQ0wsY0FBYztNQUNkLFlBQVk7O0VBRWhCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztFQUNBO0VBQ0UsWUFBWTtBQUNkLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBQ3pCLFVBQVU7QUFDVixXQUFXO0VBQ1QsY0FBYztFQUNkLFlBQVk7O0FBRWQ7O0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLFdBQVc7O0VBRVg7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLCtDQUErQztJQUMvQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0dBQ1QsU0FBUztHQUNULHNDQUE4QjtXQUE5Qiw4QkFBOEI7OztBQUdqQzs7RUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsZ0JBQWdCO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVOztBQUVkOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztFQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztFQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztFQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztFQUNBO0lBQ0ksWUFBWTtBQUNoQixZQUFZO0FBQ1osK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0VBR0EsS0FBSzs7RUFDTDtFQUNFLGdDQUFnQztJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7O0VBQ0E7RUFDRSxrQ0FBa0M7SUFDaEMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztFQUNBO0VBQ0UsV0FBVztBQUNiLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFdBQVc7QUFDWDs7RUFDQTtFQUNFLCtDQUErQztFQUMvQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjOztBQUVkLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1Y7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsa0JBQWtCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuYmFjay1jbHJ7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICBcclxuICB9XHJcbiAgLmVkaXQtaW1ne1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbmhlaWdodDogMjRweDtcclxuICB9XHJcbiAgLmRlbGV0ZS1pbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyNHB4O1xyXG5tYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgLmJhZGdlLWltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkLWNvdmVye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkEzRjRDIDtcclxuIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uaGVhZC1jb3ZlciBoMXtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ubm8uaGVhZHtcclxuICBjb2xvcjogIzIyMkMzQztcclxufVxyXG4uZXllLWltZzF7XHJcbiAgd2lkdGg6IDI3cHg7XHJcbmhlaWdodDogMTRweDtcclxuICBtYXJnaW46IDBweCAxM3B4IDBweCA1cHg7XHJcbn1cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kOiAjREZFQkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiMyMjJDM0NcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgY29sb3I6IzIyMkMzQztcclxuICBmb250OiBCb2xkIDE4cHgvMjFweCBSYWxld2F5O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0OXB4O1xyXG4gXHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDFweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiAgdHIubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGQkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjhweDsgKi9cclxuICAgIHdpZHRoOiAxMHB4O31cclxuXHJcbiAgLyogQWRtaW4gY3NzICovXHJcbiAgLmxlZnR7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbmhlaWdodDogMTA4MHB4O1xyXG5iYWNrZ3JvdW5kOiAjMjIyQzNDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxub3BhY2l0eTogMTtcclxuZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLk1vZGVyYXRvcntcclxuICAgIHRvcDogOTZweDtcclxubGVmdDogNDJweDtcclxud2lkdGg6IDczcHg7XHJcbmhlaWdodDogMTlweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogTGlnaHQgMTZweC8xOXB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjQUJCNEMyO1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcbi5BZG1pbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjZweDtcclxubGVmdDogNDJweDtcclxud2lkdGg6IDEzM3B4O1xyXG5oZWlnaHQ6IDI0cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IEJvbGQgMjBweC8yNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogI0ZGRkZGRjtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxub3BhY2l0eTogMTtcclxufVxyXG4uVXNlcntcclxuICB0b3A6IDE1NXB4O1xyXG5sZWZ0OiAxN3B4O1xyXG53aWR0aDogMjMzcHg7XHJcbmhlaWdodDogNDRweDtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5Vc2VyOmhvdmVye1xyXG5cclxud2lkdGg6IDIzM3B4O1xyXG5oZWlnaHQ6IDQ0cHg7XHJcbmJhY2tncm91bmQ6ICMxMzFBMjQgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcclxuY29sb3I6IHdoaXRlO1xyXG5vcGFjaXR5OiAxO1xyXG5cclxufVxyXG4uVXNlcl9zeW1ib2x7XHJcbiAgdG9wOiAxMnB4O1xyXG5sZWZ0OiAyMXB4O1xyXG53aWR0aDogMjhweDtcclxuaGVpZ2h0OiAxOHB4O1xyXG5iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0xpdmVsbG9fOTgucG5nJyk7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBzdGlja3k7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uVXNlcl90eXBle1xyXG4gIHRvcDogMTFweDtcclxuICBsZWZ0OiA2OXB4O1xyXG53aWR0aDogNDFweDtcclxuaGVpZ2h0OiAxOXB4O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzVDNzI5NTtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlVzZXJfdHlwZTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5CYWRnZV90eXBle1xyXG50b3A6IDExcHg7XHJcbmxlZnQ6IDU0cHg7XHJcbndpZHRoOiA0MXB4O1xyXG5oZWlnaHQ6IDE5cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjNUM3Mjk1O1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG59XHJcblxyXG4uQmFkZ2Vze1xyXG50b3A6IDIxMHB4O1xyXG5sZWZ0OiAxN3B4O1xyXG53aWR0aDogMjMzcHg7XHJcbmhlaWdodDogNDRweDtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5iYWRnZV9zeW1ib2x7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA5cHg7XHJcbmxlZnQ6IDIzcHg7XHJcbndpZHRoOiAxNnB4O1xyXG5oZWlnaHQ6IDE4cHg7XHJcbmJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltYWdlcy9zdGFjay5wbmcnKTtcclxub3BhY2l0eTogMTtcclxuXHJcbn1cclxuLkJhZGdlczpob3ZlcntcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDIxMHB4O1xyXG5sZWZ0OiAxN3B4O1xyXG53aWR0aDogMjMzcHg7XHJcbmhlaWdodDogNDRweDtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5iYWNrZ3JvdW5kOiAjMTMxQTI0IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLXRleHR7XHJcbiAgdG9wOiA5cHg7XHJcbiAgbGVmdDogNTlweDtcclxuICB3aWR0aDogNTNweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG8gO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGNvbG9yOiAjRTlFOUU5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmFkZ2UtdGV4dDpob3ZlcntcclxuXHJcblxyXG4vKiB3aWR0aDogMjMzcHg7XHJcbmhlaWdodDogNDRweDtcclxuYmFja2dyb3VuZDogIzEzMUEyNCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xyXG5vcGFjaXR5OiAxOyAqL1xyXG5cclxufVxyXG4ucGx1cy1pbWd7XHJcbiAgYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1hZ2VzL3BsdXMucG5nJyk7XHJcbiAgdG9wOiA2NXB4O1xyXG5sZWZ0OiAxMjgwcHg7XHJcbndpZHRoOiAyNnB4O1xyXG5oZWlnaHQ6IDI2cHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYWRkbmV3LXNlY3Rpb257XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbmZvbnQ6IEJvbGQgMjBweC8yNHB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjNDI4REM1O1xyXG5vcGFjaXR5OiAxO1xyXG53aWR0aDogMTQzcHg7XHJcbmhlaWdodDogMjRweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDY1cHg7XHJcbmxlZnQ6IDEzMDhweDtcclxuXHJcbmN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmFkZG5ldy1zZWN0aW9uOmhvdmVye1xyXG4gIGNvbG9yOiAjNDI4REM1OyA7ICBcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQtYnRue1xyXG4gIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5sb2dvdXQtYnRue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMTlweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJvYm90bztcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBjb2xvcjogI0U5RTlFOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGxlZnQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMkMzQztcclxufVxyXG4ubG9nb3V0X3N5bWJvbHtcclxuICBcclxud2lkdGg6IDE0cHg7XHJcbmhlaWdodDogMTVweDtcclxuYmFja2dyb3VuZDogIHVybCgnL2Fzc2V0cy9pbWFnZXMvSWNvbnMgd2l0aCBudW1iZXJzLnBuZycpO1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1M3B4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG5cclxufVxyXG4uTG9nb3V0X3NlY3Rpb257XHJcbiAgICB0b3A6IDEwMTFweDtcclxuICAgIGxlZnQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMjIxcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNjFFMkI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5yaWdodHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbn1cclxuLlVzZXItc2VjdGlvbntcclxuICB0b3A6IDYwcHg7XHJcbiAgbGVmdDogMzA1cHg7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9zYXRjazEucG5nKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuXHJcbn1cclxuLnVzZXItdGV4dHtcclxuICAgIHRvcDogNTFweDtcclxubGVmdDogMzM3cHg7XHJcbndpZHRoOiA4N3B4O1xyXG5oZWlnaHQ6IDM3cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IEJvbGQgMzJweC8zN3B4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzIyMkMzQztcclxub3BhY2l0eTogMTsgICBcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG4uc29ydC1ieXtcclxuICB3aWR0aDogMTM5cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgXHJcbn1cclxuLnNvcnQtY2xyXHJcbntcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSYWxld2F5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGNvbG9yOiAjMTYxRTJCO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgXHJcbn1cclxuXHJcbi5zb3J0LXN5bWJvbHtcclxuIFxyXG53aWR0aDogMThweDtcclxuaGVpZ2h0OiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Rvd24tY2hldnJvbi5wbmcnKTtcclxub3BhY2l0eTogMTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgbGVmdDogOTJweDtcclxuXHJcbn1cclxuLnNvcnQtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxud2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uc2VhcmNoLWJhcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcblxyXG59XHJcbi5zZWFyY2gtYnRue1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEE0QTQ7XHJcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDE2cHgvMTlweCBSYWxld2F5O1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICNBNEE0QTQ7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuLnNlYXJjaC1zeW1ib2x7XHJcbiAgIFxyXG53aWR0aDogMThweDtcclxuaGVpZ2h0OiAxOHB4O1xyXG5iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZycpO1xyXG5vcGFjaXR5OiAxO1xyXG5tYXJnaW4tbGVmdDogLTIycHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAycHg7XHJcbn1cclxuLnVzZXItc2VjdGlvbi1ib3JkZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLyogLnVzZXItYm9yZGVye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIzE2MUUyQjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0JTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxufVxyXG4uYmFkZ2UtYm9yZGVye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxNjFFMkI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0JTtcclxuICAgIHdpZHRoOiAyMTNweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbn0gKi9cclxuLnRhYmxlLXNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzI2cHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgIFxyXG59XHJcbi5zZWFyY2gtY292ZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgd2lkdGg6IDE1MXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuIFxyXG59XHJcbi5kcnAtY292ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNDQlO1xyXG4gIGxlZnQ6IC0xMTglO1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjogIzIyMkMzQztcclxuICAgIHdpZHRoOiAxMDJweDtcclxufVxyXG4vKiBjcmFldGUgYmFkZ2UgKi9cclxuXHJcbi5jYXJkLWNvdmVye1xyXG4gIHdpZHRoOiA1NjJweDtcclxuaGVpZ2h0OiA0NTNweDtcclxuYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA1MCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxufVxyXG4udXBwZXItc2VjdGlvbntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YyRjZGRTtcclxuICB3aWR0aDogNTYycHg7XHJcbiAgaGVpZ2h0OiA4M3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnRleHR7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogQm9sZCAyMHB4LzI0cHggUmFsZXdheTtcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMjIyQzNDO1xyXG5vcGFjaXR5OiAxO1xyXG5tYXJnaW4tdG9wOiAyOXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG59XHJcblxyXG4uYmFjay1pbWd7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvQ2xvc2UucG5nJykgO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmxvd2VyLXNlY3Rpb257XHJcbiAgd2lkdGg6IDU2MnB4O1xyXG4gIGhlaWdodDogMjUzcHg7XHJcbn1cclxuLmJhZGdlLWNvdmVyLWltZ3tcclxuICB3aWR0aDogNzNweDtcclxuICBoZWlnaHQ6IDczcHg7XHJcbiAgbWFyZ2luLXRvcDogMzFweDtcclxuICBtYXJnaW4tbGVmdDogMzFweDtcclxuXHJcbn1cclxuLmxlZnQtYmFkZ2V7XHJcbiAgd2lkdGg6IDE0MnB4O1xyXG4gIGhlaWdodDogMTQycHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM3MDcwNzA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnJpZ2h0LXNlY3Rpb257XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMjY1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiBcclxufVxyXG4udGV4dC1yaWdodHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMTtcclxuZmxvYXQ6IGxlZnQ7XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxucGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmlucHV0LXRleHR7XHJcbiAgd2lkdGg6IDM0OXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnJpZ2h0LXRleHR7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbm9wYWNpdHk6IDE7XHJcbm1hcmdpbi10b3A6IDI0cHg7XHJcbm1hcmdpbi1sZWZ0OiAyMXB4O1xyXG59XHJcbi51cHBlci10ZXh0e1xyXG4gIHdpZHRoOiA2OXB4O1xyXG5oZWlnaHQ6IDE0cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMTYxRTJCO1xyXG5vcGFjaXR5OiAxLjc7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogLTYwcHg7XHJcbmxlZnQ6IDhweDtcclxufVxyXG4uZGlzY3JpcHRpb257XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxufVxyXG4uZGlzY3JpcHRpb24tdGV4dC1pbnB1dHtcclxuXHJcbiAgd2lkdGg6IDM0OXB4O1xyXG4gIGhlaWdodDogNzhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjdhZWFlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi51cHBlci1kaXNjcmlwdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiBtYXJnaW4tdG9wOiA3OXB4OyAqL1xyXG4gIHdpZHRoOiAtNHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDEycHg7ICovXHJcbiAgLyogcGFkZGluZy10b3A6IDk0cHg7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi8qIHN3aXRjaCBzZWN0aW9uICovXHJcbi5zd2l0Y2gtc2VjdGlvbntcclxuICB3aWR0aDogMTU5cHg7XHJcbmhlaWdodDogNjRweDtcclxubWFyZ2luLXRvcDogN3B4O1xyXG5tYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uc3RhdHVze1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbiAgLmJ0bi1kZWZhdWx0LmJ0bi1vbi5hY3RpdmV7Y29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCQjc1QjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1kZWZhdWx0LmJ0bi1vbntcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogI0E0QTRBNDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxufVxyXG4uYnRuLWRlZmF1bHQuYnRuLW9mZntcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogI0E0QTRBNDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxufVxyXG4gIC5idG4tZGVmYXVsdC5idG4tb2ZmLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjREE0RjQ5O2NvbG9yOiB3aGl0ZTtcclxuICBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxO31cclxuICAuYnRuLXN3aXRjaHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XHJcbiAgICAgIC8qIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyAqL1xyXG4gICAgICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbiAgfVxyXG4gIC5jcmVhdGUtYnRue1xyXG4gICAgICB3aWR0aDogNTE2cHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgbWFyZ2luOjEwcHggYXV0bztcclxuICAgICAgcGFkZGluZy10b3A6IDI5cHg7O1xyXG4gIH1cclxuICAuYnRuLWNyZWF0ZXtcclxuICAgICAgd2lkdGg6IDUxNnB4O1xyXG5oZWlnaHQ6IDYwcHg7XHJcbmJhY2tncm91bmQ6ICMyNTc4QjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMjI3OUJDO1xyXG5vcGFjaXR5OiAxO1xyXG5jb2xvcjp3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgXHJcbiAgfVxyXG4gIC51cGRhdGUtYnRue1xyXG4gICAgd2lkdGg6IDUxNnB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOjEwcHggYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyOXB4OztcclxufVxyXG4udXBkYXRlLXNlY3Rpb257XHJcbiAgd2lkdGg6IDUxNnB4O1xyXG5oZWlnaHQ6IDYwcHg7XHJcbmJhY2tncm91bmQ6ICMyNTc4QjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMjI3OUJDO1xyXG5vcGFjaXR5OiAxO1xyXG5jb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6MjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgXHJcbn1cclxuICAuZWRpdC1jb3Zlci1pbWFnZSA6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBhc3NpZ24gKi9cclxuXHJcbiAgLmNvdmVye1xyXG4gICAgd2lkdGg6IDU2MnB4O1xyXG4gICAgaGVpZ2h0OiAzMTlweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgbGVmdDogNTAlO1xyXG4gICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7IFxyXG5cclxuXHJcbn1cclxuLnVwcGVyLXNlY3Rpb257XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y4RkJGRjtcclxufVxyXG4udGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IEJvbGQgMjBweC8yNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzIyMkMzQztcclxub3BhY2l0eTogMTtcclxubWFyZ2luLXRvcDogMjlweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxufVxyXG4uYmFkZ2UtcGljdHVyZSB7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbn1cclxuLmNsb3NlLUltYWdle1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uYmFjay1pbWd7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvQ2xvc2UucG5nJykgO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJhZGdlLWltYWdlc3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uYXNzaWduLXZpZXctc2VjdGlvbntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHggNXB4IDtcclxufVxyXG4uYXNzaWduLWJ0bntcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG5cclxufVxyXG4uYnRuLWFzc2lnbntcclxuICAgIHdpZHRoOiA1MTZweDtcclxuaGVpZ2h0OiA2MHB4O1xyXG5iYWNrZ3JvdW5kOiAjMjU3OEI1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyOiAxcHggc29saWQgIzIyNzlCQztcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogUmVndWxhciAyMnB4LzI3cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICNGRkZGRkY7XHJcbm9wYWNpdHk6IDE7XHJcbmJvcmRlcjogbm9uZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LXVwZGF0ZXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4vKiAgKi9cclxuLmxlZnQtYm9yZGVye1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTYxRTJCO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcblxyXG59XHJcbi5yaWdodC1ib3JkZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2QyZGEzODtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTE5cHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbn1cclxuLnVwcGVyLXRleHQtdmlld3tcclxuICB3aWR0aDogNjlweDtcclxuaGVpZ2h0OiAxNHB4O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDEycHgvMTRweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMC43O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6IC0xMHB4O1xyXG5sZWZ0OiAtODJweDtcclxufVxyXG4uZGlzY3JpcHRpb24tdmlld3tcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogOTlweDtcclxufVxyXG4uZGlzY3JpcHRpb24tdGV4dC12aWV3e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMTYxRTJCO1xyXG5cclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuLnVwcGVyLWRpc2NyaXB0aW9uLXZpZXd7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogUmVndWxhciAxMnB4LzE0cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMxNjFFMkI7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-badges',
          templateUrl: './badges.component.html',
          styleUrls: ['./badges.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
            static: true
          }]
        }]
      });
    })();

    var ELEMENT_DATA = [{
      position: 1,
      Badge: 'assets/images/badge.png',
      Badgediscription: 'Will be assigned on year completion in organization.',
      status: 'active',
      Action: 'assets/images/add.png'
    }, {
      position: 2,
      Badge: 'assets/images/badge.png',
      Badgediscription: 'Will be assigned on full monthly attendance.',
      status: 'active',
      Action: 'assets/images/add.png'
    }, {
      position: 1,
      Badge: 'assets/images/badge.png',
      Badgediscription: 'Delivered project on time with less than 20 bugs',
      status: 'active',
      Action: 'assets/images/add.png'
    }, {
      position: 1,
      Badge: 'assets/images/badge.png',
      Badgediscription: 'Project delivered on or before deadline.',
      status: 'active',
      Action: 'assets/images/add.png'
    }];
    /***/
  },

  /***/
  "./src/app/create-badge/create-badge.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/create-badge/create-badge.component.ts ***!
    \********************************************************/

  /*! exports provided: CreateBadgeComponent */

  /***/
  function srcAppCreateBadgeCreateBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateBadgeComponent", function () {
      return CreateBadgeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CreateBadgeComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dialog!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Super friend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Badge Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Helps everyone in personal and professional problems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "H5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Create New Badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreateBadgeComponent =
    /*#__PURE__*/
    function () {
      function CreateBadgeComponent(dialog) {
        _classCallCheck(this, CreateBadgeComponent);

        this.dialog = dialog;
      }

      _createClass(CreateBadgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }]);

      return CreateBadgeComponent;
    }();

    CreateBadgeComponent.ɵfac = function CreateBadgeComponent_Factory(t) {
      return new (t || CreateBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    CreateBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateBadgeComponent,
      selectors: [["app-create-badge"]],
      decls: 4,
      vars: 0,
      consts: [["mat-button", "", "color", "primary", 3, "click"], ["myDialog", ""], ["matDialogTitle", ""], [1, "card-cover"], [1, "upper-section"], [1, "text"], [1, "close-Image"], ["align", "end"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "back-img"], [1, "lower-section"], [1, "left-badge"], ["src", "assets/images/badge3.png", 1, "badge-img"], [1, "right-section"], [1, "right-text"], [1, "text-right"], [1, "upper-text"], [1, "discription"], [1, "upper-discription"], [1, "discription-text"], [1, "switch-section"], [1, "status"], ["id", "status", "data-toggle", "buttons", 1, "btn-group", "btn-switch"], [1, "btn", "btn-default", "btn-on", "active"], ["type", "radio", "value", "1", "name", "multifeatured_module[module_id][status]", "checked", "checked", 1, "btn-switch"], [1, "btn", "btn-default", "btn-off"], ["type", "radio", "value", "0", "name", "multifeatured_module[module_id][status]", 1, "btn-switch"], [1, "create-btn"], [1, "btn-create"]],
      template: function CreateBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBadgeComponent_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.openDialogWithTemplateRef(_r71);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateBadgeComponent_ng_template_2_Template, 38, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".card-cover[_ngcontent-%COMP%]{\r\n    width: 562px;\r\nheight: 453px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nbox-shadow: 0px 0px 15px #00000029;\r\nborder-radius: 10px;\r\nopacity: 1;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%); \r\n}\r\n.upper-section[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #F2F6FE;\r\n    width: 562px;\r\n    height: 83px;\r\n    opacity: 1;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n    padding-left: 20px;\r\n    float:left;\r\n    width: 50%;\r\n\r\n}\r\n.close-Image[_ngcontent-%COMP%]{\r\n \r\nfloat: right;\r\nwidth: 50%;\r\npadding-top: 20px;\r\n    padding-right: 10px;\r\n\r\n}\r\n.back-img[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('/assets/images/Close.png') ;\r\n    opacity: 1;\r\n    background-repeat: no-repeat;\r\n    float: right;\r\n}\r\n.lower-section[_ngcontent-%COMP%]{\r\n    width: 562px;\r\n    height: 253px;\r\n}\r\n.badge-img[_ngcontent-%COMP%]{\r\n    width: 88px;\r\nheight: 76px;\r\nmargin-top: 31px;\r\nmargin-left: 23px;\r\n}\r\n.left-badge[_ngcontent-%COMP%]{\r\n    width: 142px;\r\n    height: 142px;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px dashed #707070;\r\n    border-radius: 10px;\r\n    opacity: 1;\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    float: left;\r\n}\r\n.right-section[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    height: 265px;\r\n    float: left;\r\n   \r\n}\r\n.text-right[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\nfloat: left;\r\npadding-left: 10px;\r\npadding-top: 10px;\r\n}\r\n.right-text[_ngcontent-%COMP%]{\r\n    width: 350px;\r\nheight: 50px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nborder: 1px solid #C8CFD9;\r\nborder-radius: 3px;\r\nopacity: 1;\r\nmargin-top: 24px;\r\nmargin-left: 21px;\r\n}\r\n.upper-text[_ngcontent-%COMP%]{\r\n    width: 69px;\r\nheight: 14px;\r\ntext-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 0.7;\r\nbackground-color: white;\r\nposition: relative;\r\ntop: -10px;\r\nleft: -82px;\r\n}\r\n.discription[_ngcontent-%COMP%]{\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 3px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    width: 350px;\r\n    height: 99px;\r\n}\r\n.discription-text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\n\r\nmargin-left: 10px;\r\nopacity: 1;\r\n}\r\n.upper-discription[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nposition: relative;\r\n    opacity: 0.7;\r\n    left: 10px;\r\n    top: -10px;\r\n    background-color: white;\r\n}\r\n\r\n.switch-section[_ngcontent-%COMP%]{\r\n    width: 159px;\r\nheight: 64px;\r\nmargin-top: 7px;\r\nmargin-left: 20px;\r\n}\r\n.status[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Raleway;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\n}\r\n.btn-default.btn-on.active[_ngcontent-%COMP%]{color: white;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    background-color: #5BB75B;\r\n    padding-top: 10px;\r\n    color: white;\r\n}\r\n.btn-default.btn-on[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    color: #A4A4A4;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n\r\n}\r\n.btn-default.btn-off[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    color: #A4A4A4;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n\r\n}\r\n.btn-default.btn-off.active[_ngcontent-%COMP%]{background-color: #DA4F49;color: white;\r\n    \r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    padding-top: 10px;\r\n    color: white;\r\n    opacity: 1;}\r\n.btn-switch[_ngcontent-%COMP%]{\r\n        border-radius: 0px 20px 20px 0px;\r\n        width: 150px;\r\n        height: 43px;\r\n        font-size: 14px;\r\n    }\r\n.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:first-child:not(:last-child):not(.dropdown-toggle) {\r\n        \r\n        \r\n        border-radius: 20px 0px 0px 20px;\r\n    }\r\n.create-btn[_ngcontent-%COMP%]{\r\n        width: 516px;\r\n        height: 60px;\r\n        margin:10px auto;\r\n        padding-top: 29px;;\r\n    }\r\n.btn-create[_ngcontent-%COMP%]{\r\n        width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\nopacity: 1;\r\ncolor:white;\r\n        font-size:20px;\r\n        border: none;\r\n        \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWJhZGdlL2NyZWF0ZS1iYWRnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEIsYUFBYTtBQUNiLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFNBQVM7QUFDVCxzQ0FBOEI7UUFBOUIsOEJBQThCO0FBQzlCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsZ0JBQWdCO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVOztBQUVkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFVBQVU7QUFDVixpQkFBaUI7SUFDYixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEIsWUFBWTtBQUNaLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakIsY0FBYzs7QUFFZCxpQkFBaUI7QUFDakIsVUFBVTtBQUNWO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsa0JBQWtCO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBR0EsbUJBQW1CO0FBQ25CO0lBQ0ksWUFBWTtBQUNoQixZQUFZO0FBQ1osZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVjtBQUdJLDJCQUEyQixZQUFZO0lBQ3ZDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsZUFBZTs7QUFFbkI7QUFDSSw0QkFBNEIseUJBQXlCLENBQUMsWUFBWTs7SUFFbEUseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVUsQ0FBQztBQUNYO1FBQ0ksZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxnQ0FBZ0M7SUFDcEM7QUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksWUFBWTtBQUNwQixZQUFZO0FBQ1osK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1YsV0FBVztRQUNILGNBQWM7UUFDZCxZQUFZOztJQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1iYWRnZS9jcmVhdGUtYmFkZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1jb3ZlcntcclxuICAgIHdpZHRoOiA1NjJweDtcclxuaGVpZ2h0OiA0NTNweDtcclxuYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA1MCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxufVxyXG4udXBwZXItc2VjdGlvbntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjJGNkZFO1xyXG4gICAgd2lkdGg6IDU2MnB4O1xyXG4gICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4udGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IEJvbGQgMjBweC8yNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzIyMkMzQztcclxub3BhY2l0eTogMTtcclxubWFyZ2luLXRvcDogMjlweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxufVxyXG4uY2xvc2UtSW1hZ2V7XHJcbiBcclxuZmxvYXQ6IHJpZ2h0O1xyXG53aWR0aDogNTAlO1xyXG5wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG59XHJcbi5iYWNrLWltZ3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9DbG9zZS5wbmcnKSA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubG93ZXItc2VjdGlvbntcclxuICAgIHdpZHRoOiA1NjJweDtcclxuICAgIGhlaWdodDogMjUzcHg7XHJcbn1cclxuLmJhZGdlLWltZ3tcclxuICAgIHdpZHRoOiA4OHB4O1xyXG5oZWlnaHQ6IDc2cHg7XHJcbm1hcmdpbi10b3A6IDMxcHg7XHJcbm1hcmdpbi1sZWZ0OiAyM3B4O1xyXG59XHJcbi5sZWZ0LWJhZGdle1xyXG4gICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgaGVpZ2h0OiAxNDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5yaWdodC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICBcclxufVxyXG4udGV4dC1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMTYxRTJCO1xyXG5vcGFjaXR5OiAxO1xyXG5mbG9hdDogbGVmdDtcclxucGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5wYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ucmlnaHQtdGV4dHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyOiAxcHggc29saWQgI0M4Q0ZEOTtcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG5vcGFjaXR5OiAxO1xyXG5tYXJnaW4tdG9wOiAyNHB4O1xyXG5tYXJnaW4tbGVmdDogMjFweDtcclxufVxyXG4udXBwZXItdGV4dHtcclxuICAgIHdpZHRoOiA2OXB4O1xyXG5oZWlnaHQ6IDE0cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMTYxRTJCO1xyXG5vcGFjaXR5OiAwLjc7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogLTEwcHg7XHJcbmxlZnQ6IC04MnB4O1xyXG59XHJcbi5kaXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M4Q0ZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDk5cHg7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxuXHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi51cHBlci1kaXNjcmlwdGlvbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMTYxRTJCO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogc3dpdGNoIHNlY3Rpb24gKi9cclxuLnN3aXRjaC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG5oZWlnaHQ6IDY0cHg7XHJcbm1hcmdpbi10b3A6IDdweDtcclxubWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnN0YXR1c3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbiAgICAuYnRuLWRlZmF1bHQuYnRuLW9uLmFjdGl2ZXtjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJCNzVCO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1kZWZhdWx0LmJ0bi1vbntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICNBNEE0QTQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcbi5idG4tZGVmYXVsdC5idG4tb2Zme1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogI0E0QTRBNDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M4Q0ZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuICAgIC5idG4tZGVmYXVsdC5idG4tb2ZmLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjREE0RjQ5O2NvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M4Q0ZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO31cclxuICAgIC5idG4tc3dpdGNoe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cD4uYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcclxuICAgICAgICAvKiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgKi9cclxuICAgICAgICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcclxuICAgIH1cclxuICAgIC5jcmVhdGUtYnRue1xyXG4gICAgICAgIHdpZHRoOiA1MTZweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjlweDs7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNyZWF0ZXtcclxuICAgICAgICB3aWR0aDogNTE2cHg7XHJcbmhlaWdodDogNjBweDtcclxuYmFja2dyb3VuZDogIzI1NzhCNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMyMjc5QkM7XHJcbm9wYWNpdHk6IDE7XHJcbmNvbG9yOndoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBcclxuICAgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-badge',
          templateUrl: './create-badge.component.html',
          styleUrls: ['./create-badge.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["loginRef"];

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "title",
        value: function title(_title2) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "signIn",
        value: function signIn() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.token = JSON.parse(localStorage.getItem("userInfo"));
          console.log(this.token);
          this.googleSDK();
        }
      }, {
        key: "prepareLoginButton",
        value: function prepareLoginButton() {
          var _this = this;

          this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, function (googleUser) {
            _this.profile = googleUser.getBasicProfile();
            var myObj = {
              Name: _this.profile.getName(),
              ID: _this.profile.getId(),
              ImageURL: _this.profile.getImageUrl(),
              Email: _this.profile.getEmail()
            };
            localStorage.setItem('userInfo', JSON.stringify(myObj));

            var test = _this.profile.getEmail();

            if (test.match(/^[a-zA-Z0-9._-]+@thesynapses+\.[a-zA-Z]{2,4}$/)) {
              _this.router.navigate(['../profile']);

              setTimeout(function () {
                return location.reload();
              });
            }

            if (test.match(/ay.jain@thesynapses.com/)) {
              _this.router.navigate(['../moderator']);
            } else {
              alert('please enter valid email id');
            }
          }, function (error) {
            setTimeout(function () {
              alert('please login with the Gmail Id');
            }, 1000);
          });
        }
      }, {
        key: "googleSDK",
        value: function googleSDK() {
          var _this2 = this;

          window['googleSDKLoaded'] = function () {
            window['gapi'].load('auth2', function () {
              _this2.auth2 = window['gapi'].auth2.init({
                client_id: '943130541711-723eavcfb3319miv0769lncck0luscju.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
              });

              _this2.prepareLoginButton();
            });
          };

          (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'google-jssdk');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginElement = _t.first);
        }
      },
      decls: 11,
      vars: 0,
      consts: [[1, "container"], [1, "logo-cover"], [1, "img-cover"], ["src", "assets/images/01.png", "alt", "", 1, "img-responsive"], [1, "card", 2, "width", "300px", "height", "200px"], [1, "card-body"], [1, "btn", "btn-lg", "btn-google", "btn-block", 3, "click"], ["loginRef", ""], [1, "fa", "fa-google", "white-box"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener($event) {
            return ctx.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo-cover[_ngcontent-%COMP%]{\r\n    left: 50%;\r\n    width: 299px;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n    height: 364px;\r\n    top: 50%;\r\n    position: absolute;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 20%;\r\n    width: 100px;\r\n    height: 50px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform:translate(-50%,-50%);\r\n            transform:translate(-50%,-50%);\r\n    border: 1px solid#039BE5;\r\n    border-radius: 10px ;\r\n    box-shadow: 3px 5px 13px 3px rgb(221, 212, 212);\r\n}\r\n.btn-google[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: bolder;\r\n    background-color: #039BE5;\r\n    width: 200px;\r\n    height: 50px;\r\n\r\n  }\r\n.img-cover[_ngcontent-%COMP%]{\r\n    margin-left: 42px;\r\n\r\n  }\r\n.card-body[_ngcontent-%COMP%]{\r\n      padding-top: 38px;\r\n      padding-left: 25px;\r\n  }\r\n.white-box[_ngcontent-%COMP%]{\r\n      padding-left: 5px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZOztFQUVkO0FBQ0E7SUFDRSxpQkFBaUI7O0VBRW5CO0FBQ0E7TUFDSSxpQkFBaUI7TUFDakIsa0JBQWtCO0VBQ3RCO0FBQ0E7TUFDSSxpQkFBaUI7O0VBRXJCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nby1jb3ZlcntcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyOTlweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBoZWlnaHQ6IDM2NHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNhcmQgaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCMwMzlCRTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTNweCAzcHggcmdiKDIyMSwgMjEyLCAyMTIpO1xyXG59XHJcbi5idG4tZ29vZ2xlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5QkU1O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICB9XHJcbiAgLmltZy1jb3ZlcntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xyXG5cclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgICAgcGFkZGluZy10b3A6IDM4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICB9XHJcbiAgLndoaXRlLWJveHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBcclxuICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        loginElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['loginRef', {
            static: true
          }]
        }]
      });
    })();

    function newFunction() {
      return window.location;
    }
    /***/

  },

  /***/
  "./src/app/moderator/moderator.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/moderator/moderator.component.ts ***!
    \**************************************************/

  /*! exports provided: ModeratorComponent */

  /***/
  function srcAppModeratorModeratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeratorComponent", function () {
      return ModeratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function ModeratorComponent_th_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.position, " ");
      }
    }

    function ModeratorComponent_th_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.User, " ");
      }
    }

    function ModeratorComponent_th_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.email, " ");
      }
    }

    function ModeratorComponent_th_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r26.Badge, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ModeratorComponent_th_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.userType, " ");
      }
    }

    function ModeratorComponent_th_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Member Since ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.Membersince, " ");
      }
    }

    function ModeratorComponent_th_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.status, " ");
      }
    }

    function ModeratorComponent_th_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_td_68_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModeratorComponent_td_68_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

          return ctx_r31.openDialogWithTemplateRef(_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModeratorComponent_td_68_Template_a_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          return ctx_r33.openDialogWithTemplateRef(_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r30.Action, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ModeratorComponent_tr_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
      }
    }

    function ModeratorComponent_tr_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 59);
      }
    }

    function ModeratorComponent_ng_template_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "vinay singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "v.shekhawar@thesynapses.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModeratorComponent_ng_template_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Badge to Vinay Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Assign badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 20, 30];
    };

    var ModeratorComponent =
    /*#__PURE__*/
    function () {
      function ModeratorComponent(router, dialog) {
        _classCallCheck(this, ModeratorComponent);

        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['position', 'User', 'email', 'Badge', 'userType', 'Membersince', 'status', 'Action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(ModeratorComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }, {
        key: "logout",
        value: function logout() {
          console.log('User signed out. ' + localStorage.length);
          localStorage.clear();
          this.token = null;
          console.log('User signed out. ' + localStorage.length);
        }
      }, {
        key: "add",
        value: function add() {
          console.log("Adding record..");
        }
      }]);

      return ModeratorComponent;
    }();

    ModeratorComponent.ɵfac = function ModeratorComponent_Factory(t) {
      return new (t || ModeratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    ModeratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModeratorComponent,
      selectors: [["app-moderator"]],
      viewQuery: function ModeratorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 77,
      vars: 5,
      consts: [[1, "left"], [1, "Admin"], [1, "Moderator"], [1, "left-border"], [1, "User"], [1, "User_symbol"], [1, "User_type"], [1, "Badges"], [1, "badge_symbol"], ["routerLink", "/badges", 1, "Badge_type"], [1, "Logout_section"], [1, "logout_symbol"], ["type", "submit", 1, "logout-btn", 3, "click"], [1, "right"], [1, "User-section"], [1, "user-text"], [1, "right-border"], [1, "search-cover"], [1, "drp-cover"], [1, "dropdown", "sort-by"], ["type", "button", "data-toggle", "dropdown", 1, "dropdown-toggle", "sort-clr"], [1, "sort-text"], [1, "dropdown-menu"], ["href", ""], [1, "search-bar"], [1, "search-btn"], ["matInput", "", "placeholder", "search", 3, "keyup"], [1, "search-symbol"], [1, "table-section"], ["mat-table", "", 1, "back-clr", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "class", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "User"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "email"], ["matColumnDef", "Badge"], ["matColumnDef", "userType"], ["matColumnDef", "Membersince"], ["matColumnDef", "status"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "container"], ["myDialog", ""], ["myDialog1", ""], ["mat-header-cell", "", 1, ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "badge-img", 3, "src"], ["src", "assets/images/badge1.png", 1, "badge-img"], ["src", "assets/images/badge4.png", 1, "badge-img"], [1, "actions-view", 3, "click"], [1, "view-img", 3, "src"], [1, "add-dialog", 3, "click"], ["src", "assets/images/add.png", 1, "add-img"], ["src", "assets/images/delete.png", 1, "delete-img"], ["mat-header-row", ""], ["mat-row", ""], [1, "card", "view"], [1, "card-body"], [1, "view-icon"], ["align", "end"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "view-close"], [1, "profile-view"], [1, "round-profile"], [1, "view-text"], [1, "view-name"], [1, "view-email"], [1, "view-border"], [1, "view-badge"], [1, "view-imagesbadge"], [1, "img"], ["src", "assets/images/badge1.png", 1, "badge-view-img"], ["src", "assets/images/badge3.png", 1, "badge-view-img"], ["src", "assets/images/badge4.png", 1, "badge-view-img"], [1, "card", "cover"], [1, "upper-section"], [1, "text"], [1, "close-Image"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "back-img"], [1, "lower-section"], [1, "badge-images"], ["type", "checkbox", "id", "myCheckbox1"], ["for", "myCheckbox1", 1, "check-label"], ["src", "assets/images/badge3.png", 1, "check-img"], ["type", "checkbox", "id", "myCheckbox2"], ["for", "myCheckbox2", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox3"], ["for", "myCheckbox3", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox4"], ["for", "myCheckbox4", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox5"], ["for", "myCheckbox5", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox6"], ["for", "myCheckbox6", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox7"], ["for", "myCheckbox7", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox8"], ["for", "myCheckbox8", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox9"], ["for", "myCheckbox9", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox10"], ["for", "myCheckbox10", 1, "check-label"], [1, "assign-btn"], ["type", "submit", 1, "btn-assign"]],
      template: function ModeratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VINAY SINGH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Moderator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Badges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModeratorComponent_Template_button_click_16_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "USERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Show All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "user type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "selected by name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "selected by email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Search User name/email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModeratorComponent_Template_input_keyup_41_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ModeratorComponent_th_46_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ModeratorComponent_td_47_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ModeratorComponent_th_49_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ModeratorComponent_td_50_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ModeratorComponent_th_52_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ModeratorComponent_td_53_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ModeratorComponent_th_55_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ModeratorComponent_td_56_Template, 12, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ModeratorComponent_th_58_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ModeratorComponent_td_59_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ModeratorComponent_th_61_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ModeratorComponent_td_62_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ModeratorComponent_th_64_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ModeratorComponent_td_65_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ModeratorComponent_th_67_Template, 2, 0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ModeratorComponent_td_68_Template, 9, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ModeratorComponent_tr_69_Template, 1, 0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ModeratorComponent_tr_70_Template, 1, 0, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-paginator", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ModeratorComponent_ng_template_73_Template, 32, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ModeratorComponent_ng_template_75_Template, 43, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"]],
      styles: [".btn[_ngcontent-%COMP%]   span.glyphicon[_ngcontent-%COMP%] {    \t\t\t\r\n\topacity: 0;\t\t\t\t\r\n}\r\n.btn.active[_ngcontent-%COMP%]   span.glyphicon[_ngcontent-%COMP%] {\t\t\t\t\r\n\topacity: 1;\t\t\t\t\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n.back-clr[_ngcontent-%COMP%]{\r\n   border: none;\r\n  \r\n  }\r\n.cover[_ngcontent-%COMP%]{\r\n   \r\n    \r\n\r\n  }\r\n.badge-img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 5px 0px 5px;\r\n  }\r\n.head-cover[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color:#2A3F4C ;\r\n \r\n    text-align: center;\r\n    color: white;\r\n\r\n}\r\n.head-cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n}\r\n.no.head[_ngcontent-%COMP%]{\r\n  color: #222C3C;\r\n}\r\n.add-img[_ngcontent-%COMP%]{\r\n  width: 23px;\r\n  height: 11px;\r\n  margin: 0px 5px 0px 5px;\r\n}\r\n.add-dialog[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.view-img[_ngcontent-%COMP%]{\r\n  width: 23px;\r\n  height: 11px;\r\n  margin: 0px 5px 0px 5px;\r\n}\r\n.delete-img[_ngcontent-%COMP%]{\r\n  width: 20px;\r\nheight: 24px;\r\nmargin-left: 10px;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%] {\r\n  height: 56px;\r\n  background: #DFEBFF 0% 0% no-repeat padding-box;\r\n  opacity: 1;\r\n  color:#222C3C\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n  color:#222C3C}\r\ntr.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background: #F8FBFF 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n  }\r\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    padding-left: 27px;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\n    width: 250px;\r\nheight:1080px;\r\nbackground: #222C3C 0% 0% no-repeat padding-box;\r\nopacity: 1;\r\nfloat: left;\r\n}\r\n.Moderator[_ngcontent-%COMP%]{\r\n    top: 96px;\r\nleft: 42px;\r\nwidth: 73px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Light 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #ABB4C2;\r\nopacity: 1;\r\nposition: relative;\r\n\r\n}\r\n.Admin[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 66px;\r\nleft: 42px;\r\nwidth: 133px;\r\nheight: 24px;\r\ntext-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #FFFFFF;\r\ntext-transform: uppercase;\r\nopacity: 1;\r\n}\r\n.User[_ngcontent-%COMP%]{\r\n    top: 155px;\r\nleft: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\n}\r\n.User[_ngcontent-%COMP%]:hover{\r\n\r\nwidth: 233px;\r\nheight: 44px;\r\nbackground: #131A24 0% 0% no-repeat padding-box;\r\nborder-radius: 20px 0px 0px 20px;\r\nopacity: 1;\r\n\r\n}\r\n.User_symbol[_ngcontent-%COMP%]{\r\n    top: 12px;\r\nleft: 21px;\r\nwidth: 28px;\r\nheight: 18px;\r\nbackground: url('/assets/images/Livello_98.png');\r\nopacity: 1;\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\nbackground-repeat: no-repeat;\r\nposition: absolute;\r\n}\r\n.User_type[_ngcontent-%COMP%]{\r\n    top: 167px;\r\nleft: 76px;\r\nwidth: 41px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #5C7295;\r\nopacity: 1;\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\n}\r\n.Badge_type[_ngcontent-%COMP%]{\r\n  top: 11px;\r\nleft: 54px;\r\nwidth: 41px;\r\nheight: 19px;\r\ntext-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #5C7295;\r\nopacity: 1;\r\nposition: absolute;\r\n}\r\n.Badges[_ngcontent-%COMP%]{\r\n  top: 216px;\r\nleft: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\n}\r\n.badge_symbol[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 23px;\r\nwidth: 16px;\r\nheight: 18px;\r\nbackground:url('/assets/images/stack.png');\r\nopacity: 1;\r\n\r\n}\r\n.Badges[_ngcontent-%COMP%]:hover{\r\n  position: absolute;\r\n  top: 216px;\r\n  left: 17px;\r\nwidth: 233px;\r\nheight: 44px;\r\nopacity: 1;\r\nposition: absolute;\r\nbackground: #131A24 0% 0% no-repeat padding-box;\r\nborder-radius: 20px 0px 0px 20px;\r\n}\r\n.badge-text[_ngcontent-%COMP%]{\r\n    top: 213px;\r\n    left: 76px;\r\n    width: 53px;\r\n    height: 19px;\r\n    text-align: left;\r\n    font: Regular 16px/19px Roboto ;\r\n    letter-spacing: 0;\r\n    color: #E9E9E9;\r\n    opacity: 1;\r\n    position: absolute;\r\n}\r\n.badge-text[_ngcontent-%COMP%]:hover{\r\n  \r\n \r\n  width: 233px;\r\n  height: 44px;\r\n  background: #131A24 0% 0% no-repeat padding-box;\r\n  border-radius: 20px 0px 0px 20px;\r\n  opacity: 1;\r\n \r\n}\r\n.logout-btn[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 19px;\r\n  text-align: left;\r\n  font: Regular 16px/19px Roboto;\r\n  letter-spacing: 0;\r\n  color: #E9E9E9;\r\n  opacity: 1;\r\n  position: relative;\r\n  top: 30px;\r\n  border: none;\r\n  left: 80px;\r\n  background-color: #222C3C;\r\n}\r\n.logout_symbol[_ngcontent-%COMP%]{\r\n  \r\nwidth: 14px;\r\nheight: 15px;\r\nbackground:  url('/assets/images/Icons with numbers.png');\r\nopacity: 1;\r\nposition: absolute;\r\n    left: 53px;\r\n    top: 32px;\r\n\r\n}\r\n.Logout_section[_ngcontent-%COMP%]{\r\n    top: 1008px;\r\n    left: 17px;\r\n    width: 221px;\r\n    height: 0px;\r\n    border: 1px solid #161E2B;\r\n    opacity: 1;\r\n    position: absolute;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\n    float:left;\r\n    width:80%;\r\n}\r\n.User-section[_ngcontent-%COMP%]{\r\n  top: 49px;\r\n  left: 283px;\r\nwidth: 49px;\r\nheight: 32px;\r\nbackground:url('/assets/images/component.png');\r\nopacity: 1;\r\nposition: absolute;\r\nbackground-repeat: no-repeat;\r\nbackground-origin: content-box;\r\n\r\n\r\n}\r\n.user-text[_ngcontent-%COMP%]{\r\n    top: 51px;\r\nleft: 337px;\r\nwidth: 87px;\r\nheight: 37px;\r\ntext-align: left;\r\nfont: Bold 32px/37px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;   \r\nposition: absolute;\r\n\r\n}\r\n.sort-by[_ngcontent-%COMP%]{\r\n  width: 98px;\r\n  height: 40px;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #C8CFD9;\r\n  border-radius: 3px;\r\n  opacity: 1;\r\n  \r\n}\r\n.sort-clr[_ngcontent-%COMP%]\r\n{\r\n  width: 75px;\r\n  height: 19px;\r\n  text-align: left;\r\n  font: Regular 16px/19px Raleway;\r\n  letter-spacing: 0;\r\n  color: #161E2B;\r\n  opacity: 1;\r\n  padding-top: 7px;\r\n  padding-left: 9px;\r\n   \r\n}\r\n.sort-symbol[_ngcontent-%COMP%]{\r\n \r\nwidth: 18px;\r\nheight: 10px;\r\nbackground-image: url('/assets/images/down-chevron.png');\r\nopacity: 1;\r\nbackground-repeat: no-repeat;\r\nposition: absolute;\r\n    top: 16px;\r\n    left: 92px;\r\n\r\n}\r\n.sort-text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Raleway;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nwidth: 48px;\r\n    height: 14px;\r\n    position: relative;\r\n    top: -38px;\r\n    left: 12px;\r\n    background-color: white;\r\n\r\n}\r\n.search-bar[_ngcontent-%COMP%]{\r\n  position: relative;\r\n    top: 4%;\r\n    left: -10%;\r\n    opacity: 0.8;\r\n\r\n}\r\n.search-btn[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 29px;\r\n    border: none;\r\n    border-bottom: 1px solid #A4A4A4;\r\n padding-left: 10px;\r\n    text-align: left;\r\nfont: Regular 16px/19px Raleway;\r\nletter-spacing: 0;\r\ncolor: #A4A4A4;\r\nopacity: 1;\r\n}\r\n.search-symbol[_ngcontent-%COMP%]{\r\n   \r\nwidth: 18px;\r\nheight: 18px;\r\nbackground:url('/assets/images/search.png');\r\nopacity: 1;\r\nmargin-left: -11px;\r\nposition: absolute;\r\ntop: 2px;\r\n}\r\n.user-section-border[_ngcontent-%COMP%]{\r\n    border-top: 1px solid black;\r\n}\r\n.table-section[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 726px;\r\n    float:left;\r\n    margin-left: 24px;\r\n   \r\n}\r\n.search-cover[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  height: 120px;\r\n  width: 151px;\r\n  float: right;\r\n \r\n}\r\n.drp-cover[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 38%;\r\n  left: -118%;\r\n}\r\n\r\n.view[_ngcontent-%COMP%]{\r\n  width: 360px;\r\nheight: 473px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nbox-shadow: 0px 0px 15px #00000029;\r\nborder-radius: 10px;\r\nopacity: 1;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%);\r\n}\r\n.view-icon[_ngcontent-%COMP%]{\r\n  width: 360px;\r\n  float: right;\r\n}\r\n.view-close[_ngcontent-%COMP%]{\r\n  background: url('/assets/images/Close.png') ;\r\n  width: 24px;\r\nheight: 24px;\r\nfloat: right;\r\n}\r\n.profile-view[_ngcontent-%COMP%]{\r\n  width: 150px;\r\nheight: 150px;\r\n\r\nmargin: 30px auto ;\r\nopacity: 1;\r\n}\r\n.round-profile[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 150px;\r\n  background: url('/assets/images/vinay-singh.png') ;\r\n \r\n\r\n}\r\n.view-text[_ngcontent-%COMP%]{\r\n  margin: 30px auto;\r\n\r\n}\r\n.view-name[_ngcontent-%COMP%]{\r\n  text-align:center;\r\n  font: Bold 24px/29px Raleway;\r\n  letter-spacing: 0;\r\n  color: #222C3C;\r\n  opacity: 1;\r\n}\r\n.view-email[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font: Regular 16px/19px Roboto;\r\n  letter-spacing: 0;\r\n  color: #222C3C;\r\n  opacity: 1\r\n}\r\n.view-border[_ngcontent-%COMP%]{\r\n  width: 328px;\r\n  \r\n  border-bottom: 1px solid #DEEAFE;\r\n  opacity: 1;\r\n  margin: 2px auto;\r\n}\r\n.view-badge[_ngcontent-%COMP%]{\r\n  margin: 30px auto;\r\n  padding-left: 20px;\r\n}\r\n.view-imagesbadge[_ngcontent-%COMP%]{\r\n  width: 283px;\r\nheight: 100px;\r\nmargin: 30px auto;\r\n}\r\n.badge-view-img[_ngcontent-%COMP%]{\r\n  width: 50px;\r\nheight: 43px;\r\nmargin: 0px 5px 5px 5px;\r\n}\r\n.actions-view[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.cover[_ngcontent-%COMP%]{\r\n  width: 562px;\r\n  height: 319px;\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  box-shadow: 0px 0px 15px #00000029;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 50%;\r\n left: 50%;\r\n -webkit-transform:translate(-50%,-50%);\r\n         transform:translate(-50%,-50%); \r\n\r\n\r\n}\r\n.upper-section[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #F8FBFF;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n  text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n  padding-left: 20px;\r\n  float:left;\r\n  width: 50%;\r\n\r\n}\r\n.close-Image[_ngcontent-%COMP%]{\r\n\r\nfloat: right;\r\nwidth: 50%;\r\npadding-top: 20px;\r\n  padding-right: 10px;\r\n\r\n}\r\n.back-img[_ngcontent-%COMP%]{\r\n  width: 24px;\r\n  height: 24px;\r\n  background: url('/assets/images/Close.png') ;\r\n  opacity: 1;\r\n  background-repeat: no-repeat;\r\n  float: right;\r\n}\r\n.badge-images[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  width: 100%;\r\n  padding-top: 20px;\r\n  padding-left: 10px;\r\n}\r\n.img[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.eye-img[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10px 5px 0px 5px ;\r\n}\r\n.assign-btn[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n  margin-top: -24px;\r\n\r\n}\r\n.btn-assign[_ngcontent-%COMP%]{\r\n  width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\ntext-align: left;\r\nfont: Regular 22px/27px Roboto;\r\nletter-spacing: 0;\r\ncolor: #FFFFFF;\r\nopacity: 1;\r\nborder: none;\r\ntext-align: center;\r\n}\r\n.left-border[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #161E2B;\r\n    width: 200px;\r\n    padding-top: 100px;\r\n    margin: 20px auto;\r\n\r\n}\r\n.right-border[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #ccd2da38;\r\n    width: 98%;\r\n    padding-top: 119px;\r\n    margin: 20px auto;\r\n\r\n}\r\n.check-label[_ngcontent-%COMP%]:before {\r\n  \r\n \r\n\r\n z-index: 100;\r\n\r\nposition: relative;\r\ntop: 7px;\r\nleft: 35px;\r\n\r\n}\r\n[_ngcontent-%COMP%]:checked + .check-label[_ngcontent-%COMP%]:before {\r\n content: url(\"/assets/images/check.png\");\r\n width: 20px;\r\n height: 20px;\r\n \r\n\r\n}\r\ninput[type=checkbox][_ngcontent-%COMP%] {\r\n display: none;\r\n}\r\n\r\n.check-img[_ngcontent-%COMP%]{\r\n width: 50px;\r\n height: 50px;\r\n}\r\n.check-label[_ngcontent-%COMP%]{\r\n  margin:0px 5px 0px 5px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZXJhdG9yL21vZGVyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtJQUNJLFdBQVc7RUFDYjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7R0FDQyxZQUFZOztFQUViO0FBQ0E7Ozs7RUFJQTtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLFVBQVU7RUFDVjtBQUNGO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUViO0lBQ0UsK0NBQStDO0lBQy9DLFVBQVU7RUFDWjtBQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCO0FBVUUsY0FBYztBQUNkO0lBQ0UsWUFBWTtBQUNoQixhQUFhO0FBQ2IsK0NBQStDO0FBQy9DLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtJQUNJLFNBQVM7QUFDYixVQUFVO0FBQ1YsV0FBVztBQUNYLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLGtCQUFrQjs7QUFFbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IsVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsY0FBYztBQUNkLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1Y7QUFDQTtJQUNJLFVBQVU7QUFDZCxVQUFVO0FBQ1YsWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0MsZ0NBQWdDO0FBQ2hDLFVBQVU7O0FBRVY7QUFDQTtJQUNJLFNBQVM7QUFDYixVQUFVO0FBQ1YsV0FBVztBQUNYLFlBQVk7QUFDWixnREFBZ0Q7QUFDaEQsVUFBVTtBQUNWLHdCQUFnQjtBQUFoQixnQkFBZ0I7QUFDaEIsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksVUFBVTtBQUNkLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysd0JBQWdCO0FBQWhCLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsU0FBUztBQUNYLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1osVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1osVUFBVTtBQUNWLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1osV0FBVztBQUNYLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsVUFBVTs7QUFFVjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEM7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBOzs7RUFHRSxZQUFZO0VBQ1osWUFBWTtFQUNaLCtDQUErQztFQUMvQyxnQ0FBZ0M7RUFDaEMsVUFBVTs7QUFFWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLHlEQUF5RDtBQUN6RCxVQUFVO0FBQ1Ysa0JBQWtCO0lBQ2QsVUFBVTtJQUNWLFNBQVM7O0FBRWI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYixXQUFXO0FBQ1gsWUFBWTtBQUNaLDhDQUE4QztBQUM5QyxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7OztBQUc5QjtBQUNBO0lBQ0ksU0FBUztBQUNiLFdBQVc7QUFDWCxXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysa0JBQWtCOztBQUVsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVOztBQUVaO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5CO0FBRUE7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWix3REFBd0Q7QUFDeEQsVUFBVTtBQUNWLDRCQUE0QjtBQUM1QixrQkFBa0I7SUFDZCxTQUFTO0lBQ1QsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFdBQVc7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCOztBQUUzQjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztDQUNuQyxrQkFBa0I7SUFDZixnQkFBZ0I7QUFDcEIsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjs7QUFFckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsWUFBWTtBQUNkLGFBQWE7QUFDYiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1Qsc0NBQThCO1FBQTlCLDhCQUE4QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7QUFDYixZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0FBQ2QsYUFBYTs7QUFFYixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtEQUFrRDs7O0FBR3BEO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Q7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYixZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7Q0FDVCxTQUFTO0NBQ1Qsc0NBQThCO1NBQTlCLDhCQUE4Qjs7O0FBRy9CO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsZ0JBQWdCO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVOztBQUVaO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFVBQVU7QUFDVixpQkFBaUI7RUFDZixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLFlBQVk7QUFDZCxZQUFZO0FBQ1osK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLGdDQUFnQztJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7QUFDQTtFQUNFLGtDQUFrQztJQUNoQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7QUFJQTtFQUNFLCtHQUErRzs7O0NBR2hILFlBQVk7O0FBRWIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixVQUFVOztBQUVWO0FBQ0E7Q0FDQyx3Q0FBd0M7Q0FDeEMsV0FBVztDQUNYLFlBQVk7OztBQUdiO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQSxrQkFBa0I7QUFDbEI7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tb2RlcmF0b3IvbW9kZXJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHNwYW4uZ2x5cGhpY29uIHsgICAgXHRcdFx0XHJcblx0b3BhY2l0eTogMDtcdFx0XHRcdFxyXG59XHJcbi5idG4uYWN0aXZlIHNwYW4uZ2x5cGhpY29uIHtcdFx0XHRcdFxyXG5cdG9wYWNpdHk6IDE7XHRcdFx0XHRcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuYmFjay1jbHJ7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICBcclxuICB9XHJcbiAgLmNvdmVye1xyXG4gICBcclxuICAgIFxyXG5cclxuICB9XHJcbiAgLmJhZGdlLWltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XHJcbiAgfVxyXG4gIC5oZWFkLWNvdmVye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkEzRjRDIDtcclxuIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uaGVhZC1jb3ZlciBoMXtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ubm8uaGVhZHtcclxuICBjb2xvcjogIzIyMkMzQztcclxufVxyXG4uYWRkLWltZ3tcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XHJcbn1cclxuLmFkZC1kaWFsb2d7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi52aWV3LWltZ3tcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XHJcbn1cclxuLmRlbGV0ZS1pbWd7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbmhlaWdodDogMjRweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kOiAjREZFQkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiMyMjJDM0NcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiMyMjJDM0N9XHJcblxyXG4gIHRyLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RkJGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjdweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLyogQWRtaW4gY3NzICovXHJcbiAgLmxlZnR7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbmhlaWdodDoxMDgwcHg7XHJcbmJhY2tncm91bmQ6ICMyMjJDM0MgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5vcGFjaXR5OiAxO1xyXG5mbG9hdDogbGVmdDtcclxufVxyXG4uTW9kZXJhdG9ye1xyXG4gICAgdG9wOiA5NnB4O1xyXG5sZWZ0OiA0MnB4O1xyXG53aWR0aDogNzNweDtcclxuaGVpZ2h0OiAxOXB4O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBMaWdodCAxNnB4LzE5cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICNBQkI0QzI7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuLkFkbWlue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2NnB4O1xyXG5sZWZ0OiA0MnB4O1xyXG53aWR0aDogMTMzcHg7XHJcbmhlaWdodDogMjRweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogQm9sZCAyMHB4LzI0cHggUmFsZXdheTtcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjRkZGRkZGO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5Vc2Vye1xyXG4gICAgdG9wOiAxNTVweDtcclxubGVmdDogMTdweDtcclxud2lkdGg6IDIzM3B4O1xyXG5oZWlnaHQ6IDQ0cHg7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uVXNlcjpob3ZlcntcclxuXHJcbndpZHRoOiAyMzNweDtcclxuaGVpZ2h0OiA0NHB4O1xyXG5iYWNrZ3JvdW5kOiAjMTMxQTI0IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbm9wYWNpdHk6IDE7XHJcblxyXG59XHJcbi5Vc2VyX3N5bWJvbHtcclxuICAgIHRvcDogMTJweDtcclxubGVmdDogMjFweDtcclxud2lkdGg6IDI4cHg7XHJcbmhlaWdodDogMThweDtcclxuYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9MaXZlbGxvXzk4LnBuZycpO1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogc3RpY2t5O1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLlVzZXJfdHlwZXtcclxuICAgIHRvcDogMTY3cHg7XHJcbmxlZnQ6IDc2cHg7XHJcbndpZHRoOiA0MXB4O1xyXG5oZWlnaHQ6IDE5cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjNUM3Mjk1O1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcbi5CYWRnZV90eXBle1xyXG4gIHRvcDogMTFweDtcclxubGVmdDogNTRweDtcclxud2lkdGg6IDQxcHg7XHJcbmhlaWdodDogMTlweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogUmVndWxhciAxNnB4LzE5cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICM1QzcyOTU7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uQmFkZ2Vze1xyXG4gIHRvcDogMjE2cHg7XHJcbmxlZnQ6IDE3cHg7XHJcbndpZHRoOiAyMzNweDtcclxuaGVpZ2h0OiA0NHB4O1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJhZGdlX3N5bWJvbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDIzcHg7XHJcbndpZHRoOiAxNnB4O1xyXG5oZWlnaHQ6IDE4cHg7XHJcbmJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltYWdlcy9zdGFjay5wbmcnKTtcclxub3BhY2l0eTogMTtcclxuXHJcbn1cclxuLkJhZGdlczpob3ZlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMTZweDtcclxuICBsZWZ0OiAxN3B4O1xyXG53aWR0aDogMjMzcHg7XHJcbmhlaWdodDogNDRweDtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5iYWNrZ3JvdW5kOiAjMTMxQTI0IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5iYWRnZS10ZXh0e1xyXG4gICAgdG9wOiAyMTNweDtcclxuICAgIGxlZnQ6IDc2cHg7XHJcbiAgICB3aWR0aDogNTNweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG8gO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjb2xvcjogI0U5RTlFOTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJhZGdlLXRleHQ6aG92ZXJ7XHJcbiAgXHJcbiBcclxuICB3aWR0aDogMjMzcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxMzFBMjQgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiBcclxufVxyXG4ubG9nb3V0LWJ0bntcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgY29sb3I6ICNFOUU5RTk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsZWZ0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJDM0M7XHJcbn1cclxuLmxvZ291dF9zeW1ib2x7XHJcbiAgXHJcbndpZHRoOiAxNHB4O1xyXG5oZWlnaHQ6IDE1cHg7XHJcbmJhY2tncm91bmQ6ICB1cmwoJy9hc3NldHMvaW1hZ2VzL0ljb25zIHdpdGggbnVtYmVycy5wbmcnKTtcclxub3BhY2l0eTogMTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTNweDtcclxuICAgIHRvcDogMzJweDtcclxuXHJcbn1cclxuLkxvZ291dF9zZWN0aW9ue1xyXG4gICAgdG9wOiAxMDA4cHg7XHJcbiAgICBsZWZ0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDIyMXB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTYxRTJCO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ucmlnaHR7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6ODAlO1xyXG59XHJcbi5Vc2VyLXNlY3Rpb257XHJcbiAgdG9wOiA0OXB4O1xyXG4gIGxlZnQ6IDI4M3B4O1xyXG53aWR0aDogNDlweDtcclxuaGVpZ2h0OiAzMnB4O1xyXG5iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWFnZXMvY29tcG9uZW50LnBuZycpO1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuXHJcblxyXG59XHJcbi51c2VyLXRleHR7XHJcbiAgICB0b3A6IDUxcHg7XHJcbmxlZnQ6IDMzN3B4O1xyXG53aWR0aDogODdweDtcclxuaGVpZ2h0OiAzN3B4O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBCb2xkIDMycHgvMzdweCBSYWxld2F5O1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMyMjJDM0M7XHJcbm9wYWNpdHk6IDE7ICAgXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuLnNvcnQtYnl7XHJcbiAgd2lkdGg6IDk4cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgXHJcbn1cclxuLnNvcnQtY2xyXHJcbntcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSYWxld2F5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGNvbG9yOiAjMTYxRTJCO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgXHJcbn1cclxuXHJcbi5zb3J0LXN5bWJvbHtcclxuIFxyXG53aWR0aDogMThweDtcclxuaGVpZ2h0OiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Rvd24tY2hldnJvbi5wbmcnKTtcclxub3BhY2l0eTogMTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgbGVmdDogOTJweDtcclxuXHJcbn1cclxuLnNvcnQtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTJweC8xNHB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxud2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zOHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uc2VhcmNoLWJhcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQlO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuLnNlYXJjaC1idG57XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QTRBNDtcclxuIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMTZweC8xOXB4IFJhbGV3YXk7XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogI0E0QTRBNDtcclxub3BhY2l0eTogMTtcclxufVxyXG4uc2VhcmNoLXN5bWJvbHtcclxuICAgXHJcbndpZHRoOiAxOHB4O1xyXG5oZWlnaHQ6IDE4cHg7XHJcbmJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nJyk7XHJcbm9wYWNpdHk6IDE7XHJcbm1hcmdpbi1sZWZ0OiAtMTFweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDJweDtcclxufVxyXG4udXNlci1zZWN0aW9uLWJvcmRlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRhYmxlLXNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzI2cHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgIFxyXG59XHJcbi5zZWFyY2gtY292ZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDE1MXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuIFxyXG59XHJcbi5kcnAtY292ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMzglO1xyXG4gIGxlZnQ6IC0xMTglO1xyXG59XHJcbi8qIHZpZXcgc2VjdGlvbiAqL1xyXG4udmlld3tcclxuICB3aWR0aDogMzYwcHg7XHJcbmhlaWdodDogNDczcHg7XHJcbmJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggIzAwMDAwMDI5O1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5vcGFjaXR5OiAxO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNTAlO1xyXG5sZWZ0OiA1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4udmlldy1pY29ue1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnZpZXctY2xvc2V7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9DbG9zZS5wbmcnKSA7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbmhlaWdodDogMjRweDtcclxuZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wcm9maWxlLXZpZXd7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG5oZWlnaHQ6IDE1MHB4O1xyXG5cclxubWFyZ2luOiAzMHB4IGF1dG8gO1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5yb3VuZC1wcm9maWxle1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvdmluYXktc2luZ2gucG5nJykgO1xyXG4gXHJcblxyXG59XHJcbi52aWV3LXRleHR7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcblxyXG59XHJcbi52aWV3LW5hbWV7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udDogQm9sZCAyNHB4LzI5cHggUmFsZXdheTtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBjb2xvcjogIzIyMkMzQztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi52aWV3LWVtYWlse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgY29sb3I6ICMyMjJDM0M7XHJcbiAgb3BhY2l0eTogMVxyXG59XHJcbi52aWV3LWJvcmRlcntcclxuICB3aWR0aDogMzI4cHg7XHJcbiAgLyogaGVpZ2h0OiAwcHg7ICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERUVBRkU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBtYXJnaW46IDJweCBhdXRvO1xyXG59XHJcbi52aWV3LWJhZGdle1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udmlldy1pbWFnZXNiYWRnZXtcclxuICB3aWR0aDogMjgzcHg7XHJcbmhlaWdodDogMTAwcHg7XHJcbm1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcbi5iYWRnZS12aWV3LWltZ3tcclxuICB3aWR0aDogNTBweDtcclxuaGVpZ2h0OiA0M3B4O1xyXG5tYXJnaW46IDBweCA1cHggNXB4IDVweDtcclxufVxyXG4uYWN0aW9ucy12aWV3OmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLyphc3NpZ24gYmFkZ2UgKi9cclxuLmNvdmVye1xyXG4gIHdpZHRoOiA1NjJweDtcclxuICBoZWlnaHQ6IDMxOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiBsZWZ0OiA1MCU7XHJcbiB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7IFxyXG5cclxuXHJcbn1cclxuLnVwcGVyLXNlY3Rpb257XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGOEZCRkY7XHJcbn1cclxuLnRleHR7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogQm9sZCAyMHB4LzI0cHggUmFsZXdheTtcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjMjIyQzNDO1xyXG5vcGFjaXR5OiAxO1xyXG5tYXJnaW4tdG9wOiAyOXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG59XHJcbi5jbG9zZS1JbWFnZXtcclxuXHJcbmZsb2F0OiByaWdodDtcclxud2lkdGg6IDUwJTtcclxucGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbn1cclxuLmJhY2staW1ne1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0Nsb3NlLnBuZycpIDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5iYWRnZS1pbWFnZXN7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmV5ZS1pbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMTBweCA1cHggMHB4IDVweCA7XHJcbn1cclxuLmFzc2lnbi1idG57XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNHB4O1xyXG5cclxufVxyXG4uYnRuLWFzc2lnbntcclxuICB3aWR0aDogNTE2cHg7XHJcbmhlaWdodDogNjBweDtcclxuYmFja2dyb3VuZDogIzI1NzhCNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMyMjc5QkM7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IFJlZ3VsYXIgMjJweC8yN3B4IFJvYm90bztcclxubGV0dGVyLXNwYWNpbmc6IDA7XHJcbmNvbG9yOiAjRkZGRkZGO1xyXG5vcGFjaXR5OiAxO1xyXG5ib3JkZXI6IG5vbmU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGVmdC1ib3JkZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNjFFMkI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbn1cclxuLnJpZ2h0LWJvcmRlcntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjZDJkYTM4O1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIHBhZGRpbmctdG9wOiAxMTlweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2hlY2stbGFiZWw6YmVmb3JlIHtcclxuICAvKiBjb250ZW50OiB1cmwoXCJodHRwczovL2NkbjEuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy93aW5kb3dzOF9pY29uc19pY29ucGhhcm0vMjYvdW5jaGVja2VkX2NoZWNrYm94LnBuZ1wiKTsgKi9cclxuIFxyXG5cclxuIHotaW5kZXg6IDEwMDtcclxuXHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiA3cHg7XHJcbmxlZnQ6IDM1cHg7XHJcblxyXG59XHJcbjpjaGVja2VkKy5jaGVjay1sYWJlbDpiZWZvcmUge1xyXG4gY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2hlY2sucG5nXCIpO1xyXG4gd2lkdGg6IDIwcHg7XHJcbiBoZWlnaHQ6IDIwcHg7XHJcbiBcclxuXHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG4vKnB1cmUgY29zbWV0aWNzOiovXHJcbi5jaGVjay1pbWd7XHJcbiB3aWR0aDogNTBweDtcclxuIGhlaWdodDogNTBweDtcclxufVxyXG4uY2hlY2stbGFiZWx7XHJcbiAgbWFyZ2luOjBweCA1cHggMHB4IDVweCA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-moderator',
          templateUrl: './moderator.component.html',
          styleUrls: ['./moderator.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
            static: true
          }]
        }]
      });
    })();

    var ELEMENT_DATA = [{
      position: 1,
      User: 'Ayush',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      userType: 'user',
      Membersince: '2/1/2020',
      status: 'active',
      Action: 'assets/images/eye.png'
    }, {
      position: 2,
      User: 'Aditya',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 3,
      User: 'Tanay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 4,
      User: 'akshay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 5,
      User: 'abhi',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 6,
      User: 'anurag',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 7,
      User: 'Tanay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 8,
      User: 'akshay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 9,
      User: 'abhi',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 10,
      User: 'anurag',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 11,
      User: 'Tanay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 12,
      User: 'akshay',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 13,
      User: 'abhi',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }, {
      position: 14,
      User: 'anurag',
      email: 'ay.jain@thesynapse.com',
      Badge: 'assets/images/badge3.png',
      Membersince: '2/1/2020',
      status: 'active',
      userType: 'user',
      Action: 'assets/images/eye.png'
    }];
    /***/
  },

  /***/
  "./src/app/practice/practice.component.ts":
  /*!************************************************!*\
    !*** ./src/app/practice/practice.component.ts ***!
    \************************************************/

  /*! exports provided: PracticeComponent */

  /***/
  function srcAppPracticePracticeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracticeComponent", function () {
      return PracticeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      right: 'ff'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      right: 'ff'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      right: 'ff'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      right: 'ff'
    }];

    var PracticeComponent =
    /*#__PURE__*/
    function () {
      function PracticeComponent(dialog) {
        _classCallCheck(this, PracticeComponent);

        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'right'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(PracticeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }]);

      return PracticeComponent;
    }();

    PracticeComponent.ɵfac = function PracticeComponent_Factory(t) {
      return new (t || PracticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    PracticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PracticeComponent,
      selectors: [["app-practice"]],
      decls: 9,
      vars: 0,
      consts: [["type", "checkbox", "id", "myCheckbox1"], ["for", "myCheckbox1", 1, "check-label"], ["src", "assets/images/badge3.png", 1, "check-img"], ["type", "checkbox", "id", "myCheckbox2"], ["for", "myCheckbox2", 1, "check-label"], ["type", "checkbox", "id", "myCheckbox3"], ["for", "myCheckbox3", 1, "check-label"]],
      template: function PracticeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".check-label[_ngcontent-%COMP%]:before {\r\n     content: url(\"https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/unchecked_checkbox.png\");\r\n    \r\n   \r\n    z-index: 100;\r\n   \r\n   position: relative;\r\n   top: 10px;\r\n   left: 30px;\r\n   \r\n  }\r\n  [_ngcontent-%COMP%]:checked + .check-label[_ngcontent-%COMP%]:before {\r\n    content: url(\"/assets/images/check.png\");\r\n    width: 20px;\r\n    height: 20px;\r\n    background-repeat: no-repeat;\r\n    \r\n   \r\n  }\r\n  input[type=checkbox][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .check-img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhY3RpY2UvcHJhY3RpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLHlHQUF5Rzs7O0lBRzFHLFlBQVk7O0dBRWIsa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxVQUFVOztFQUVYO0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7OztFQUc5QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0Esa0JBQWtCO0VBQ25CO0lBQ0csV0FBVztJQUNYLFlBQVk7RUFDZDtFQUVBOztLQUVHIiwiZmlsZSI6InNyYy9hcHAvcHJhY3RpY2UvcHJhY3RpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVjay1sYWJlbDpiZWZvcmUge1xyXG4gICAgIGNvbnRlbnQ6IHVybChcImh0dHBzOi8vY2RuMS5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL3dpbmRvd3M4X2ljb25zX2ljb25waGFybS8yNi91bmNoZWNrZWRfY2hlY2tib3gucG5nXCIpO1xyXG4gICAgXHJcbiAgIFxyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICBcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB0b3A6IDEwcHg7XHJcbiAgIGxlZnQ6IDMwcHg7XHJcbiAgIFxyXG4gIH1cclxuICA6Y2hlY2tlZCsuY2hlY2stbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NoZWNrLnBuZ1wiKTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIFxyXG4gICBcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLypwdXJlIGNvc21ldGljczoqL1xyXG4gLmNoZWNrLWltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAvKiAjbXlDaGVja2JveDF7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PracticeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-practice',
          templateUrl: './practice.component.html',
          styleUrls: ['./practice.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile-details/profile-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/profile-details/profile-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProfileDetailsComponent */

  /***/
  function srcAppProfileDetailsProfileDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function () {
      return ProfileDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProfileDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProfileDetailsComponent(router) {
        _classCallCheck(this, ProfileDetailsComponent);

        this.router = router;
        this.imagePath = "";
        this.name = "";
        this.emailId = "";
      }

      _createClass(ProfileDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.length > 0) {
            this.token = JSON.parse(localStorage.getItem("userInfo"));
            this.imagePath = this.token.ImageURL;
            this.name = this.token.Name;
            this.emailId = this.token.Email;
          } else {
            this.router.navigate(['../login']);
          }
        }
      }, {
        key: "signOut",
        value: function signOut() {
          console.log('User signed out. ' + localStorage.length);
          localStorage.clear();
          this.token = null;
          console.log('User signed out. ' + localStorage.length); // var auth2 = this.gapi.auth2.getAuthInstance();
          // auth2.signOut().then(function () {
          //   localStorage.clear();
          //   this.token=null;
          //   console.log('User signed out. ' + localStorage.length);
          // });
        }
      }]);

      return ProfileDetailsComponent;
    }();

    ProfileDetailsComponent.ɵfac = function ProfileDetailsComponent_Factory(t) {
      return new (t || ProfileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ProfileDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileDetailsComponent,
      selectors: [["app-profile-details"]],
      decls: 22,
      vars: 3,
      consts: [[1, "card-container"], [1, "upper-container"], [1, "image-container"], ["alt", "", 3, "src"], [1, "lower-container"], [1, "border"], [1, "badges-cover"], ["src", "assets/images/badge1.png", "alt", "", "href", "#", "data-toggle", "tooltip", "data-placement", "bottom", "title", "for completion of 1 year", 1, "badge1"], ["src", "assets/images/badge2.png", "alt", ""], ["src", "assets/images/badge3.png", "alt", ""], ["src", "assets/images/badge4.png", "alt", ""], [1, "box-cover"], ["href", "#", 3, "click"]],
      template: function ProfileDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailsComponent_Template_a_click_20_listener($event) {
            return ctx.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.emailId, "");
        }
      },
      styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    background: #f1f1f1;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n.card-container[_ngcontent-%COMP%]{\r\nwidth: 300px;\r\nheight: 500px;\r\nbackground-color: #ffff;\r\nborder-radius:6px;\r\n position: absolute;\r\n top: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%); \r\nbox-shadow: 0px 1px 10px 1px rgb(211, 202, 202);\r\noverflow: hidden;\r\ndisplay: inline-block;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    margin: 0px 5px 0px 5px;\r\n   \r\n}\r\n.image-container[_ngcontent-%COMP%]{\r\n    background: white;\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    \r\n    -webkit-transform: translate(108px,100px);\r\n            transform: translate(108px,100px);\r\n\r\n}\r\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n   \r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n\r\n}\r\n.upper-container[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    background-color: #F1F3F5;\r\n}\r\n.lower-container[_ngcontent-%COMP%]{\r\n    height: 320px;\r\n    background: #fff;\r\n    padding: 20px;\r\n    padding-top: 40px;\r\n    text-align: center;\r\n}\r\n.lower-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    line-height: .6;\r\n    font-weight: lighter;\r\n\r\n}\r\n.lower-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    color:#dd1919;\r\n    opacity: .6;\r\n    font-weight: bold;\r\n    padding-top: 10px;\r\n   \r\n}\r\n.lower-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    color: grey;\r\n    padding-top: 10px;\r\n \r\n}\r\n.btn-cover[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n \r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    padding: 12px 20px;\r\n    background: #4285F4;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 30px;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    -webkit-transition: all .3s ease-in;\r\n    transition: all .3s ease-in;\r\n   \r\n}\r\n.border[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid gray;\r\n    width: 250px;\r\n    margin: 10px auto;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background: transparent;\r\n    color: #4285F4;\r\n    border:2px solid #4285F4;\r\n\r\n}\r\n.badge1[_ngcontent-%COMP%]:hover{\r\n    background-color: red;\r\n    opacity:50%;\r\n    -webkit-transition: all 0.3s ease-in-out ;\r\n    transition: all 0.3s ease-in-out ;\r\n}\r\n.badges-cover[_ngcontent-%COMP%]{\r\n      padding-top: 20px;\r\n      border-radius: 50%;\r\n      font-size: 18px;\r\n  }\r\n.badges-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      width: 50px;\r\n      height: 50px;\r\n      margin: 0px 5px 0px 5px ;\r\n  }\r\n.logout[_ngcontent-%COMP%]{\r\n      padding-top: 20px;\r\n  }\r\n.box-cover[_ngcontent-%COMP%]{\r\n     margin-top: 40px;\r\n   \r\n }\r\n.box-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n     background-color: #C42732;\r\n     border-radius: 10px;\r\n     color: white;\r\n     padding: 10px 13px;\r\n     opacity: .9;\r\n }\r\n.box-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: transparent;\r\n    color: #C42732;\r\n   \r\n    border:2px solid #C42732;\r\n    -webkit-transition: all .2s ease-in;\r\n    transition: all .2s ease-in;\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1kZXRhaWxzL3Byb2ZpbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsaUJBQWlCO0NBQ2hCLGtCQUFrQjtDQUNsQixRQUFRO0FBQ1QsU0FBUztBQUNULHNDQUE4QjtRQUE5Qiw4QkFBOEI7QUFDOUIsK0NBQStDO0FBQy9DLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUNBQWlDO1lBQWpDLGlDQUFpQzs7QUFFckM7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0M7SUFDRyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUEyQjtJQUEzQiwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNDO0lBQ0csdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx3QkFBd0I7O0FBRTVCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlDQUFpQztJQUFqQyxpQ0FBaUM7QUFDckM7QUFFRTtNQUNJLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZUFBZTtFQUNuQjtBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWix3QkFBd0I7RUFDNUI7QUFDQTtNQUNJLGlCQUFpQjtFQUNyQjtBQUNEO0tBQ0ksZ0JBQWdCOztDQUVwQjtBQUNBO0tBQ0kseUJBQXlCO0tBQ3pCLG1CQUFtQjtLQUNuQixZQUFZO0tBQ1osa0JBQWtCO0tBQ2xCLFdBQVc7Q0FDZjtBQUNBO0lBQ0csdUJBQXVCO0lBQ3ZCLGNBQWM7O0lBRWQsd0JBQXdCO0lBQ3hCLG1DQUEyQjtJQUEzQiwyQkFBMkI7O0NBRTlCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1kZXRhaWxzL3Byb2ZpbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbndpZHRoOiAzMDBweDtcclxuaGVpZ2h0OiA1MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gdG9wOiA1MCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxuYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2IoMjExLCAyMDIsIDIwMik7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uaWNvbntcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4O1xyXG4gICBcclxufVxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwOHB4LDEwMHB4KTtcclxuXHJcbn1cclxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gICBcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxufVxyXG4udXBwZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYzRjU7XHJcbn1cclxuLmxvd2VyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb3dlci1jb250YWluZXIgaDMgLGg1e1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxufVxyXG4ubG93ZXItY29udGFpbmVyIGg1e1xyXG4gICAgY29sb3I6I2RkMTkxOTtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgXHJcbn1cclxuLmxvd2VyLWNvbnRhaW5lciBwe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuIFxyXG59XHJcblxyXG4uYnRuLWNvdmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gXHJcbn1cclxuIC5idG57XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDI4NUY0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG4gICBcclxufVxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4gLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM0Mjg1RjQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICM0Mjg1RjQ7XHJcblxyXG59XHJcbi5iYWRnZTE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBvcGFjaXR5OjUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDtcclxufVxyXG5cclxuICAuYmFkZ2VzLWNvdmVye1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5iYWRnZXMtY292ZXIgaW1ne1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweCA7XHJcbiAgfVxyXG4gIC5sb2dvdXR7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuIC5ib3gtY292ZXJ7XHJcbiAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgXHJcbiB9XHJcbiAuYm94LWNvdmVyIGF7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M0MjczMjtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgICAgb3BhY2l0eTogLjk7XHJcbiB9XHJcbiAuYm94LWNvdmVyIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjQzQyNzMyO1xyXG4gICBcclxuICAgIGJvcmRlcjoycHggc29saWQgI0M0MjczMjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-details',
          templateUrl: './profile-details.component.html',
          styleUrls: ['./profile-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update/update.component.ts":
  /*!********************************************!*\
    !*** ./src/app/update/update.component.ts ***!
    \********************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var UpdateComponent =
    /*#__PURE__*/
    function () {
      function UpdateComponent() {
        _classCallCheck(this, UpdateComponent);
      }

      _createClass(UpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
      return new (t || UpdateComponent)();
    };

    UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateComponent,
      selectors: [["app-update"]],
      decls: 35,
      vars: 0,
      consts: [[1, "card-cover"], [1, "upper-section"], [1, "text-update"], [1, "close-Image"], ["align", "end"], ["mat-button", "", "matDialogClose", "", "color", "primary", 1, "back-img"], [1, "lower-section"], [1, "left-badge"], ["src", "assets/images/badge3.png", 1, "badge-img"], [1, "right-section"], [1, "right-text"], [1, "text-right"], [1, "upper-text"], [1, "discription"], [1, "upper-discription"], [1, "discription-text"], [1, "switch-section"], [1, "status"], ["id", "status", "data-toggle", "buttons", 1, "btn-group", "btn-switch"], [1, "btn", "btn-default", "btn-on", "active"], ["type", "radio", "value", "1", "name", "multifeatured_module[module_id][status]", "checked", "checked", 1, "btn-switch"], [1, "btn", "btn-default", "btn-off"], ["type", "radio", "value", "0", "name", "multifeatured_module[module_id][status]", 1, "btn-switch"], [1, "update-btn"], [1, "update-section"]],
      template: function UpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Super friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Badge Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Badge Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Helps everyone in personal and professional problems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "H5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update Badge Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".card-cover[_ngcontent-%COMP%]{\r\n    width: 562px;\r\nheight: 453px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nbox-shadow: 0px 0px 15px #00000029;\r\nborder-radius: 10px;\r\nopacity: 1;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%); \r\n}\r\n.upper-section[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #F2F6FE;\r\n    width: 562px;\r\n    height: 83px;\r\n    opacity: 1;\r\n}\r\n.text-update[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Bold 20px/24px Raleway;\r\nletter-spacing: 0;\r\ncolor: #222C3C;\r\nopacity: 1;\r\nmargin-top: 29px;\r\n    padding-left: 20px;\r\n    float:left;\r\n    width: 50%;\r\n\r\n}\r\n.close-Image[_ngcontent-%COMP%]{\r\n \r\nfloat: right;\r\nwidth: 50%;\r\npadding-top: 20px;\r\n    padding-right: 10px;\r\n\r\n}\r\n.back-img[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('/assets/images/Close.png') ;\r\n    opacity: 1;\r\n    background-repeat: no-repeat;\r\n    float: right;\r\n}\r\n.lower-section[_ngcontent-%COMP%]{\r\n    width: 562px;\r\n    height: 253px;\r\n}\r\n.badge-img[_ngcontent-%COMP%]{\r\n    width: 88px;\r\nheight: 76px;\r\nmargin-top: 31px;\r\nmargin-left: 23px;\r\n}\r\n.left-badge[_ngcontent-%COMP%]{\r\n    width: 142px;\r\n    height: 142px;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px dashed #707070;\r\n    border-radius: 10px;\r\n    opacity: 1;\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    float: left;\r\n}\r\n.right-section[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    height: 265px;\r\n    float: left;\r\n   \r\n}\r\n.text-right[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\nfloat: left;\r\npadding-left: 10px;\r\npadding-top: 10px;\r\n}\r\n.right-text[_ngcontent-%COMP%]{\r\n    width: 350px;\r\nheight: 50px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nborder: 1px solid #C8CFD9;\r\nborder-radius: 3px;\r\nopacity: 1;\r\nmargin-top: 24px;\r\nmargin-left: 21px;\r\n}\r\n.upper-text[_ngcontent-%COMP%]{\r\n    width: 69px;\r\nheight: 14px;\r\ntext-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 0.7;\r\nbackground-color: white;\r\nposition: relative;\r\ntop: -10px;\r\nleft: -82px;\r\n}\r\n.discription[_ngcontent-%COMP%]{\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 3px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    width: 350px;\r\n    height: 99px;\r\n}\r\n.discription-text[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 16px/19px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\n\r\nmargin-left: 10px;\r\nopacity: 1;\r\n}\r\n.upper-discription[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Roboto;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nposition: relative;\r\n    opacity: 0.7;\r\n    left: 10px;\r\n    top: -10px;\r\n    background-color: white;\r\n}\r\n\r\n.switch-section[_ngcontent-%COMP%]{\r\n    width: 159px;\r\nheight: 64px;\r\nmargin-top: 7px;\r\nmargin-left: 20px;\r\n}\r\n.status[_ngcontent-%COMP%]{\r\n    text-align: left;\r\nfont: Regular 12px/14px Raleway;\r\nletter-spacing: 0;\r\ncolor: #161E2B;\r\nopacity: 1;\r\n}\r\n.btn-default.btn-on.active[_ngcontent-%COMP%]{color: white;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    background-color: #5BB75B;\r\n    padding-top: 10px;\r\n    color: white;\r\n}\r\n.btn-default.btn-on[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    color: #A4A4A4;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n\r\n}\r\n.btn-default.btn-off[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    color: #A4A4A4;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n\r\n}\r\n.btn-default.btn-off.active[_ngcontent-%COMP%]{background-color: #DA4F49;color: white;\r\n    \r\n    border: 1px solid #C8CFD9;\r\n    border-radius: 0px 20px 20px 0px;\r\n    padding-top: 10px;\r\n    color: white;\r\n    opacity: 1;}\r\n.btn-switch[_ngcontent-%COMP%]{\r\n        border-radius: 0px 20px 20px 0px;\r\n        width: 150px;\r\n        height: 43px;\r\n        font-size: 14px;\r\n    }\r\n.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:first-child:not(:last-child):not(.dropdown-toggle) {\r\n        \r\n        \r\n        border-radius: 20px 0px 0px 20px;\r\n    }\r\n.update-btn[_ngcontent-%COMP%]{\r\n        width: 516px;\r\n        height: 60px;\r\n        margin:10px auto;\r\n        padding-top: 29px;;\r\n    }\r\n.update-section[_ngcontent-%COMP%]{\r\n        width: 516px;\r\nheight: 60px;\r\nbackground: #2578B5 0% 0% no-repeat padding-box;\r\nborder: 1px solid #2279BC;\r\nopacity: 1;\r\ncolor:white;\r\n        font-size:20px;\r\n        border: none;\r\n        \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEIsYUFBYTtBQUNiLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFNBQVM7QUFDVCxzQ0FBOEI7UUFBOUIsOEJBQThCO0FBQzlCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsZ0JBQWdCO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVOztBQUVkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFVBQVU7QUFDVixpQkFBaUI7SUFDYixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEIsWUFBWTtBQUNaLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakIsY0FBYzs7QUFFZCxpQkFBaUI7QUFDakIsVUFBVTtBQUNWO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsa0JBQWtCO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBR0EsbUJBQW1CO0FBQ25CO0lBQ0ksWUFBWTtBQUNoQixZQUFZO0FBQ1osZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFVBQVU7QUFDVjtBQUdJLDJCQUEyQixZQUFZO0lBQ3ZDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsZUFBZTs7QUFFbkI7QUFDSSw0QkFBNEIseUJBQXlCLENBQUMsWUFBWTs7SUFFbEUseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVUsQ0FBQztBQUNYO1FBQ0ksZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxnQ0FBZ0M7SUFDcEM7QUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksWUFBWTtBQUNwQixZQUFZO0FBQ1osK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1YsV0FBVztRQUNILGNBQWM7UUFDZCxZQUFZOztJQUVoQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1jb3ZlcntcclxuICAgIHdpZHRoOiA1NjJweDtcclxuaGVpZ2h0OiA0NTNweDtcclxuYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA1MCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcclxufVxyXG4udXBwZXItc2VjdGlvbntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjJGNkZFO1xyXG4gICAgd2lkdGg6IDU2MnB4O1xyXG4gICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4udGV4dC11cGRhdGV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBCb2xkIDIwcHgvMjRweCBSYWxld2F5O1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMyMjJDM0M7XHJcbm9wYWNpdHk6IDE7XHJcbm1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbn1cclxuLmNsb3NlLUltYWdle1xyXG4gXHJcbmZsb2F0OiByaWdodDtcclxud2lkdGg6IDUwJTtcclxucGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG4uYmFjay1pbWd7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvQ2xvc2UucG5nJykgO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmxvd2VyLXNlY3Rpb257XHJcbiAgICB3aWR0aDogNTYycHg7XHJcbiAgICBoZWlnaHQ6IDI1M3B4O1xyXG59XHJcbi5iYWRnZS1pbWd7XHJcbiAgICB3aWR0aDogODhweDtcclxuaGVpZ2h0OiA3NnB4O1xyXG5tYXJnaW4tdG9wOiAzMXB4O1xyXG5tYXJnaW4tbGVmdDogMjNweDtcclxufVxyXG4ubGVmdC1iYWRnZXtcclxuICAgIHdpZHRoOiAxNDJweDtcclxuICAgIGhlaWdodDogMTQycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucmlnaHQtc2VjdGlvbntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjY1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgXHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDE2cHgvMTlweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMTtcclxuZmxvYXQ6IGxlZnQ7XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxucGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnJpZ2h0LXRleHR7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbmhlaWdodDogNTBweDtcclxuYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxub3BhY2l0eTogMTtcclxubWFyZ2luLXRvcDogMjRweDtcclxubWFyZ2luLWxlZnQ6IDIxcHg7XHJcbn1cclxuLnVwcGVyLXRleHR7XHJcbiAgICB3aWR0aDogNjlweDtcclxuaGVpZ2h0OiAxNHB4O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDEycHgvMTRweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxub3BhY2l0eTogMC43O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6IC0xMHB4O1xyXG5sZWZ0OiAtODJweDtcclxufVxyXG4uZGlzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG59XHJcbi5kaXNjcmlwdGlvbi10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuZm9udDogUmVndWxhciAxNnB4LzE5cHggUm9ib3RvO1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMxNjFFMkI7XHJcblxyXG5tYXJnaW4tbGVmdDogMTBweDtcclxub3BhY2l0eTogMTtcclxufVxyXG4udXBwZXItZGlzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDEycHgvMTRweCBSb2JvdG87XHJcbmxldHRlci1zcGFjaW5nOiAwO1xyXG5jb2xvcjogIzE2MUUyQjtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIHN3aXRjaCBzZWN0aW9uICovXHJcbi5zd2l0Y2gtc2VjdGlvbntcclxuICAgIHdpZHRoOiAxNTlweDtcclxuaGVpZ2h0OiA2NHB4O1xyXG5tYXJnaW4tdG9wOiA3cHg7XHJcbm1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5zdGF0dXN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBSZWd1bGFyIDEycHgvMTRweCBSYWxld2F5O1xyXG5sZXR0ZXItc3BhY2luZzogMDtcclxuY29sb3I6ICMxNjFFMkI7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4gICAgLmJ0bi1kZWZhdWx0LmJ0bi1vbi5hY3RpdmV7Y29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQjc1QjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idG4tZGVmYXVsdC5idG4tb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjQTRBNEE0O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzhDRkQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxufVxyXG4uYnRuLWRlZmF1bHQuYnRuLW9mZntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICNBNEE0QTQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcbiAgICAuYnRuLWRlZmF1bHQuYnRuLW9mZi5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjogI0RBNEY0OTtjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOENGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMTt9XHJcbiAgICAuYnRuLXN3aXRjaHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XHJcbiAgICAgICAgLyogYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7ICovXHJcbiAgICAgICAgLyogYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudXBkYXRlLWJ0bntcclxuICAgICAgICB3aWR0aDogNTE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI5cHg7O1xyXG4gICAgfVxyXG4gICAgLnVwZGF0ZS1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MTZweDtcclxuaGVpZ2h0OiA2MHB4O1xyXG5iYWNrZ3JvdW5kOiAjMjU3OEI1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyOiAxcHggc29saWQgIzIyNzlCQztcclxub3BhY2l0eTogMTtcclxuY29sb3I6d2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update',
          templateUrl: './update.component.html',
          styleUrls: ['./update.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-details/user-details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-details/user-details.component.ts ***!
    \********************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserDetailsComponent =
    /*#__PURE__*/
    function () {
      function UserDetailsComponent() {
        _classCallCheck(this, UserDetailsComponent);
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) {
      return new (t || UserDetailsComponent)();
    };

    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDetailsComponent,
      selectors: [["app-user-details"]],
      decls: 159,
      vars: 0,
      consts: [[1, "container", "cover"], [1, "head-cover"], [1, "box-cover"], [1, "table", "table-striped"], ["src", "assets/images/badge2.png", "alt", "", "calss", "batch-img"], [1, "userbtn"], [1, "btn-user"]],
      template: function UserDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " User Details of Organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Batch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "john@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "mary@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "john@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "mary@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "john@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Mary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "mary@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "july@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Assign New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".head-cover[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color: #1075b4;\r\n    border-radius: 10px;\r\n\r\n}\r\n.head-cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: white;\r\n    padding-top: 10px;\r\n}\r\n.userbtn[_ngcontent-%COMP%]{\r\n    padding-top: 9px;\r\n\r\n}\r\n.btn-user[_ngcontent-%COMP%]{\r\n    padding: 4px 10px ;\r\n    border: none;\r\n    background-color:#1075b4 ;\r\n    color: white;\r\n    border-radius: 5px;\r\n}\r\n.btn-user[_ngcontent-%COMP%]:hover{\r\n    background-color:#C32631 ;\r\n    -webkit-transition: all 0.3s ease-in;\r\n    transition: all 0.3s ease-in;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 5px 0px 5px ;\r\n}\r\n.cover[_ngcontent-%COMP%]{\r\n    padding-top: 30px;\r\n   \r\n}\r\n.box-cover[_ngcontent-%COMP%]{\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7OztBQUdBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtY292ZXJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA3NWI0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuLmhlYWQtY292ZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4udXNlcmJ0bntcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcblxyXG59XHJcbi5idG4tdXNlcntcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEwNzViNCA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ0bi11c2VyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzMyNjMxIDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweCA7XHJcbn1cclxuLmNvdmVye1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgIFxyXG59XHJcbi5ib3gtY292ZXJ7XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-details',
          templateUrl: './user-details.component.html',
          styleUrls: ['./user-details.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/moderator-section/moderator-section.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/user/moderator-section/moderator-section.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ModeratorSectionComponent */

  /***/
  function srcAppUserModeratorSectionModeratorSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeratorSectionComponent", function () {
      return ModeratorSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModeratorSectionComponent =
    /*#__PURE__*/
    function () {
      function ModeratorSectionComponent() {
        _classCallCheck(this, ModeratorSectionComponent);
      }

      _createClass(ModeratorSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModeratorSectionComponent;
    }();

    ModeratorSectionComponent.ɵfac = function ModeratorSectionComponent_Factory(t) {
      return new (t || ModeratorSectionComponent)();
    };

    ModeratorSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModeratorSectionComponent,
      selectors: [["app-moderator-section"]],
      decls: 0,
      vars: 0,
      template: function ModeratorSectionComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbW9kZXJhdG9yLXNlY3Rpb24vbW9kZXJhdG9yLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeratorSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-moderator-section',
          templateUrl: './moderator-section.component.html',
          styleUrls: ['./moderator-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _moderator_section_moderator_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./moderator-section/moderator-section.component */
    "./src/app/user/moderator-section/moderator-section.component.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_moderator_section_moderator_section_component__WEBPACK_IMPORTED_MODULE_2__["ModeratorSectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_moderator_section_moderator_section_component__WEBPACK_IMPORTED_MODULE_2__["ModeratorSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/view/view.component.ts":
  /*!****************************************!*\
    !*** ./src/app/view/view.component.ts ***!
    \****************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ViewComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dialog!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "vinay singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "v.shekhawar@thesynapses.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ViewComponent =
    /*#__PURE__*/
    function () {
      function ViewComponent(dialog) {
        _classCallCheck(this, ViewComponent);

        this.dialog = dialog;
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef);
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["app-view"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], ["mat-button", "", "color", "primary", 3, "click"], ["myDialog", ""], ["matDialogTitle", ""], [1, "card", "view"], [1, "card-body"], [1, "view-icon"], [1, "view-close"], [1, "profile-view"], [1, "round-profile"], [1, "view-text"], [1, "view-name"], [1, "view-email"], [1, "view-border"], [1, "view-badge"], [1, "view-imagesbadge"], [1, "img"], ["src", "assets/images/badge1.png", 1, "badge-view-img"], ["src", "assets/images/badge3.png", 1, "badge-view-img"], ["src", "assets/images/badge4.png", 1, "badge-view-img"]],
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.openDialogWithTemplateRef(_r74);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Open dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewComponent_ng_template_3_Template, 33, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]],
      styles: [".view[_ngcontent-%COMP%]{\r\n    width: 360px;\r\nheight: 473px;\r\nbackground: #FFFFFF 0% 0% no-repeat padding-box;\r\nbox-shadow: 0px 0px 15px #00000029;\r\nborder-radius: 10px;\r\nopacity: 1;\r\nposition: absolute;\r\n top: 50%;\r\nleft: 50%;\r\n-webkit-transform:translate(-50%,-50%);\r\n        transform:translate(-50%,-50%);\r\n}\r\n.view-icon[_ngcontent-%COMP%]{\r\n    width: 360px;\r\n    float: right;\r\n}\r\n.view-close[_ngcontent-%COMP%]{\r\n    background: url('/assets/images/Close.png') ;\r\n    width: 24px;\r\nheight: 24px;\r\nfloat: right;\r\n}\r\n.profile-view[_ngcontent-%COMP%]{\r\n    width: 150px;\r\nheight: 150px;\r\n\r\nmargin: 30px auto ;\r\nopacity: 1;\r\n}\r\n.round-profile[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    background: url('/assets/images/vinay-singh.png') ;\r\n   \r\n\r\n}\r\n.view-text[_ngcontent-%COMP%]{\r\n    margin: 30px auto;\r\n\r\n}\r\n.view-name[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    font: Bold 24px/29px Raleway;\r\n    letter-spacing: 0;\r\n    color: #222C3C;\r\n    opacity: 1;\r\n}\r\n.view-email[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font: Regular 16px/19px Roboto;\r\n    letter-spacing: 0;\r\n    color: #222C3C;\r\n    opacity: 1\r\n}\r\n.view-border[_ngcontent-%COMP%]{\r\n    width: 328px;\r\n    \r\n    border-bottom: 1px solid #DEEAFE;\r\n    opacity: 1;\r\n    margin: 2px auto;\r\n}\r\n.view-badge[_ngcontent-%COMP%]{\r\n    margin: 30px auto;\r\n    padding-left: 20px;\r\n}\r\n.view-imagesbadge[_ngcontent-%COMP%]{\r\n    width: 283px;\r\nheight: 100px;\r\nmargin: 30px auto;\r\n}\r\n.badge-view-img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\nheight: 43px;\r\nmargin: 0px 5px 5px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCLGFBQWE7QUFDYiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Ysa0JBQWtCO0NBQ2pCLFFBQVE7QUFDVCxTQUFTO0FBQ1Qsc0NBQThCO1FBQTlCLDhCQUE4QjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2YsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0lBQ0ksWUFBWTtBQUNoQixhQUFhOztBQUViLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0RBQWtEOzs7QUFHdEQ7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZixZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3tcclxuICAgIHdpZHRoOiAzNjBweDtcclxuaGVpZ2h0OiA0NzNweDtcclxuYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMDAwMDAwMjk7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNTAlO1xyXG5sZWZ0OiA1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4udmlldy1pY29ue1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi52aWV3LWNsb3Nle1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9DbG9zZS5wbmcnKSA7XHJcbiAgICB3aWR0aDogMjRweDtcclxuaGVpZ2h0OiAyNHB4O1xyXG5mbG9hdDogcmlnaHQ7XHJcbn1cclxuLnByb2ZpbGUtdmlld3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxuaGVpZ2h0OiAxNTBweDtcclxuXHJcbm1hcmdpbjogMzBweCBhdXRvIDtcclxub3BhY2l0eTogMTtcclxufVxyXG4ucm91bmQtcHJvZmlsZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3ZpbmF5LXNpbmdoLnBuZycpIDtcclxuICAgXHJcblxyXG59XHJcbi52aWV3LXRleHR7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuXHJcbn1cclxuLnZpZXctbmFtZXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udDogQm9sZCAyNHB4LzI5cHggUmFsZXdheTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgY29sb3I6ICMyMjJDM0M7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi52aWV3LWVtYWlse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDogUmVndWxhciAxNnB4LzE5cHggUm9ib3RvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjb2xvcjogIzIyMkMzQztcclxuICAgIG9wYWNpdHk6IDFcclxufVxyXG4udmlldy1ib3JkZXJ7XHJcbiAgICB3aWR0aDogMzI4cHg7XHJcbiAgICAvKiBoZWlnaHQ6IDBweDsgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVFQUZFO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbn1cclxuLnZpZXctYmFkZ2V7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udmlldy1pbWFnZXNiYWRnZXtcclxuICAgIHdpZHRoOiAyODNweDtcclxuaGVpZ2h0OiAxMDBweDtcclxubWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuLmJhZGdlLXZpZXctaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbmhlaWdodDogNDNweDtcclxubWFyZ2luOiAwcHggNXB4IDVweCA1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view',
          templateUrl: './view.component.html',
          styleUrls: ['./view.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HP\Desktop\Training\IBadge\Google-login\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map