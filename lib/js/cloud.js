

var clouds = [];
var cloudCount = 1;
var cloudCurIndex = 0;

function initClouds() {
	for (var i = 0; i < cloudCount; i++) {
		clouds[i] = new Cloud(i);
		clouds[i].init();
	}
}

function Cloud( index ) {
	this.mesh = null;
	this.index = index;

	this.isPlayingAnimation = true;
	this.moveSpeed = this.getRandomSpeed();
	this.box = null;
}

Cloud.prototype.init = function() {
	loadMesh(assetPath + "cloud.js", loadCloud);
};

Cloud.prototype.playAnimation = function() {
	var mesh = this.mesh;

	mesh.position.x += this.moveSpeed;

	if (isWithinCanvas(this.mesh) == false) {
		mesh.position.x = canvasLeft - mesh.width / 2;
		this.moveSpeed = this.getRandomSpeed();
	}
};

Cloud.prototype.getStartPosition = function( cloudIndex ) {
	var position = {
		x: 0,
		y: 0
	};

	switch( cloudIndex ) {
		case 0:
			position.x = -350;
			position.y = 150;
		break;

		case 1:
			position.x = 0;
			position.y = 130;
		break;

		case 2:
			position.x = 250;
			position.y = 170;
		break;
	}

	return position;
};

Cloud.prototype.getRandomSpeed = function() {
	return Math.random() * 0.2 + 0.1;	//0.1 ~ 0.3
};

function loadCloud(geometry) {
	var cloud = clouds[cloudCurIndex];
	var cloudPosition = cloud.getStartPosition( cloudCurIndex );

	cloud.mesh = createScene(geometry, 0.4, assetPath + "skyblue.jpg");
	cloud.mesh.position.set(cloudPosition.x, cloudPosition.y, 0);
	cloud.mesh.rotation.set(0, 0, 0);
	
	cloud.mesh.objType = objType.cloud;
	cloud.box = box3.setFromObject( cloud.mesh );
	cloud.mesh.width = cloud.box.size().x;
	cloud.mesh.height = cloud.box.size().y;

	animatableList.push(cloud);
	cloudCurIndex++;
}