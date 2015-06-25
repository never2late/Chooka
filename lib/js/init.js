

function init() {
	if( isMobileDevice() == true ) {
		//todo
	 	screen.orientation.lock('landscape');
		console.log(screen.orientation);
	}
	
	initContainer();
	initCamera();
	initScene();
	initLights();
	initRenderer();
	initControls();
	initLoader();
	initProjector();
	initListeners();
}


function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initContainer() {
	container = document.createElement('div');
	document.body.appendChild(container);
}

function initCamera() {
	//todo
	//iphone 6 width = 1334, height = 750
	var screenScale = 1 / 100;
console.log('window width : ' + window.innerWidth * screenScale);
	camera = new THREE.OrthographicCamera(-window.innerWidth * screenScale, window.innerWidth * screenScale, window.innerHeight * screenScale, -window.innerHeight * screenScale, 1, 10);
	camera.position.set(0, 0, 5);
}

function initScene() {
	scene = new THREE.Scene();
}

function initLights() {
	var ambient = new THREE.AmbientLight(0x777777);
	scene.add(ambient);

	var directionalLight = new THREE.DirectionalLight(0xffeedd);
	directionalLight.position.set(100, 100, 100).normalize();
	scene.add(directionalLight);
}

function initRenderer() {
	renderer = (window.WebGLRenderingContext) ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	renderer.domElement.style.position = "relative";

	container.appendChild(renderer.domElement);
}

function initControls() {
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.noRotate = true;	//only zoom is allowed. no rotation
}

function initLoader() {
	THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
	    if (loadCount == totalLoadCount) {
	    	window.setTimeout( loadMainScenes, 500 );
	    }
	};

	var loader = new THREE.JSONLoader();
	loadLoadingScreen();
	loader.load("capsule.js", loadLeft);
	loader.load("capsule.js", loadRight);
	loader.load("floor.js", loadBackground);

	loader.onLoadComplete = function () {
		loadCount++;
	};
}

function initProjector() {
	projector = new THREE.Projector();
}

function initListeners() {
	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
}