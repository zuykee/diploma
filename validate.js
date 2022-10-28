const selector1 = document.querySelector('.site-container');

const body = document.body;

let disableScroll = function () {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

      body.style.paddingRight = paddingOffset;
      body.classList.add('scroll-blocker');


  };

  let enableScroll = function () {

      body.classList.remove('scroll-blocker');

      body.style.paddingRight = '0px';

  };



let validateForms = function(selector, rules) {
    new window.JustValidate(selector, {
        rules: {
            tel: {
                required: true
            },

            checkbox: {
                required: true
            },

            time: {
                required: true
            },

            comment: {
                required: true
            }
        },
        submitHandler: function(form) {
            let formData = new FormData(form);
            let body = document.querySelector('body');
            let shade = document.querySelector('.popup-container');
            let shack = form.parentNode;
            let status = document.querySelector('.alert-popup');

            let shape = shack.querySelector('.submit-alert');
            let msg = shack.querySelector('.submit-alert--text');
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        msg.textContent = ('Спасибо за обращение! Я свяжусь с вами в ближайшее время!' + xhr.responseText)
                    } else {
                        msg.textContent = ('К сожалению на сервере возникли неполадки, но вы можете связаться со мной в соцсетях по ссылкам внизу.' + xhr.responseText)
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);


            form.reset();


            form.classList.add('out');


            setTimeout(() => shade.classList.add('out'), 500);

            setTimeout(() => shape.classList.remove('in'), 600);
            setTimeout(() => status.style.display = 'none', 600);
            setTimeout(() => shack.classList.remove('visible'), 600);
            setTimeout(() => shade.style.display = 'none', 600);

            setTimeout(() => enableScroll(body),600);

        }
    });
}

validateForms('.order-popup--form', {


}, '.thanks-popup', 'send goal')

validateForms('.callback-popup--form', {



}, '.thanks-popup', 'send goal')