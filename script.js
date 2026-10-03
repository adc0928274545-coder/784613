
// ==============================
// Future Path v2
// ==============================

const splash = document.getElementById("splash");
const home = document.getElementById("home");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const installScreen = document.getElementById("installScreen");
const installTitle = document.getElementById("installTitle");
const installText = document.getElementById("installText");
const installBar = document.getElementById("installBar");
const installPercent = document.getElementById("installPercent");

const text =
"Application นี้สามารถแสดงเส้นทางในอนาคตของคุณได้ทั้งหมด 2 เส้นทาง คุณสามารถรับชมได้ทั้ง 2 เส้นทาง แต่สามารถเลือกได้เพียง 1 เส้นทางเท่านั้น ";

let index = 0;

// ==============================
// เปิดแอป
// ==============================
function startInstall(){

    let progress = 0;

    installText.innerHTML = "";
    installBar.style.width = "0%";
    installPercent.innerHTML = "0%";

    const timer = setInterval(() => {

        progress++;

        installBar.style.width = progress + "%";
        installPercent.innerHTML = progress + "%";

        if(progress >= 100){

            clearInterval(timer);

            installTitle.innerHTML = "INSTALLATION COMPLETE ✓";
            installPercent.innerHTML = "";
            installText.innerHTML = "";

            // ค้างไว้ 7 วินาที
            setTimeout(() => {

                installTitle.style.opacity = "0";

                setTimeout(() => {

                    console.log("Step 1");

                    installScreen.style.display = "none";

                    splash.style.display = "flex";

                    splash.classList.remove("hidden");

                    console.log("Step 2");

                    typing.innerHTML = "";
                    index = 0;

                    typeWriter();

                    console.log("Step 3");

                },800);

            },3000);

        }

    },75);

}
window.onload = function(){

    splash.classList.add("hidden");

    installScreen.classList.remove("hidden");

    installTitle.innerHTML = "THIS IS YOUR CHANCE";
    installText.innerHTML = "";
    installPercent.innerHTML = "";
    installBar.style.width = "0%";

    setTimeout(()=>{

        installTitle.style.opacity = "0";

        setTimeout(()=>{

            installTitle.innerHTML = "INSTALLING";

            installTitle.style.opacity = "1";

            setTimeout(()=>{

                startInstall();

            },800);

        },800);

    },3000);

}
// ==============================
// พิมพ์ข้อความ
// ==============================

function typeWriter(){

    if(index === 0){
        typing.innerHTML = "";
    }

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }else{

        startBtn.style.opacity = "1";
        startBtn.style.pointerEvents = "auto";

    }

}

// ==============================
// ไปหน้ากรอกข้อมูล
// ==============================

function showHome(){


    splash.style.display = "none";

    home.style.display = "flex";

}
// ==============================
// เริ่มวิเคราะห์
// ==============================

function startScan(){

    const name = document.getElementById("fullname").value.trim();
    const birth = document.getElementById("birthday").value;

    if(name === "" || birth === ""){
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    // ซ่อนหน้า Home
    home.style.display = "none";

    // แสดงหน้า Loading
    loading.style.display = "flex";

    let p = 0;

    progressBar.style.width = "0%";
    percent.innerHTML = "0%";

    const timer = setInterval(() => {

        p++;

        progressBar.style.width = p + "%";
        percent.innerHTML = p + "%";

        if(p >= 100){

            clearInterval(timer);

            setTimeout(() => {

                loading.style.display = "none";

                result.style.display = "flex";

            },4000);

        }

    },60);

}

// ==============================
// ดูเส้นทาง
// ==============================

function viewPath(num){

    result.style.display = "none";

    if(num === 1){

        path1.style.display = "flex";
        path2.style.display = "none";

        path1.classList.add("fadeIn");

    }else{

        path2.style.display = "flex";
        path1.style.display = "none";

        path2.classList.add("fadeIn");

    }

}

// ==============================
// กลับ
// ==============================

function backResult(){

    path1.style.display = "none";
    path2.style.display = "none";

    result.style.display = "flex";
    result.classList.add("fadeIn");

}

// ==============================
// เลือกเส้นทาง
// ==============================

let selectedPath = 0;

function choosePath(num){

    selectedPath = num;

    document.getElementById("popupText").innerHTML =
    `คุณกำลังจะเลือก <b>เส้นทางที่ ${num}</b><br><br>
    เมื่อเลือกแล้วจะไม่สามารถเปลี่ยนแปลงได้อีก<br><br>
    <b>ตกลงจะเลือกเส้นทางนี้หรือไม่?</b>`;

    document.getElementById("confirmPopup").classList.remove("hidden");

}

// ปิด Popup

function closePopup(){

    document.getElementById("confirmPopup").classList.add("hidden");

}

// กดยืนยัน

function confirmChoose(){

    document.getElementById("confirmPopup").classList.add("hidden");

    alert("เลือกเส้นทางที่ " + selectedPath + " สำเร็จ");

    // ตัวอย่าง
    // window.location.href = "ending.html";

}
