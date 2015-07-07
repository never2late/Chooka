

var groom = new Groom();

function Groom() {
	this.mesh = null;

	this.isPlayingAnimation = false;
	this.rotateSpeed = 0.08;
	this.totalRotation = 0;
}

Groom.prototype.init = function() {
	loadMesh(assetPath + "LEGO_Man.js", loadGroom);
};

Groom.prototype.playAnimation = function( delta ) {
	var mesh = this.mesh;

	mesh.rotation.y -= this.rotateSpeed;
	this.totalRotation += this.rotateSpeed;
	
	if (this.totalRotation > Math.PI * 2) {
		this.totalRotation = 0;
		this.isPlayingAnimation = false;
		
		mesh.rotation.y = 0;
	}
};

function loadGroom( geometry ) {
	groom.mesh = createScene(geometry, 30, assetPath + "red.jpg");
	groom.mesh.position.set(-60, -175, 0);
	groom.mesh.rotation.set(0, 0, 0);

	groom.mesh.objType = objType.groom;
	
	animatableList.push(groom);
	touchableList.push(groom.mesh);
};
