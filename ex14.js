import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   const numeros_limites = pegar_numero('Insira o número N: ')
   let contador_num_base = 1
   while(contador_num_base*contador_num_base <= numeros_limites) {
       let contador_quadrados = contador_num_base*contador_num_base
       mostrar(contador_quadrados)
       contador_num_base++
   }


}
main()