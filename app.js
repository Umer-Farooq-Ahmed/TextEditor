// const elements = document.querySelectorAll(`.btn`);



// elements.forEach(element => {
//     element.addEventListener('click', () => {
//         let command = element.dataset['element'];
//         console.log (command)

//         if (command == 'createLink'  ||  command == `insertImage`){
//             let url =prompt('enter the link Here','https://')
//             document.exeCommand(command,false,url);
//         }else{
//             document.exeCommand(command,false,url);
//         }

//         document.exeCommand(command, false, null);
//     });
// });
let text = document.getElementById("textone");
function f1(e) {
    let value = e.value
    textone.style.fontSize = value + 'px'
}
function f2(e) {
    if (textone.style.fontWeight == 'bold') {
        textone.style.fontWeight = 'normal';
        e.classlist.remove('active');
    }
    else {
        textone.style.fontWeight = 'bold';
        e.classlist.add('active');
    }
}
function f3(e) {
    if (textone.style.fontStyle == 'italic') {
        textone.style.fontStyle = 'normal';
        e.classlist.remove('active');
    }
    else {
        textone.style.style = 'italic';
        e.classlist.add('active');
    }
}
function f4(e) {
    if (textone.style.textDecoration == 'underLine') {
        textone.style.textDecoration = 'none';
        e.classlist.remove('active');
    }
    else {
        textone.style.textDecoration = 'underLine';
        e.classlist.add('active');
    }
}
function f5(e) {
    textone.style.textAlign = 'left'
}
function f6(e) {
    textone.style.textAlign = 'center'
}
function f7(e) {
    textone.style.textAlign = 'right'
}
function f8(e) {
    if (textone.style.textTransform == 'uppercase') {
        textone.style.textTransform = 'lowercase';
        e.classlist.remove('active');
    }
    else {
        textone.style.textTransform = 'uppercase';
        e.classlist.add('active');
    }
}
function f10() {
    textone.style.fontWeight = 'normal';
    textone.style.textAlign = 'left';
    textone.style.fontStyle = 'normal';
    textone.style.textTransform = 'capitalize';
    textone.value = '';
}

function f9(e) {
    let value = e.value
    textone.style.color = value
}

window.addEventListener('load'), () => {
    textone.value = '';
}