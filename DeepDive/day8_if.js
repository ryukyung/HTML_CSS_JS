// Q1. if와 문자열 0
if ("0") {
  alert("Hello");
}
// 비어있는 문자열을 제외한 모든 문자열은 true, "0" 안 비었음
// alert 창에 Hello 출력됨

// Q2. 자바스크립트의 공식 이름
let name = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", "");
if (name == "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("모르셨나요? 정답은 ECMAScript입니다!");
}
// Q3. 입력받은 숫자의 부호 표시하기
let number = prompt("숫자를 입력하세요", 0);
if (number > 0) alert(1);
else if (number < 0) alert(-1);
else alert(0);

// Q4. 'if'를 '?'로 교체하기
let resultIf;

if (a + b < 4) {
  resultIf = "미만";
} else {
  resultIf = "이상";
}
let result = a + b < 4 ? "미만" : "이상";

// Q5. 'if~else'를 '?'로 교체하기
let messageIf;

if (login == "직원") {
  messageIf = "안녕하세요.";
} else if (login == "임원") {
  messageIf = "환영합니다.";
} else if (login == "") {
  messageIf = "로그인이 필요합니다.";
} else {
  messageIf = "";
}
let message = login == "직원" ? "안녕하세요." : login == "임원" ? "환영합니다." : login == "" ? "로그인이 필요합니다." : "";
