var preloader = document.getElementById('loading');
    function loader() {
      preloader.style.display = 'none';
    }
    var internet = document.getElementById("test");
    internet.innerHTML = "Friends You Are Online > " + navigator.onLine;
    function changetext() {
      var x1 = document.getElementById('fname');
      var x2 = document.getElementById('lname');
      x1.value = x1.value.toUpperCase();
      x2.value = x2.value.toUpperCase();
    }