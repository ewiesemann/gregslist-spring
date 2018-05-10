function HouseService(cb){
  
  var baseUrl = "https://bcw-gregslist.herokuapp.com/api/houses"
    //PRIVATE
    var houses = []

  
    function House(img, year, bedrooms, bathrooms, levels, price, description){
      this.imgUrl = img || "//placehold.it.200x200"
      this.year = year
      this.bedrooms = bedrooms
      this.bathrooms = bathrooms
      this.levels = levels
      this.price = price
      this.description = description || "No description provided"

    }
  
   // var owlridge = new Houses('https://photos.zillowstatic.com/p_h/IS6ilu199pp1wb0000000000.jpg', 1998, 4, 3, 2327, .26, 319500)
   // var brogan = new Houses('https://photos.zillowstatic.com/p_h/IS6aj3lxic6f891000000000.jpg', 2007, 3, 2.5, 1552, 210000)
   // var mossywood = new Houses('https://photos.zillowstatic.com/p_h/IS6ix3tt6m9zxw0000000000.jpg', 2017, 4, 3, 2641, 414900)
  
   function loadHouses() {
    $.get(baseUrl).then(res => {
      cb(res.data)
    })
  }
  loadHouses()

  //PUBLIC

  this.addHouse = function addHouse(house) {
    var newHouse = new House(house.imgUrl, house.year, house.bedrooms, house.bathrooms, house.levels, house.price, house.description)
    $.post(baseUrl, newHouse)
      .then(res => {
        loadHouses()
      })
  }

  this.deleteHouse = function deleteHouse(id) {
    $.ajax({
      method: 'DELETE',
      url: baseUrl + '/' + id
    }).then(res => {
      loadHouses()
    })
  }
  this.discountHouse = function discountHouse(id, price) {
    $.ajax({
      method: 'PUT',
      url: baseUrl + '/' + id,
      contentType: 'application/JSON',
      data: JSON.stringify({
        price: price * .9
      })
    }).then(res => {
      loadHouses()
    })
  }



}