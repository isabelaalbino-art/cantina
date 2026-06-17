let senha = document.getElementById("senha");
let login = document.getElementById("login");
let entrar =document.getElementById("bntEntrar");

let senhaUser = "senai567";
let loginUser = "SilviaFestCantina"

if( senha === senhaUser && login === loginUser){
  window.location.href = 'area-adm.html';
}










/*document.addEventListener('DOMContentLoaded', function () {
  const itens = document.querySelectorAll('.item');

  itens.forEach(function (item) {
    const precoEl = item.querySelector('.preco');
    const controle = item.querySelector('.controle');
    const btnMenos = controle.querySelector('button:first-child');
    const btnMais = controle.querySelector('button:last-child');
    const quantidadeEl = controle.querySelector('span');

    // Lê o preço unitário a partir do texto "R$ 7,00" e converte para número (7.00)
    const precoUnitario = parseFloat(
      precoEl.textContent
        .replace('R$', '')
        .trim()
        .replace(',', '.')
    );

    let quantidade = 0;

    function atualizar() {
      quantidadeEl.textContent = quantidade;

      const total = precoUnitario * quantidade;

      // Formata de volta para o padrão R$ 0,00
      precoEl.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    }

    btnMais.addEventListener('click', function () {
      quantidade++;
      atualizar();
    });

    btnMenos.addEventListener('click', function () {
      if (quantidade > 0) {
        quantidade--;
        atualizar();
      }
    });
  });
});
*/


