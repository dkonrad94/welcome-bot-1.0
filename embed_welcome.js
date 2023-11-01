const Discord = require("discord.js");
const fs = require('fs');
const YAML = require('js-yaml');
const config = YAML.load(fs.readFileSync('./config.json', 'utf8'))

const Canvas = require('canvas');
global.Image = Canvas.Image;

let welcomech = tempVars('welcome-channel');
let tag = tempVars("tag");
const canvas = Canvas.createCanvas(805, 200);

try {
    var status = config.Welcome.Embed.enabled;
} catch {
    var status = false;
}

const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');
    let fontSize = 48;
    do {
        context.font = `Bold ${fontSize -= 4.8}px Arial`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
};

async function welcome() {
    if (status == false) { } else if (tempVars("welcome-channel") == undefined) {
        await start();
    } else { }
}

if (true) {
    welcome();
}


// ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
// ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
// ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗      ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
// ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝      ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
// ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
// ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝                                                                                                                
async function start() {

    if (status) {

     const ctx = canvas.getContext('2d');
     const circle = await Canvas.loadImage('./addons/img/circle.png')
     const background = await Canvas.loadImage('./addons/img/welcome_bg.png');

     try {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        // ------------------------------------------------------------------------------------------------------------------------------------ \\
        // USER Kiírása \\
        // USER Kiírása \\
    
        // // Háttér box rajzolása
        // ctx.fillStyle = 'rgba(40, 40, 40, 0.6)'; // Áttetsző fehér háttér (0.6 az átlátszóság)
        // ctx.strokeStyle = '#ffffff'; // Keret színe
        // ctx.lineWidth = 0.8; // Keret vastagsága
        // ctx.beginPath();
        // const boxX = canvas.width / 1.6 - 120; // X koordináta a boxnak
        // const boxY = canvas.height / 2.85 - 55; // Y koordináta a boxnak
        // const boxWidth = 230; // A box szélessége
        // const boxHeight = 55; // A box magassága
        // const borderRadius = 15; // Kerekítés sugar
    
        // // Kerekített box rajzolása
        // ctx.moveTo(boxX + borderRadius, boxY);
        // ctx.lineTo(boxX + boxWidth - borderRadius, boxY);
        // ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + borderRadius);
        // ctx.lineTo(boxX + boxWidth, boxY + boxHeight - borderRadius);
        // ctx.quadraticCurveTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - borderRadius, boxY + boxHeight);
        // ctx.lineTo(boxX + borderRadius, boxY + boxHeight);
        // ctx.quadraticCurveTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - borderRadius);
        // ctx.lineTo(boxX, boxY + borderRadius);
        // ctx.quadraticCurveTo(boxX, boxY, boxX + borderRadius, boxY);
        // ctx.closePath();
    
        // ctx.fill(); // Háttér kitöltése
        // ctx.stroke(); // Keret rajzolása
    
        ctx.font = '40px Showcard Gothic';
        ctx.fillStyle = `${tempVars("config").Welcome.Embed.textcolor || "WHITE"}`;
        ctx.fillText(`WELCOME`, canvas.width / 2.0, canvas.height / 3.45);
    
        // ------------------------------------------------------------------------------------------------------------------------------------ \\
        // USER Kiírása \\
        // USER Kiírása \\
    
        // Háttér box rajzolása
        ctx.fillStyle = 'rgba(40, 40, 40, 0.6)'; // Áttetsző fehér háttér (0.6 az átlátszóság)
        ctx.strokeStyle = '#ffffff'; // Keret színe
        ctx.lineWidth = 0.8; // Keret vastagsága
        ctx.beginPath();
        const boxX2 = canvas.width / 3.40; // X koordináta a boxnak
        const boxY2 = canvas.height / 2.40; // Y koordináta a boxnak
        const boxWidth2 = 520; // A box szélessége
        const boxHeight2 = 40; // A box magassága
        const borderRadius2 = 15; // Kerekítés sugar
    
        // Kerekített box rajzolása
        ctx.moveTo(boxX2 + borderRadius2, boxY2);
        ctx.lineTo(boxX2 + boxWidth2 - borderRadius2, boxY2);
        ctx.quadraticCurveTo(boxX2 + boxWidth2, boxY2, boxX2 + boxWidth2, boxY2 + borderRadius2);
        ctx.lineTo(boxX2 + boxWidth2, boxY2 + boxHeight2 - borderRadius2);
        ctx.quadraticCurveTo(boxX2 + boxWidth2, boxY2 + boxHeight2, boxX2 + boxWidth2 - borderRadius2, boxY2 + boxHeight2);
        ctx.lineTo(boxX2 + borderRadius2, boxY2 + boxHeight2);
        ctx.quadraticCurveTo(boxX2, boxY2 + boxHeight2, boxX2, boxY2 + boxHeight2 - borderRadius2);
        ctx.lineTo(boxX2, boxY2 + borderRadius2);
        ctx.quadraticCurveTo(boxX2, boxY2, boxX2 + borderRadius2, boxY2);
        ctx.closePath();
    
        ctx.fill(); // Háttér kitöltése
        ctx.stroke(); // Keret rajzolása
    
        ctx.font = "34px Cooper";
        ctx.fillStyle = `${tempVars("config").Welcome.TextColor || "WHITE"}`;
        ctx.fillText(`${tempVars("config").Welcome.Embed.username.replace('{username}', tempVars("member-username")).replace('{discriminator}', tempVars("member-discriminator"))}`, canvas.width / 3.2, canvas.height / 1.75);
    
        // ------------------------------------------------------------------------------------------------------------------------------------ \\
        // CUSTOM TEXT Kiírása \\
        // CUSTOM TEXT Kiírása \\
    
        // Háttér box rajzolása
        ctx.fillStyle = 'rgba(40, 40, 40, 0.6)'; // Áttetsző fehér háttér (0.6 az átlátszóság)
        ctx.strokeStyle = '#ffffff'; // Keret színe
        ctx.lineWidth = 0.8; // Keret vastagsága
        ctx.beginPath();
        const boxX3 = canvas.width / 3.65; // X koordináta a boxnak
        const boxY3 = canvas.height / 1.42; // Y koordináta a boxnak
        const boxWidth3 = 500; // A box szélessége
        const boxHeight3 = 35; // A box magassága
        const borderRadius3 = 15; // Kerekítés sugar
    
        // Kerekített box rajzolása
        ctx.moveTo(boxX3 + borderRadius3, boxY3);
        ctx.lineTo(boxX3 + boxWidth3 - borderRadius3, boxY3);
        ctx.quadraticCurveTo(boxX3 + boxWidth3, boxY3, boxX3 + boxWidth3, boxY3 + borderRadius3);
        ctx.lineTo(boxX3 + boxWidth3, boxY3 + boxHeight3 - borderRadius3);
        ctx.quadraticCurveTo(boxX3 + boxWidth3, boxY3 + boxHeight3, boxX3 + boxWidth3 - borderRadius3, boxY3 + boxHeight3);
        ctx.lineTo(boxX3 + borderRadius3, boxY3 + boxHeight3);
        ctx.quadraticCurveTo(boxX3, boxY3 + boxHeight3, boxX3, boxY3 + boxHeight3 - borderRadius3);
        ctx.lineTo(boxX3, boxY3 + borderRadius3);
        ctx.quadraticCurveTo(boxX3, boxY3, boxX3 + borderRadius3, boxY3);
        ctx.closePath();
    
        ctx.fill(); // Háttér kitöltése
        ctx.stroke(); // Keret rajzolása
        ctx.font = '24px Cooper';
        ctx.fillStyle = `${tempVars("config").Welcome.TextColor || "WHITE"}`;
        ctx.fillText(`${tempVars("config").Welcome.Embed.custom_message || "This field is empty."}`, canvas.width / 3.5, canvas.height / 1.20);
        // ------------------------------------------------------------------------------------------------------------------------------------ \\
    } catch (error) {
        console.log(error);
    }
    

// █████╗ ██╗   ██╗ █████╗ ████████╗ █████╗ ██████╗     ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
// ██╔══██╗██║   ██║██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗    ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
// ███████║██║   ██║███████║   ██║   ███████║██████╔╝    ██║██╔████╔██║███████║██║  ███╗█████╗  
// ██╔══██║╚██╗ ██╔╝██╔══██║   ██║   ██╔══██║██╔══██╗    ██║██║╚██╔╝██║██╔══██║██║   ██║██╔══╝  
// ██║  ██║ ╚████╔╝ ██║  ██║   ██║   ██║  ██║██║  ██║    ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
// ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝                                                                                   
    ctx.shadowColor = tempVars("config").Welcome.avatarShadow || "WHITE";

    // Kerekítés
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024 }));
    await ctx.drawImage(avatar, 20, 20, 160, 160);
    await ctx.drawImage(circle, 18, 18, 164, 164);



