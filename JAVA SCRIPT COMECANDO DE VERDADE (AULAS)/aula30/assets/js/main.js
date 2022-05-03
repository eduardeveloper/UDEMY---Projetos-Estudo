const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diasSemana[diaSemana]; 
}
//     let diaSemanaTexto;


//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;  
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto;  
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         return diaSemanaTexto;  
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         return diaSemanaTexto;  
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto;  
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         return diaSemanaTexto;  
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         return diaSemanaTexto;  
//     default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;  
//     }
// }

function getNomeMes (numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
}
//     let diaSemanaTexto;


//     switch (numeroMes) {
//     case 0:
//         diaSemanaTexto = 'Janeiro';
//         return diaSemanaTexto;  
//     case 1:
//         diaSemanaTexto = 'Fevereiro';
//         return diaSemanaTexto;  
//     case 2:
//         diaSemanaTexto = 'Março';
//         return diaSemanaTexto;  
//     case 3:
//         diaSemanaTexto = 'Abril';
//         return diaSemanaTexto;  
//     case 4:
//         diaSemanaTexto = 'Maio';
//         return diaSemanaTexto;  
//     case 5:
//         diaSemanaTexto = 'Junho';
//         return diaSemanaTexto;  
//     case 6:
//         diaSemanaTexto = 'Julho';
//         return diaSemanaTexto;  
//     case 7:
//         diaSemanaTexto = 'Agosto';
//         return diaSemanaTexto;  
//     case 8:
//         diaSemanaTexto = 'Setembro';
//         return diaSemanaTexto;  
//     case 9:
//         diaSemanaTexto = 'Outubro';
//         return diaSemanaTexto;  
//     case 10:
//         diaSemanaTexto = 'Novembro';
//         return diaSemanaTexto;  
//     case 11:
//         diaSemanaTexto = 'Dezembro';
//         return diaSemanaTexto;  
//     default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;  
//     }
// }

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}
    
h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML= data.toLocaleDateString('pt-BR', { dateStyle: 'Full', timeStyle: 'short'});