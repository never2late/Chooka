

var twitterBox = new TwitterBox();

function TwitterBox() {
    this.mesh = null;

    this.isPlayingAnimation = false;
    this.rotateSpeed = 0.01;
    this.state = boxState.normal;
    this.startPosition = {x: 50, y: 70, z: 5};
    this.moveUpStartTime = 0;
    this.moveDownStartTime = 0;
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

        case boxState.movingUp:
            var curTime = getTime(); 
            var deltaTime = curTime - this.moveUpStartTime;
            var moveAmount = boxMoveSpeed * deltaTime;
            mesh.position.y += moveAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount >= boxMoveDistance) {
                mesh.position.y = this.startPosition.y + boxMoveDistance;
                this.moveDownStartTime = curTime;
                this.state = boxState.movingDown;  
            }
        break;

        case boxState.movingDown:
            var curTime = getTime(); 
            var deltaTime = curTime - this.moveUpStartTime;
            var moveAmount = boxMoveSpeed * deltaTime;
            mesh.position.y -= moveAmount;

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

TwitterBox.prototype.setMoveUpStartTime = function( time ) { 
    this.moveUpStartTime = time;
};

TwitterBox.prototype.callTwitterLink = function() {
console.log('callTwitterLink');
    //todo
};

function loadTwitterBox(geometry) {
    twitterBox.mesh = createScene(geometry, 25, assetPath + "skyblue.jpg");
    twitterBox.mesh.position.set(twitterBox.startPosition.x, twitterBox.startPosition.y, twitterBox.startPosition.z);
    twitterBox.mesh.rotation.set(0, 0, 0);
    
    twitterBox.mesh.objType = objType.twitterBox;

    animatableList.push(twitterBox);
    touchableList.push(twitterBox.mesh);
}

