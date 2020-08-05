// 수정할 컨텐츠 요소 정보
let post_index = '';

// 사용자가 현재 스와이프하고 있는 객체 정보
let one = '';

// font style config

// 사이즈 별 크기
const fontSizeBig = '5';
const fontSizeRegular = '3';
const fontSizeSmall = '1';


// 색깔별 칼라코드
const fontColorRed = '#ff6f59';
const fontColorBlue = '#6ea3eb';
const fontColorBlack = '#363636';

// 비교할 문자열 fontColor를 수정할 경우 수정한 칼라와 상동되는 rgb값으로 하기 변수를 바꾸어주어야한다.
const fontRgbRed = 'rgb(255, 111, 89)';
const fontRgbBlue = 'rgb(110, 163, 235)';
const fontRgbBlack = 'rgb(51, 51, 51)';


// message
const urlInputError = '주소를 입력해주세요';
const imgTypeError = '이미지 파일만 업로드하실 수 있습니다';
const urlErrorMsg = '올바른 주소를 입력해주세요';
const errMsg = '등록 중 에러가 발생하였습니다';
const pathError = '서버 경로를 지정해주세요';
const textError = '아무것도 입력하지 않으셨습니다';
// url reg
const urlReg = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;

// img cdn
let _path = '';