// ███████╗███╗   ███╗██████╗ ███████╗██████╗     ███╗   ███╗███████╗███████╗███████╗ █████╗  ██████╗ ███████╗
// ██╔════╝████╗ ████║██╔══██╗██╔════╝██╔══██╗    ████╗ ████║██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝ ██╔════╝
// █████╗  ██╔████╔██║██████╔╝█████╗  ██║  ██║    ██╔████╔██║█████╗  ███████╗███████╗███████║██║  ███╗█████╗  
// ██╔══╝  ██║╚██╔╝██║██╔══██╗██╔══╝  ██║  ██║    ██║╚██╔╝██║██╔══╝  ╚════██║╚════██║██╔══██║██║   ██║██╔══╝  
// ███████╗██║ ╚═╝ ██║██████╔╝███████╗██████╔╝    ██║ ╚═╝ ██║███████╗███████║███████║██║  ██║╚██████╔╝███████╗
// ╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚═════╝     ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝                                                                                                     
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome_img.png')
    const embed = new Discord.MessageEmbed() 
    .setDescription(`${tempVars("config").Welcome.Embed.message.replace('{member}', tempVars("member-ob"))}`)
    .setImage(`attachment://welcome_img.png`)
    .setColor(`${tempVars("config").Welcome.Embed.color || ""}`)
    .setFooter({ text:`${tempVars("config").Welcome.Embed.count.replace('{count}', tempVars("server-members"))}`, iconURL: tempVars("server-icon")})
    .setTimestamp()


    try {
        welcomech.send({
            embeds: [embed],
            files: [attachment]
        }).then((msg) => {
            if (tempVars("config").Welcome.Emoji.enabled === true) {
            msg.react(`${tempVars("config").Welcome.Emoji.first || ""}`),
            msg.react(`${tempVars("config").Welcome.Emoji.second || ""}`);
        }

        })
    } catch (error) {

        if (tempVars("welcome-channel") == undefined) {
            start()
        } else { }
        console.log(error)
    }
  }

}
start();
test
