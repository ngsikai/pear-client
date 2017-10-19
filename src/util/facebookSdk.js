// Cordova
document.addEventListener('deviceready', () => {
  if (typeof facebookConnectPlugin !== 'undefined') {
    global.FB = window.facebookConnectPlugin
    global.FB.login = global.FB.login.papp(['public_profile'])
  }
})

// Browser
window.fbAsyncInit = function() {
  /* global FB */
  FB.init({
    appId: '2012482058985830',
    cookie: true,
    xfbml: true,
    version: 'v2.10',
  })
  FB.AppEvents.logPageView()
}

// prettier-ignore
/* eslint-disable */
;(function(d, s, id){ var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
