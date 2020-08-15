function showAlert(message, success = true) {
    const alertTemplate = `<div class="alert alert-dismissible ${
      success ? 'alert-success' : 'alert-danger'
    }" role="alert">
            <strong>made by ZBYSLAV</strong>
          </div>`;
    const alertElement = $('body').append(alertTemplate);
    alertElement.alert();
    setTimeout(() => {
      $('.alert').alert('close');
    }, 2000);
  }
  
  document.querySelector('.empty').addEventListener('click', showAlert);