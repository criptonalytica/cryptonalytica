import Vue from 'vue'

// Como usar
/*
Buscar a cor da categoria através do nome dela no formato "nome-da-categoria", exemplo:
  # $categoryColor['nome-da-categoria']

Para converter o nome para esse formato, criei também uma função que está em utils.js, e pode ser chamado em qualquer lugar do sistema dessa forma:
  # $utils.stringfy( __categoryName__ )

Então, para aplicar a cor da categoria em um texto, fazer dessa forma:
  # :style="{color:$categoryColor[$utils.stringfy( __categoryName__ )]}"
*/

export default ({ app }, inject) => {
  inject('categoryColor', Vue.observable({ 
    defi: '#F473B9',
    mobile: '#E55758',
    gaming: '#5CC38A',
    payment: '#1F9EFF',
    web3: '#FF8E3D',
    'exchange-token': '#FFC60A',
  }))
}