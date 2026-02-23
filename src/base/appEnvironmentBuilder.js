"use strict";

let getAppEnvironment = function (applicationRootDirectory) {
	// Create simple environment Object.
	let appEnv = { "appPath": applicationRootDirectory };
	console.log("Application Root Directory: " + appEnv.appPath);
	appEnv.responseGenerator = require(appEnv.appPath + '/src/base/responseGenerator');
	console.log("Get App Env: " + appEnv.responseGenerator);
	appEnv.getCurrentLine = require('get-current-line').default;

	return appEnv;
}

module.exports = {
	getAppEnvironment: getAppEnvironment
};