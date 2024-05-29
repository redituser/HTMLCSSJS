// 이 코드는 웹페이지가 로드될 때 실행되는 함수입니다.
window.onload = function () {
    // 시작 버튼 요소를 찾아서 변수에 저장합니다.
    const startBtn = document.querySelector("#startBtn");

    // 시작 버튼에 클릭 이벤트 리스너를 추가합니다.
    startBtn.addEventListener("click", function () {
        // 숫자 입력 필드 요소를 찾아서 변수에 저장합니다.
        const numberInput = document.querySelector("#numberInput");

        // 입력 필드에 값이 없으면 placeholder 값을 사용합니다.
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        } else {
            size = numberInput.value;
        }
        console.log(size); // 입력된 크기를 콘솔에 출력합니다.

        // 테이블을 표시할 영역 요소를 찾아서 변수에 저장합니다.
        const tableArea = document.querySelector(".tableArea");

        // 입력된 크기만큼의 테이블 HTML 코드를 생성합니다.
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        
        // 생성된 테이블 HTML 코드를 테이블 영역에 삽입합니다.
        tableArea.innerHTML = cellHTML;

        // 모든 테이블 셀(td) 요소를 선택합니다.
        const tds = document.querySelectorAll("td");

        // 무작위로 초기 위치를 선택합니다.
        let curLoc = Math.floor(Math.random() * size * size);
        tds[curLoc].style.backgroundColor = "violet"; // 초기 위치를 보라색으로 표시합니다.
        console.log(curLoc); // 초기 위치를 콘솔에 출력합니다.

        // 키보드 이벤트 리스너를 추가합니다.
        window.onkeydown = function (event) {
            // 방향키가 아닌 키 입력은 무시합니다.
            if (event.keyCode < 37 || event.keyCode > 40) return;

            // 현재 위치의 셀 배경색을 흰색으로 변경합니다.
            tds[curLoc].style.backgroundColor = "white";
            
            // 현재 위치의 행과 열을 계산합니다.
            let row = Math.floor(curLoc / size);
            let col = curLoc % size;

            // 입력된 키에 따라 위치를 변경합니다.
            switch (event.key) {
                case 'ArrowLeft': // 왼쪽 화살표 키
                    col--;
                    if (col == 0) curLoc += (size - 1);
                    else curLoc--;
                    break;
                case 'ArrowUp': // 위쪽 화살표 키
                    curLoc -= size;
                    if (curLoc < 0) curLoc += size * size;
                    break;
                case 'ArrowDown': // 아래쪽 화살표 키
                    curLoc += size;
                    if (curLoc >= size * size) curLoc -= size * size;
                    break;
                case 'ArrowRight': // 오른쪽 화살표 키
                    col = curLoc % size;
                    if (col == size - 1) curLoc -= (size - 1);
                    else curLoc++;
                    break;
            }
            console.log(curLoc); // 변경된 위치를 콘솔에 출력합니다.

            // 변경된 위치의 셀 배경색을 보라색으로 변경합니다.
            tds[curLoc].style.backgroundColor = "violet";
        }
    });
}
