console.log('%c HI', 'color: firebrick')


fetch(const imgUrl = "https://dog.ceo/api/breeds/image/random/4")


.then(function(response) {
  console.log(response);
  return response.json();
})
.then(function(json) {
  console.log(json);
});