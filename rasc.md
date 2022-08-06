

        const botao= document.querySelector("#openModal");
        const esc= document.querySelector('.modal-wrapper');

        function clickESC(){
            
            esc
             .classList
             .remove('invisible');

        }

        botao.onclick = clickESC;
        


