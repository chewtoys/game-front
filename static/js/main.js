const urlParams = new URLSearchParams(window.location.search);

if (!urlParams.has('jwt') && localStorage.getItem('security.jwt') === null) {
  window.location = config.portalUrl;
} else if (urlParams.has('jwt')) {
  localStorage.setItem('security.jwt', urlParams.get('jwt'));
  window.location = '/';
}

const jwt = localStorage.getItem('security.jwt');
var dictionnary = '';
var player = null;
var headers = new Headers({"Authorization": `Bearer ${jwt}`});

const getPlayer = () =>
  fetch('/api/me', {
      method: 'GET',
      headers: headers
  }).then(response => {
    if (response.status === 401) {
      window.location = `${config.portalUrl}/dashboard`;
      return Promise.reject("unauthorized");
    }
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    player = data;
  }).catch(error => console.log(error))
;


const createDictionnary = lang => fetch(`/static/translations/${lang}.json`)
  .then(response => response.json())
  .then(data => { dictionnary = data; })
  .catch(error => console.log(error))
;
createDictionnary('fr').then(() => document.querySelectorAll("[data-translate=true]").forEach(element => {
  var keys = element.innerText.split('.');
  var result = dictionnary;
  keys.forEach(key => {
    result = result[key];
  });
  element.innerText = result;
}));
