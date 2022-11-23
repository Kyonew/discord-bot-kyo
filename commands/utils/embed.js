const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js');
const { MessageEmbed, ReactionCollector } = require('discord.js');
//let embedFinal = new MessageEmbed()
//let embedForEdit = new MessageEmbed() 

module.exports.run = async (client, message, args) => {
   
 //   let embedBeforeEdit = new MessageEmbed(). setDescription("**")
    let embedBeforeEdit = new Discord.MessageEmbed()
    .setDescription('** **')
    let msgEmbedForEditing = await message.channel.send(embedBeforeEdit)
    
    const msgawait = await message.channel.send('Veuillez patienter la fin de l\'ajout des réactions.')

    await Promise.all(['✏️','💬','🕵️','🔻','🔳','🕙','🖼️','🌐','🔵','↩️','✅'].map(r => msgawait.react(r)));
    await msgawait.edit(`:pencil2: Modifier le titre\n:speech_balloon: Modifier la description\n:detective: Modifier l'auteur\n:small_red_triangle_down: Modifier le footer\n:white_square_button: Modifier le thumbnail\n:clock10: Ajouter un timestamp\n:frame_photo: Modifier l'image\n:globe_with_meridians: Modifier l'url\n:blue_circle: Modifier la couleur\n:leftwards_arrow_with_hook: Ajouter un field\n:white_check_mark: Envoyer l'embed`)

    const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot;
    const filterMessage = (m) => m.author.id===message.author.id&&!m.author.bot;
    const collectorReaction = await new ReactionCollector(msgawait, filterReaction);
    collectorReaction.on('collect', async reaction => {
        switch(reaction._emoji.name){
            case '✏️':
                let msgQuestionTitle = await message.channel.send('Quel est le **titre** de l\'embed ?')
                const title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionTitle.delete();
                embedBeforeEdit.setTitle(title);
                msgEmbedForEditing.edit(embedBeforeEdit)
            break;
            case '💬':
                const msgQuestionDescription = await message.channel.send('Quelle est la **description** de l\'embed ?')
                const description = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionDescription.delete();
                embedBeforeEdit.setDescription(description);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case "🕵️":
                let embedQuestion = new MessageEmbed()
                .setTitle("Quel auteur pour votre embed ?")
                .setDescription("Vous pouvez mentionnez un utilisateur pour mettre son pseudo et sa photo de profil")

                const msgAuteur = await message.channel.send(embedQuestion);
                let auteur;
                const rowAuteur = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()

                if (rowAuteur.mentions.users.size <= 0)
                {
                    auteur = rowAuteur.content;
                    embedQuestion.setTitle("Voulez-ajouter une icon pour l'auteur ?")
                    .setDescription("Pour ajouter une image envoyer le lien, sinon entrer `non`/`no`");

                    const msgAuteurImg = await message.channel.send(embedQuestion);
                    const auteurImg = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();

                    if (!auteurImg.content.includes("http") || !auteurImg.content.includes("https")) return message.channel.send("Le lien est invalide ou vous avez choisi de ne pas ajouter d'image").then(m=> m.delete({timeout: 10000}));

                    msgAuteurImg.delete();
                    auteurImg.delete({timeout: 5000});
                    
                    embedBeforeEdit.setAuthor(auteur, auteurImg.content);
                }
                if (rowAuteur.mentions.users.size > 0) 
                {
                    auteur = rowAuteur.mentions.users.first();

                    embedBeforeEdit.setAuthor(auteur.username, auteur.displayAvatarURL());
                }

                msgAuteur.delete();
                rowAuteur.delete({timeout: 5000})

                msgEmbedForEditing.edit(embedBeforeEdit)
            break;

            case '🔻':
                const msgQuestionFooter = await message.channel.send('Quel est le **footer** de l\'embed ?')
                const footer = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionFooter.delete();
                embedBeforeEdit.setFooter(footer);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🔳':
                const msgQuestionThumbnail = await message.channel.send('Quelle est le **thumbnail** de l\'embed ?')
                const thumbnail = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                if(!thumbnail.includes('http') || !thumbnail.includes('https')) return message.channel.send('Je n\'arrive pas a ajouter le thumbnail !')
                message.delete();
                msgQuestionThumbnail.delete();
                embedBeforeEdit.setThumbnail(thumbnail);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🕙':
            embedBeforeEdit.setTimestamp();
            msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🖼️':
                const msgQuestionImage = await message.channel.send('Quelle est **l\'image** de l\'embed ?')
                const image = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                if(!image.includes('http') || !image.includes('https')) return message.channel.send('Je n\'arrive pas a ajouter l\'image !')
                msgQuestionImage.delete();
                embedBeforeEdit.setImage(image);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🌐':
                const msgQuestionLien = await message.channel.send('Quelle est le **lien** de l\'embed ?')
                const lien = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionLien.delete();
                embedBeforeEdit.setURL(lien);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🔵':
                const msgQuestionCouleur = await message.channel.send('Quelle est la **couleur** de l\'embed ?')
                const couleur = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionCouleur.delete();
                embedBeforeEdit.setColor(couleur);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '↩️':
                const msgQuestionField = await message.channel.send('Quel est le **titre** du field ?')
                const field = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionField.delete();
                const msgQuestionField1 = await message.channel.send('Quelle est la **description** du field ?')
                const field1 = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionField1.delete();
                embedBeforeEdit.addField(field, field1);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '✅':
                const msgQuestionChannel = await message.channel.send('Dans quel **salon** doit être envoyer l\'embed ?')
                const channel = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content;
                message.delete();
                msgQuestionChannel.delete();
                const schannel = channel.slice(2, -1)
                if(!message.guild.channels.cache.get(schannel)) return message.channel.send('Aucun salon trouvé merci de donner l\'id.')
                else message.guild.channels.cache.get(schannel).send(embedBeforeEdit);
            break;
        }
    })
}

module.exports.help = MESSAGES.COMMANDS.UTILS.EMBEDBUILDER;