const fs = require('fs')
const chalk = require('chalk')


const addNote = (title,body)=>{
      const notes = loadNotes()
      //const duplicateNotes = notes.filter((note) => note.title === title)
      const duplicateNote = notes.find((note) => note.title === title)
      // const duplicateNotes = notes.filter((note)=>{
      //    return note.title === title
      // })//i guess used to check if notes given to are already in the nodes.json file or not
      
      debugger

      
      if(!duplicateNote)//if the notes added does'nt exist then push the notes and save them in the  json file
      {
         notes.push({
            title:title,
            body:body
         })
        saveNotes(notes)
        console.log(chalk.green('NEW NOTE ADDED'))
      }else{
         console.log(chalk.red('NOTE TITLE TAKEN'))
      } 
      
     //console.log(notes)
}

const removeNotes = (title)=>{
   const notes = loadNotes()
   const notesToKeep = notes.filter((note) => note.title !== title)

   // const notesToKeep = notes.filter((note)=>{//i guess this loops through each notes and then if title entered does'nt exist then keeps it
   //    return note.title !== title//return true when not a match
   // })

   if(notes.length > notesToKeep.length)
   {
      console.log(chalk.inverse.green('NOTE IS REMOVED'))
      saveNotes(notesToKeep)
   }else{
      console.log(chalk.inverse.red('NO NOTE FOUND'))
   }
}

const saveNotes = (notes)=>{
      const dataJSON = JSON.stringify(notes)
      fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () => {
     const notes = loadNotes()
     console.log(chalk.blue('YOUR NOTES'))
     //console.log(notes)this gives the output as an array
     notes.forEach((note) => {
        console.log(note.title)
     })
}

const readNotes = (title) =>{
   const notes = loadNotes();
   const Read = notes.find((note) => note.title === title)
   if(Read)
   {
      console.log(chalk.inverse(Read.title))
      console.log(Read.body)
   }else{
      console.log(chalk.bgGreenBright('NO NOTE FOUND ?'))
   }

}


const remove = (notes)=>
{
   const dJSON = JSON.stringify(notes)
   
}
const loadNotes = ()=>{//this gives the json files in the notes.json file
   try{
   const dataBuffer = fs.readFileSync('notes.json')//Read the contents in the notes.json
   const dataJSON = dataBuffer.toString()//buffer convert to string 
   return JSON.parse(dataJSON)
   }catch(e)
   {
      //console.log('I LIKE BIG BUTT AND I AM NONT GONNA LIE OTHER BROTHER WONT DENY')
      return []
   }
}
module.exports = {
   addNote:addNote,
   removeNotes:removeNotes,
   listNotes:listNotes,
   readNotes:readNotes
}