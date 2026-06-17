let itens = document.querySelectorAll(".item");

let totalPedido = 0;
let qtdProdutos = 0;

for (let i = 0; i < itens.length; i++) {

    let btnMais = itens[i].getElementsByClassName("btnMais")[0];
    let btnMenos = itens[i].getElementsByClassName("btnMenos")[0];
    let quantidade = itens[i].getElementsByClassName("quantidade")[0];
    let preco = itens[i].getElementsByClassName("preco")[0];

    let qtd = 0;

    let precoUnitario = Number(
        preco.innerHTML.replace("R$ ", "").replace(",", ".")
    );

    btnMais.onclick = function () {


    qtd++;
    quantidade.innerHTML = qtd;

   preco.innerHTML =
   "R$ " + (precoUnitario * qtd).toFixed(2).replace(".", ",");

    totalPedido += precoUnitario;
    qtdProdutos++;

     document.getElementById("total-pagar").innerHTML =
     "Total a pagar: R$ " + totalPedido.toFixed(2).replace(".", ",");

     document.getElementById("quantidade-produtos").innerHTML =
     "Quantidade de Produtos: " + qtdProdutos;
    }

    btnMenos.onclick = function () {

     if (qtd > 0) {

     qtd--;
    quantidade.innerHTML = qtd;

     preco.innerHTML =
     "R$ " + (precoUnitario * qtd).toFixed(2).replace(".", ",");

     totalPedido -= precoUnitario;
     qtdProdutos--;

     document.getElementById("total-pagar").innerHTML =
     "Total a pagar: R$ " + totalPedido.toFixed(2).replace(".", ",");

   document.getElementById("quantidade-produtos").innerHTML =
    "Quantidade de Produtos: " + qtdProdutos;
        }
    }
}

let voltar = document.getElementById("voltar");

voltar.onclick = function () {
    window.location.href = "index.html";
}

let botao = document.getElementById("botao-cima");

botao.onclick = function () {
    window.location.href = "index.html";
}


