// Q1. 반복문의 마지막 값
let i = 3;
while (i) {
  alert(i--);
}
// alert 창에 3, 2, 1 순으로 출력된다

// Q2. while 반복문의 출력값 예상하기
let j = 0;
while (++j < 5) alert(j);
let k = 0;
while (k++ < 5) alert(k);
// j의 경우 1~4까지, k의 경우 1~5까지 alert 창에 출력된다

// Q3. 'for' 반복문의 출력값 예상하기
for (let i = 0; i < 5; i++) alert(i);
for (let j = 0; j < 5; ++j) alert(j);
// i, j 모두 1~4까지 alert 창에 출력된다

// Q4. for 반복문을 이용해 짝수 출력하기
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Q5. 'for'반복문을 'while'반복문으로 바꾸기
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
let x = 0;
while (x < 3) {
  alert(`number ${x}!`);
  x++;
}

// Q6. 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
let number;
do {
  number = prompt("100을 초과하는 숫자를 입력하세요.", 0);
} while (number <= 100 && number);

// Q7. 소수 출력하기
/* 
소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수입니다.
다시 말해서 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수를 소수라고 부르죠.
5는 2나 3, 4로 나눌 수 없기 때문에 소수입니다.
5를 이들 숫자로 나누면 나머지가 있기 때문이조.
2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.
n = 10이라면 결과는 2, 3, 5, 7이 되어야겠죠.
주의: 작성한 코드는 임의의 숫자 n에 대해 동작해야 합니다.
 */
let endNumber = 10;
primeNumber: for (let i = 2; i <= endNumber; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumber;
  }
  alert(i);
}
