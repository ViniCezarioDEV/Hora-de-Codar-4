var list = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
var i = prompt('informe um nome de planeta');
if (list.includes(i)){
    alert(`o ${i} está na lista de planeta`);
}else{
    alert(`o ${i} não está na lista de planeta`);
}