function HouseController(){
    
      //PRIVATE
      var houseService = new HouseService(drawHouses)
    
      function drawHouses(houses){
        var template = ''
        for (let i = 0; i < houses.length; i++) {
          const house = houses[i];
          template += `
          <div>
            <img src="${house.imgUrl}" alt="">
            <h3>Rooms: ${house.bedrooms}</h3>
            <h3>Bath: ${house.bathrooms}</h3>
            <h3>Year Built: ${house.year}</h3>
            <h3>Levels: ${house.levels}</h3>
            <h3>Price: ${house.price}</h3>
            <button onclick="app.controllers.houseController.discountHouse('${house._id}',${house.price})">Discount</button>
            <h3>Description: ${house.description}</h3>
            <button onclick="app.controllers.houseController.deleteHouse('${house._id}')">Delete</button>
          </div>
        ` 
        }
        document.getElementById('houses').innerHTML = template
      }
    
    
      //PUBLIC
      this.addHouse = function addHouse(e){
        e.preventDefault();
        var data = e.target
        var newHouse = {
          img: data.img.value,
          bedrooms: data.bedrooms.value,
          bathrooms: data.bathrooms.value,
          levels: data.levels.value,
          year: data.year.value,
          price: data.price.value,
          description: data.description.value
        }
        houseService.addHouse(newHouse)
        data.reset()
      }
    
      this.deleteHouse = function deleteHouse(id) {
        houseService.deleteHouse(id)
      }
      this.discountHouse = function discountHouse(id, price){
        houseService.discountHouse(id, price)
      }
    
    
    
    
    }