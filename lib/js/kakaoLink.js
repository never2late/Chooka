


function callKakaoLink () {
console.log('callKakaoLink');

  // window.open(kakaoBox.userData.URL);
  $("#kakao-link-btn")[0].click();
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