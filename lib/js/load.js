

function createScene(geometry, x, y, z, rx, ry, rz, scale, touchable, tmap) {
	// var material = new THREE.MeshLambertMaterial({color: 0x55B663});
	var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(rx, ry, rz);
	mesh.scale.set(scale, scale, scale);
	mesh.playAnimation = false;
	meshes.push(mesh);

	if (touchable == true) {
		targetList.push(mesh);
	}
}

function loadLoadingScreen() {
	var loadingTexture = THREE.ImageUtils.loadTexture('loading.jpg');
	var material = new THREE.MeshBasicMaterial({map: loadingTexture});
	var geometry = new THREE.PlaneBufferGeometry(5, 5);
	loadingMesh = new THREE.Mesh(geometry, material);

	scene.add(loadingMesh);
}

function loadLeft(geometry) {
	createScene(geometry, -3, -2, 0, 0, 0, 0, 1, true, "floor2.png");
}

function loadRight(geometry) {
	createScene(geometry,  3, -2, 0, 0, 0, 0, 1, true, "floor3.png");
}

function loadBackground(geometry) {
	createScene(geometry,  2, -10, -10, 90, 0, 0, 6, false, "rock.jpg");
}

function loadMainScenes() {
	for (var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		scene.add(mesh);
	}

	scene.remove(loadingMesh);
}