

var bride = new Bride();

function Bride() {
	this.mesh = null;

	this.isPlayingAnimation = false;
	this.rotateSpeed = 0.08;
	this.totalRotation = 0;
}

Bride.prototype.init = function() {
	loadMesh(assetPath + "LEGO_Man.js", loadBride);
};

Bride.prototype.playAnimation = function( delta ) {
	var mesh = this.mesh;

	mesh.rotation.y += this.rotateSpeed;
	this.totalRotation += this.rotateSpeed;
	
	if (this.totalRotation > Math.PI * 2) {
		this.totalRotation = 0;
		this.isPlayingAnimation = false;
		
		mesh.rotation.y = 0;
	}
};

function loadBride( geometry ) {
	bride.mesh = createScene(geometry, 30, assetPath + "orange.jpg");
	bride.mesh.position.set(60, -175, 0);
	bride.mesh.rotation.set(0, 0, 0);

	bride.mesh.objType = objType.bride;
	
	animatableList.push(bride);
	touchableList.push(bride.mesh);
};
