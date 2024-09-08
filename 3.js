var list = ['maçã', 'banana', 'laranja', 'amora'];
while (list > 0){
    alert(list);
    var choice = prompt('informe uma das frutas');
    if (list.includes(choice)){
        list.splice(list.indexOf(choice), 1);
        alert(`Fruta: ${choice} foi retirada da lista`);
    }else{
        alert(`Fruta: ${choice} indisponível no nosso mercado`);
    }
}
alert('Lista de compras finalizada');