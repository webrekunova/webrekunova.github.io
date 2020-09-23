
const overlay = document.createElement('div');
overlay.className = 'modal-overlay';

const modal = document.createElement('div');
modal.className = "modal-window";

const container = document.createElement('div');
container.className = "modal-body";

const closeBtn = document.createElement('div');
closeBtn.className = "close-btn";

overlay.onclick = (e) => cancelModal(e);
closeBtn.onclick = (e) => cancelModal(e);

const createModal = (inner) => { 
    if(!inner){
        overlay.remove();
    }
    else{
        inner.style = "display: block";
        container.innerHTML = '';
        container.appendChild(inner);
        modal.append(closeBtn, container)
        overlay.appendChild(modal)
        document.body.prepend(overlay);
    }
} 

const cancelModal = (e) => {
    if( 
        e.target.className === "modal-overlay" ||
        e.target.className === "close-btn" ||
        e.target.className === "modal-cancel-btn"
        ){
            const inputs = overlay.querySelectorAll('input');
            const errors = overlay.querySelectorAll('.email-error')
            inputs.forEach(el => {
                el.value = '';
                el.classList.remove('input-error')
            });
            errors.forEach(el => { 
                el.remove();
            });
            overlay.remove();

        }
}

export default createModal;
