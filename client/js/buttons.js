//save html on node server
function saveHTML() {
  console.log('go')
  name = document.getElementById('name').value;
  inner = document.getElementById('particles-js').innerHTML;

  $.ajax({
    method: 'POST',
    url: '/save',
    data: {
            name: name,
            inner: inner
          }
  })
}

//downloads zip of server
function download() {
  window.location.href = '/download'
}

function logout() {
  window.location.href = '/logout'
}
