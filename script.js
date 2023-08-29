//task5: unique types, stored in a array//

//creating a set for different types of data
let differentType = new Set()
//going through loop for each object to check types
function getData(value){ 
   differentType.add(value.type[0])
}
pokedex.forEach(getData)
let differentTypeArray = [...differentType]
differentTypeArray.sort()

/**Task 6:
 * total HP and total Attack
 * Cnumber of Pokémon with that time
 * total HP and total Attack with that type
 */
//creating section which will hold navigation
let nav = document.createElement("div")
for(let i=0; i < differentTypeArray.length; i++){
   let divValue = document.createElement("a")  
   divValue.textContent = differentTypeArray[i]
   divValue.setAttribute("class", "anchorValue")
   divValue.setAttribute("href", `#${differentTypeArray[i]}`)
   nav.appendChild(divValue)
}
nav.setAttribute("class", "navigation")
document.body.appendChild(nav)

//section 2 of task 6//
/* get the total number of each type inside pokedex */
//Type counter will contain the total amount per type
//We are using this later
function getTypeCounterNum(pokeType){
   let typeCounter =0
   pokedex.forEach((valueObj)=>{
      if(valueObj.type[0] === pokeType || valueObj.type[1] === pokeType  ){
         typeCounter++
      }
   
   })
   return typeCounter
}
 
function getEachTypeData(pokiType){
   let getEachTypeArray =[]
   pokedex.forEach((value)=>{
      let pokiName = value.name
      let pokiHP = value.base.HP
      let pokiAttack = value.base.Attack
      let pokiDefense = value.base.Defense
      let pokiSpecAttack = value.base["Sp. Attack"]
      let pokiSpecDefence = value.base["Sp. Defense"]
     let  pokiSpeed = value.base.Speed
      let pokiUrl = value.url
      let pokiImage = value.sprite
      
   if(value.type[0] === pokiType|| value.type[1] === pokiType){
      getEachTypeArray.push([pokiName, pokiImage, pokiUrl,  pokiHP,pokiDefense,pokiSpecDefence, pokiAttack,  pokiSpecAttack,  pokiSpeed] )
   }
   })
let sortedgetEachTypeArray = getEachTypeArray.sort((a, b)=>{
return a[0] > b[0] ?1:-1
})
return sortedgetEachTypeArray
}



//Creating a function that will get total hp and attack per type
function hpAttack(pokeType){
   let totalMessage =``;
   let hpNum = 0
   let attackNum = 0
   pokedex.forEach((objValue)=>{
      if(objValue.type[0] === pokeType || objValue.type[1] === pokeType){
         if(differentTypeArray.includes(objValue.type[0]) ||differentTypeArray.includes(objValue.type[1]) ){
            hpNum += objValue.base.HP
            attackNum+= objValue.base.Attack
         }
      }
   })
   totalMessage = `Total HP: ${hpNum} | Total Attck: ${attackNum}`
   return totalMessage
}



function createEverything(){

   for(let i =0; i<differentTypeArray.length; i++){
      let totalTypeCount = getTypeCounterNum(differentTypeArray[i])
      let totalPointsNum = hpAttack(differentTypeArray[i])


      //Creating the type heading and paragraph and anchor
      let pokiHeader = document.createElement("h1")
      pokiHeader.textContent= `${differentTypeArray[i]} (${totalTypeCount})`
      pokiHeader.setAttribute("class", "pokiHead")
      pokiHeader.setAttribute("id", `${differentTypeArray[i]}`)
      let pokiPara = document.createElement("p")
      pokiPara.textContent= totalPointsNum
      pokiPara.setAttribute("class", "pokiParagraph")
      let pokiTop= document.createElement("a")
      pokiTop.textContent= "Back to Top"
      pokiTop.setAttribute("href", "#mainHeader")
      pokiTop.setAttribute("class", "backTop")
      
      // creating the container that holds every poke of its own type
      let containerEveryPoke = document.createElement("div")
      containerEveryPoke.setAttribute("class", "containerPoke") 
      let innerSection = document.createElement("div")
      innerSection.setAttribute("class", "middle")

   //getting the values for each pokemon
    let individualPokimon =  getEachTypeData(differentTypeArray[i])

    individualPokimon.map((value)=>
    value
    ).forEach((obj)=>{

         // creating the container that holds each pokemon
         let containerEachPoke = document.createElement("div")
         containerEachPoke.setAttribute("class", "eachPoke")
   let pokiName = document.createElement("p")
   let pokiImage = document.createElement("img")
   let imgContainer = document.createElement("a")
   let pokiHP = document.createElement("p")
   let pokiDefense = document.createElement("p")
   let pokiSpecDefence = document.createElement("p")
   let pokiAttack = document.createElement("p")
   let pokiSpecAttack = document.createElement("p")
   let pokiSpeed = document.createElement("p") 
   //--------------------------------------
   pokiName=obj[0]
   pokiImage.setAttribute("src", obj[1])
   imgContainer.appendChild(pokiImage)
   imgContainer.setAttribute("href", obj[2])
   imgContainer.setAttribute("target", "_blank")
   pokiHP.textContent = `HP: ${obj[3]}`
   pokiDefense.textContent = `Defense: ${obj[4]}`
   pokiSpecDefence.textContent = `SP.Defense: ${obj[5]}`
   pokiAttack.textContent = `Attack: ${obj[6]}`
   pokiSpecAttack.textContent = `SP.Attack: ${obj[7]}`
   pokiSpeed.textContent = `Speed: ${obj[8]}`
   containerEachPoke.append(pokiName, imgContainer, pokiHP, pokiDefense, pokiSpecDefence, pokiAttack, pokiSpecAttack, pokiSpeed)
   innerSection.appendChild(containerEachPoke)
    })  
  containerEveryPoke.append(pokiHeader, pokiPara, pokiTop, innerSection)
  document.body.appendChild(containerEveryPoke)
   }
   
}
createEverything()