

function init() {
	if( isMobileDevice() == true ) {
		//todo
	 // 	screen.orientation.lock('landscape');
		// console.log(screen.orientation);
	}

	isPortrait = (window.innerWidth < window.innerHeight);
	
	initContainer();
	initCamera();
	initScene();
	initLights();
	initRenderer();
	initControls();
	initLoader();
	initProjector();
	initListeners();
	initText();
}


function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initContainer() {
	container = document.createElement('div');
	document.body.appendChild(container);

	console.log(document.body);
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