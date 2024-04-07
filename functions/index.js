/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onCall } = require("firebase-functions/v2/https");
// import * as logger from "firebase-functions/logger";
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = onCall((request) => {
  if (request.auth.token.admin !== true) {
    return { error: "Non-admins cannot add new admins" };
  }

  // get user and add custom claim (admin)
  return admin
    .auth()
    .getUserByEmail(request.data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Successfully made ${request.data.email} an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});
