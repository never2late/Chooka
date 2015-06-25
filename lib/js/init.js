

function init() {
	if( isMobileDevice() == true ) {
		//todo
	 // 	screen.orientation.lock('landscape');
		// console.log(screen.orientation);
	}

	//portrait
	if (window.innerWidth < window.innerHeight) {
		isPortrait = true;
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
	// var multiplier = 0.07;
	var multiplier;
	var iphoneWidth, iphoneHeight;

	if (isPortrait == true) {
		multiplier = 0.1;
		iphoneWidth = 375 * multiplier;
		iphoneHeight = 559 * multiplier;
	} else {
		multiplier = 0.04;
		iphoneWidth = 667 * multiplier;
		iphoneHeight = 375 * multiplier;
	}

	var canvasWidth = iphoneWidth;
	var canvasHeight = iphoneHeight;

	var viewSize = iphoneWidth;
	var aspectRatio = canvasWidth / canvasHeight;

	var left = -aspectRatio * viewSize * 0.5;
	var right = -left;
	var top = viewSize / 2;
	var bottom = -top;

	console.log(left, right, top, bottom);

	camera = new THREE.OrthographicCamera( left, right, top, bottom, 1, 100 );
	camera.position.set(0, 0, 10);
	camera.rotation.y = Math.PI / 2;
	console.log(camera.rotation.x, camera.rotation.y, camera.rotation.z);
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

function initProjector() {
	projector = new THREE.Projector();
}

function initListeners() {
	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
}