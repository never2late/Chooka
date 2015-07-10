

var twitterBox = new TwitterBox();

function TwitterBox() {
    this.mesh = null;

    this.isPlayingAnimation = false;
    this.rotateSpeed = 0.01;
    this.state = boxState.normal;
    this.startPosition = {x: 50, y: 70, z: 1};
}

TwitterBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", this.loadTwitterBox);
};

TwitterBox.prototype.startAnimation = function() {
    this.isPlayingAnimation = true;
};

TwitterBox.prototype.playAnimation = function( delta ) {
    var mesh = this.mesh;

    switch( this.state ) {
        case boxState.normal:
            mesh.rotation.y += this.rotateSpeed;  
        break;

        case boxState.bouncingUp:
            var deltaMilli = delta * 1000;
            var bounceAmount = boxMoveSpeed * deltaMilli;
            mesh.position.y += bounceAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount >= boxMoveDistance) {
                mesh.position.y = this.startPosition.y + boxMoveDistance;
                this.state = boxState.bouncingDown;  
            }
        break;

        case boxState.bouncingDown:
            var deltaMilli = delta * 1000;
            var bounceAmount = boxMoveSpeed * deltaMilli;
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

TwitterBox.prototype.callTwitterLink = function() {
printf('callTwitterLink');
    var twitterBtn = $("#twitter-share-btn")[0];
    twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text=김정환+♡+조은하의+게임+청첩장입니다!+http%3A%2F%2Fwww.chooka.co.kr%2Ftest');

    $("#twitter-share-btn")[0].click();  //click the first element in twitter-share-btn id
};

TwitterBox.prototype.loadTwitterBox = function( geometry ) {
    twitterBox.mesh = createScene(geometry, 25, assetPath + "skyblue.jpg");
    twitterBox.mesh.position.set(twitterBox.startPosition.x, twitterBox.startPosition.y, twitterBox.startPosition.z);
    twitterBox.mesh.rotation.set(0, 0, 0);
    
    twitterBox.mesh.objType = objType.twitterBox;

    animatableList.push(twitterBox);
    touchableList.push(twitterBox.mesh);
}

