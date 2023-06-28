class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    dogCardHtml(){
        const { name, age, bio } = this
        return `           
                <h3 class="name-age">${name}, ${age}</h3>
                <p class="bio">${bio}</p>`
    }
   
   
   likeNopeHtml(){
       if(this.hasBeenSwiped){
           if(this.hasBeenLiked){
               return `<img src="./images/badge-like.png">`
           }
           else{
               return`<img src="./images/badge-nope.png">`
           }
       }else{
               return ""
           }
   }
   
   
   
    dogHtml(){
        return ` 
            <div class="dog-bio" id="dog-bio">
                 ${this.dogCardHtml()} 
            </div> 
               <div class="dog-badge" id="dog-badge">
                 ${this.likeNopeHtml()} 
            </div> 
        `
    } 
    
}

export default Dog
