let toe = document.querySelector('.toe');
let h1 = document.querySelector('h1')

function reload() {
    setInterval(() => {
        window.location.reload();
    }, 2000);
    toe.onclick = null;
}

function check(arr) {
    if ((arr.includes("1") & arr.includes("5") & arr.includes("9")) 
        || (arr.includes("3") & arr.includes("5") & arr.includes("7"))
        || arr.includes("1") & arr.includes("2") & arr.includes("3")
        || (arr.includes("4") & arr.includes("5") & arr.includes("6"))
        || (arr.includes("7") & arr.includes("8") & arr.includes("9"))
        || arr.includes("1") & arr.includes("4") & arr.includes("7")
        || (arr.includes("2") & arr.includes("5") & arr.includes("8"))
        || (arr.includes("3") & arr.includes("6") & arr.includes("9"))
        ) {
            return true
    }else{
        return false
    }
}

let player = 'x';

for (let i = 1; i < 10; i++) {
    toe.innerHTML += "<div class='block' pos=" + i +"></div>"; 
}

let krest = [];
let nolik = [];

toe.onclick = (e)=>{
    if (e.target.classList.contains('block')) {
        if (!e.target.textContent) { 
            e.target.textContent = player;
            if (player === 'x') {
                player = 'o'
                krest.push(e.target.getAttribute('pos'))
                check(krest);
                // console.log(krest);
            }else{
                player = 'x'
                nolik.push(e.target.getAttribute('pos'))
                check(nolik);
                // console.log(nolik);
            }
            if(check(krest)) {
                h1.textContent = "Победил крестик!";
                reload();
            } else if(check(nolik)){
                h1.textContent = "Победил нолик!";
                reload();
            } else if(krest.length === 5 || nolik.length ===5){
                h1.textContent = "Ничья!";
                reload();
            }
        }
    }
}