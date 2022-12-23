toggle_btn = document.querySelector('[data-toggle-btn]')

price_basic = document.querySelector('[data-basic-price]')
price_pro = document.querySelector('[data-pro-price]')
price_master = document.querySelector('[data-master-price]')

toggle_btn.addEventListener('click', function(e) {
    toggle_btn.classList.toggle('toggle-btn--off')

    if(toggle_btn.classList.contains('toggle-btn--off')) { 
        // annualy
       
        price_basic.innerHTML = "199.99";
        price_pro.innerHTML = "249.99";
        price_master.innerHTML = "399.99";
    }
    else {
        // monthly
       
        price_basic.innerHTML = "19.99";
        price_pro.innerHTML = "24.99";
        price_master.innerHTML = "39.99";

    }
})