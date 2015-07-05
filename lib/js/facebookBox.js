

var facebookBox = new FacebookBox();

function FacebookBox() {
    this.mesh = null;

    this.isPlayingAnimation = true;
    this.rotateSpeed = 0.01;
}

FacebookBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", loadFacebookBox);
};

FacebookBox.prototype.playAnimation = function() {
    var mesh = this.mesh;

    mesh.rotation.y -= this.rotateSpeed;
};

FacebookBox.prototype.callFacebookLink = function() {
console.log('callFacebookLink');

    FB.ui({
      method: 'share',
      href: 'http://172.30.1.18:8000/index.html'
    }, function(response){});
};


function loadFacebookBox( geometry ) {
    facebookBox.mesh = createScene(geometry, 25, assetPath + "blue.jpg");
    facebookBox.mesh.position.set(-50, 70, 5);
    facebookBox.mesh.rotation.set(0, 0, 0);
    
    facebookBox.mesh.objType = objType.facebookBox;

    animatableList.push(facebookBox);
    touchableList.push(facebookBox.mesh);
}



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



