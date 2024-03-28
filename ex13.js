import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   const contador_qtd_num = pegar_numero('Insira o número N: ')
   let contador_num_contados = 0
   let maior_num_lista = 0
   while(contador_num_contados < contador_qtd_num){
       const pedido_de_num = pegar_numero('Insira um número a ser somado: ')
       if(pedido_de_num > maior_num_lista){
           maior_num_lista = pedido_de_num
       }
       contador_num_contados++
   }
   mostrar(`
   O maior número da lista é: ${maior_num_lista}
   `)


}
main()