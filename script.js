$(document).ready(function() {
  //list of streamers
  var streamers = [{
    "mature": false,
    "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
    "broadcaster_language": "en",
    "label": "FreeCodeCamp",
    "game": "Creative",
    "language": "en",
    "_id": 79776140,
    "name": "freecodecamp",
    "created_at": "2015-01-14T03:36:47Z",
    "updated_at": "2016-09-17T05:00:52Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
    "profile_banner_background_color": null,
    "partner": false,
    "url": "https://www.twitch.tv/freecodecamp",
    "views": 161989,
    "followers": 10048,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
      "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
      "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
      "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
      "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
    }
  }, {
    "mature": false,
    "status": "Kespa Cup EU Seed Qualifier",
    "broadcaster_language": "fr",
    "label": "OgamingSC2",
    "game": "StarCraft II",
    "language": "en",
    "_id": 71852806,
    "name": "ogamingsc2",
    "created_at": "2014-09-24T15:06:58Z",
    "updated_at": "2016-09-17T06:02:59Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg",
    "profile_banner_background_color": null,
    "partner": true,
    "url": "https://www.twitch.tv/ogamingsc2",
    "views": 20070855,
    "followers": 39837,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/ogamingsc2",
      "follows": "https://api.twitch.tv/kraken/channels/ogamingsc2/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/ogamingsc2/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/ogamingsc2/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/ogamingsc2",
      "subscriptions": "https://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/ogamingsc2/editors",
      "teams": "https://api.twitch.tv/kraken/channels/ogamingsc2/teams",
      "videos": "https://api.twitch.tv/kraken/channels/ogamingsc2/videos"
    }
  }, {
    "mature": false,
    "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
    "broadcaster_language": "en",
    "label": "ESL_SC2",
    "game": "StarCraft II",
    "language": "en",
    "_id": 30220059,
    "name": "esl_sc2",
    "created_at": "2012-05-02T09:59:20Z",
    "updated_at": "2016-09-17T06:02:57Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
    "profile_banner_background_color": "#050506",
    "partner": true,
    "url": "https://www.twitch.tv/esl_sc2",
    "views": 60843789,
    "followers": 135275,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
      "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
      "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
      "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
      "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
    }
  }, {
    "mature": false,
    "status": "Building a new hackintosh for #programming and gaming and having a few beers! Lets do this! #pcbuilding ",
    "broadcaster_language": "en",
    "label": "noobs2ninjas",
    "game": "Creative",
    "language": "en",
    "_id": 82534701,
    "name": "noobs2ninjas",
    "created_at": "2015-02-13T08:13:10Z",
    "updated_at": "2016-09-16T18:00:54Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-channel_offline_image-7f974925e9dc942c-1920x1080.jpeg",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_banner-0a065656911e6d4d-480.jpeg",
    "profile_banner_background_color": null,
    "partner": false,
    "url": "https://www.twitch.tv/noobs2ninjas",
    "views": 47990,
    "followers": 832,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/noobs2ninjas",
      "follows": "https://api.twitch.tv/kraken/channels/noobs2ninjas/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/noobs2ninjas/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/noobs2ninjas/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/noobs2ninjas",
      "subscriptions": "https://api.twitch.tv/kraken/channels/noobs2ninjas/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/noobs2ninjas/editors",
      "teams": "https://api.twitch.tv/kraken/channels/noobs2ninjas/teams",
      "videos": "https://api.twitch.tv/kraken/channels/noobs2ninjas/videos"
    }
  }, {
    "label": "Twitch Hacker",
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }];

  //loop through list
  for (var i = 0; i < streamers.length; i++) {
    //on click, search for streamer
    $('.submitButton').on('click', function() {
      var searchValue = $('.searchHere').val();
      $('#allStreamers').empty();
      switch (searchValue) {
        case (streamers[0].label):
          $('#allStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + streamers[0].url + '"><img class = "img-responsive" src = "' + streamers[0].logo + '"></a><strong>' + streamers[0].label + '</strong></p></li>');
          break;
        case (streamers[1].label):
          $('#allStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + streamers[1].url + '"><img class = "img-responsive" src = "' + streamers[1].logo + '"></a><strong>' + streamers[1].label + '</strong></p></li>');
          break;
        case (streamers[2].label):
          $('#allStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + streamers[2].url + '"><img class = "img-responsive" src = "' + streamers[2].logo + '"></a><strong>' + streamers[2].label + '</strong></p></li>');
          break;
        case (streamers[3].label):
          $('#allStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + streamers[3].url + '"><img class = "img-responsive" src = "' + streamers[3].logo + '"></a><strong>' + streamers[3].label + '</strong></p></li>');
          break;
        case (streamers[4].label):
          $('#allStreamers').append('<li class = "stream">' + '<h4 class = "text-danger"><strong>' + streamers[4].label + '</strong></h4>' + '<br/><strong>' + streamers[4].status + '</strong><br/><br/><strong>' + streamers[4].message + '</strong></li>')
          break;
      }
    });

    //on keyup, search streamers
    $('.searchHere').on('keyup', function(event) {
      if (event.keyCode === 13) {
        $('.submitButton').click();
      }
    });

    //autocomplete search
    $(".searchHere").autocomplete({
      minLength: 1,
      source: streamers,
      select: function(event, ui) {
        $(".searchHere").val(ui.item.label);
        return false;
      }
    });

    var url = streamers[i].url;
    var displayName = streamers[i].label;
    var logo = streamers[i].logo;
    var status;
    var message = streamers[i].message;
    var error;

    //put online and offline statuses randomly
    if (i < streamers.length - 1) {
      var x = Math.random();
      if (x < 0.5) {
        status = "Offline";
        $('#allStreamers, #offlineStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + url + '"><img class = "img-responsive" src = "' + logo + '"></a><strong>' + displayName + '</strong></p><p class = "text-info"><strong>' + status + '</strong></p></li>');
      } else {
        status = streamers[i].status;
        $('#allStreamers, #onlineStreamers').append('<li class = "stream"><p><a target = "_blank" href = "' + url + '"><img class = "img-responsive" src = "' + logo + '"></a><strong>' + displayName + '</strong></p><p class = "text-info"><strong>' + status + '</strong></p></li>');
      }
    } else {
      status = streamers[i].status;
      error = streamers[i].error;
      $('#allStreamers, #offlineStreamers').append('<li class = "stream">' + '<h4 class = "text-danger"><strong>' + displayName + '</strong></h4>' + '<br/><strong>' + status + '</strong><br/><br/><strong>' + message + '</strong></li>')
    }
  }
});
