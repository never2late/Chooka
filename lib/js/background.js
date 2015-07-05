

var bg = new Background();

function Background() {
    this.mesh = null;
}

Background.prototype.init = function() {
	loadMesh(assetPath + "background.js", loadBackground);
};

function loadBackground( geometry ) {
	bg.mesh = createScene(geometry, 1, assetPath + "gray.jpg");
	bg.mesh.position.set(0, 0, -80);
	bg.mesh.rotation.set(0, 0, 0);

	bg.mesh.objType = objType.bg;
}