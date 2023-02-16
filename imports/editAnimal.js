Template.editAnimal.events({
    'click .js-editAnimal'() {
        let eId = document.querySelector(".editID").value
        let AnimalName = document.querySelector('.editanimal').value
        let Species = document.querySelector('.editspecies').value
        console.info("saving edits", eId)
        Animaldb.update(
            { _id: eId },
            {
                $set: {
                    'Sname': Species,
                    'Aname': AnimalName,
                }
            }
        )
    }
})