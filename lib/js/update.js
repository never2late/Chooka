


function animate() {
	var delta = clock.getDelta();
	
	var animationCount = animatableList.length;

	for (var i = 0; i < animationCount; i++) {
		var obj = animatableList[i];
		var mesh = obj.mesh;

		if (mesh != null && obj.isPlayingAnimation == true) { 
			obj.playAnimation(delta);
		}
	}

	requestAnimationFrame(animate);
	render();
}

function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}

function update()
{
	controls.update();
	// updateLayout();
}

function onWindowResize() { 
	isPortrait = (window.innerWidth < window.innerHeight);
printf('resize : width = ' + window.innerWidth + ' , height = ' + window.innerHeight );

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

function onMouseUp( event ) 
{ 
// printf(mapContainer);
// var mapPosition = mapContainer.style.left;
// printf(mapPosition);

	var collisions = getCollisions();

	switch( status ) {
		case statusType.normal:
			processCollisionEventsNormal(collisions);
		break;

		case statusType.mapOpen:
			processCollisionEventsMapOpen(collisions);
		break;
	}
}

function onMouseDown( event ) {
	// printf('onMouseDown');

	// var collisions = getCollisions();
}

function processCollisionEventsNormal( collisions ) {
	// if there is one (or more) collisions
	if ( collisions.length > 0 )
	{ 
		// printf("Hit @ " + toString( collisions[0].point ) );
		var mesh = collisions[0].object;

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
						// kakaoBox.setState(boxState.bouncingUp);
						// window.setTimeout( kakaoBox.callKakaoLink, boxMoveTime * 2.5 );
						kakaoBox.callKakaoLink();
					}
				break;

				case objType.facebookBox:
					if (facebookBox.getState() == boxState.normal) {
						// facebookBox.setState(boxState.bouncingUp);
						// window.setTimeout( facebookBox.callFacebookLink, boxMoveTime * 2.5 );
						facebookBox.callFacebookLink();
					}
				break;

				case objType.twitterBox:
					if (twitterBox.getState() == boxState.normal) {  ;
						// twitterBox.setState(boxState.bouncingUp);
						// window.setTimeout( twitterBox.callTwitterLink, boxMoveTime * 2.5 );
						twitterBox.callTwitterLink();
					}
				break;

				case objType.mapBox:
					if (mapBox.getState() == boxState.normal) {
						mapBox.setState(boxState.bouncingUp);
					}
				break;
			}
		} 
	}
}

function processCollisionEventsMapOpen( collisions ) {
	if (collisions.length == 0) {
		mapBox.hideNaverMap();
	} else {
		var mesh = collisions[0].object;

		if (mesh.objType != objType.dummyMap) { 
			mapBox.hideNaverMap();
		}
	}
}

function getCollisions() {
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	
	// printf("Click.");
	// update the mouse variable
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// var raycaster = new THREE.Raycaster();
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	return raycaster.intersectObjects( touchableList );
}