// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

$(document).ready(function () {
    $("ul.navbar-nav > li").click(function (e) {
     $("ul.navbar-nav > li").removeClass("active");
     $(this).addClass("active");
      });
  });