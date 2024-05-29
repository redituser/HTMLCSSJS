// 이 코드는 웹페이지가 로드될 때 실행되는 함수입니다.
window.onload = function() {
    // 할 일 입력 필드와 추가 버튼 요소를 찾습니다.
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");

    // 추가 버튼에 클릭 이벤트 리스너를 추가합니다.
    addBtn.addEventListener("click", function() {
        // 입력 필드에 값이 있을 경우에만 할 일 리스트에 추가합니다.
        if (todoInput.value != "") addTodoList();
    });
}

// 할 일 리스트에 새로운 항목을 추가하는 함수입니다.
function addTodoList() {
    console.log(todoInput.value); // 입력된 값을 콘솔에 출력합니다.

    // 할 일 리스트 영역 요소를 찾습니다.
    const listArea = document.querySelector(".listArea");

    // 새로운 리스트 항목과 필요한 요소들을 생성합니다.
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    // 생성된 요소들을 리스트 항목에 추가합니다.
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    // 할 일 텍스트와 삭제 버튼의 텍스트를 설정합니다.
    todoText.innerText = todoInput.value;
    todoInput.value = ""; // 입력 필드를 비웁니다.
    delBtn.innerText = "X"; // 삭제 버튼의 텍스트를 설정합니다.

    // 각 요소에 클래스를 추가합니다.
    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");

    // 체크 버튼에 클릭 이벤트 리스너를 추가합니다.
    checkBtn.addEventListener("click", function() {
        // 체크 버튼에 체크 표시를 토글합니다.
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        } else {
            checkBtn.innerHTML = "";
        }
        // 할 일 텍스트에 체크된 스타일을 토글합니다.
        todoText.classList.toggle("check");
    });

    // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
    delBtn.addEventListener("click", function() {
        // 리스트 항목을 삭제합니다.
        liNode.remove();
    });

    // 리스트 영역의 마지막 자식을 콘솔에 출력합니다. (디버깅 용도)
    console.log(listArea.lastChild);
}
