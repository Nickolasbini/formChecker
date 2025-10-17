let toastContainer = document.getElementById('toastContainer');

if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed top-5 right-5 z-50 flex flex-col space-y-3';
    document.body.appendChild(toastContainer);
}

/**
 * Cria e exibe uma notificação Toast.
 * @param {string} message - A mensagem a ser exibida.
 * @param {('success'|'error')} type - O tipo de notificação ('success' ou 'error').
 */
function showToast(message, type) {
    const toast = document.createElement('div');
    
    let baseClasses = 'px-4 py-3 rounded-lg shadow-xl text-white font-medium transition duration-300 transform flex items-center justify-between min-w-[250px]';
    let typeClasses = '';

    if (type === 'success') {
        typeClasses = 'bg-green-600';
    } else if (type === 'error') {
        typeClasses = 'bg-red-600';
    }

    toast.className = `${baseClasses} ${typeClasses} translate-x-full opacity-0`;
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    messageSpan.className = 'mr-4';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&#10005;';
    closeButton.className = 'ml-4 p-1 text-white opacity-70 hover:opacity-100 transition duration-150 rounded-full focus:outline-none';

    toast.appendChild(messageSpan);
    toast.appendChild(closeButton);

    const dismissToast = () => {
        toast.classList.remove('translate-x-0', 'opacity-100');
        toast.classList.add('translate-x-full', 'opacity-0');
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    };

    closeButton.addEventListener('click', dismissToast);
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
    }, 10); 

    const timeoutId = setTimeout(dismissToast, 4000); 

    closeButton.addEventListener('click', () => {
        clearTimeout(timeoutId);
        dismissToast();
    });
}