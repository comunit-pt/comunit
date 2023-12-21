class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!@#$%^&*()_-=+{}:"|<>?,./;'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Denunciamos a extorsão das consultoras de recrutamento.',
  'Denunciamos a precariedade propagandeada como "empreendedorismo".',
  'Denunciamos as plataformas digitais que licitam o valor do nosso trabalho como num leilão.',
  'Denunciamos a terceirização e a subcontratação.',
  'Denunciamos a carga mental que transforma o turno de 8 horas num trabalho "24/7"',
  'Denunciamos os despedimentos em massa, glamorizados e justificados nas redes sociais',
  'Denunciamos a exploração disfarçada sob o eufemismo de "vestir a camisola".',
  'Denunciamos que em Portugal existem profissionais ao melhor nível do mundo'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2500)
  })
  counter = (counter + 1) % phrases.length
}

next()

'use strict';

var app = {

  chars: ['Longas Jornadas de Trabalho','Crunch Culture','Infantilização','A senhora da limpeza é como se fosse da família',
    '0x☭☭☭☭☭☭','Expondo funcionarios na rede','Ausência de investimento em treinamento','Pressão Excessiva para Entregas Rápidas!','Falta de Estrutura de Apoio','' +
    'Insegurança no Emprego!','Gestão Autoritária','Carga de Trabalho Desigual','Falta de Benefícios Adequados','Recursos Humanos Ineficazes','Ausência de Flexibilidade' +
    'Reconhecimento e Valorização?','Precarização','Consultoras parasitas', 'Especulação', 'Doutrina' ],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    document.body.appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 150) + 1;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 5;
    var size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);