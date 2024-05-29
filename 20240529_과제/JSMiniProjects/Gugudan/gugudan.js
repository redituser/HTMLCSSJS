// 이 코드는 웹페이지가 로드될 때 실행되는 함수입니다.
window.onload = function () {
    // 버튼 요소를 찾아서 변수에 저장합니다.
    const btnNode = document.querySelector("button");
    
    // 버튼에 클릭 이벤트 리스너를 추가합니다.
    btnNode.addEventListener("click", function() {

        // 입력 필드에서 값을 가져와 변수에 저장합니다.
        const danNum = document.querySelector("#danInput").value;
        
        // 입력된 값을 콘솔에 출력합니다. (디버깅 용도)
        console.log(danNum);
        
        // 선택된 단 번호를 화면에 표시합니다.
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        // 결과를 표시할 요소를 찾습니다.
        const resultNode = document.querySelector("#result");
        let result = "";
        
        // 1부터 9까지의 구구단 결과를 생성합니다.
        for (let i = 1; i <= 9; i++) {
            // 각 결과를 문자열로 만들어 결과 변수에 추가합니다.
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        
        // 생성된 결과를 화면에 표시합니다.
        resultNode.innerHTML = result;
        
        // 결과가 담긴 영역을 화면에 표시합니다.
        document.querySelector(".displayArea").style.display = "block";
    });
}
