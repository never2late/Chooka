

function loadMesh(path, callback) {
	loader.load( path, callback );

	totalLoadCount++;
}

function createScene(geometry, scale, tmap) {
	var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)});
	var mesh = new THREE.Mesh(geometry, material);

	mesh.scale.set(scale, scale, scale);
	mesh.isPlayingAnimation = false;
	meshes.push(mesh);

	return mesh;
}

function isWithinCanvas( mesh ) {
	var meshLeft = mesh.position.x - mesh.width / 2;
	var meshRight = meshLeft + mesh.width;
	var meshTop = mesh.position.y + mesh.height / 2;
	var meshBottom = meshTop - mesh.height;

	if ((canvasLeft <= meshLeft && meshLeft <= canvasRight) || canvasLeft <= meshRight && meshRight <= canvasRight) {
		if ((canvasBottom <= meshBottom && meshBottom <= canvasTop) || canvasBottom <= meshTop && meshTop <= canvasTop) {
			return true;
		}
	}

	return false;
}

function getTime() {
	return new Date().getTime();
}


function toString(v) { 
	return "[ " + v.x + ", " + v.y + ", " + v.z + " ]"; 
}