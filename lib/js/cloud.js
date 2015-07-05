

var clouds = [];
var cloudCount = 1;

function initClouds() {
	for (var i = 0; i < cloudCount; i++) {
		clouds[i] = new Cloud();
		clouds[i].init();
	}
}

function Cloud() {
	this.mesh = null;

	this.isPlayingAnimation = true;
	this.moveSpeed = 0.1;
	this.box = null;
}

Cloud.prototype.init = function() {
	loadMesh(assetPath + "cloud.js", loadCloud);
};

Cloud.prototype.playAnimation = function() {
	var mesh = this.mesh;

	mesh.position.x += this.moveSpeed;

	if (isWithinCanvas(this.mesh) == false) {
		mesh.position.x = canvasLeft;// - mesh.width;
		mesh.position.y = 150;
	}
};

function loadCloud(geometry) {
	clouds[0].mesh = createScene(geometry, 0.4, assetPath + "skyblue.jpg");
	clouds[0].mesh.position.set(-250, 150, 0);
	clouds[0].mesh.rotation.set(0, 0, 0);
	
	clouds[0].mesh.objType = objType.cloud;
	clouds[0].box = box3.setFromObject( clouds[0].mesh );
	clouds[0].mesh.width = clouds[0].box.size().x;
	clouds[0].mesh.height = clouds[0].box.size().y;

	animatableList.push(clouds[0]);
}