let access_btn = document.querySelectorAll(".btn");
let access_rbtn = document.querySelector(".reset_btn");
let access_msgcontainer = document.querySelector(".msg-conatiner");
let access_restart_btn = document.querySelector(".restart_btn");
let access_msg = document.querySelector("#msg");

// Add sound effect
let clickSound = new Audio("/assets/Click_sound.wav");
let winsound = new Audio();

let clickO = true;
const winpatten = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const reset_btn = () => {
    clickO = true;
    enable_btn();
    access_msgcontainer.classList.add("hide");
};

access_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Button was clicked");

        clickSound.play();

        if (clickO) {
            btn.innerText = "O";
            btn.style.color = "red";
            clickO = false;
        } else {
            btn.innerText = "X";
            btn.style.color = "black";
            clickO = true;
        }
        btn.disabled = true;

        check_winner();
    });
});

const disable_btn = () => {
    for (const btn of access_btn) {
        btn.disabled = true;
    }
};

const enable_btn = () => {
    for (const btn of access_btn) {
        btn.disabled = false;
        btn.innerText = "";
    }
};

const showwinner = (winner) => {
    access_msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
    access_msgcontainer.classList.remove("hide");
    disable_btn();
};

const check_winner = () => {
    for (const pattern of winpatten) {
        let p1 = access_btn[pattern[0]].innerText;
        let p2 = access_btn[pattern[1]].innerText;
        let p3 = access_btn[pattern[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                console.log("Winner", p1);
                showwinner(p1);
            }
        }
    }
};

access_restart_btn.addEventListener("click", reset_btn);
access_rbtn.addEventListener("click", reset_btn);
