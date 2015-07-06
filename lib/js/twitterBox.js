

var twitterBox = new TwitterBox();

function TwitterBox() {
    this.mesh = null;

    this.isPlayingAnimation = false;
    this.rotateSpeed = 0.01;
    this.state = boxState.normal;
    this.startPosition = {x: 50, y: 70, z: 50};
    this.bounceTime = 0;
}

TwitterBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", loadTwitterBox);
};

TwitterBox.prototype.startAnimation = function() {
    this.isPlayingAnimation = true;
};

TwitterBox.prototype.playAnimation = function() {
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
                
                this.callTwitterLink();
            }
        break;
    }
};

TwitterBox.prototype.getState = function() {
    return this.state;
};

TwitterBox.prototype.setState = function( state ) {
    this.state = state;
};

TwitterBox.prototype.setBounceTime = function( time ) { 
    this.bounceTime = time;
};

TwitterBox.prototype.callTwitterLink = function() {
console.log('callTwitterLink');
    var twitterBtn = $("#twitter-share-btn")[0];
    twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text=김정환+♡+조은하의+청첩장입니다!+http%3A%2F%2Fwww.testmyapp.com%2Ftest');

    $("#twitter-share-btn")[0].click();  //click the first element in twitter-share-btn id
};

function loadTwitterBox(geometry) {
    twitterBox.mesh = createScene(geometry, 25, assetPath + "skyblue.jpg");
    twitterBox.mesh.position.set(twitterBox.startPosition.x, twitterBox.startPosition.y, twitterBox.startPosition.z);
    twitterBox.mesh.rotation.set(0, 0, 0);
    
    twitterBox.mesh.objType = objType.twitterBox;

    animatableList.push(twitterBox);
    touchableList.push(twitterBox.mesh);
}

