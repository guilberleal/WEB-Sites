function func1(v){
    if (v == 1){
        return "Seja bem vindo";
    }else if(v == 0){
        return "Tente novamente";
    }    
};

function func2(fun, v, nome){
    let saida = fun(v) + " " + nome;
    alert(saida)
};

func2(se, 0, "Leal");