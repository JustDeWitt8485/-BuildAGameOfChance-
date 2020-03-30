// Translations: Darmok and Jalad at Tanagra. - Work together on the ocean,  SoHvaD pagh vIjatlh, Human! -  I have nothing to say to you, Human!", Yes - 01111001 01100101 01110011, No - 01101110 01101111, 
let div = document.getElementById("answer");
let buttonR = document.getElementById("click");
let inputQ = document.getElementById("question");
const answerArr = ["Your eyes can deceive you; Don't trust them.", "Only the Blurrg know.", "That's what she said.", "Darmok and Jalad at Tanagra.", "SoHvaD pagh vIjatlh, Human!", "I know just what to say, But in a much more real sense I have know idea what to say. ", "You can't handle the truth.", "01111001 01100101 01110011", "01101110 01101111 ", "Go ask the Southern Oracle.", "I am sure Morla (The Ancient One) knows that one, but they may not care. "];
console.log(answerArr);

let ranAnswer = answerArr[Math.floor((Math.random() * answerArr.length))];
console.log(ranAnswer)
let submitA = true;
buttonR.onclick = function () {

    if (submitA === true) {

        let text = document.createTextNode(ranAnswer);
        let para = document.createElement("p");
        para.appendChild(text);
        div.appendChild(para);
        submitA = false
    } else if (submitA === false) {
        window.location.reload();

        submitA = true
    } 
}
    










