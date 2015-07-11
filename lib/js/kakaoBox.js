

var kakaoBox = new KakaoBox();

function KakaoBox() {
    this.mesh = null;

    this.isPlayingAnimation = false;
    this.rotateSpeed = 0.01;
    this.state = boxState.normal;
    this.startPosition = {x: -150, y: 70, z: 1};
}

KakaoBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", this.loadKakaoBox);

    this.initKakaoLink();
    this.setUserData();
};

KakaoBox.prototype.startAnimation = function() {
    this.isPlayingAnimation = true;
};

KakaoBox.prototype.playAnimation = function( delta ) {
    var mesh = this.mesh;

    switch( this.state ) {
        case boxState.normal:
            mesh.rotation.y += this.rotateSpeed;  
        break;

        case boxState.bouncingUp:
            var deltaMilli = delta * 1000;
            var bounceAmount = boxMoveSpeed * deltaMilli;
            mesh.position.y += bounceAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount >= boxMoveDistance) {
                mesh.position.y = this.startPosition.y + boxMoveDistance;
                this.state = boxState.bouncingDown;  
            }
        break;

        case boxState.bouncingDown:
            var deltaMilli = delta * 1000;
            var bounceAmount = boxMoveSpeed * deltaMilli;
            mesh.position.y -= bounceAmount;

            var movedTotalAmount = mesh.position.y - this.startPosition.y;
            if (movedTotalAmount <= 0) {  //returns to original position
                mesh.position.y = this.startPosition.y;
                this.state = boxState.normal;  
                
                // this.callKakaoLink();
            }
        break;
    }
};

KakaoBox.prototype.getState = function() {
    return this.state;
};

KakaoBox.prototype.setState = function( state ) {
    this.state = state;
};

KakaoBox.prototype.setUserData = function( state ) {
    this.userData = { URL: config.domain + config.defaultPage };
};

KakaoBox.prototype.callKakaoLink = function() { 
printf('callKakaoLink');
    $("#kakao-link-btn")[0].click();  //click the first element in kakao-link-btn id
};

KakaoBox.prototype.loadKakaoBox = function( geometry ) {
    kakaoBox.mesh = createScene(geometry, 25, assetPath + "yellow.jpg");
    kakaoBox.mesh.position.set(kakaoBox.startPosition.x, kakaoBox.startPosition.y, kakaoBox.startPosition.z);
    kakaoBox.mesh.rotation.set(0, 0, 0);
    
    kakaoBox.mesh.objType = objType.kakaoBox;

    animatableList.push(kakaoBox);
    touchableList.push(kakaoBox.mesh);
}


KakaoBox.prototype.initKakaoLink = function() { 
    Kakao.init( config.kakaoKey ); 

    // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createTalkLinkButton({
      container: '#kakao-link-btn',
      label: '김정환♡조은하\n축복속에 결혼합니다!',
      image: {
        src: config.domain + assetPath + 'logo.png',
        width: '300',
        // height: '200'
        height: '264'
      },
      webButton: {
        text: '3D 모바일 청첩장',
        url: config.domain // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
      }
    });
};