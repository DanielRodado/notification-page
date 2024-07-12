"use strict";

export const getAllPendingNotifications = () => {
    return document.querySelectorAll("article:has(span.bg-red)");
};

const getNotificationNumber = () => {
    return getAllPendingNotifications().length;
};

const updateCountNotifications = (elementHTML) => {
    elementHTML.innerText = getNotificationNumber();
};

const verifyElementDot = (notification) => {
    return notification.lastElementChild.firstElementChild.lastElementChild.classList.contains("bg-red");
};

const removeDotNotification = (notification) => {
    verifyElementDot(notification)
        ? notification.lastElementChild.firstElementChild.removeChild(
              notification.lastElementChild.firstElementChild.lastElementChild
          )
        : null;
};

const removeStylesNotification = (notification) => {
    notification.classList.remove("bg-grayish-blue-light-1", "cursor-pointer");
};

const removeNotificationPending = (notification) => {
    removeDotNotification(notification);
    removeStylesNotification(notification);
};

export const clearNotifications = (countNotifications) => {
    getAllPendingNotifications().forEach((notification) => {
        removeNotificationPending(notification);
    });
    updateCountNotifications(countNotifications);
};

export const addEventClickNotifications = (listOfNotifications, countNotifications) => {
    listOfNotifications.forEach((notification) => {
        notification.addEventListener("click", () => {
            removeNotificationPending(notification);
            updateCountNotifications(countNotifications);
        });
    });
};
