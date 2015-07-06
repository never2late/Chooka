

var mapBox = new MapBox();
var mapLoaded = false;
var naverLocationLabel;
var naverMapMarker;


function MapBox() {
    this.mesh = null;

    this.isPlayingAnimation = true;
    this.rotateSpeed = 0.01;
    this.size = 250;
    this.state = boxState.normal;
    this.startPosition = {x: 150, y: 70, z: 5};
    this.moveUpStartTime = 0;
    this.moveDownStartTime = 0;
}

MapBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", loadMapBox);
};

MapBox.prototype.playAnimation = function() {
    var mesh = this.mesh;

    switch( this.state ) {
        case boxState.normal:
            mesh.rotation.y += this.rotateSpeed;  
        break;

        case boxState.movingUp:
            var curTime = getTime(); 
            var deltaTime = curTime - this.moveUpStartTime;
            var moveAmount = boxMoveSpeed * deltaTime;
            mesh.position.y += moveAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount >= boxMoveDistance) {
                mesh.position.y = this.startPosition.y + boxMoveDistance;
                this.moveDownStartTime = curTime;
                this.state = boxState.movingDown;  
            }
        break;

        case boxState.movingDown:
            var curTime = getTime(); 
            var deltaTime = curTime - this.moveUpStartTime;
            var moveAmount = boxMoveSpeed * deltaTime;
            mesh.position.y -= moveAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount <= 0) {  //returns to original position
                mesh.position.y = this.startPosition.y;
                this.state = boxState.normal;  

                this.callNaverMapLink();
            }
        break;
    }
};

MapBox.prototype.setState = function( state ) {
    this.state = state;
};

MapBox.prototype.setMoveUpStartTime = function( time ) { 
    this.moveUpStartTime = time;
};

MapBox.prototype.callNaverMapLink = function() {
console.log('callNaverMapLink');

    if (mapLoaded == false) {
        this.loadNaverMap();
    } else {
        mapContainer.style.visibility = "visible";
        mapContainer.adjustPosition();
        naverLocationLabel.setVisible(true, naverMapMarker);
        touchableList.push(bg.mesh);
        status = statusType.mapOpen;
    }
};

function loadMapBox( geometry ) {
    mapBox.mesh = createScene(geometry, 25, assetPath + "green.jpg");
    mapBox.mesh.position.set(mapBox.startPosition.x, mapBox.startPosition.y, mapBox.startPosition.z);
    mapBox.mesh.rotation.set(0, 0, 0);
    
    mapBox.mesh.objType = objType.mapBox;

    animatableList.push(mapBox);
    touchableList.push(mapBox.mesh);
}



MapBox.prototype.loadNaverMap = function() {
    mapContainer = document.createElement('div');
    mapContainer.setAttribute('id', 'map');

    mapContainer.adjustPosition = function () {
        var left = (screenWidth - this.size) / 2;
        var top = (screenHeight - this.size) / 2;

        mapContainer.setAttribute('style', 'border:1px solid #000; position:absolute; left:' + left + 'px; top:' + top + 'px;');
    }

    mapContainer.adjustPosition();
    container.appendChild(mapContainer);

    this.processNaverMapApi();

    touchableList.push(bg.mesh);  //map disappears when the user touches the background
    status = statusType.mapOpen;    
    mapLoaded = true;
}

MapBox.prototype.processNaverMapApi = function() {
    //LatLng coord can be found as a parameter to GET request in naver maps. LatLng(y, x);
    var oPoint = new nhn.api.map.LatLng(37.5182257, 126.9851763);
    var oMap = new nhn.api.map.Map(document.getElementById('map'), { 
                    point : oPoint,
                    zoom : 11,
                    enableWheelZoom : true,
                    enableDragPan : true,
                    enableDblClickZoom : true,
                    mapMode : 0,
                    activateTrafficMap : false,
                    activateBicycleMap : false,
                    activateRealtyMap : true,
                    minMaxLevel : [ 1, 14 ],
                    size : new nhn.api.map.Size(this.size, this.size)           
                });

    // 줌 컨트롤러
    var oSlider = new nhn.api.map.ZoomControl();
    oMap.addControl(oSlider);
    oSlider.setPosition({ top:15, left:15 });

    // 아래는 위에서 지정한 좌표에 마커를 표시하는 소스 입니다.
    var oSize = new nhn.api.map.Size(28, 37);
    var oOffset = new nhn.api.map.Size(14, 37);
    var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);

    // //icon 이미지를 바꿔서 사용할 수 있습니다.
    naverMapMarker = new nhn.api.map.Marker(oIcon, { title : '온누리교회' }); 
    naverMapMarker.setPoint(oPoint);
    oMap.addOverlay(naverMapMarker);

    // // 마커라벨 표시
    naverLocationLabel = new nhn.api.map.MarkerLabel(); // 마커 라벨 선언
    oMap.addOverlay(naverLocationLabel);// 마커 라벨 지도에 추가. 기본은 라벨이 보이지 않는 상태로 추가됨
    naverLocationLabel.setVisible(true, naverMapMarker);// 마커 라벨 보이기
}


MapBox.prototype.removeNaverMapLink = function() {
console.log('removeNaverMapLink');

    mapContainer.style.visibility = "hidden";
    naverLocationLabel.setVisible(false, naverMapMarker);
    this.removeBgFromTouchableList();

    status = statusType.normal;
}

MapBox.prototype.removeBgFromTouchableList = function() {
    var index = touchableList.indexOf(bg.mesh);
    
    if (index > -1) {
        touchableList.splice(index, 1);
    }
}