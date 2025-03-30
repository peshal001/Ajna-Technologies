$(function () {
    PathExploration();
    ContactFlow();
});
function PathExploration() {
    var baseurl = '/tracking/pathexploration.ashx';
    var utm_id = getUrlParameter('utm_id');
    var utm_source = getUrlParameter('utm_source');
    var utm_medium = getUrlParameter('utm_medium');
    var utm_campaign = getUrlParameter('utm_campaign');
    var utm_term = getUrlParameter('utm_term');
    var utm_content = getUrlParameter('utm_content');
    var pathExplorationLogId = "";
    var SerialNumber = 0;
    var pageurl = window.location.href;
    //debugger
    if (getCookieTrak("pathExplorationLogId").length === 0) {
        setCookieTrak("pathExplorationLogId", "", 0);
        pathExplorationLogId = getCookieTrak("pathExplorationLogId");
    }
    else {
        pathExplorationLogId = getCookieTrak("pathExplorationLogId");
    }

    if (getUrlParameter('utm_id') !== "") {
        if (getCookieTrak("utm_id").length === 0) {
            setCookieTrak("utm_id", getUrlParameter('utm_id'), 0);
        }
    }
    else {
        utm_id = getCookieTrak("utm_id");
    }

    if (getUrlParameter('utm_source') !== "") {
        if (getCookieTrak("utm_source").length === 0) {
            setCookieTrak("utm_source", getUrlParameter('utm_source'), 0);
            setCookieTrak("PESerialNumber", SerialNumber, 0);
        }
    }
    else {
        utm_source = getCookieTrak("utm_source");
    }

    if (getUrlParameter('utm_medium') !== "") {
        if (getCookieTrak("utm_medium").length === 0) {
            setCookieTrak("utm_medium", getUrlParameter('utm_medium'), 0);
        }
    }
    else {
        utm_medium = getCookieTrak("utm_medium");
    }

    if (getUrlParameter('utm_campaign') !== "") {
        if (getCookieTrak("utm_campaign").length === 0) {
            setCookieTrak("utm_campaign", getUrlParameter('utm_campaign'), 0);
        }
    }
    else {
        utm_campaign = getCookieTrak("utm_campaign");
    }

    if (getUrlParameter('utm_term') !== "") {
        if (getCookieTrak("utm_term").length === 0) {
            setCookieTrak("utm_term", getUrlParameter('utm_term'), 0);
        }
    }
    else {
        utm_term = getCookieTrak("utm_term");
    }

    if (getUrlParameter('utm_content') !== "") {
        if (getCookieTrak("utm_content").length === 0) {
            setCookieTrak("utm_content", getUrlParameter('utm_content'), 0);
        }
    }
    else {
        utm_content = getCookieTrak("utm_content");
    }

    SerialNumber = getCookie("PESerialNumber");

    var dataSent = "{pathExplorationLogId : '" + pathExplorationLogId + "',SerialNumber : '" + SerialNumber + "',Pageurl : '" + pageurl + "',utm_id : '" + utm_id + "',utm_source : '" + utm_source + "',utm_medium : '" + utm_medium + "',utm_medium : '" + utm_medium + "',utm_campaign : '" + utm_campaign + "',utm_term : '" + utm_term + "',utm_content : '" + utm_content + "'}";

    if (utm_source != "") {
        $.ajax({
            url: baseurl,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: dataSent,
            success: function (data) {
            }

        });
        SerialNumber++;
        setCookieTrak("PESerialNumber", SerialNumber, 0);
    }
}
function ContactFlow() {
    var baseurl = '/tracking/apiflow.ashx';
    var utm_id = getUrlParameter('utm_id');
    var utm_source = getUrlParameter('utm_source');
    var utm_medium = getUrlParameter('utm_medium');
    var utm_campaign = getUrlParameter('utm_campaign');
    var utm_term = getUrlParameter('utm_term');
    var utm_content = getUrlParameter('utm_content');
    var SerialNumber = 0;

    if (getUrlParameter('utm_id') !== "") {
        if (getCookieTrak("utm_id").length === 0) {
            setCookieTrak("utm_id", getUrlParameter('utm_id'), 0);
            setCookieTrak("SerialNumber", SerialNumber, 0);
        }
    }

    if (getUrlParameter('utm_source') !== "") {
        if (getCookieTrak("utm_source").length === 0) {
            setCookieTrak("utm_source", getUrlParameter('utm_source'), 0);
        }
    }

    if (getUrlParameter('utm_medium') !== "") {
        if (getCookieTrak("utm_medium").length === 0) {
            setCookieTrak("utm_medium", getUrlParameter('utm_medium'), 0);
        }
    }

    if (getUrlParameter('utm_campaign') !== "") {
        if (getCookieTrak("utm_campaign").length === 0) {
            setCookieTrak("utm_campaign", getUrlParameter('utm_campaign'), 0);
        }
    }
    if (getUrlParameter('utm_term') !== "") {
        if (getCookieTrak("utm_term").length === 0) {
            setCookieTrak("utm_term", getUrlParameter('utm_term'), 0);
        }
    }
    if (getUrlParameter('utm_content') !== "") {
        if (getCookieTrak("utm_content").length === 0) {
            setCookieTrak("utm_content", getUrlParameter('utm_content'), 0);
        }
    }

    SerialNumber = getCookie("SerialNumber");

    var dataSent = "{SerialNumber : '" + SerialNumber + "',utm_id : '" + utm_id + "',utm_source : '" + utm_source + "',utm_medium : '" + utm_medium + "',utm_medium : '" + utm_medium + "',utm_campaign : '" + utm_campaign + "',utm_term : '" + utm_term + "',utm_content : '" + utm_content + "'}";

    utm_id = getCookie("utm_id");
    //debugger
    var uniID = 0;
    if (utm_id != "") {
        const utmlist = utm_id.split("_");
        uniID = utmlist[0];
    }

    if (uniID > 0) {
        $.ajax({
            url: baseurl,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: dataSent,
            success: function (data) {
            }

        });
        SerialNumber++;
        //delete_cookie("SerialNumber");
        setCookieTrak("SerialNumber", SerialNumber, 0);
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getCookieTrak(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookieTrak(cname, cvalue, exdays) {
    var d = new Date();
    var guidlog = "";
    if (cvalue === "") {
        guidlog = generateUUID() + d.getFullYear() + d.getMonth() + d.getDate();
    }
    else {
        guidlog = cvalue;
    }
    document.cookie = cname + "=" + guidlog;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}