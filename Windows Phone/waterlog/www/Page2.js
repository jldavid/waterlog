/*
 * JS for Page2 generated by Appery.io
 *
 * Created on: Sunday, April 28, 2013, 07:14:41 AM (PDT)
 */

/* Setting project environment indicator */
Appery.env = "apk";

Appery.getProjectGUID = function() {
    return 'cc7604bf-7a24-471f-84f4-750aeb4afb9b';
}

Appery.getTargetPlatform = function() {
    return 'W';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

/*
 * Service settings
 */
var Foursquare_Settings = {
    "client_id": "L43LFSTUPVMYRPKLV0PDIFIFU0IHDHA5PLSX2CFZUYQRH322",
    "redirect_uri": "http://appery.io/app/view/cc7604bf-7a24-471f-84f4-750aeb4afb9b/feed.html"
}

/*
 * Services
 */
var checkinlist = new Appery.RestService({
    'url': 'http://waterlog.us/foursquare?lat=40.7142&long=74.0064',
    'dataType': 'json',
    'type': 'get',
});
var waterlog_profile = new Appery.RestService({
    'url': 'http://www.waterlog.us/profile',
    'dataType': 'json',
    'type': 'get',
});
var recent = new Appery.RestService({
    'url': 'http://waterlog.us/recent',
    'dataType': 'json',
    'type': 'get',
});
var Foursquare_UserAPI = new Appery.RestService({
    'url': 'https://api.foursquare.com/v2/users/self',
    'dataType': 'json',
    'type': 'get',
});

//createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "SurveyResults",
    "location": "SurveyResults.html"
}, {
    "name": "checkin_activity",
    "location": "checkin_activity.html"
}, {
    "name": "Page7",
    "location": "Page7.html"
}, {
    "name": "Page6",
    "location": "Page6.html"
}, {
    "name": "Page4",
    "location": "Page4.html"
}, {
    "name": "Page5",
    "location": "Page5.html"
}, {
    "name": "checkin_list",
    "location": "checkin_list.html"
}, {
    "name": "stats",
    "location": "stats.html"
}, {
    "name": "profile",
    "location": "profile.html"
}, {
    "name": "Foursquare_Signin",
    "location": "Foursquare_Signin.html"
}, {
    "name": "Graph",
    "location": "Graph.html"
}, {
    "name": "buildinfo",
    "location": "buildinfo.html"
}, {
    "name": "Foursquare_User",
    "location": "Foursquare_User.html"
}, {
    "name": "Page3",
    "location": "Page3.html"
}, {
    "name": "Page2",
    "location": "Page2.html"
}, {
    "name": "auth",
    "location": "auth.html"
}, {
    "name": "Page1",
    "location": "Page1.html"
}, {
    "name": "feed",
    "location": "feed.html"
}];

j_185_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_3': 'j_188'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_185';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */
    j_185_beforeshow = function() {
        Appery.CurrentScreen = 'j_185';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_4812_onLoad = j_185_onLoad = function() {
        screen_4812_elementsExtraJS();

        j_185_deviceEvents();
        j_185_windowEvents();
        screen_4812_elementsEvents();
    }

    // screen window events
    screen_4812_windowEvents = j_185_windowEvents = function() {
        $('#j_185').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    j_185_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_4812_elementsExtraJS = j_185_elementsExtraJS = function() {
        // screen (screen-4812) extra code

    }

    // screen elements handler
    screen_4812_elementsEvents = j_185_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#j_185").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_185_beforeshow();
    });

    if (runBeforeShow) {
        j_185_beforeshow();
    } else {
        j_185_onLoad();
    }

}

$("#j_185").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_185_js();
});