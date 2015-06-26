

//<div class="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>


window.fbAsyncInit = function() {
    FB.init({
      appId      : '856772727693113',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function callFacebookLink () {
console.log('callFacebookLink');

	FB.ui({
		method: 'share',
		href: 'http://localhost:8000/index.html',
	}, function(response){});
}


