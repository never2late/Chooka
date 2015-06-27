

function initLoader() {
	var loader = new THREE.JSONLoader();

	loadLoadingScreen();
	loadMesh(loader, assetPath + "capsule.js", loadLeft);
	loadMesh(loader, assetPath + "LEGO_Man.js", loadRight);
	loadMesh(loader, assetPath + "iPhone6.js", loadBackground);
	
	loadMesh(loader, assetPath + "crate.js", loadKakaoBox);
	loadMesh(loader, assetPath + "crate.js", loadFacebookBox);
	loadMesh(loader, assetPath + "capsule.js", loadMapBox);

	loader.onLoadComplete = function () {
		loadCount++;
	};

	THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
	    if (loadCount == totalLoadCount) {
	    	window.setTimeout( loadMainScenes, 1000 );
	    }
	};
}

function createScene(geometry, x, y, z, rx, ry, rz, scale, touchable, tmap, turn) {
	var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(rx, ry, rz);
	mesh.scale.set(scale, scale, scale);
	mesh.playAnimation = false;

	// if (isPortrait == true) {
	if (turn == true) {
		// mesh.rotation.z = -Math.PI / 2;
	}

	if (touchable == true) {
		targetList.push(mesh);
	}

	meshes.push(mesh);

	return mesh;
}

function loadLoadingScreen() {
	var loadingTexture = THREE.ImageUtils.loadTexture( assetPath + 'loading.jpg' );
	var material = new THREE.MeshBasicMaterial({map: loadingTexture});
	var geometry = new THREE.PlaneBufferGeometry(30, 30);
	loadingMesh = new THREE.Mesh(geometry, material);

	scene.add(loadingMesh);
}

function loadMesh(loader, path, callback) {
	loader.load( path, callback );

	totalLoadCount++;
}
//geometry, x, y, z, rx, ry, rz, scale, touchable, tmap
function loadLeft(geometry) {
	left = createScene(geometry, -3, -5, 0, 0, 0, 0, 1, true, assetPath + "floor2.png", isPortrait);
	left.objType = objType.left;
}

function loadRight(geometry) {
	right = createScene(geometry, 3, -7, 0, 0, 0, 0, 1, true, assetPath + "floor3.png", isPortrait);
	right.objType = objType.right;
}

function loadKakaoBox(geometry) {
	kakaoBox = createScene(geometry, -7, 5, 5, 0, 0, 0, 1.25, true, assetPath + "rock.jpg", isPortrait);
	kakaoBox.playAnimation = true;
	kakaoBox.objType = objType.kakaoBox;

	kakaoBox.userData = { URL: 'http://172.30.1.18:8000/kakao.html' };
}

function loadFacebookBox(geometry) {
	facebookBox = createScene(geometry, 0, 5, 5, 0, 0, 0, 1.25, true, assetPath + "rock.jpg", isPortrait);
	facebookBox.playAnimation = true;
	facebookBox.objType = objType.facebookBox;
}

function loadMapBox(geometry) {
	mapBox = createScene(geometry, 7, 5, 5, 0, 0, 0, 1.25, true, assetPath + "rock.jpg", isPortrait);
	mapBox.playAnimation = true;
	mapBox.objType = objType.mapBox;
}

function loadBackground(geometry) {
	bg = createScene(geometry, 0, 0, -10, Math.PI / 2, Math.PI / 2, Math.PI, 300, false, assetPath + "iPhone_Back_Gloss.jpg", false);
	bg.objType = objType.bg;
}

function loadMainScenes() {
	for (var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		scene.add(mesh);
	}

	scene.remove(loadingMesh);
}