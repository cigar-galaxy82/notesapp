//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is DEXTER MORGON !!!!!.')
//this allow us to some data to the file we have mentioned 
//fs.appendFileSync('notes.txt',' MY NAME IS SLIM SHADY')
//LINE 1 TO 5 FROM THE VIDEO 2

//const add = require('./util.js')
//const name = 'Harry'
//const sum = add(4,-2)
//console.log(sum)
//  const print = require('./nodes.js')
//  const temp = print();
//  console.log(temp)
// LINE 7 TO 14 FROM THE VIDEO 3

// const validator = require('validator')
// const getNotes = require('./nodes.js')
// const msg = getNotes()
// console.log(msg)
// //console.log(validator.isEmail('ass@hole.com'))
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))
//LINE 16 TO 22 FROM THE VIDEO 4

//   const getNotes = require('./nodes.js')
//  const chalk = require('chalk')
//  const log = console.log;
//  const msg = getNotes()
//   console.log(msg)
//   const greet = chalk.bold.inverse.green('HARRY POTTER !')
//  console.log(chalk.green('HARRY POTTER !'))
//  console.log(greet)
//LINE 24 TO 32 FROM THE VIDEO 5

//VIDEO 6 we intalled nodemon

//FOLDER 5

const Notes = require('./nodes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//Customize yargs version 
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{//builder is a object on which we can define the option we want this command to support
        title:{
            describe:'Note title',//describe or something else can be used 
            demandOption:true,//only demandOption if not results are different
            type:'string'//specifying thue type of input we want
        },
         body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
         }
    },
     handler(argv){    //handler has to be used if not doestnt work
        //console.log('Adding a new note', argv)
        //console.log('Title ' + argv.title)
        //console.log('Body ' + argv.body)
        Notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{//builder or some different name can be used
        title:{
            describe:'Removing note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        Notes.removeNotes(argv.title)
        //console.log(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    //describe:'list all the notes',
    handler(){
        Notes.listNotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read all the notes',
    builder:{
            title:{
                describe:'Removing note title',
                demandOption:true,
                type:'string'
            }
    },
    handler(argv){
        Notes.readNotes(argv.title)
    }
})

yargs.parse()//does the same as yargs.argv but without printing it out 
//console.log(process.argv)
//console.log(yargs.argv)//TO TELL YARGS TO DO ITS THING AND PARSE THE ARGUMENTS GIVEN
//console.log(getNotes())