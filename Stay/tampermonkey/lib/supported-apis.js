'use strict';
const GM_APIS = new Set([
    "GM_log",
    "GM_deleteValue",
    "GM.deleteValue",
    "GM_getValue",
    "GM.getValue",
    "GM_listValues",
    "GM.listValues",
    "GM_setValue",
    "GM.setValue",
    "GM_registerMenuCommand",
    "GM.registerMenuCommand",
    "GM_addStyle",
    "GM.addStyle",
    "none",
    "None",
    "GM_getResourceURL",
    "GM.getResourceURL",
    "GM_getResourceUrl",
    "GM.getResourceUrl",
    "GM_getResourceText",
    "GM.getResourceText",
    "GM_xmlhttpRequest",
    "GM.xmlHttpRequest",
    "GM_openInTab",
    "GM.openInTab",
    "GM_notification"
]);
const UserScriptUnsupport_TAGS = new Set(["source","connect"]);
const RunAtUnsupport_ATTRS = new Set(["context-menu"]);
