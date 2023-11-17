var opt = ['Pedra', 'Papel', 'Tesoura']

const selecaoUsuario = prompt('Escolha - Pedra, Papel ou Tesoura')

if (opt.includes(selecaoUsuario)) {
  var cpu = opt[Math.floor(Math.random() * 3)]

  if (selecaoUsuario === cpu) {
    alert(`Empate - Você escolheu ${selecaoUsuario} e a CPU escolheu ${cpu}`)
  } else {
    if (selecaoUsuario === 'Pedra' && cpu === 'Tesoura') {
      alert(`Você ganhou! - Você escolheu ${selecaoUsuario} e a CPU escolheu ${cpu}`)
    } else if (selecaoUsuario === 'Papel' && cpu === 'Pedra') {
      alert(`Você ganhou! - Você escolheu ${selecaoUsuario} e a CPU escolheu ${cpu}`)
    } else if (selecaoUsuario === 'Tesoura' && cpu === 'Papel') {
      alert(`Você ganhou! - Você escolheu ${selecaoUsuario} e a CPU escolheu ${cpu}`)
    } else {
      alert(`Você ganhou! - Você escolheu ${selecaoUsuario} e a CPU escolheu ${cpu}`)
    }
  }
} else {
  alert('INVALIDO')
}



