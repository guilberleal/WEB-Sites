function Triangulo( a, b, c){
    form.call(this, "Triangulo");
    this.a = a;
    this.b = b;
    this.c = c;
}
function form(tipo){
    this.tipo = tipo;
};
form.prototype.getTipo = function(){
    return this.tipo;
}


Triangulo.prototype = Object.create(form.prototype);
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.getPerimetro = function(){
    return this.a + this.b + this.c;
}

const Tri = new Triangulo(2, 4, 6);

alert("Tipo: "+Tri.getTipo()+"\nPerimetro: "+Tri.getPerimetro())

