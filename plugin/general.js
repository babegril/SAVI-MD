/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : FORZEN-MD
 * @author : YASIYA-OFC <https://github.com/yasiyaofc1>
 * @description : FORZEN-MD,A Multi-functional whatsapp bot.
 * @version 1.0.0
 **/

const _0x355fb6=_0x47b6;(function(_0x2ff081,_0x31368a){const _0x2f1986=_0x47b6,_0x4136e7=_0x2ff081();while(!![]){try{const _0x265019=parseInt(_0x2f1986(0x12c))/0x1*(parseInt(_0x2f1986(0x163))/0x2)+parseInt(_0x2f1986(0x119))/0x3+parseInt(_0x2f1986(0x137))/0x4*(-parseInt(_0x2f1986(0x131))/0x5)+parseInt(_0x2f1986(0x150))/0x6*(parseInt(_0x2f1986(0x15e))/0x7)+parseInt(_0x2f1986(0x147))/0x8*(parseInt(_0x2f1986(0x11f))/0x9)+-parseInt(_0x2f1986(0x12a))/0xa*(parseInt(_0x2f1986(0x145))/0xb)+-parseInt(_0x2f1986(0x122))/0xc;if(_0x265019===_0x31368a)break;else _0x4136e7['push'](_0x4136e7['shift']());}catch(_0x4d93f8){_0x4136e7['push'](_0x4136e7['shift']());}}}(_0x350d,0xdad38));const {tlang,botpic,cmd,prefix,runtime,Config,sleep}=require(_0x355fb6(0x135)),axios=require('axios'),speed=require(_0x355fb6(0x11b)),fetch=require(_0x355fb6(0x118));function _0x47b6(_0x159c58,_0x4f541d){const _0x350d25=_0x350d();return _0x47b6=function(_0x47b6ca,_0x581dc8){_0x47b6ca=_0x47b6ca-0x114;let _0x32269d=_0x350d25[_0x47b6ca];return _0x32269d;},_0x47b6(_0x159c58,_0x4f541d);}cmd({'pattern':'chat','react':'🧠','alias':[_0x355fb6(0x120)],'desc':_0x355fb6(0x153),'category':'AI','use':_0x355fb6(0x121),'filename':__filename},async(_0x1ecae8,_0xaab5a5,_0x350c05)=>{const _0xf5bb26=_0x355fb6;let _0x248135=_0x350c05[_0xf5bb26(0x160)];if(_0x248135<0x8){let {data:_0x5a436e}=await axios[_0xf5bb26(0x136)](_0xf5bb26(0x148)+_0xaab5a5[_0xf5bb26(0x15c)]['split']('@')[0x0]+_0xf5bb26(0x158)+_0x350c05+']');return _0xaab5a5[_0xf5bb26(0x12f)](_0x5a436e[_0xf5bb26(0x128)]);}if(!_0x350c05)return _0xaab5a5[_0xf5bb26(0x12f)](_0xf5bb26(0x14e)+_0xaab5a5[_0xf5bb26(0x155)]+_0xf5bb26(0x154));const _0x3995d8=await fetch(_0xf5bb26(0x139),{'method':_0xf5bb26(0x14b),'headers':{'Content-Type':_0xf5bb26(0x123),'Authorization':_0xf5bb26(0x13f)+Config[_0xf5bb26(0x138)]},'body':JSON['stringify']({'model':_0xf5bb26(0x15d),'messages':[{'role':_0xf5bb26(0x144),'content':'You'},{'role':'user','content':_0x350c05}]})}),_0x17cbd0=await _0x3995d8[_0xf5bb26(0x13e)]();return console[_0xf5bb26(0x13d)](_0xf5bb26(0x14d),_0x17cbd0),(!_0x17cbd0[_0xf5bb26(0x13b)]||_0x17cbd0[_0xf5bb26(0x13b)][_0xf5bb26(0x160)]===0x0)&&_0xaab5a5[_0xf5bb26(0x12f)](_0xf5bb26(0x159)),await _0xaab5a5['reply'](_0x17cbd0[_0xf5bb26(0x13b)][0x0][_0xf5bb26(0x143)][_0xf5bb26(0x11a)]);}),cmd({'pattern':_0x355fb6(0x133),'alias':[_0x355fb6(0x134),_0x355fb6(0x12b)],'desc':'Create\x20Image\x20by\x20AI','category':'AI','use':'<an\x20astronaut\x20in\x20mud.>','filename':__filename},async(_0x59b836,_0xe1570d,_0x4a9324,{isCreator:_0x256e2b})=>{const _0x5bb7e1=_0x355fb6;if(Config[_0x5bb7e1(0x138)]=='')return _0xe1570d[_0x5bb7e1(0x12f)]('You\x20Dont\x20Have\x20OPENAI_API_KEY\x20\x0aPlease\x20Create\x20OPEN\x20API\x20KEY\x20from\x20Given\x20Link\x20\x0ahttps://platform.openai.com/account/api-keys');if(!_0x4a9324)return _0xe1570d[_0x5bb7e1(0x12f)](_0x5bb7e1(0x129));const _0x579a92=_0x5bb7e1(0x125),_0x444575='https://api.openai.com/v1/images/generations',_0x500743=await fetch(_0x444575,{'method':_0x5bb7e1(0x14b),'headers':{'Content-Type':_0x5bb7e1(0x123),'Authorization':_0x5bb7e1(0x13f)+Config[_0x5bb7e1(0x138)]},'body':JSON[_0x5bb7e1(0x14a)]({'model':_0x5bb7e1(0x132),'prompt':_0x4a9324,'size':_0x579a92,'response_format':'url'})}),_0x5697d1=await _0x500743[_0x5bb7e1(0x13e)]();let _0x2e8cfe={'image':{'url':_0x5697d1[_0x5bb7e1(0x116)][0x0][_0x5bb7e1(0x14c)]},'caption':_0x5bb7e1(0x11e)};_0x59b836[_0x5bb7e1(0x127)](_0xe1570d[_0x5bb7e1(0x126)],{'image':{'url':_0x5697d1[_0x5bb7e1(0x116)][0x0][_0x5bb7e1(0x14c)]}});}),cmd({'pattern':'repo','react':'🏆','alias':[_0x355fb6(0x114),'sc',_0x355fb6(0x152)],'desc':_0x355fb6(0x15a),'category':_0x355fb6(0x12e),'filename':__filename},async(_0x3c92c4,_0x26db83)=>{const _0x977983=_0x355fb6;let {data:_0x383378}=await axios[_0x977983(0x136)](_0x977983(0x161)),_0x2c597e=_0x977983(0x157)+_0x26db83[_0x977983(0x155)]+'\x0a\x0a\x09\x0a*⭐\x20Total\x20Stars:*\x20'+_0x383378[_0x977983(0x141)]+_0x977983(0x124)+_0x383378['forks_count']+_0x977983(0x13a),_0x5580d0={'image':{'url':await botpic()},'caption':_0x2c597e,'footer':tlang()['footer'],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':'FORZEN-MD','body':_0x977983(0x162),'thumbnail':log0,'mediaType':0x4,'mediaUrl':'','sourceUrl':''}}};return await _0x3c92c4['sendMessage'](_0x26db83[_0x977983(0x126)],_0x5580d0,{'quoted':_0x26db83});}),cmd({'pattern':_0x355fb6(0x144),'react':'📀','alias':[_0x355fb6(0x149)],'desc':_0x355fb6(0x117),'category':'general','filename':__filename},async(_0x46e946,_0x56ade5)=>{const _0x106ccd=_0x355fb6,_0x27fcbd=process['uptime']();timestampe=speed(),latensie=speed()-timestampe;let _0x55b8e3=_0x106ccd(0x115)+latensie[_0x106ccd(0x130)](0x4)+_0x106ccd(0x142)+runtime(process[_0x106ccd(0x15f)]())+_0x106ccd(0x151)+Config[_0x106ccd(0x15b)]+_0x106ccd(0x14f),_0x4ccf2c={'image':{'url':await botpic()},'caption':_0x55b8e3,'footer':tlang()['footer'],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':tlang()[_0x106ccd(0x11d)],'body':_0x106ccd(0x140),'thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':''}}};return await _0x46e946[_0x106ccd(0x127)](_0x56ade5[_0x106ccd(0x126)],_0x4ccf2c,{'quoted':_0x56ade5});}),cmd({'pattern':_0x355fb6(0x11c),'react':'🪁','desc':_0x355fb6(0x156),'category':_0x355fb6(0x12e),'filename':__filename},async(_0x1af44f,_0x155150,_0x1f6983,{isCreator:_0x176646})=>{const _0x36e290=_0x355fb6;if(!_0x176646)return _0x155150[_0x36e290(0x12f)](tlang()[_0x36e290(0x13c)]);let _0x2ee39b=_0x36e290(0x146);return _0x2ee39b+='1.\x20FORZEN-MD\x0a\x0a\x20these\x20are\x20the\x20themes\x20of\x20Forzen-md\x20Userbot._Reply\x20'+prefix+_0x36e290(0x12d),_0x155150[_0x36e290(0x12f)](_0x2ee39b);});function _0x350d(){const _0x2aba78=['.\x20How\x20are\x20you\x20doing\x20these\x20days?','pushName','To\x20find\x20all\x20themes','Hey\x20',']&msg=[','*Invalid\x20ChatGPT\x20API\x20Key,\x20Please\x20Put\x20New\x20Key*','Sends\x20info\x20about\x20repo.','ownername','sender','gpt-3.5-turbo','182fbvYwP','uptime','length','https://api.github.com/repos/yasiyaofc1/FORZEN-MD','Easy\x20to\x20Use','1252eIcRNf','git','\x0a👨‍💻\x20_*FORZEN-MD\x20SYSTEM\x20INFO*_\x20👨‍💻\x0a\x0a*🌟Description:*\x20FORZEN-MD\x20WA\x20SIMPLE\x20USER\x20BOT.\x0a*⚡Speed:*\x20','data','To\x20check\x20bot\x20status','node-fetch','484341MGGjHr','content','performance-now','theme','title','*---Your\x20DALL-E\x20Result---*','1773RHIBFG','gpt','<Hii,Secktor>','5568540FASvPv','application/json','\x20stars\x0a\x0a*🍽️\x20Forks:*\x20','256x256','chat','sendMessage','cnt','*Give\x20Me\x20A\x20Query\x20To\x20Get\x20Dall-E\x20Reponce\x20?*','14390UVOjpp','dall-e','838KyXbEq','setvar\x20THEME:FORZEN-MD','general','reply','toFixed','20325MblLxq','image-alpha-001','dalle','dall','../lib','get','804AJAWwv','OPENAI_API_KEY','https://api.openai.com/v1/chat/completions','\x20forks\x0a\x0a*🍁\x20Repo:*\x20https://github.com/yasiyaofc1/FORZEN-MD\x0a\x0a*👨‍💻\x20Support\x20Group:*\x20https://chat.whatsapp.com/L2i6oDCjljt4mtBTUvTh7t\x0a\x0a*💃\x20Bot\x20Owner:wa.me/+94760018802*\x0a\x0a*⚡\x20Heroku\x20Develop:*\x20https://heroku.com/deploy?template=https://github.com/yasiyaofc1/FORZEN-MD','choices','owner','log','json','Bearer\x20','Bot-Status','stargazers_count','\x20ms\x0a*⏳Uptime:*\x20','message','system','957ibtzXZ','*All\x20available\x20themes\x20in\x20FORZEN-MD*','40784GADRDM','http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[','about','stringify','POST','url','GPT\x20REPONCE\x20:\x20','Hey\x20there!\x20','\x0a\x0a*ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ʏᴀsɪʏᴀ\x20ᴏғᴄ\x20💃🏻*\x0a','141294ZBfpak','\x0a*🧬Version:*\x201.0.0\x0a*👤Owner:*\x20\x20','script','chat\x20with\x20an\x20AI(GPT)'];_0x350d=function(){return _0x2aba78;};return _0x350d();}