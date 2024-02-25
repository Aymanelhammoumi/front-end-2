
function authenticate() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Vous pouvez remplacer cette vérification par une requête AJAX pour vérifier les données côté serveur.
    // Pour cet exemple, je vais utiliser des données statiques stockées dans le localStorage.

    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');
    // Stockage des données dans le localStorage (peut être placé dans une autre partie de votre application)
localStorage.setItem('username', 'ayman');
localStorage.setItem('password', '12345');


    if (usernameInput === savedUsername && passwordInput === savedPassword) {
      alert('Authentification réussie!');
      // Rediriger vers la deuxième page
      window.location.href = 'ex.html';
    } else {
      alert('Échec de l\'authentification. Veuillez vérifier vos informations.');
    }
  }
 // Stockage des données dans le localStorage (peut être placé dans une autre partie de votre application)
      localStorage.setItem('username', 'ayman');
      localStorage.setItem('password', '12345');