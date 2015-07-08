

var loadingMesh;
var loadCount = 0;
var totalLoadCount = 0;

function initLoader() {
	loadLoadingScreen();

	groom.init();
	bride.init();
	kakaoBox.init();
	facebookBox.init();
	twitterBox.init();
	mapBox.init();
	bg.init();
	initClouds();
	initFlowers();

	loader.onLoadComplete = function () {
		loadCount++;
	};

	THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
	    if (loadCount == totalLoadCount) { 
printf('load complete');
	    	kakaoBox.startAnimation();
		    facebookBox.startAnimation();
		    twitterBox.startAnimation();
		    mapBox.startAnimation();

	    	window.setTimeout( loadMainScenes, 1000 );
	    }
	};
}

function loadLoadingScreen() {
	var loadingTexture = THREE.ImageUtils.loadTexture( assetPath + 'loading.jpg' );
	var material = new THREE.MeshBasicMaterial({map: loadingTexture});
	var geometry = new THREE.PlaneBufferGeometry(407, 300);
	loadingMesh = new THREE.Mesh(geometry, material);

	scene.add(loadingMesh);
}

function loadMainScenes() {
	for (var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		scene.add(mesh);
	}

	scene.remove(loadingMesh);
}