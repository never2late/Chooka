

function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}

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