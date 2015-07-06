

var kakaoBox = new KakaoBox();

function KakaoBox() {
    this.mesh = null;

    this.isPlayingAnimation = true;
    this.rotateSpeed = 0.01;

    this.userData = { URL: 'http://172.30.1.18:8000/kakao.html' };
}

KakaoBox.prototype.init = function() {
    loadMesh(assetPath + "crate.js", loadKakaoBox);
};

KakaoBox.prototype.playAnimation = function() {
    var mesh = this.mesh;

    mesh.rotation.y -= this.rotateSpeed;
};

KakaoBox.prototype.callKakaoLink = function() {
console.log('callKakaoLink');
    $("#kakao-link-btn")[0].click();  //click the first element in kakao-link-btn id
};

function loadKakaoBox(geometry) {
    kakaoBox.mesh = createScene(geometry, 25, assetPath + "yellow.jpg");
    kakaoBox.mesh.position.set(-150, 70, 5);
    kakaoBox.mesh.rotation.set(0, 0, 0);
    
    kakaoBox.mesh.objType = objType.kakaoBox;

    animatableList.push(kakaoBox);
    touchableList.push(kakaoBox.mesh);
}



Kakao.init('06f513001428c7408f80302eb3583e6f');

// 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createTalkLinkButton({
  container: '#kakao-link-btn',
  label: '카카오링크 샘플에 오신 것을 환영합니다.',
  image: {
    src: 'http://dn.api1.kage.kakao.co.kr/14/dn/btqaWmFftyx/tBbQPH764Maw2R6IBhXd6K/o.jpg',
    width: '300',
    height: '200'
  },
  webButton: {
    text: '카카오 디벨로퍼스',
    url: 'http://172.30.1.18:8000' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
  }
});