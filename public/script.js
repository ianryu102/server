let count = 0;

function showhome() {
    document.getElementById("page").innerHTML = `
    <div class="aaa">
        <h1 class="hometitle"><br>여기는 홈입니다.</h1>
        <p class="subtitle">여기 아무 기능도 없는 버튼이 있답니다.</p>

        <button onclick="addcount()" class="button1">버튼</button>

        <p class="subtitle" id="countText">count: ${count}</p>
        <p class="subtitle"><br>안녕하세요 사실은 안안녕합니다.<br>왜냐하면 바로 제 마음이기 때문입니다. 하하.</p>
        <h1 class="hometitle"><br>여기 초기화버튼도 있답니다.</h1>

        <button onclick="initcount()" class="button1">초기화</button>
    </div>
    `;
}

function showpr() {
    document.getElementById("page").innerHTML = `
        <h1 class="hometitle">그딴건 없습니다.</h1>
    `;
}


function addcount() {
    count++;
    document.getElementById("countText").textContent = `count: ${count}`;
    if(count == 100) {
        alert("이걸 왜 백번이나 누르셨죠?");
    }
    else if(count == 101) {
        alert("이걸 왜 백한번이나 누르셨죠?");
    }
    else if(count == 1000) {
        alert("혹시 미치셨나요?");
    }
}
function initcount() {
    count=0;
    document.getElementById("countText").textContent = `count: ${count}`;
}

function showup() {
    document.getElementById("page").innerHTML = 
    '<p class="subtitle"><br>업데이트 내역: 그냥 만들어본 홈페이지 V1.0.1<br><br>쓸모없는 버튼 추가, 초기화 버튼 추가, 업데이트 내역 추가.</p>'
}