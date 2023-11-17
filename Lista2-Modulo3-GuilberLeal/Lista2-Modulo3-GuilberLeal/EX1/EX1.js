function msg(){
    alert("Olá")
    return function(){
        alert("Tudo bem?")
    }
};

const a = msg()
a()