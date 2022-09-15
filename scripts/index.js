const params = new URLSearchParams(window.location.search);
const form = params.get('form');
const tnksModal = document.getElementById('tnksModal')
if (form) {
    tnksModal.style.display = 'block';
    tnksModal.style.paddingRight = "17px";
    tnksModal.className = "modal fade show";


} else console.log('sin param');