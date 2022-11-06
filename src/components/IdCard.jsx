function IdCard () {

const idArr = [
    {lastName : "Doe", firstName : "John", gender:"male", height : 178, birth: "1992-07-14", picture:"https://randomuser.me/api/portraits/men/44.jpg"},
    {lastName:'Delores ', firstName:'Obrien', gender:'female', height: 172, birth: "1988-05-11", picture:"https://randomuser.me/api/portraits/women/44.jpg"}
]
    return (

        idArr.map((eachId)=>{


            return(

                <div className="cardId">
                    <div>
                    <img src={eachId.picture} alt="img" />
                    </div>
                    <div>
                       <h5>First name:{eachId.lastName} </h5>
                        <h5>Lasta name: {eachId.firstName}</h5>
                        <h5>Gender: {eachId.gender}</h5>
                        <h5>Height: {eachId.height}</h5>
                        <h5>Birth: {eachId.birth}</h5> 
                    </div>
                
                
                </div>
            )
        })
        

    )
}

export default IdCard