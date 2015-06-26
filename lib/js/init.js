

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

	var kakaoContainer = document.createElement('a');		//create <a> tag
	kakaoContainer.setAttribute('id', 'kakao-link-btn');	//assign 'id=kakao-link-btn'
	document.body.appendChild(kakaoContainer);

	var mapContainer = document.createElement('div');
	var iframeContainer = document.createElement('iframe');

	iframeContainer.setAttribute('width', '300');
	iframeContainer.setAttribute('height', '250');
	iframeContainer.setAttribute('frameborder', '0');
	iframeContainer.setAttribute('style', 'border:0"');
	iframeContainer.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA_ow00PavgorJLVM12ODVnFLZraWX9eqM&q=Space+Needle,Seattle+WA');

	// mapContainer.appendChild(iframeContainer);
	// document.body.appendChild(mapContainer);
	document.body.insertBefore(iframeContainer);
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