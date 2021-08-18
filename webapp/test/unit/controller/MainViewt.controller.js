/*global QUnit*/

sap.ui.define([
	"logaligrup/invoices/controller/MainViewt.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainViewt Controller");

	QUnit.test("I should test the MainViewt controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
