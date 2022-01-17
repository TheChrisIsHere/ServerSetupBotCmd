callback: async ({ message, args }) => {

    const msg = await message.channel.send("Setting A Basic Server...")


    //Code
 //time in milliseconds
     await msg.edit("Creating Roles...")
//Creating Roles

message.guild.roles.create({
    name: 'Admin',
    position: 5,
    permissions: ["ADMINISTRATOR"],
})
message.guild.roles.create({
    name: 'Head Mod',
    position: 4,
})
message.guild.roles.create({
    name: 'Mod',
    position: 3,
    permissions: ["ADMINISTRATOR"],
})
message.guild.roles.create({
    name: 'Staff',
    position: 2,
    permissions: ["ADMINISTRATOR"],
})
await message.guild.roles.create({
    name: 'Members',
    position: 1,
    // permissions: ["ADMINISTRATOR"],
})





  await msg.edit("Created Basic Roles")

 
    //Code
  //time in milliseconds


const admin = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'admin')


const hmod = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'head mod')

const mod = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'mod')

const staff = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'staff')

const members = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'members')

    //Code
  //time in milliseconds

await msg.edit("Creating Welcome Channels...")
// Creating Channels
    await message.guild.channels.create('Welcome And Bye-Bye ', {
                type: 'GUILD_CATEGORY',
                position: 0,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
            }).then(cat => {
              message.guild.channels.create('👋 || Welcome ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                      id: members.id,
                      allow: ['VIEW_CHANNEL'],
                      deny: ['SEND_MESSAGES'],
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('🥺 || Bye-Bye ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                      id: members.id,
                      allow: ['VIEW_CHANNEL'],
                      deny: ['SEND_MESSAGES'],
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('📝 || Rules ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                      id: members.id,
                      allow: ['VIEW_CHANNEL'],
                      deny: ['SEND_MESSAGES'],
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('0')
                dog.send(`> **Server Rules**
Aside from these rules, if you think something is bad but it's not in the rules, don't do it. Have some decency lol.
**1. Follow Discord TOS.
2. Be 13 years or older. It's in the Discord TOS anyways.
3. Don't discriminate. I'd assume it's common decency, but no homophobia, racism, sexism, transphobia, etc.
4. Don't use slurs or hate speech specifically directed towards someone.
5. Don't cause large-scale arguments. It's okay to talk about politics or controversial stuff, but don't turn it into a massive argument.
6. Don't mass ping admins, Fyr, or server members if people don't respond within one ping, they're probably busy.
7. Don't post NSFW. Looking at you, horny people.
8. Keep stuff into their respective channels, especially advertising.
9. Please, use common sense. Don't bring negativity to the server, we are just trying to have a good time.
10. Don't try to bypass the rules with alts or leaving and coming back. That only makes it worse for you.
11. Don't post epileptic gifs/photos or sound-sensitive things.
12. Only send links in #vip-chat, #links. #videos and #self-advertising.
13. Only check your level in #levels.
14. This is an ENGLISH-ONLY Server.
15. Just be PG-13. Anything that goes beyond that results in a warn.
15. And Most Important, No BlazeVerse Retards Allowed**`)
              })

msg.edit("Created Welcome Category")
              
            })


            await message.channel.send("Creating Dashboard Channels...")
              message.guild.channels.create('Dashboard ', {
                type: 'GUILD_CATEGORY',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
            }).then(cat => {
              message.guild.channels.create('📢 || Announcements ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                      id: members.id,
                      allow: ['VIEW_CHANNEL'],
                      deny: ['SEND_MESSAGES'],
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
            
              message.guild.channels.create('✨ || Events ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                      id: members.id,
                      allow: ['VIEW_CHANNEL'],
                      deny: ['SEND_MESSAGES'],
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                 cat.setPosition('1')
msg.edit("Created Dashboard Category")

              })
              })
await msg.edit("Creating General Channels...")
              message.guild.channels.create('General ', {
                type: 'GUILD_CATEGORY',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    }]
            }).then(cat => {
              message.guild.channels.create('💬 || General-Chat ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('📸 || Media-Share ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('2')
              })

              message.guild.channels.create('🔊 || General-VC ', {
                type: 'GUILD_VOICE',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
             }] 
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('2')
              })
              })

              await msg.edit("Created General Category...")
await msg.edit("Creating Music Channels...")
              message.guild.channels.create('Music ', {
                type: 'GUILD_CATEGORY',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    }]
            }).then(cat => {
              message.guild.channels.create('🎵 || Music-Commands ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('🎶 || Music-VC ', {
                type: 'GUILD_VOICE',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('3')
              })
            })



await msg.edit("Created Music Category")




await msg.edit("Creating Bots Channels...")
              message.guild.channels.create('Bots ', {
                type: 'GUILD_CATEGORY',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    }]
            }).then(cat => {
              message.guild.channels.create('🤖 || Bot-Commands ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('❗ || Levels ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('4')
              })
              
            })
            await msg.edit("Created Bots Category")
await msg.edit("Creating Extras Channels...")


message.guild.channels.create('Extras ', {
                type: 'GUILD_CATEGORY',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    }]
            }).then(cat => {
              message.guild.channels.create('💩 || Spamming ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                // cat.setPosition('0')
              })
              message.guild.channels.create('📺 || Self-Promo ', {
                type: 'GUILD_TEXT',
                parent: cat.parentID,
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
                    }]
              }).then(dog => {
                dog.setParent(cat.id)
                cat.setPosition('5')
              })
              
            })

            await msg.edit("Created Extras Category")

            await msg.edit("Assigning All Roles To Channels...")
setTimeout(function(){ 
    //Code
 }, 5000); //time in milliseconds
            message.channel.send("All Done!")
setTimeout(function(){ 
    //Code
 }, 5000); //time in milliseconds
            message.channel.send("**Now You May Wanna Invite Some Bots \n  Invite YeagaBot For Music Bot From -\n  https://discord.com/api/oauth2/authorize?client_id=888078499376680992&permissions=8&scope=bot \n \n Invite Historia For Moderation And Fun Bot Even With Chat Bot Feature From - \n https://discord.com/api/oauth2/authorize?client_id=924906471160971306&permissions=8&scope=bot%20applications.commands**")

 //time in milliseconds
            message.channel.send("Also Assign Roles To Anyone From Settings And Delete These Starting General VCs And Channels!!**")

              


              

                
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }
