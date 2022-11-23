const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            SETPREFIX: {
                name: "setprefix",
                aliases: ['setprefix'],
                category: 'admin',
                description: "Modifier le préfixe.",
                cooldown: 3,
                usage: '<new_prefix>',
                isUserAdmin: false,
                permissions: true,
                args: true 
            },

            EVAL: {
                name: "eval",
                aliases: ['eval'],
                category: 'admin',
                description: "Renvoie un code javascript testé",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            CONFIGLOGS: {
                name: "configlogs",
                aliases: ['configlogs', 'configlog', 'config logs'],
                category: 'admin',
                description: "Activer ou désactiver les logs.",
                cooldown: 3,
                usage: 'Menu pour activer, désactiver ou changer le salon des logs',
                isUserAdmin: false,
                permissions: true,
                args: false 
            },

            CONFIGWEL: {
                name: "configwel",
                aliases: ['configwel', 'configwelcome', 'config welcome'],
                category: 'admin',
                description: "Paramétrer l'image de bienvenue",
                cooldown: 3,
                usage: 'Menu pour activer, désactiver ou changer le salon ou l\'image de bienvenue.',
                isUserAdmin: false,
                permissions: true,
                args: false 
            },
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'admin',
                description: "Ouvre le menu de configuration.",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            ADDROLEMEMBER: {
                name: "addrolemember",
                aliases: [''],
                category: '',
                description: "",
                cooldown: 0,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            LEAVE: {
                name: "leaveserv",
                aliases: [''],
                category: '',
                description: "",
                cooldown: 0,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            SERVERLIST: {
                name: "serverlist",
                aliases: [''],
                category: '',
                description: "",
                cooldown: 0,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: true
            }
            
        },
        FUN: {
            OBALL: {
                name: "8ball",
                aliases: ['8ball', '8b'],
                category: 'fun',
                description: "Posez une question à Kyo.",
                cooldown: 3,
                usage: '<question>',
                isUserAdmin: false,
                permissions: true,
                args: false
            },

            HUG: {
                name: "hug",
                aliases: ['hug'],
                category: 'fun',
                description: "Faire un calîn à quelqu'un.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            KISS: {
                name: "kiss",
                aliases: ['kiss', 'bisous', 'bisou'],
                category: 'fun',
                description: "Faire un bisous à quelqu'un.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            POKE: {
                name: "poke",
                aliases: ['poke'],
                category: 'fun',
                description: "Poke quelqu'un.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            SAY: {
                name: "say",
                aliases: ['say', 'repeat'],
                category: 'fun',
                description: "Faire répépter à Kyo un message",
                cooldown: 4,
                usage: '<message>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            SLAP: {
                name: "slap",
                aliases: ['slap', 'claque'],
                category: 'fun',
                description: "Donnez une claque à quelqu'un.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            TICKLE: {
                name: "tickle",
                aliases: ['tickle', 'chatouille'],
                category: 'fun',
                description: "Faire des chatouilles à quelqu'un.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        INFO: {
            SERVERINFO: {
                name: "serverinfo",
                aliases: ['serverinfo', 'si'],
                category: 'info',
                description: "Informations concernant le serveur.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            USERINFO: {
                name: "userinfo",
                aliases: ['userinfo', 'ui'],
                category: 'info',
                description: "Informations concernant votre compte.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            VOCAL: {
                name: "vocal",
                aliases: ['vocal'],
                category: 'info',
                description: "Affiche le nombre de personne actuellement en vocal sur le serveur.",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            CHANNELINFO: {
                name: "channelinfo",
                aliases: ['channelinfo', 'ci'],
                category: 'info',
                description: "Informations concernant un salon.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            COVID: {
                name: "covid",
                aliases: ['covid', 'corona'],
                category: 'info',
                description: "Informations concernant la covid-19.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BOTINFO: {
                name: "botinfo",
                aliases: ['botinfo', 'infobot'],
                category: 'info',
                description: "Informations concernant Kyo.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            ROLEINFO: {
                name: "roleinfo",
                aliases: ['roleinfo', 'ri'],
                category: 'info',
                description: "Informations un rôle.",
                cooldown: 5,
                usage: '<role>',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        NSFW: {
            HDK: {
                name: "nsfw4k",
                aliases: ['nsfw4k'],
                category: 'nsfw',
                description: "Envoie une image mature en 4k.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            ANAL: {
                name: "anal",
                aliases: ['anal'],
                category: 'nsfw',
                description: "Envoie une image ou gif d'une anal.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            ASS: {
                name: "ass",
                aliases: ['ass', 'cul', 'fiak'],
                category: 'nsfw',
                description: "Envoie une image d'un fessier.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BOOBS: {
                name: "boobs",
                aliases: ['boobs', 'seins'],
                category: 'nsfw',
                description: "Envoie une image de seins.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BOOBSBOMB: {
                name: "boobsbomb",
                aliases: ['boobsbomb', 'bombboobs'],
                category: 'nsfw',
                description: "Envoie 5 images de seins d'un coup.",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            GIF: {
                name: "nsfwgif",
                aliases: ['nsfwgif'],
                category: 'nsfw',
                description: "Envoie un gif mature.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            HENTAI: {
                name: "hentai",
                aliases: ['hentai'],
                category: 'nsfw',
                description: "Envoie une image d'un hentai.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            HENTAIBOMB: {
                name: "hentaibomb",
                aliases: ['hentaibomb', 'bombhentai'],
                category: 'nsfw',
                description: "Envoie 5 images d'hentai d'un coup.",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            PUSSY: {
                name: "pussy",
                aliases: ['pussy', 'chatte', 'vagin'],
                category: 'nsfw',
                description: "Envoie une image d'un vagin.",
                cooldown: 2,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            
            FUCK: {
                name: "fuck",
                aliases: ['fuck', 'baise'],
                category: 'nsfw',
                description: "...",
                cooldown: 2,
                usage: '<command_name>',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        UTILS: {
            AVATAR: {
                name: "avatar",
                aliases: ['avatar', 'pdp', 'pp', 'pic'],
                category: 'utils',
                description: "Envoie la photo de profil d'un utilisateur.",
                cooldown: 3,
                usage: '<member>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            DM: {
                name: "dm",
                aliases: ['mp', 'dm', 'pv'],
                category: 'utils',
                description: "Envoyer un message privé à un utilisateur.",
                cooldown: 5,
                usage: '<member> <message>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            PING: {
                name: "ping",
                aliases: ['ping'],
                category: 'utils',
                description: "Renvoie pong!",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            HELP: {
                name: "help",
                aliases: ['help', 'aide'],
                category: 'utils',
                description: "Affiche la commande d'aide",
                cooldown: 3,
                usage: '<command_name>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            EMBEDBUILDER: {
                name: "embed",
                aliases: ['newembed', 'mkembed', 'embedbuilder'],
                category: 'utils',
                description: "Renvoie pong!",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            METEO: {
                name: "meteo",
                aliases: ['meteo', 'temps'],
                category: 'utils',
                description: "Affiche la météo d'une ville.",
                cooldown: 3,
                usage: '<city>',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            INVITE: {
                name: "invite",
                aliases: ['invite'],
                category: 'utils',
                description: "Renvoie le lien d'invitation de Kyo.",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            SUGGEST: {
                name: "suggest",
                aliases: ['suggest'],
                category: 'utils',
                description: "Permet de créer une suggestion sous forme de sondage.",
                cooldown: 3,
                usage: '<suggestion>',
                isUserAdmin: false,
                permissions: false,
                args: true
            }
        },
        MODERATION: {
            CLEAR: {
                name: "clear",
                aliases: ['clear', 'delete', 'purge'],
                category: 'moderation',
                description: "Efface un nombre de message entre 1 et 99",
                cooldown: 5,
                usage: '<nbr_messages>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            BAN: {
                name: "ban",
                aliases: ['ban'],
                category: 'moderation',
                description: "Ban un utilisateur mentionné.",
                cooldown: 5,
                usage: '<user> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            KICK: {
                name: "kick",
                aliases: ['kick'],
                category: 'moderation',
                description: "Kick un utilisateur mentionné.",
                cooldown: 5,
                usage: '<user> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            MUTE: {
                name: "mute",
                aliases: ['mute'],
                category: 'moderation',
                description: "Mute textuellement un utilisateur mentionné pendant un temps donné.",
                cooldown: 5,
                usage: '<user> <time> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            UNMUTE: {
                name: "unmute",
                aliases: ['unmute', 'demute'],
                category: 'moderation',
                description: "Unmute (textuel) un utilisateur mentionné.",
                cooldown: 5,
                usage: '<user> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            UNBAN: {
                name: "unban",
                aliases: ['unban', 'deban'],
                category: 'moderation',
                description: "Unban un utilisateur banni.",
                cooldown: 5,
                usage: '<user_id> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            TEMPBAN: {
                name: "tempban",
                aliases: ['tempban'],
                category: 'moderation',
                description: "Ban temporairement un utilisateur mentionné pendant un temps mentionné.",
                cooldown: 5,
                usage: '<user> <time> <reason>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            NUKE: {
                name: "nuke",
                aliases: ['nuke', 'clearchannel', 'clearall'],
                category: 'moderation',
                description: "Efface tous les messages d'un channel.",
                cooldown: 5,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            }
        },

        IMAGES: {
            CRUSH: {
                name: "crush",
                aliases: ['crush'],
                category: 'images',
                description: "Génère une image crush",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            TRIGGERED: {
                name: "trigger",
                aliases: ['trigger', 'triggered'],
                category: 'images',
                description: "Génère une image trigger.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            WANTED: {
                name: "wanted",
                aliases: ['wanted'],
                category: 'images',
                description: "Génère une image wanted.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BATSLAP: {
                name: "batslap",
                aliases: ['batslap'],
                category: 'images',
                description: "Génère une image d'une batslap, aïe.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BRAZZERS: {
                name: "brazzers",
                aliases: ['brazzers'],
                category: 'images',
                description: "Génère une image avec le logo Brazzers.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            FIRE: {
                name: "fire",
                aliases: ['fire', 'bobfire'],
                category: 'images',
                description: "Génère une image de Bob l'éponge qui jette ton avatar au feu",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            GAY: {
                name: "gay",
                aliases: ['gay'],
                category: 'images',
                description: "Génère une image de ton avatar... en mode gay.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            INSTA: {
                name: "insta",
                aliases: ['insta'],
                category: 'images',
                description: "Génère une image d'Instagram avec ton avatar.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            MISSIONPASSED: {
                name: "missionpassed",
                aliases: ['missionpassed', 'respect+'],
                category: 'images',
                description: "Génère une image mission passed.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            PS4: {
                name: "ps4",
                aliases: ['ps4'],
                category: 'images',
                description: "Génère une image d'un jeu ps4 avec votre avatar.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            RIP: {
                name: "rip",
                aliases: ['rip'],
                category: 'images',
                description: "Génère une image d'une tombe avec votre avatar.",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            SCARY: {
                name: "scary",
                aliases: ['scary'],
                category: 'images',
                description: "Oula, vous faites peur...",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            WASTED: {
                name: "wasted",
                aliases: ['wasted'],
                category: 'images',
                description: "Vous êtes mort",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            VS: {
                name: "vs",
                aliases: ['vs', 'versus'],
                category: 'images',
                description: "Qui va gagner ?",
                cooldown: 5,
                usage: '<user>',
                isUserAdmin: false,
                permissions: false,
                args: false
            } 
        },

        GIVEAWAY: {
            END: {
                name: "end",
                aliases: ['end'],
                category: 'Giveaway',
                description: "Mettre fin à un givaway en cours.",
                cooldown: 3,
                usage: '<reward_name> or <ID_message>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            REROLL: {
                name: "reroll",
                aliases: ['reroll'],
                category: 'Giveaway',
                description: "Refaire le tirage d'un giveaway.",
                cooldown: 3,
                usage: '<reward_name> or <ID_message>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            START: {
                name: "start",
                aliases: ['start'],
                category: 'Giveaway',
                description: "Lancer un givaway.",
                cooldown: 3,
                usage: '<channel> <time>, <number_of_winners> <reward>',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            GIVHELP: {
                name: "givhelp",
                aliases: ['givehelp'],
                category: 'Giveaway',
                description: "Aide concernant les giveaways.",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;