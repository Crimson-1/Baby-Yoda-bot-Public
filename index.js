const Discord = require('discord.js')
const bot = new Discord.Client();
const PREFIX = '!';
const PREFIX2 = '@';
const token = 'NzYyMDkwMTA3ODM0MzM1Mjg0.X3kFuA.hREQO35YQVpUPoL9qeGwGec-xzM';
const client = new Discord.Client();
bot.login(token);




const cheerio = require('cheerio');
const request = require('request');

bot.on('message', function(message) {
 let args = message.content.substring(PREFIX.length).split(" ");

 switch(args[0]){
    case 'BYM':
    number = 25;  
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["./Baby Yoda Memes/" + imageNumber + ".jpg"]} )
            
    
           
            
    bot.on('message', function(message) {
        let args = message.content.substring(PREFIX.length).split(" ");
             switch(args[0]){
                 case 'someone':
                 Someone = userArray[randomNumber].id 
                 message.channel.send ("@Someone");
                  break;





         bot.on('ready', () => {
         console.log('Baby yoda time');
    })
}})}})
