// import './style.css'

const globalGameState = {
   'selected difficulty level': '',
   'game progress value': '',
   'player game time': '00:00',
   'playing field card': '',
   'user-selected cards': '',
}

const chooseAnEasyLevel = document.querySelector('.text__easy')
const chooseAnMediumLevel = document.querySelector('.text__medium')
const chooseAnHardLevel = document.querySelector('.text__hard')

chooseAnEasyLevel.addEventListener('click', () => {
   console.log('easy level selected!')
   chooseAnEasyLevel.classList.add('select__easy')
   chooseAnMediumLevel.classList.remove('select__medium')
   chooseAnHardLevel.classList.remove('select__hard')
   globalGameState['selected difficulty level'] = 'easy'
   console.log(globalGameState)
   location = './shirts.html'
})

chooseAnMediumLevel.addEventListener('click', () => {
   console.log('medium level selected!')
   chooseAnMediumLevel.classList.add('select__medium')
   chooseAnEasyLevel.classList.remove('select__easy')
   chooseAnHardLevel.classList.remove('select__hard')
   globalGameState['selected difficulty level'] = 'medium'
   console.log(globalGameState)
   location = './shirts.html'
})

chooseAnHardLevel.addEventListener('click', () => {
   console.log('hard level selected!')
   chooseAnHardLevel.classList.add('select__hard')
   chooseAnEasyLevel.classList.remove('select__easy')
   chooseAnMediumLevel.classList.remove('select__medium')
   globalGameState['selected difficulty level'] = 'hard'
   console.log(globalGameState)
   location = './shirts.html'
})
