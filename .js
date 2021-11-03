$.ajax({
  url: "https://api.github.com/users/blackmiaool/repos",
  jsonp: true,
  method: "GET",
  dataType: "json",
  success: function(res) {
    console.log(res)
  }
});
