const btn_succ = document.querySelector('.btn-success');
const btn_warn = document.querySelector('.btn-warning');
const btn_erro = document.querySelector('.btn-error');
const notiBoard = document.querySelector('.notication');

const success = {
    title: "Success",
    description: 'This is a toast message with typeof Success',
    toastClass: 'toast_success',
    iconClass: 'success fa-solid fa-check-circle'
};

const warning = {
    title: "Warning",
    description: 'This is a toast message with typeof Warning',
    toastClass: 'toast_warning',
    iconClass: 'warning fa-solid fa-exclamation-circle'
}
const error = {
    title: "Error",
    description: "This is a toast message with typeof Error",
    toastClass: 'toast_error',
    iconClass: 'error fa-solid fa-bug'

}
function creataToast() {  
    notiBoard.innerHTML += `
        <div class="toast">
            <div class="toast_icon">
                <i class=""></i>
            </div>
            <div class="toast_body">
                <h3 class="toast_title">Success</h3>
                <p class="toast_msg">This is a success message!</p>
            </div>
            <div class="toast_close">
                <i class="fa fa-close"></i>
            </div>
        </div>
    `;
}
function toast(obj) { 
    // Cai dat ve mac dinh 
    creataToast();
    const toastElement = document.querySelector('.toast');
    const toastIcon = document.querySelector('.toast_icon i');
    const toastTitle = document.querySelector('.toast_title');
    const toastMsg = document.querySelector('.toast_msg');
    var toastClose = document.querySelectorAll('.toast_close');
    toastElement.className = 'toast';
    toastIcon.className = '';
    toastElement.classList.add(obj.toastClass);
    toastIcon.classList.add(...obj.iconClass.split(' '));
    toastTitle.textContent = obj.title;
    toastMsg.textContent = obj.description;
    toastElement.style.display = 'flex';
    // setTimeout(() => {
    //     toastElement.className = 'toast';
    //     toastIcon.className = '';
    //     toastElement.style.display = 'none';
    //     toastElement.remove();
    // }, 4000);
}
