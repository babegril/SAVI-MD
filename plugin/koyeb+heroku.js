/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : SAVI-MD
 * @author : SAVI-OFC <https://github.com/yBlacksavi>
 * @description : SAVI-MD,A Multi-functional whatsapp bot.
 * @version 1.0.0
 **/

const _0x2e875a=_0x2e06;(function(_0x1e6a9e,_0x45d224){const _0x2a2199=_0x2e06,_0x556317=_0x1e6a9e();while(!![]){try{const _0x4d5782=parseInt(_0x2a2199(0x222))/0x1+-parseInt(_0x2a2199(0x1fc))/0x2*(-parseInt(_0x2a2199(0x219))/0x3)+parseInt(_0x2a2199(0x1fb))/0x4+-parseInt(_0x2a2199(0x21c))/0x5+-parseInt(_0x2a2199(0x204))/0x6*(parseInt(_0x2a2199(0x211))/0x7)+parseInt(_0x2a2199(0x202))/0x8+-parseInt(_0x2a2199(0x21a))/0x9;if(_0x4d5782===_0x45d224)break;else _0x556317['push'](_0x556317['shift']());}catch(_0x377e64){_0x556317['push'](_0x556317['shift']());}}}(_0x15e4,0xb36d0));const axios=require(_0x2e875a(0x210)),{tlang,cmd}=require(_0x2e875a(0x218)),Config=require(_0x2e875a(0x1fd)),{redeploy,getvar,delvar,getallvar,change_env,get_deployments}=require(_0x2e875a(0x1e9));function _0x15e4(){const _0x36cca2=['misc','_Please\x20wait..._\x0a_Currently\x202\x20instances\x20are\x20running\x20in\x20Koyeb,wait\x20to\x20stop\x20one\x20of\x20them._','Please\x20provide\x20key.\x0a_Eg:\x20.getvar\x20PORT_','/apps/','total','HEROKU','API_KEY','/config-vars','addRemote','env','Please\x20Give\x20me\x20var\x20name,\x20','Your\x20var.\x0a','\x20has\x20been\x20set\x20Successfuly.','getvar','2968072iQJnNT','4KehIlL','../config','\x20:\x20','delete\x20var\x20from\x20koyeb.','upstream','simple-git','912304hYzZNC','update\x20bot\x20with\x20main\x20repo.','1962DNmbQC','FETCH_HEAD','updatenow','replace','getallvar','*Wrong\x20Format.*\x0aPlease\x20provide\x20key\x20and\x20value.\x0a_Eg:\x20.setvar\x20THEME:FORZEN-MD_','log','get','*ʙᴏᴛ\x20ᴜᴘᴅᴀᴛᴇᴅ...*\x0a_Restarting._','Please\x20provide\x20key.\x0a_Eg:\x20.delvar\x20PORT_','heroku\x20remote\x20adding\x20error','APP_NAME','axios','7819xElrZu','true','push','..origin/','main','owner','🟩var\x20','../lib','834609wVMKPT','3766257SPwqAF','heroku','1679700WJSRiP','reset','delvar','reply','HEROKU_API_KEY','https://api:','442138RfOlVg','ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...','split','get\x20all\x20vars\x20from\x20koyeb.','heroku-client','pushName','../lib/koyeb','syncgit','git_url','https://'];_0x15e4=function(){return _0x36cca2;};return _0x15e4();}function _0x2e06(_0x50d455,_0x507ddb){const _0x15e405=_0x15e4();return _0x2e06=function(_0x2e065e,_0x43ca51){_0x2e065e=_0x2e065e-0x1e9;let _0x23d861=_0x15e405[_0x2e065e];return _0x23d861;},_0x2e06(_0x50d455,_0x507ddb);}cmd({'pattern':_0x2e875a(0x206),'desc':_0x2e875a(0x203),'filename':__filename,'category':_0x2e875a(0x1ed)},async(_0x587e6b,_0x16b263,_0x23dfab,{isCreator:_0x4d30fd})=>{const _0x16dd8e=_0x2e875a;async function _0x2007a1(){const _0x5d8936=_0x2e06,_0xdf8a3e=require(_0x5d8936(0x201)),_0x217469=_0xdf8a3e(),_0x431f8f=require('heroku-client'),_0x1630a5=new _0x431f8f({'token':process['env'][_0x5d8936(0x220)]});await _0x217469['fetch']();var _0x292bf1=await _0x217469[_0x5d8936(0x20a)](['main'+_0x5d8936(0x214)+'main']);if(_0x292bf1[_0x5d8936(0x1f1)]===0x0)return _0x5d8936(0x223);else{var _0x54c7fc=await _0x1630a5[_0x5d8936(0x20b)]('/apps/'+process[_0x5d8936(0x1f6)]['HEROKU_APP_NAME']);_0x217469['fetch'](_0x5d8936(0x200),_0x5d8936(0x215)),_0x217469[_0x5d8936(0x21d)]('hard',[_0x5d8936(0x205)]);var _0x3bf40b=_0x54c7fc[_0x5d8936(0x1eb)][_0x5d8936(0x207)](_0x5d8936(0x1ec),_0x5d8936(0x221)+process[_0x5d8936(0x1f6)][_0x5d8936(0x220)]+'@');try{await _0x217469[_0x5d8936(0x1f5)]('heroku',_0x3bf40b);}catch{console['log'](_0x5d8936(0x20e));}return await _0x217469[_0x5d8936(0x213)](_0x5d8936(0x21b),_0x5d8936(0x215)),_0x5d8936(0x20c);}}if(!_0x4d30fd)return _0x16b263[_0x16dd8e(0x21f)](tlang()[_0x16dd8e(0x216)]);if(Config[_0x16dd8e(0x21b)]=!![]){const _0x230ebc=require(_0x16dd8e(0x218));let _0x3002f9=await _0x230ebc[_0x16dd8e(0x1ea)]();if(_0x3002f9[_0x16dd8e(0x1f1)]===0x0)_0x16b263[_0x16dd8e(0x21f)]('Hey\x20'+_0x16b263[_0x16dd8e(0x227)]+'.\x20You\x20have\x20latest\x20version\x20installed.');else{_0x16b263[_0x16dd8e(0x21f)]('Build\x20Started...');let _0x268bb0=await _0x230ebc['updatedb']();_0x16b263[_0x16dd8e(0x21f)](_0x268bb0);}}let _0x3adb98=await get_deployments();if(_0x3adb98===_0x16dd8e(0x212))return _0x16b263[_0x16dd8e(0x21f)](_0x16dd8e(0x1ee));let _0x1d67a6=await redeploy();return _0x16b263[_0x16dd8e(0x21f)](_0x1d67a6);}),cmd({'pattern':_0x2e875a(0x1fa),'desc':'get\x20desired\x20var\x20from\x20koyeb.','filename':__filename,'category':_0x2e875a(0x1ed)},async(_0x5bee10,_0x5c26e6,_0x457a73,{isCreator:_0x32666e})=>{const _0x5f008b=_0x2e875a;if(!_0x32666e)return _0x5c26e6[_0x5f008b(0x21f)](tlang()[_0x5f008b(0x216)]);if(Config[_0x5f008b(0x21b)]=!![]){if(!_0x457a73[_0x5f008b(0x224)]('\x20')[0x0])return _0x5c26e6[_0x5f008b(0x21f)](_0x5f008b(0x1f7)+tlang()['greet']);const _0x4864d1=require(_0x5f008b(0x226)),_0x468685=new _0x4864d1({'token':Config['HEROKU'][_0x5f008b(0x1f3)]});let _0x40de19=_0x5f008b(0x1f0)+Config[_0x5f008b(0x1f2)]['APP_NAME'],_0x44a558=await _0x468685['get'](_0x40de19+_0x5f008b(0x1f4));for(vr in _0x44a558){if(_0x457a73[_0x5f008b(0x224)]('\x20')[0x0]===vr)return _0x5c26e6[_0x5f008b(0x21f)](_0x5f008b(0x1f8)+vr+':\x20'+_0x44a558[vr]);}}if(!_0x457a73)return _0x5c26e6['reply'](_0x5f008b(0x1ef));let _0x505ea1=await getvar(_0x457a73);return _0x5c26e6[_0x5f008b(0x21f)](_0x505ea1);}),cmd({'pattern':_0x2e875a(0x208),'desc':_0x2e875a(0x225),'filename':__filename,'category':_0x2e875a(0x1ed)},async(_0x38584b,_0x393a37,_0x50dd7a,{isCreator:_0x52a021})=>{const _0x41944b=_0x2e875a;if(!_0x52a021)return _0x393a37[_0x41944b(0x21f)](tlang()[_0x41944b(0x216)]);if(Config[_0x41944b(0x21b)]=!![]){const _0x47422e=require(_0x41944b(0x226)),_0x5d4e00=new _0x47422e({'token':Config[_0x41944b(0x1f2)][_0x41944b(0x1f3)]});let _0xf3d5e8=_0x41944b(0x1f0)+Config[_0x41944b(0x1f2)]['APP_NAME'],_0x13fbce=await _0x5d4e00[_0x41944b(0x20b)](_0xf3d5e8+_0x41944b(0x1f4)),_0x294f4b='*All\x20Your\x20Heroku\x20Vars*\x0a\x0a';for(vr in _0x13fbce){_0x294f4b+=vr+':'+_0x13fbce[vr]+'\x0a';}_0x393a37[_0x41944b(0x21f)](_0x294f4b);}let _0x3aacb8=await getallvar();return _0x393a37['reply'](_0x3aacb8);}),cmd({'pattern':'setvar','desc':'set\x20var\x20in\x20koyeb.','filename':__filename,'category':_0x2e875a(0x1ed)},async(_0x199d83,_0x5d8483,_0x124868,{isCreator:_0x3a13dc})=>{const _0x224b93=_0x2e875a;if(!_0x3a13dc)return _0x5d8483['reply'](tlang()['owner']);if(!_0x124868['split'](':')[0x1])return _0x5d8483['reply'](_0x224b93(0x209));if(Config[_0x224b93(0x21b)]=!![]){const _0x4ea61c=require('heroku-client'),_0x51239c=new _0x4ea61c({'token':Config[_0x224b93(0x1f2)][_0x224b93(0x1f3)]});let _0x1b5ccf=_0x224b93(0x1f0)+Config[_0x224b93(0x1f2)][_0x224b93(0x20f)];await _0x51239c['patch'](_0x1b5ccf+'/config-vars',{'body':{[_0x124868['split'](':')[0x0]]:_0x124868[_0x224b93(0x224)](':')[0x1]}}),await _0x5d8483['reply'](_0x224b93(0x217)+_0x124868[_0x224b93(0x224)](':')[0x0]+_0x224b93(0x1fe)+_0x124868['split'](':')[0x1]+_0x224b93(0x1f9));}let _0x3a9c3c=await get_deployments();if(_0x3a9c3c===_0x224b93(0x212))return _0x5d8483[_0x224b93(0x21f)]('_Please\x20wait..._\x0a_Currently\x202\x20instances\x20are\x20running\x20in\x20Koyeb,wait\x20to\x20stop\x20one\x20of\x20them._');let _0x2f06c7=await change_env(_0x124868);return _0x5d8483[_0x224b93(0x21f)](_0x2f06c7);}),cmd({'pattern':_0x2e875a(0x21e),'desc':_0x2e875a(0x1ff),'filename':__filename,'category':_0x2e875a(0x1ed)},async(_0x1d50eb,_0x11c0e7,_0xfee7c3,{isCreator:_0x363396})=>{const _0x1aa935=_0x2e875a;if(!_0x363396)return _0x11c0e7[_0x1aa935(0x21f)](tlang()['owner']);if(!_0xfee7c3)return _0x11c0e7[_0x1aa935(0x21f)](_0x1aa935(0x20d));let _0x5c850e=await get_deployments();if(_0x5c850e===_0x1aa935(0x212))return _0x11c0e7['reply'](_0x1aa935(0x1ee));let _0x1b1f1f=await delvar(_0xfee7c3);return _0x11c0e7[_0x1aa935(0x21f)](_0x1b1f1f);});
