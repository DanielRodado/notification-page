"use strict";

import {
    getAllPendingNotifications,
    addEventClickNotifications,
    clearNotifications,
} from "../../src/js/fuctions.js";

const $clearNotifications = document.getElementById("clearNotifications");
const $countNotifications = document.getElementById("countNotifications");

addEventClickNotifications(getAllPendingNotifications(), $countNotifications);

$clearNotifications.addEventListener("click", () => {
    clearNotifications($countNotifications);
});