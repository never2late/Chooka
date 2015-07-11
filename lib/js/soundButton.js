

var soundButton = new SoundButton();

function SoundButton() {
    this.mesh = null;
    this.isPlaying = false;
}

SoundButton.prototype.init = function() {
    this.loadSoundButton();  
    // this.adjustPosition();   //sound button's position is dependent on bg position
};

SoundButton.prototype.loadSoundButton = function() {
    var geometry = new THREE.CylinderGeometry( 0, 30, 30, 4 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00 , wireframe:false} );
    var mesh = new THREE.Mesh( geometry, material );
    
    mesh.objType = objType.soundButton;
    mesh.rotation.set(0, 0, -Math.PI / 2);

    this.mesh = mesh;
    touchableList.push( mesh );
    
    meshes.push( mesh );
};

SoundButton.prototype.adjustPosition = function() { 
    var pos = this.mesh.position;

    if (isPortrait == true) {
        pos.x = screenWidth / 2 - 40;
        pos.y = bg.mesh.position.y - 165;
    } else {
        pos.x = screenWidth / 2 - 50;
        pos.y = -screenHeight / 2 + 50;
    }

    pos.z = 150;
};

SoundButton.prototype.toggleMusic = function() {
    if (this.isPlaying == true) {
printf('stop music');
        this.isPlaying = false;
        audio.pause();
        audio.currentTime = 0;
    } else {
printf('play music');
        this.isPlaying = true;
        audio.play();
    }
}

SoundButton.prototype.startAnimation = function() {
    this.isPlayingAnimation = true;
};

SoundButton.prototype.playAnimation = function( delta ) {
    var mesh = this.mesh;
};


