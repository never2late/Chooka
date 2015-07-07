

var flowers = [];
var flowersCount = 3;
var flowerCurIndex = 0;

function initFlowers() {
	for (var i = 0; i < flowersCount; i++) {
		flowers[i] = new Flower(i);
		flowers[i].init();
	}
}

function Flower( index ) {
	this.mesh = null;
	this.index = index;

	this.isPlayingAnimation = true;
	this.direction = this.getRandomDirection();
	this.rotateSpeed = 0.01 * this.direction;
}

Flower.prototype.init = function() {
	loadMesh(assetPath + "flower.js", loadFlower);
};

Flower.prototype.playAnimation = function( delta ) {
	var mesh = this.mesh;

	mesh.rotation.z += this.rotateSpeed;
};

Flower.prototype.getStartPosition = function( flowerIndex ) {
	var position = {
		x: 0,
		y: 0
	};

	switch( flowerIndex ) {
		case 0:
			position.x = -300;
			position.y = -90;
		break;

		case 1:
			position.x = -180;
			position.y = -110;
		break;

		case 2:
			position.x = 250;
			position.y = -70;
		break;
	}

	return position;
};

Flower.prototype.getRandomDirection = function() {
	var random = Math.random();

	return (random >= 0.5) ? 1 : -1;
};

function loadFlower( geometry ) { console.log('load flower start');
	var flower = flowers[flowerCurIndex];
	var flowerPosition = flower.getStartPosition( flowerCurIndex );

	flower.mesh = createScene(geometry, 0.4, assetPath + "orange.jpg");
	flower.mesh.position.set(flowerPosition.x, flowerPosition.y, 0);
	flower.mesh.rotation.set(0, 0, 0);
	
	flower.mesh.objType = objType.flower;

	animatableList.push(flower);
	flowerCurIndex++; console.log('load flower finished');
}