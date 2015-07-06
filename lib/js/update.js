


function animate() {
	var animationCount = animatableList.length;

	for (var i = 0; i < animationCount; i++) {
		var obj = animatableList[i];
		var mesh = obj.mesh;

		if (mesh != null && obj.isPlayingAnimation == true) {
			obj.playAnimation();
		}
	}

	requestAnimationFrame(animate);
	render();;
}

function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}

function update()
{
	controls.update();
	updateLayout();
}

function onWindowResize() {
	isPortrait = (window.innerWidth < window.innerHeight);
	console.log('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );

	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

	var left = -screenWidth / 2;
	var right = -left;
	var top = screenHeight / 2;
	var bottom = -top;

	camera.setViewSize(left, right, top, bottom);
	camera.updateProjectionMatrix(); 

	if (status == statusType.mapOpen) {
		mapContainer.adjustPosition();
	}

	renderer.setSize(screenWidth, screenHeight);
}

function onDocumentMouseDown( event ) 
{
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	
	// console.log("Click.");
	
	// update the mouse variable
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	var raycaster = new THREE.Raycaster();
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects = raycaster.intersectObjects( touchableList );
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		// console.log("Hit @ " + toString( intersects[0].point ) );
		var mesh = intersects[0].object;

		if (status == statusType.normal) {
			switch ( mesh.objType ) {
				
				case objType.groom:
					groom.isPlayingAnimation = true;
				break;

				case objType.bride:
					bride.isPlayingAnimation = true;
				break;

				case objType.kakaoBox:
					if (kakaoBox.getState() == boxState.normal) {
						kakaoBox.setState(boxState.movingUp);
						kakaoBox.setMoveUpStartTime(getTime());
					}
				break;

				case objType.facebookBox:
					if (facebookBox.getState() == boxState.normal) {
						facebookBox.setState(boxState.movingUp);
						facebookBox.setMoveUpStartTime(getTime());
					}
				break;

				case objType.twitterBox:
					if (twitterBox.getState() == boxState.normal) {
						twitterBox.setState(boxState.movingUp);
						twitterBox.setMoveUpStartTime(getTime());
					}
				break;

				case objType.mapBox:
					if (mapBox.getState() == boxState.normal) {
						mapBox.setState(boxState.movingUp);
						mapBox.setMoveUpStartTime(getTime());
					}
				break;
			}

		} else if (status == statusType.mapOpen) { 
			if (mesh.objType == objType.bg) {
				mapBox.removeNaverMapLink();
			}
		}
	}
}

