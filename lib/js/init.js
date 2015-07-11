

function init() {
	if( isMobileDevice() == true ) {
		initDeviceInfo();

		printf('is Mobile');
		printf('is Portrait: ' + isPortrait);
		printf('deviceType: ' + deviceType);
	} else {
		printf('is PC');
	}
printf('screenScale : ' + screenScale);
	initMobileInfo();
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
	initAudio();

}


function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initMobileInfo() {
	var browserInfo = getBrowserInfo();
	browserType = browserInfo.name;
	browserVersion = browserInfo.version;
printf(browserType);
}

function initDeviceInfo() {
	var android = navigator.userAgent.match(/Android/i);
	var ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
	var windows = navigator.userAgent.match(/IEMobile/i);

	isAndroid = (android != null);
	isIos = (ios != null);
	isWindows = (windows != null);
	isMobile = isAndroid | isIos | isWindows;

	if (isAndroid == true) {
		deviceType = android[0];
	} else if (isIos == true) {
		deviceType = ios[0];
	} else if (isWindows == true) {
		deviceType = windows[0];
	}
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
	controls.noZoom = true;
}

function initProjector() {
	projector = new THREE.Projector();
}

function initListeners() {
	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener( 'mousedown', onMouseDown, false );
	document.addEventListener( 'mouseup', onMouseUp, false );
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

function initAudio() {
	var source = document.createElement('source');
	source.src = assetPath + 'sounds/Step by Step.mp3';
	// source.src = assetPath + 'sounds/sample.ogg';
	audio.appendChild(source);

	/* repeat */
	// audio.addEventListener('ended', function() {	
	//     this.currentTime = 0;
	//     this.play();
	// }, false);
}