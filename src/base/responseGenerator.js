"use strict";

// let sendResponse = function (responseObject, errorStatus, responseCode, responseData, errorCode, errorMessage, logUUID = "") {

let sendResponse = function (responseObject, errorStatus, responseCode, responseData, errorCode, errorMessage) {
	try {
		responseCode = parseInt(responseCode);
		let response_object = {};

		if (errorStatus == false && responseCode >= 200 && responseCode < 300) {
			responseObject.status(responseCode);
			response_object["status"] = "success";
			response_object["data"] = responseData;
			response_object["error"] = null;
			response_object["errorCode"] = 0;
			// response_object["logUUID"] = logUUID;
		}
		else {
			responseObject.status(responseCode);
			response_object["status"] = "error";
			response_object["data"] = responseData;
			response_object["error"] = errorMessage;
			response_object["errorCode"] = errorCode;
			// response_object["logUUID"] = logUUID;
		}

		if (!responseObject.headersSent) {
			responseObject.send(response_object);
		}
	}
	catch (err) {
		console.error(err);
		let returnStatus = {
			"status": "error",
			"description": "Oops! Something went wrong while processing your request."
		};

		if (!responseObject.headersSent) {
			responseObject.status(500);
			responseObject.send(returnStatus);
		}
		return;
	}
};

module.exports = {
	sendResponse: sendResponse
};