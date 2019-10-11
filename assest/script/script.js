var circ = document.getElementById('aura')
        circ.addEventListener('mouseenter' , aumentar)
        circ.addEventListener('mouseout',voltar)
        function aumentar(){
           circ.style.width='180px'
           circ.style.height='180px'
           
        }
        function voltar(){
            circ.style.width='141px'
           circ.style.height='141px'
        }