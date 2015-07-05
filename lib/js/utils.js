

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

function toString(v) { 
	return "[ " + v.x + ", " + v.y + ", " + v.z + " ]"; 
}
