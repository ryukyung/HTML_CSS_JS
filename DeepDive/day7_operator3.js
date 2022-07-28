// Q1. 다음 OR 연산의 결과는 무엇일까요?
alert(null || 2 || undefined); // alert창에 2

// Q2. OR 연산자의 피연산자가 alert라면?
alert(alert(1) || 2 || alert(3)); // alert창에 1, 2
// Q3. 다음 AND 연산의 결과는 무엇일까요?
alert(1 && null && 2); // alert 창에 null

// Q4. AND 연산자의 피연산자가 alert라면?
alert(alert(1) && alert(2)); // alert 창에 1, undefined

// Q5. OR AND OR 연산자로 구성된 표현식
alert(null || (2 && 3) || 4); // alert 창에 3
// &&가 ||보다 우선순위가 높다

// Q6. 사이 범위 확인하기
if (age > 14 && age <= 90) alert(age);

// Q7. 바깥 범위 확인하기
if (age < 14 || age > 90) alert(age);
if (!(age > 14 && age <= 90)) alert(age);

// Q8. "if"에 관한 고찰
if (-1 || 0) alert("first"); // -1, truthy
if (-1 && 0) alert("second"); // 0, falsy
if (null || (-1 && 1)) alert("third"); // 1, truthy

// Q9. 로그인 구현하기
/* 프롬프트 대화상자를 이용해 간이 로그인 창을 구현해보세요.
사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.
이때 아무런 입력도 하지 않거나 ESC를 누르면 "취소되었습니다."라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요

비밀번호 확인 절차는 다음과 같습니다.
- 맞는 비밀번호 "TheMaster"를 입력했다면 '환영합니다!'라는 메시지를 보여주세요.
- 틀린 비밀번호를 입력했따면 '인증에 실패하였습니다.'라는 메시지를 보여주세요.
- 빈 문자열을 입력하거나 입력을 취소했다면 '취소되었습니다.'라는 메시지를 보여주세요.

중첩 if문을 사용하고, 코드 전체의 가독성을 고려해 답안을 작성하세요.
[힌트] 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열 ''가, ESC를 누르면 null이 반환됩니다. */

let user = prompt("사용자 이름을 입력하세요.");
if (user == "Admin") {
  let password = prompt("비밀번호를 입력하세요", "");
  if ((password = "TheMaster")) alert("환영합니다");
  else if (password == "" || password == null) alert("취소되었습니다.");
  else alert("인증되지 않은 사용자입니다.");
} else if (user == "" || user == null) alert("취소되었습니다.");
else alert("인증되지 않은 사용자입니다.");
