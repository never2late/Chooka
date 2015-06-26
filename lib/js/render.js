


function animate() {
	for(var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		if (mesh.playAnimation == true) {
			mesh.rotation.y -= .01;
		}
	}

	requestAnimationFrame(animate);
	render();;
}

function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}

function initRenderer() {
	renderer = (window.WebGLRenderingContext) ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	renderer.domElement.style.position = "relative";

	container.appendChild(renderer.domElement);
}

function initCamera() {
	//todo
	var canvasWidth = 90;
	var canvasHeight = 30;
	var viewSize = 40;
	var aspectRatio = canvasWidth / canvasHeight;

	var left = -aspectRatio * viewSize * 0.5;
	var right = -left;
	var top = viewSize * 0.5;
	var bottom = -top;

	camera = new THREE.OrthographicCamera( left, right, top, bottom, 1, 100 );
	camera.position.set(0, 0, 10);
	camera.setViewSize = function (left, right, top, bottom) {
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
	}
}