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

const _0x36bfca=_0x59e8;(function(_0x5e4a04,_0x11d346){const _0x2e28d5=_0x59e8,_0x23d671=_0x5e4a04();while(!![]){try{const _0x11760e=-parseInt(_0x2e28d5(0x1a7))/0x1+-parseInt(_0x2e28d5(0x183))/0x2*(-parseInt(_0x2e28d5(0x17c))/0x3)+-parseInt(_0x2e28d5(0x191))/0x4*(-parseInt(_0x2e28d5(0x185))/0x5)+parseInt(_0x2e28d5(0x1a5))/0x6*(-parseInt(_0x2e28d5(0x1b1))/0x7)+-parseInt(_0x2e28d5(0x1aa))/0x8*(parseInt(_0x2e28d5(0x1af))/0x9)+parseInt(_0x2e28d5(0x1ae))/0xa*(parseInt(_0x2e28d5(0x1b0))/0xb)+parseInt(_0x2e28d5(0x199))/0xc;if(_0x11760e===_0x11d346)break;else _0x23d671['push'](_0x23d671['shift']());}catch(_0x238c28){_0x23d671['push'](_0x23d671['shift']());}}}(_0xf7a9,0x85b5e));const {TelegraPh,bgms}=require(_0x36bfca(0x196)),ffmpeg=require(_0x36bfca(0x17f)),axios=require('axios'),{getBuffer,cmd,Config}=require(_0x36bfca(0x196)),fs=require(_0x36bfca(0x197)),util=require(_0x36bfca(0x1b3)),exec=util[_0x36bfca(0x18e)](require(_0x36bfca(0x176))[_0x36bfca(0x180)]);async function convertAudioToBlackScreenVideo(_0x4bcd7d,_0x36f689){const _0x3fbaf5=_0x36bfca;try{try{fs[_0x3fbaf5(0x19a)](_0x36f689);}catch(_0x26724b){}const _0x16089c=_0x3fbaf5(0x19c)+_0x4bcd7d,{stdout:_0x2057b7}=await exec(_0x16089c),_0x2866f6=parseFloat(_0x2057b7);try{fs['unlinkSync'](_0x3fbaf5(0x188));}catch(_0x516450){}const _0x124f99=_0x3fbaf5(0x182)+_0x2866f6+_0x3fbaf5(0x1ac);await exec(_0x124f99);const _0x41255e=_0x3fbaf5(0x189)+_0x4bcd7d+'\x20-c:v\x20copy\x20-c:a\x20aac\x20-map\x200:v:0\x20-map\x201:a:0\x20'+_0x36f689;return await exec(_0x41255e),console[_0x3fbaf5(0x17a)](_0x3fbaf5(0x17e)),{'result':!![]};}catch(_0x4f7251){return console[_0x3fbaf5(0x17d)](_0x3fbaf5(0x1b2),_0x4f7251),{'result':![]};}}function _0x59e8(_0x2c0816,_0x464d54){const _0xf7a9d=_0xf7a9();return _0x59e8=function(_0x59e8c3,_0x34485a){_0x59e8c3=_0x59e8c3-0x176;let _0x3755f9=_0xf7a9d[_0x59e8c3];return _0x3755f9;},_0x59e8(_0x2c0816,_0x464d54);}function _0xf7a9(){const _0xeee04=['\x20*BGM\x20SONG\x20INFORMATION*\x0a','length','Error\x20updating\x20BGM:','sendMessage','promisify','addbgm','bgmArray','12ZACVTX','has','Uhh\x20Please,\x20Reply\x20to\x20Audio/Video\x20To\x20Add\x20In\x20Bgm','set','delete','../lib/','fs-extra','videoMessage','4612368ECTork','unlinkSync','true','ffprobe\x20-v\x20error\x20-show_entries\x20format=duration\x20-of\x20default=noprint_wrappers=1:nokey=1\x20','general','_\x20removed\x20from\x20BGM.*','downloadAndSaveMediaMessage','./convertedVideo.mp4','There\x27s\x20an\x20Error\x20While\x20Adding\x20Bgm\x20Song','result','Uhh\x20Please\x20give\x20Bgm\x20Song\x20NAme','includes','60jDQqfM','audio/mpeg','206907kTkEBR','mtype','botbgm','1301544CFirrb','save','\x20-vf\x20\x22format=yuv420p\x22\x20./blackScreen.mp4','quoted','10GuPZGc','54HNcEnA','10703539jxNjCK','232148qFOREb','An\x20error\x20occurred:','util','*Give\x20Me\x20Song\x20Name\x20to\x20Delete\x20From\x20BGM*','child_process','reply','audioMessage','Name\x20_\x27','log','findOne','9KUvsVJ','error','Audio\x20converted\x20to\x20black\x20screen\x20video\x20successfully!','fluent-ffmpeg','exec','text','ffmpeg\x20-f\x20lavfi\x20-i\x20color=c=black:s=1280x720:d=','85940BiZfdj','toLowerCase','960100LzzTyA','create\x20paste\x20of\x20text.','\x27_\x20does\x20not\x20exist\x20in\x20BGM.','./blackScreen.mp4','ffmpeg\x20-i\x20./blackScreen.mp4\x20-i\x20'];_0xf7a9=function(){return _0xeee04;};return _0xf7a9();}cmd({'pattern':'delbgm','desc':_0x36bfca(0x186),'category':_0x36bfca(0x19d),'filename':__filename},async(_0x158622,_0x1ebfb7,_0x2b4fab)=>{const _0x283716=_0x36bfca;if(!_0x2b4fab)return await _0x1ebfb7[_0x283716(0x177)](_0x283716(0x1b4));let _0x526fd6=await bgms[_0x283716(0x17b)]({'id':'3'})||await new bgms({'id':'3'})[_0x283716(0x1ab)]();return _0x526fd6[_0x283716(0x190)][_0x283716(0x192)](_0x2b4fab)?(_0x526fd6[_0x283716(0x190)][_0x283716(0x195)](_0x2b4fab),await _0x526fd6[_0x283716(0x1ab)](),await _0x1ebfb7[_0x283716(0x177)]('*Song\x20_'+_0x2b4fab+_0x283716(0x19e))):await _0x1ebfb7[_0x283716(0x177)](_0x283716(0x179)+_0x2b4fab+_0x283716(0x187));}),cmd({'pattern':'allbgm','desc':'create\x20paste\x20of\x20text.','category':'general','filename':__filename},async(_0x4a52bc,_0x203fc2,_0x3dcba2)=>{const _0x16593b=_0x36bfca;_0x3dcba2=_0x16593b(0x18a);const {TelegraPh:_0x445f9e,bgm:_0x5f052d}=require(_0x16593b(0x196));let _0x2a20ee=await bgms[_0x16593b(0x17b)]({'id':'3'})||await new bgms({'id':'3'})[_0x16593b(0x1ab)]();for(const [_0x2e1458,_0x427266]of _0x2a20ee['bgmArray']){_0x3dcba2+='*'+_0x2e1458+'\x20:*\x20_'+_0x427266+'_\x20\x0a';}return await _0x203fc2[_0x16593b(0x177)](_0x3dcba2);}),cmd({'pattern':_0x36bfca(0x18f),'desc':'create\x20paste\x20of\x20text.','category':_0x36bfca(0x19d),'filename':__filename},async(_0x53e798,_0x3dbbf0,_0x344217)=>{const _0x465acc=_0x36bfca;if(!_0x3dbbf0[_0x465acc(0x1ad)])return await _0x3dbbf0['reply'](_0x465acc(0x193));if(!_0x344217)return await _0x3dbbf0[_0x465acc(0x177)](_0x465acc(0x1a3));let _0x57dfef=![],_0x4df2c4='';if(_0x3dbbf0['quoted'][_0x465acc(0x1a8)]==_0x465acc(0x198))_0x4df2c4=await _0x53e798[_0x465acc(0x19f)](_0x3dbbf0['quoted']),_0x57dfef=!![];else{if(_0x3dbbf0[_0x465acc(0x1ad)][_0x465acc(0x1a8)]==_0x465acc(0x178)){_0x57dfef=![];let _0xbf3488=await _0x53e798['downloadAndSaveMediaMessage'](_0x3dbbf0[_0x465acc(0x1ad)],'audio'),_0x1e6de8=await convertAudioToBlackScreenVideo(_0xbf3488,'./convertedVideo.mp4');_0x1e6de8[_0x465acc(0x1a2)]&&(_0x4df2c4=_0x465acc(0x1a0));}else return await _0x3dbbf0[_0x465acc(0x177)](_0x465acc(0x193));}if(!_0x4df2c4)return await _0x3dbbf0[_0x465acc(0x177)](_0x465acc(0x1a1));let _0x432381=await TelegraPh(_0x4df2c4),_0x5f441f=await bgms[_0x465acc(0x17b)]({'id':'3'})||await new bgms({'id':'3'})['save']();try{return _0x5f441f['bgmArray'][_0x465acc(0x194)](_0x344217,_0x432381),await _0x5f441f['save'](),await _0x3dbbf0['reply']('*New\x20Song\x20Added\x20in\x20BGM\x20with\x20Name\x20:\x20'+_0x344217+'*');}catch(_0x47aec4){return await _0x3dbbf0['reply'](_0x465acc(0x18c)+_0x47aec4);}}),cmd({'on':'text'},async(_0x301995,_0x4fdb28,_0x16210e)=>{const _0x4a8713=_0x36bfca;if(Config[_0x4a8713(0x1a9)]===_0x4a8713(0x19b)&&_0x4fdb28[_0x4a8713(0x181)][_0x4a8713(0x18b)]>0x1){let _0x2e2e9a='\x20'+_0x4fdb28[_0x4a8713(0x181)]+'\x20',_0x209bbc=await bgms[_0x4a8713(0x17b)]({'id':'3'})||await new bgms({'id':'3'})[_0x4a8713(0x1ab)]();for(const [_0x131f12,_0x4f9103]of _0x209bbc[_0x4a8713(0x190)]){let _0x5bae85=_0x131f12+'\x20';if(_0x2e2e9a[_0x4a8713(0x184)]()[_0x4a8713(0x1a4)](_0x5bae85))return await _0x301995[_0x4a8713(0x18d)](_0x4fdb28['chat'],{'audio':{'url':_0x4f9103},'mimetype':_0x4a8713(0x1a6),'ptt':!![],'waveform':[0x63,0x4b,0x19,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x5,0x19,0x32,0x4b,0x63,0x4b,0x32,0x19,0x0]});}}});
