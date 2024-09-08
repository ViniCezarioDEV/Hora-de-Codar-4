var list = [];
var i = null;
while (i == null){
    var aluno = prompt('Informe o nome do estudante // PARE');
    if (aluno == 'PARE'){
        i = 'PARE';
    }else{
        list.push(aluno);
    }
}
alert(list);