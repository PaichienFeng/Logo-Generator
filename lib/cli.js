const inquirer = require("inquirer");
const colorNames = require("./color");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createDocument } = require('./document');



class CLI{
    constructor(){
        this.logoText='';
        this.shapecolor='';
        this.textColor='';
        this.shape='';
    }

    runText(){
        return inquirer
         .prompt([
            {
                type:'input',
                name: 'text',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)'
            }
         ])
         .then(({text})=>{
           if(text.length>3){
            return this.runText()
           }else{
            this.logoText=text;
            console.log(this.logoText);
            return this.runTextColor();
           };
         })
         .catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
    }

    runTextColor(){
        return inquirer
         .prompt([
            {
                type:'input',
                name: 'textcolor',
                message:'Enter a text color.'
            }
         ])
         .then(({textcolor})=>{
            if(!colorNames.includes(textcolor)){
                return this.runTextColor()
            }else{
                this.textColor=textcolor;
                console.log(this.textColor);
                return this.runShape();
            }
         })
         .catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
    }

    runShape(){
        return inquirer
         .prompt([
            {
                type: 'list',
                message: 'Select a shape for the logo:',
                name: 'shape',
                choices: ['circle', 'square', 'triangle'],
            }
         ])
         .then(({shape})=>{
            this.shape=shape;
            return this.runShapeColor();
         })
         .catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
    }

    runShapeColor(){
        return inquirer
         .prompt([
            {
                type:'input',
                name: 'shapecolor',
                message:'Enter a shape color.'
            }
         ])
         .then(({shapecolor})=>{
            if(!colorNames.includes(shapecolor)){
                return this.runShapeColor()
            }else{
                this.shapecolor=shapecolor;
                console.log(this.shapecolor);
                return writeFile(
                    join(__dirname, '..', 'examples', `${this.shape}.svg`),
                    createDocument(this.shape)
                );
            }
         })
         .catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
    }

}


module.exports=CLI