

var facebookBox = new FacebookBox();

function FacebookBox() {
    this.mesh = null;

    this.isPlayingAnimation = false;
    this.rotateSpeed = 0.01;
    this.state = boxState.normal;
    this.startPosition = {x: -50, y: 70, z: 50};
    this.bounceTime = 0;
}

FacebookBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", loadFacebookBox);
};

FacebookBox.prototype.startAnimation = function() {
    this.isPlayingAnimation = true;
};

FacebookBox.prototype.playAnimation = function() {
    var mesh = this.mesh;

    switch( this.state ) {
        case boxState.normal:
            mesh.rotation.y += this.rotateSpeed;  
        break;

        case boxState.bouncingUp:
            var curTime = getTime(); 
            var deltaTime = curTime - this.bounceTime;
            var bounceAmount = boxMoveSpeed * deltaTime;
            this.bounceTime = curTime;
            mesh.position.y += bounceAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount >= boxMoveDistance) {
                mesh.position.y = this.startPosition.y + boxMoveDistance;
                this.state = boxState.bouncingDown;  
            }
        break;

        case boxState.bouncingDown:
            var curTime = getTime(); 
            var deltaTime = curTime - this.bounceTime;
            var bounceAmount = boxMoveSpeed * deltaTime;
            this.bounceTime = curTime;
            mesh.position.y -= bounceAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount <= 0) {  //returns to original position
                mesh.position.y = this.startPosition.y;
                this.state = boxState.normal;  
                
                // this.callFacebookLink(); //putting this code here doesn't call facebooklink in mobile browser. i don't know why. 
            }
        break;
    }
};

FacebookBox.prototype.getState = function() {
    return this.state;
};

FacebookBox.prototype.setState = function( state ) {
    this.state = state;
};

FacebookBox.prototype.setBounceTime = function( time ) { 
    this.bounceTime = time;
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
    facebookBox.mesh.position.set(facebookBox.startPosition.x, facebookBox.startPosition.y, facebookBox.startPosition.z);
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



