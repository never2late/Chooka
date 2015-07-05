

function initLoader() {
	loadLoadingScreen();
	// loadMesh(assetPath + "LEGO_Man.js", loadLeft);

	groom.init();
	bride.init();
	kakaoBox.init();
	facebookBox.init();
	mapBox.init();
	bg.init();

	// loadMesh(assetPath + "LEGO_Man.js", loadRight);
	// loadMesh(assetPath + "background.js", loadBackground);
	
	// loadMesh(assetPath + "crate.js", loadKakaoBox);
	// loadMesh(assetPath + "crate.js", loadFacebookBox);
	// loadMesh(assetPath + "crate.js", loadMapBox);

	// loadMesh(assetPath + "cloud.js", loadCloud);

	loader.onLoadComplete = function () {
		loadCount++;
	};

	THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
	    if (loadCount == totalLoadCount) {
	    	window.setTimeout( loadMainScenes, 1000 );
	    }
	};
}

// function createScene(geometry, x, y, z, rx, ry, rz, scale, touchable, tmap) {
// 	var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)});
// 	var mesh = new THREE.Mesh(geometry, material);
// 	mesh.position.set(x, y, z);
// 	mesh.rotation.set(rx, ry, rz);
// 	mesh.scale.set(scale, scale, scale);
// 	mesh.isPlayingAnimation = false;

// 	if (touchable == true) {
// 		touchableList.push(mesh);
// 	}

// 	meshes.push(mesh);

// 	return mesh;
// }

function loadLoadingScreen() {
	var loadingTexture = THREE.ImageUtils.loadTexture( assetPath + 'loading.jpg' );
	var material = new THREE.MeshBasicMaterial({map: loadingTexture});
	var geometry = new THREE.PlaneBufferGeometry(407, 300);
	loadingMesh = new THREE.Mesh(geometry, material);

	scene.add(loadingMesh);
}

//geometry, x, y, z, rx, ry, rz, scale, touchable
// function loadLeft(geometry) {
// 	left = createScene(geometry, -60, -175, 0, 0, 0, 0, 30, true, assetPath + "red.jpg");
// 	left.isPlayingAnimation = false;
// 	left.objType = objType.left;
// 	left.rotateSpeed = 0.08;
// 	left.totalRotation = 0;

// 	left.playAnimation = function() {
// 		this.rotation.y -= this.rotateSpeed;
// 		this.totalRotation += this.rotateSpeed;
		
// 		if (this.totalRotation > Math.PI * 2) {
// 			this.totalRotation = 0;
// 			this.rotation.y = 0;
// 			this.isPlayingAnimation = false;
// 		}
// 	}
// }

// function loadRight(geometry) {
// 	right = createScene(geometry, 60, -175, 0, 0, 0, 0, 30, true, assetPath + "orange.jpg");
// 	right.isPlayingAnimation = false;
// 	right.objType = objType.right;
// 	right.rotateSpeed = 0.08;
// 	right.totalRotation = 0;

// 	right.playAnimation = function() {
// 		this.rotation.y += this.rotateSpeed;
// 		this.totalRotation += this.rotateSpeed;
		
// 		if (this.totalRotation > Math.PI * 2) {
// 			this.totalRotation = 0;
// 			this.rotation.y = 0;
// 			this.isPlayingAnimation = false;
// 		}
// 	}
// }

function loadCloud(geometry) {
	clouds[0] = createScene(geometry, -250, 150, 0, 0, 0, 0, 0.4, false, assetPath + "skyblue.jpg");
	clouds[0].isPlayingAnimation = true;
	clouds[0].objType = objType.cloud;

	clouds[0].playAnimation = function() {
		this.position.x += 0.1;
	}
}

// function loadKakaoBox(geometry) {
// 	kakaoBox = createScene(geometry, -150, 70, 5, 0, 0, 0, 25, true, assetPath + "yellow.jpg");
// 	kakaoBox.isPlayingAnimation = true;
// 	kakaoBox.objType = objType.kakaoBox;

// 	kakaoBox.userData = { URL: 'http://172.30.1.18:8000/kakao.html' };

// 	kakaoBox.playAnimation = function() {
// 		this.rotation.y -= .01;
// 	}
// }

// function loadFacebookBox(geometry) {
// 	facebookBox = createScene(geometry, -50, 70, 5, 0, 0, 0, 25, true, assetPath + "blue.jpg");
// 	facebookBox.isPlayingAnimation = true;
// 	facebookBox.objType = objType.facebookBox;

// 	facebookBox.playAnimation = function() {
// 		this.rotation.y -= .01;
// 	}
// }

// function loadMapBox(geometry) {
// 	mapBox = createScene(geometry, 150, 70, 5, 0, 0, 0, 25, true, assetPath + "green.jpg");
// 	mapBox.isPlayingAnimation = true;
// 	mapBox.objType = objType.mapBox;

// 	mapBox.playAnimation = function() {
// 		this.rotation.y -= .01;
// 	}
// }

// function loadBackground(geometry) {
// 	bg = createScene(geometry, 0, 0, -80, 0, 0, 0, 1, false, assetPath + "gray.jpg");
// 	bg.objType = objType.bg;
// }

function loadMainScenes() {
	for (var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		scene.add(mesh);
	}

	scene.remove(loadingMesh);
}