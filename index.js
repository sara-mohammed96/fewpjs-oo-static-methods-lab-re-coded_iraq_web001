class Formatter {
  //add static methods here
 
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  static sanitize(string){
   return string.replace(/[^A-Za-z0-9-'-' ']+/g, '')
  }
  
  static titleize(string){
<<<<<<< HEAD
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return this.capitalize(string.split(' ').map(word => words.includes(word) ? word : this.capitalize(word)).join(' '))
=======
    return string.split(' ').map(x=>string.replace(/the/-/a/-/but/-/of/-/and/+/g, '') ,this.capitalize(string));
>>>>>>> 3d53f647d380a598d7e7bad9f86b102c1c1a2ac0
  }
}