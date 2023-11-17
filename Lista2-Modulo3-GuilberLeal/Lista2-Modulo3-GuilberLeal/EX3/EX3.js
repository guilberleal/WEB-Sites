function grow(){
    this.value = (this.value * 0.5) + this.value;
};

const Produto = {
    value: 50
};

grow.apply(Produto);
grow.apply(Produto);

alert(Produto.value);