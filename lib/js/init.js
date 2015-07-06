

function init() {
	if( isMobileDevice() == true ) {
		//todo
	 // 	screen.orientation.lock('landscape');
		// console.log(screen.orientation);
	}

	var browserInfo = getBrowserInfo();
	browserType = browserInfo.name;
	browserVersion = browserInfo.version;

	getDeviceInfo();
console.log('isMobile: ' + (isMobile == true));
console.log('deviceType: ' + deviceType);

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
	// initText();
}


function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initContainer() {
	container = document.createElement('div');
	document.body.appendChild(container);
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

function initRenderer() {
	renderer = (window.WebGLRenderingContext) ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	renderer.setSize(screenWidth, screenHeight);
	renderer.domElement.style.position = "relative";

	container.appendChild(renderer.domElement);
}

function initCamera() {
	var left = -screenWidth / 2;
	var right = -left;
	var top = screenHeight / 2;
	var bottom = -top

	camera = new THREE.OrthographicCamera( left, right, top, bottom, -500, 500 );
	camera.position.set(0, 0, 100);
	camera.setViewSize = function (left, right, top, bottom) {
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
	}
}

function initText() {
	var text = document.createElement('div');

	text.style.position = 'absolute';
	//text.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
	text.style.width = 100;
	text.style.height = 100;
	text.style.backgroundColor = "red";
	text.style.color = "white";
	text.innerHTML = "hello there";
	text.style.top = 200 + 'px';
	text.style.left = 200 + 'px';

	document.body.appendChild(text);
}
