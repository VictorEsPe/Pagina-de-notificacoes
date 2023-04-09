// marcar notificações como lidas individualmente e todas de uma vez ao clicar no botáo read all

/*
1- armazenar todos os elementos com a classe unread
2 - armazenar o botão read all
3 - ao clicar em cada notificação ela será desmarcada individualmente
4 - ao clicar no botão read all todas as notificações marcadas como unread serão desmarcadas

extra
5 - fazer com que o numero do mostrador de notificações seja dinâmico 
*/

const unreadMessages = document.querySelectorAll('.unread');
const markAllReadBtn = document.querySelector('.mark-all-read-btn');
const numberOfUnreadMessages = document.getElementById('unread-notifications')


unreadMessages.forEach((message) => {
  message.addEventListener('click', () => {
    message.classList.remove('unread');
  })
})

markAllReadBtn.addEventListener('click', () => {
  unreadMessages.forEach((message) => {
    message.classList.remove('unread');
  })
  numberOfUnreadMessages.innerText = 0; 
})

updateUnreadNotificationNumber();

function updateUnreadNotificationNumber() {
  numberOfUnreadMessages.innerText = unreadMessages.length; 
}

