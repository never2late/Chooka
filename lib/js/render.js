


function animate() {
	for (var i = 0; i < animatableList.length; i++) {
		var obj = animatableList[i];
		var mesh = obj.mesh;

		if (mesh != null && obj.isPlayingAnimation == true) {
			obj.playAnimation();
		}
	}
	for(var i = 0; i < meshes.length; i++) {
		var mesh = meshes[i];
		if (mesh.isPlayingAnimation == true && mesh.playAnimation != null) {
			// mesh.rotation.y -= .01;
			mesh.playAnimation();
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
	renderer.setSize(screenWidth, screenHeight);
	renderer.domElement.style.position = "relative";

	container.appendChild(renderer.domElement);
}

function initCamera() {
	//todo
	// var canvasWidth = 90;
	// var canvasHeight = 30;
	// var viewSize = 20;
	// var aspectRatio = canvasWidth / canvasHeight;

	// var left = -aspectRatio * viewSize * 0.5;
	// var right = -left;
	// var top = viewSize * 0.5;
	// var bottom = -top;

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
