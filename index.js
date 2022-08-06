const botao= document.querySelector("#openModal");
        const esc= document.querySelector('#click-esc');

       
        function clickESC(){
        
            esc    // entra na tag via querySelector()
             .classList
             .remove('invisible');

        }
        document.onkeydown = function(e){

            if(e.key === 'Escape'){ //verifica a tela precionada
                esc                 // entra na tag via querySelector()
                  .classList
                  .add('invisible');

            }

        } // adicionando um evento ao documento html

        botao.onclick = clickESC; //quando clica no botao realiza a função
        