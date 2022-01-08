const $form= document.querySelector('#form');//simbolo de dolar para diferenciar de la otra variable e identificar que es un elemnto del DOM
const $buttonMail = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
event.preventDefault();
const form= new FormData(this);
$buttonMail.setAttribute('href', `mailto:dannysotalin@gmail.com?subject=Nombre: ${form.get('name')}  Correo: ${form.get('email')}&body=${form.get('message')}`)
$buttonMail.click()
}
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});

