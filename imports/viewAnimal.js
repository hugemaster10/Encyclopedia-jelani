// import * as bootstrap from 'bootstrap'

Template.viewAnimal.helpers({
    AnimalArray() {
        return Animaldb.find()
    }
})


Template.viewAnimal.events({

        'click .js-delete'(){
            
            listID = document.querySelector('#viewModal');
            console.debug("deleting", listID._id),
            Animaldb.remove({ "_id": listID._id })
        }
    })


   

 
// , editID._id)
        // Animaldb.remove({ "_id": editID._id })