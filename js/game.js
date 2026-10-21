const $=i=>document.getElementById(i),cv=$('c'),g=cv.getContext('2d'),lc=$('lc'),lg=lc.getContext('2d');
let W,H,hy,gb,LW,U,cam=1,T=0,PT=0,st='home',R,shake=0,sub=0,cid=-1,cur,LS={i:0,t:0,p:1,s:0,n:-1};
function rs(){const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;g.setTransform(d,0,0,d,0,0);hy=H*.4;gb=H*.84;LW=Math.min(W*.24,H*.3);U=LW*.55}
addEventListener('resize',rs);rs();
let S={prog:{},req:[],mute:0};try{Object.assign(S,JSON.parse(localStorage.getItem('sv2')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('sv2',JSON.stringify(S))}catch(e){}};
let ac;function snd(f,d=.1,t='square',v=.04,f2){if(S.mute)return;try{ac=ac||new AudioContext();const n=ac.currentTime,o=ac.createOscillator(),a=ac.createGain();o.type=t;o.frequency.setValueAtTime(f,n);if(f2)o.frequency.exponentialRampToValueAtTime(f2,n+d);a.gain.setValueAtTime(v,n);a.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(a);a.connect(ac.destination);o.start();o.stop(n+d)}catch(e){}}
const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
const SUB=[['➗','Maths'],['⚗️','Chemistry'],['🚀','Physics'],['🌍','Social Studies'],['🔬','Science']],
PAL=[['#0a1a4a','#1e5bd6','#5ad2ff',200],['#0a2a1a','#1f8f4a','#c6ff5a',110],['#2a0a0a','#a8321f','#ffb03a',20],['#2a1a05','#b07a1f','#5affd0',40],['#07260f','#2d9a3a','#9bff7a',130]];
const C=[
{id:'pyth',s:0,n:'Pythagoras Theorem',kw:'pythag,triangle,hypotenuse,right angle',sc:[['tri','A right triangle has one 90° corner. The longest side, facing that corner, is the hypotenuse (c).',0],['tri','Build a square on each side. The two small squares (9 + 16) exactly fill the big one (25)!',1],['eq','The two smaller squares add up to the big square.',['a² + b² = c²','3² + 4² = 9 + 16 = 25','c = √25 = 5']],['eq','To find a missing leg, subtract instead.',['a² = c² − b²','5² − 3² = 25 − 9 = 16','a = 4']]],
q:[['Which side is the hypotenuse?',['The side opposite the right angle','The shortest side','Any side you like'],0,'It is the longest side of the triangle.','Find the 90° corner. The hypotenuse faces it.'],
['Legs are 3 and 4. Hypotenuse?',['5','7','12'],0,'Use a² + b² = c².','9 + 16 = 25. What is √25?'],
['Legs are 6 and 8. Hypotenuse?',['14','10','100'],1,'Work out 36 + 64 first.','The total is 100, but that is c². Take the square root.'],
['Hypotenuse 13, one leg 5. Other leg?',['8','18','12'],2,'Use a² = c² − b².','169 − 25 = 144. What is √144?'],
['Which set makes a right triangle?',['2, 3, 4','4, 5, 7','5, 12, 13'],2,'Test a² + b² = c² with the biggest number as c.','25 + 144 = 169 = 13².']]},
{id:'acid',s:1,n:'Acids, Bases & pH',kw:'acid,base,ph,litmus,neutral,alkali',sc:[['bar','The pH scale: below 7 is acid, 7 is neutral, above 7 is base.',[['Lemon',2,'#ff5a5a'],['Vinegar',3,'#ff8a4a'],['Water',7,'#4aff8a'],['Baking soda',9,'#4ac8ff'],['Soap',10,'#6a7aff'],['Bleach',13,'#b04aff']]],['flow','When an acid meets a base they cancel each other out: neutralisation.',['Acid','+ Base','Salt + Water']],['eq','Litmus paper is a quick test.',['Acid → turns RED','Base → turns BLUE','Water → no change']],['eq','Each pH step is a 10× change.',['pH 3 is 10× more acidic than pH 4','Lower pH = stronger acid']]],
q:[['A liquid has pH 2. It is…',['A strong acid','Neutral','A strong base'],0,'Below 7 means acid.','The lower the number, the stronger the acid.'],
['Which is neutral (pH 7)?',['Lemon juice','Pure water','Soap'],1,'Neutral means neither acid nor base.','Which one is not sour or slippery?'],
['Litmus turns RED in…',['A base','Water','An acid'],2,'Remember: acid → red.','Blue litmus + acid = red.'],
['Acid + base makes…',['Salt + water','Only gas','A metal'],0,'This is called neutralisation.','Antacid tablets cure acidity this way. The products are harmless.'],
['Which is more acidic?',['pH 4','pH 3','Both same'],1,'Lower pH = more acidic.','3 is lower than 4.']]},
{id:'spd',s:2,n:'Speed, Distance & Time',kw:'speed,velocity,distance,time,motion',sc:[['move','Speed tells us how much distance something covers in a given time.',0],['eq','The speed formula:',['speed = distance ÷ time','120 km ÷ 2 h = 60 km/h']],['eq','Rearrange it to find distance:',['distance = speed × time','60 km/h × 3 h = 180 km']],['eq','Or to find time:',['time = distance ÷ speed','150 km ÷ 50 km/h = 3 h']]],
q:[['Which is the speed formula?',['distance × time','distance ÷ time','time ÷ distance'],1,'Speed = how far per unit of time.','"Per" means divide.'],
['120 km in 2 h. Speed?',['240 km/h','60 km/h','122 km/h'],1,'Divide distance by time.','120 ÷ 2 = ?'],
['60 km/h for 3 h. Distance?',['180 km','20 km','63 km'],0,'distance = speed × time.','60 × 3 = ?'],
['150 km at 50 km/h. Time?',['7500 h','100 h','3 h'],2,'time = distance ÷ speed.','150 ÷ 50 = ?'],
['Which is faster?',['100 km in 4 h','90 km in 2 h','They are equal'],1,'Work out each speed.','25 km/h versus 45 km/h.']]},
{id:'gov',s:3,n:'Three Branches of Government',kw:'government,democracy,branches,legislature,judiciary,executive,constitution',sc:[['flow','In a democracy, power is shared between three branches.',['Citizens vote','Legislature','Executive','Judiciary']],['eq','Each branch has its own job:',['Legislature → makes laws','Executive → carries out laws','Judiciary → checks laws']],['eq','Who is who?',['Parliament = Legislature','PM / President + ministers = Executive','Courts = Judiciary']],['flow','Check and balance: no group has all the power.',['Law passed','Government enforces','Court checks fairness']]],
q:[['Who makes laws?',['Judiciary','Legislature','Executive'],1,'Think of Parliament.','Parliament is the Legislature.'],
['Who carries out laws?',['Executive','Legislature','Only citizens'],0,'The government that runs the country.','Ministers and the PM / President.'],
['Courts belong to…',['Executive','Legislature','Judiciary'],2,'Courts judge disputes.','Judges = Judiciary.'],
['Why separate the powers?',['To stop one group having all power','To make laws slower','To cancel elections'],0,'Think about fairness.','If one group held every power, it could misuse it.'],
['A court rules a law is unfair. Which branch acted?',['Legislature','Executive','Judiciary'],2,'Who checks laws?','The court is part of this branch.']]},
{id:'photo',s:4,n:'Photosynthesis',kw:'photosynthesis,plant,chlorophyll,leaf,sunlight,glucose',sc:[['flow','Plants make their own food using light from the Sun.',['Sunlight ☀','Leaf (chlorophyll)','Glucose + Oxygen']],['eq','The recipe:',['CO₂ + H₂O + light','→ glucose + O₂']],['eq','Where it happens:',['Chlorophyll absorbs light','It sits in chloroplasts','Stomata let gases in and out']],['flow','Why it matters for all life:',['Plants make food','Animals eat plants','We breathe the oxygen']]],
q:[['Plants make food using…',['Sunlight, water, CO₂','Sand and air only','Oxygen and sugar'],0,'Three ingredients are needed.','Light + water + a gas from air.'],
['Which gas is released?',['Carbon dioxide','Oxygen','Nitrogen'],1,'We breathe it in.','It is O₂.'],
['The green pigment is…',['Melanin','Haemoglobin','Chlorophyll'],2,'Its name starts with "chloro".','It makes leaves green.'],
['It happens in…',['Roots','Chloroplasts in leaves','Seeds only'],1,'Where is chlorophyll found?','Look inside the leaf cells.'],
['A plant kept in the dark for days will…',['Make more food','Make more oxygen','Struggle to make glucose'],2,'What is missing?','No light means the recipe cannot run.']]}];
const wr=(s)=>{const a=s.split(' ');if(a.length<2)return[s];let b=0,bd=99;for(let i=1;i<a.length;i++){const d=Math.abs(a.slice(0,i).join(' ').length-a.slice(i).join(' ').length);if(d<bd){bd=d;b=i}}return[a.slice(0,b).join(' '),a.slice(b).join(' ')]};
function ls(sc,t){const w=640,h=300,c=lg,k=sc[0],d=sc[2];const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#0c1a4a');gr.addColorStop(1,'#1d1060');c.fillStyle=gr;c.fillRect(0,0,w,h);c.textAlign='center';
if(k=='eq')d.forEach((l,i)=>{const a=Math.max(0,Math.min(1,t-i*1.2));c.globalAlpha=a;c.fillStyle=i==d.length-1?'#ffd23f':'#fff';c.font='bold 27px system-ui';c.fillText(l,w/2,80+i*62+(1-a)*25,w-30)});
else if(k=='flow'){const n=d.length,bw=w/n;d.forEach((l,i)=>{const x=bw*(i+.5),a=Math.max(0,Math.min(1,t-i*1.1));c.globalAlpha=a;c.fillStyle='#20d6ff33';c.fillRect(x-bw*.44,100,bw*.88,100);c.strokeStyle='#20d6ff';c.strokeRect(x-bw*.44,100,bw*.88,100);c.fillStyle='#fff';c.font='bold '+(n>3?15:18)+'px system-ui';wr(l).forEach((s,j)=>c.fillText(s,x,142+j*22,bw*.8))});c.globalAlpha=1;c.fillStyle='#ffd23f';for(let j=0;j<3;j++){const p=((t*.35+j/3)%1)*(w-bw);c.beginPath();c.arc(bw/2+p,150,6,0,7);c.fill()}}
else if(k=='bar'){const bw=w/d.length;d.forEach((b,i)=>{const hh=Math.min(1,Math.max(0,t-i*.3)/1.2)*b[1]/14*190;c.fillStyle=b[2];c.fillRect(i*bw+10,240-hh,bw-20,hh);c.fillStyle='#fff';c.font='13px system-ui';c.fillText(b[0],i*bw+bw/2,262);c.fillText('pH '+b[1],i*bw+bw/2,236-hh)})}
else if(k=='tri'){const u=21,x0=w/2-50,y0=215;c.lineWidth=3;c.strokeStyle='#fff';const P=(x,y)=>[x0+x*u,y0+y*u];const sq=(pts,col,tx,ty,tt)=>{if(d){c.fillStyle=col;c.globalAlpha=Math.min(1,t/2)*.6;c.beginPath();pts.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.fill();c.globalAlpha=1;c.fillStyle='#fff';c.font='bold 18px system-ui';c.fillText(tt,tx,ty)}};
sq([P(0,0),P(4,0),P(4,4),P(0,4)].map((p,i)=>p),'#4aff8a',...P(2,2),'b² = 16');sq([P(0,0),P(-3,0),P(-3,-3),P(0,-3)],'#ff8a4a',...P(-1.5,-1.5),'a² = 9');sq([P(4,0),P(0,-3),P(3,-7),P(7,-4)],'#b04aff',...P(3.5,-3.5),'c² = 25');
c.strokeStyle='#fff';c.beginPath();c.moveTo(...P(0,0));c.lineTo(...P(4,0));c.lineTo(...P(0,-3));c.closePath();c.stroke();c.strokeRect(...P(0,-.7),.7*u,.7*u);c.fillStyle='#ffd23f';c.font='bold 16px system-ui';c.fillText('b=4',...P(2,.7));c.fillText('a=3',...P(-.7,-1.5));c.fillText('c=5',...P(2.4,-2.1))}
else if(k=='move'){c.strokeStyle='#fff';c.beginPath();c.moveTo(0,200);c.lineTo(w,200);c.stroke();c.fillStyle='#fff';c.font='14px system-ui';for(let i=0;i<=6;i++){c.fillRect(i*100+20,200,2,10);c.fillText(i*20+' km',i*100+20,228)}const x=20+(t%6)*100;c.fillStyle='#ff4fa0';c.fillRect(x-30,165,60,28);c.fillStyle='#6ff';c.fillRect(x+8,170,16,10);c.fillStyle='#000';c.beginPath();c.arc(x-16,195,7,0,7);c.arc(x+16,195,7,0,7);c.fill();c.fillStyle='#ffd23f';c.font='bold 26px system-ui';c.fillText('time: '+(t%6*.5).toFixed(1)+' h   distance: '+Math.round(t%6*20)+' km',w/2,80);c.fillText('speed = 40 km/h',w/2,120)}c.globalAlpha=1}
function setL(){const cn=C[cid],n=cn.sc.length;LS.t=0;$('lcap').textContent=cn.sc[LS.i][1];$('ld').textContent=`Scene ${LS.i+1} of ${n}`;LS.s=Math.max(LS.s,LS.i);$('lcb').disabled=LS.s<n-1}
function ln(d){LS.i=Math.max(0,Math.min(C[cid].sc.length-1,LS.i+d));setL()}
function spk(){try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(C[cid].sc[LS.i][1]))}catch(e){}}
function learn(){st='learn';LS={i:0,t:0,p:1,s:0};$('lt').textContent=SUB[sub][0]+' '+C[cid].n;show('o-learn');$('hud').style.display='none';setL()}
function show(id){document.querySelectorAll('.ov').forEach(e=>e.style.display='none');if(id)$(id).style.display='flex'}
function homeUI(){$('sj').innerHTML=SUB.map((s,i)=>`<span class="w${i==sub?' on':''}" onclick="pickSub(${i})">${s[0]} ${s[1]}</span>`).join('');$('cl').innerHTML=C.map((c,i)=>c.s==sub?`<span class="w" onclick="cid=${i};learn()">${S.prog[c.id]&&S.prog[c.id].m?'✔ ':''}${c.n}</span>`:'').join('')}
function pickSub(i){sub=i;$('cs').style.display='block';$('hm').textContent='';homeUI()}
function find(v,pool){let b=-1,bs=0;pool.forEach(i=>{const c=C[i];let s=0;(c.kw+','+c.n.toLowerCase()).split(',').forEach(w=>{if(w&&(v.includes(w)||(v.length>2&&w.includes(v))))s++});if(s>bs){bs=s;b=i}});return b}
function go(){const v=$('ci').value.trim().toLowerCase();if(!v){$('hm').textContent='Type a concept or tap one above.';return}let i=find(v,C.map((c,k)=>k).filter(k=>C[k].s==sub));if(i<0)i=find(v,C.map((c,k)=>k));if(i<0){S.req.push(v);save();$('hm').textContent=`I don't have "${v}" yet in this prototype (noted as a request). Try one of the concepts listed above.`;return}cid=i;sub=C[i].s;learn()}
function toHome(){st='home';cid=-1;newRun();show('o-home');$('ac').style.display='none';$('hud').style.display='none';homeUI()}
function newRun(){R={dist:0,sp:0,en:100,sc:0,combo:0,mult:1,stars:0,cs:0,objs:[],bld:[],parts:[],pops:[],spawnZ:30,bz:0,inv:0,over:0,ct:3};if(cid>=0)for(let i=0;i<5;i++){const q=C[cid].q[i],ix=shuf([0,1,2]);R.objs.push({t:'gate',id:i,wz:130+i*130,opts:ix.map(k=>q[1][k]),ans:ix.indexOf(q[2]),dis:[0,0,0],tries:0,hints:0,hs:0,open:0,stars:0,msg:''})}R.objs.push({t:'portal',wz:745});Object.assign(pl,{l:1,lx:1,jy:0,vy:0,sl:0});cam=1;scene(0,0)}
const pl={l:1,lx:1,jy:0,vy:0,sl:0};
function scene(dt,sp){R.dist+=sp*dt;while(R.bz<R.dist+80){[-2.3,3.3].forEach(l=>R.bld.push({wz:R.bz+Math.random()*2,l:l+(l<0?-1:1)*Math.random()*.6,h:4+Math.random()*9,c:PAL[sub][3]+Math.random()*50|0}));R.bz+=3+Math.random()*3}R.bld=R.bld.filter(b=>b.wz-R.dist>-3)}
function spawnPat(z){if(R.objs.some(o=>o.t=='gate'&&z>o.wz-34&&z<o.wz+9))return;const f=Math.random()*3|0;for(let i=0;i<3;i++){if(i==f)for(let k=0;k<3;k++)R.objs.push({t:'orb',l:i,wz:z+k*1.7,h:Math.random()<.3?1.1:0});else{const t=['block','bar','over',0,'bar'][Math.random()*5|0];if(t)R.objs.push({t,l:i,wz:z})}}}
function burst(x,y,c,n=12){for(let i=0;i<n;i++)R.parts.push({x,y,vx:(Math.random()-.5)*300,vy:-Math.random()*250,life:.7,c})}
function pop(t,c='#fff'){R.pops.push({x:X(pl.lx,1),y:gb-U*2.2,t,c,life:1})}
function hurt(){R.combo=0;R.mult=1;R.inv=1.2;shake=.3;R.en-=20;snd(120,.3,'sawtooth',.08,40);burst(X(pl.lx,1),gb-U,'#ff4a4a',16);if(R.en<=0){R.en=100;pop('Recharged!','#3dff9a')}}
function upd(dt){const g0=R.objs.find(o=>o.t=='gate'&&!o.open),d0=g0?g0.wz-R.dist:99;let tg=13+Math.min(4,R.dist/150);if(d0<32)tg=Math.min(tg,Math.max(2,(d0-6)*1.2));
if(g0&&d0<=7.5){R.sp=0;ask(g0);return}R.sp+=(tg-R.sp)*Math.min(1,dt*4);scene(dt,R.sp);
pl.lx+=(pl.l-pl.lx)*Math.min(1,dt*14);if(pl.jy>0||pl.vy>0){pl.vy-=24*dt;pl.jy+=pl.vy*dt;if(pl.jy<=0)pl.jy=pl.vy=0}if(pl.sl>0)pl.sl-=dt;R.inv-=dt;
while(R.spawnZ<R.dist+75){spawnPat(R.spawnZ);R.spawnZ+=Math.max(9,15-R.dist/80)}
for(const o of R.objs){const d=o.wz-R.dist;if(o.t=='gate'||o.t=='portal'||o.dead||d>.6||d<-.6||Math.abs(pl.lx-o.l)>.55)continue;
if(o.t=='orb'){if(Math.abs(pl.jy-o.h)<.9){o.dead=1;R.combo++;R.mult=1+Math.min(3,R.combo/6|0);R.sc+=10*R.mult;snd(700+R.combo*20,.08,'sine');burst(X(o.l,1),gb-U*(o.h+.7),'#ffd23f',6)}}
else if(R.inv<=0&&(o.t=='block'||(o.t=='bar'&&pl.jy<.55)||(o.t=='over'&&pl.sl<=0))){o.dead=1;hurt()}}
R.objs=R.objs.filter(o=>o.wz-R.dist>-3);if(R.dist>=745&&!R.objs.some(o=>o.t=='gate'&&!o.open))finish()}
function ask(o){cur=o;st='ask';pl.lx=pl.l;$('ac').style.display='block';$('tc').style.display='none';renderAsk()}
const Q=o=>C[cid].q[o.id];
function renderAsk(){const o=cur,q=Q(o);$('ac').innerHTML=`<div class="m">Question ${o.id+1}/5 · no time limit, take your time · pick a lane then lock in (Enter)</div><p><b>${q[0]}</b></p>`+o.opts.map((t,i)=>`<button class="op${i==pl.l?' sel':''}" ${o.dis[i]?'disabled':''} onclick="pick(${i})">${'ABC'[i]}) ${t}</button>`).join('')+(o.hs>0?`<p class="ht">💡 ${q[3]}</p>`:'')+(o.hs>1?`<p class="ht">💡 ${q[4]}</p>`:'')+(o.msg?`<p class="bad">${o.msg}</p>`:'')+`<button class="b s" onclick="hint()" ${o.hs>=2?'disabled':''}>💡 Hint (${o.hs}/2)</button><button class="b" onclick="lock()">🔒 Lock in answer</button>`}
function pick(i){if(st!='ask'||cur.dis[i])return;pl.l=i;snd(300,.05);renderAsk()}
function hint(){const o=cur;if(st!='ask'||o.hs>=2)return;o.hs++;o.hints++;if(o.hs==2){const w=[0,1,2].filter(i=>i!=o.ans&&!o.dis[i]);if(w.length>1)o.dis[w[0]]=1;if(o.dis[pl.l])pl.l=o.ans==0?1:0}snd(600,.15,'triangle');renderAsk()}
function lock(){const o=cur;if(st!='ask'||o.dis[pl.l])return;o.tries++;if(pl.l==o.ans){o.open=1;o.stars=o.tries==1&&!o.hints?3:o.tries<=2?2:1;R.stars+=o.stars;R.sc+=o.stars*100;burst(X(pl.l,.55),gb-U*2,'#3dff9a',30);snd(500,.4,'sine',.07,1200);pop('Correct! '+'⭐'.repeat(o.stars),'#3dff9a');$('ac').style.display='none';if('ontouchstart' in window)$('tc').style.display='flex';st='play';R.inv=1}
else{o.dis[pl.l]=1;shake=.2;snd(150,.25,'sawtooth',.06,80);o.msg='Not quite. That gate stays locked. Try another answer or use a hint.';if(o.tries>=2&&o.hs<1){o.hs=1;o.hints++}const f=[0,1,2].find(i=>!o.dis[i]);if(f!=null)pl.l=f;renderAsk()}}
function finish(){if(R.over)return;R.over=1;const G=R.objs.length?[]:[];st='end';const gs=GL,tot=R.stars,m=tot>=10,c=C[cid],p=S.prog[c.id]||{b:0,a:0,m:0};p.b=Math.max(p.b,tot);p.a++;p.m=p.m||m;S.prog[c.id]=p;save();
$('rs').innerHTML=`<h2>${m?'🌀 Concept cleared!':'🔒 Almost there'}</h2><p>${c.n}: <b>${tot}/15 ⭐</b> (clear it with 10+)</p>`+gs.map((o,i)=>`<p class="m">Q${i+1}: ${'⭐'.repeat(o.stars)} · ${o.tries} ${o.tries==1?'try':'tries'} · ${o.hints} hints</p>`).join('')+`<p>${m?'You understood it and proved it in the runner!':'Review the concept, then run again. Your attempt is saved.'}</p><button class="b" onclick="startQuiz()">↻ Run again</button><button class="b s" onclick="learn()">📖 Review concept</button><button class="b s" onclick="toHome()">New concept</button>`;setTimeout(()=>{if(st=='end')show('o-res')},900)}
let GL=[];
function startQuiz(){show();newRun();GL=R.objs.filter(o=>o.t=='gate');st='port';PT=0;$('hud').style.display='flex';if('ontouchstart' in window)$('tc').style.display='flex';snd(200,1,'sine',.06,900);try{speechSynthesis.cancel()}catch(e){}}
function resume(){if(st=='pause'){show();st='play'}}
function pauseG(){if(st=='play'){st='pause';show('o-pause')}else if(st=='pause')resume()}
function tmute(){S.mute=!S.mute;save();$('bm').textContent=S.mute?'🔇':'🔊'}
$('bm').onclick=tmute;$('bp').onclick=pauseG;$('bm').textContent=S.mute?'🔇':'🔊';
const mv=d=>{if(st=='play')pl.l=Math.max(0,Math.min(2,pl.l+d)),snd(300,.05);else if(st=='ask'){let n=pl.l+d;while(n>=0&&n<3&&cur.dis[n])n+=d;if(n>=0&&n<3){pl.l=n;renderAsk()}}},jmp=()=>{if(st=='play'&&pl.jy==0&&pl.vy==0){pl.vy=8;pl.sl=0;snd(300,.2,'square',.04,700)}},sld=()=>{if(st=='play'){pl.sl=.6;if(pl.jy>0)pl.vy=-12;snd(200,.2,'sawtooth',.03,90)}};
addEventListener('keydown',e=>{if(e.target.tagName=='INPUT'){if(e.key=='Enter')go();return}const k=e.key;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(k))e.preventDefault();if(k=='ArrowLeft'||k=='a'||k=='A')mv(-1);else if(k=='ArrowRight'||k=='d'||k=='D')mv(1);else if(k==' '||k=='ArrowUp'||k=='w')jmp();else if(k=='ArrowDown'||k=='s'||k=='S')sld();else if(k=='Enter')lock();else if('123'.includes(k)&&k)pick(+k-1);else if(k=='Escape')pauseG()});
let sx,sy;cv.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY});cv.addEventListener('pointerup',e=>{const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.max(Math.abs(dx),Math.abs(dy))<30)return;Math.abs(dx)>Math.abs(dy)?mv(dx>0?1:-1):dy<0?jmp():sld()});
document.querySelectorAll('#tc button').forEach(b=>b.onpointerdown=e=>{e.preventDefault();({l:()=>mv(-1),r:()=>mv(1),j:jmp,s:sld})[b.dataset.a]()});
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseG()});
const X=(l,s)=>W/2+(l-1-(cam-1)*.5)*LW*s,gy=s=>hy+(gb-hy)*s,SC=d=>1/(1+d/9);
function box(l,s,w,h0,h1,c){const x=X(l,s),pw=w*LW*s,y0=gy(s)-h0*U*s,y1=gy(s)-h1*U*s;g.fillStyle=c+'cc';g.fillRect(x-pw/2,y1,pw,y0-y1);g.strokeStyle=c;g.lineWidth=Math.max(1,3*s);g.strokeRect(x-pw/2,y1,pw,y0-y1)}
function portal(s){const x=X(1,s),y=gy(s)-1.6*U*s,rx=1.7*LW*s,ry=2.1*U*s;g.fillStyle='#b22fff44';g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.fill();g.lineWidth=Math.max(2,8*s);g.strokeStyle=`hsl(${(T*120)%360},100%,60%)`;g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.stroke()}
function draw(){if(st=='learn')return;if(st=='port'){g.fillStyle='#050818';g.fillRect(0,0,W,H);for(let i=0;i<14;i++){const r=((PT*.6+i/14)%1)*Math.hypot(W,H);g.strokeStyle=`hsl(${PAL[sub][3]+i*18+T*90},100%,${40+r/Math.hypot(W,H)*30}%)`;g.lineWidth=6;g.beginPath();g.ellipse(W/2,H/2,r,r*.8,T,0,7);g.stroke()}g.fillStyle='#fff';g.font='bold 26px system-ui';g.textAlign='center';g.fillText('Entering the Quiz Portal…',W/2,H/2);return}
const sh=shake>0?(Math.random()-.5)*10:0,P=PAL[sub];g.save();g.translate(sh,sh);
let gr=g.createLinearGradient(0,0,0,hy);gr.addColorStop(0,P[0]);gr.addColorStop(.6,P[1]);gr.addColorStop(1,P[2]);g.fillStyle=gr;g.fillRect(-10,-10,W+20,hy+10);
g.fillStyle='#fff3';for(let i=0;i<40;i++)g.fillRect((i*97.3-cam*3)%W,(i*53.7)%(hy*.7),2,2);g.fillStyle='#ffffffaa';g.beginPath();g.arc(W*.75-cam*6,hy*.35,hy*.12,0,7);g.fill();
for(let i=0;i<4;i++){const x=((i*W*.33+T*(6+i*3))%(W*1.2))-W*.1-cam*8*(i%2+1),y=hy*(.25+i*.15)+Math.sin(T+i)*5;g.fillStyle='#0b1030aa';g.beginPath();g.ellipse(x,y,50+i*10,12,0,0,7);g.fill();g.fillStyle=P[2];g.fillRect(x-45-i*8,y-14,90+i*16,5)}
g.fillStyle='#0b1030';g.fillRect(-10,hy,W+20,H);
for(const b of R.bld.slice().reverse()){const d=b.wz-R.dist;if(d<-2)continue;const s=SC(d),x1=X(b.l-.75,s),x2=X(b.l+.75,s),yb=gy(s),yt=yb-b.h*U*s;g.fillStyle='#10163a';g.fillRect(x1,yt,x2-x1,yb-yt);g.fillStyle=`hsl(${b.c},100%,60%)`;g.fillRect(x1,yt,x2-x1,Math.max(1,3*s));for(let k=1;k<b.h;k+=1.6){g.fillStyle=`hsla(${b.c},100%,70%,.35)`;g.fillRect(x1+3*s,yb-k*U*s,(x2-x1)-6*s,Math.max(1,U*.25*s))}}
g.fillStyle='#10163f';g.beginPath();g.moveTo(X(-.5,0),hy);g.lineTo(X(2.5,0),hy);g.lineTo(X(2.5,1.5),gy(1.5));g.lineTo(X(-.5,1.5),gy(1.5));g.fill();
g.strokeStyle=P[2];g.lineWidth=3;g.beginPath();g.moveTo(X(-.5,0),hy);g.lineTo(X(-.5,1.5),gy(1.5));g.moveTo(X(2.5,0),hy);g.lineTo(X(2.5,1.5),gy(1.5));g.stroke();
g.strokeStyle='#ffffff44';g.lineWidth=1.5;g.beginPath();[.5,1.5].forEach(l=>{g.moveTo(X(l,0),hy);g.lineTo(X(l,1.5),gy(1.5))});for(let k=0;k<16;k++){const d=k*5-R.dist%5;if(d<0)continue;const s=SC(d);g.moveTo(X(-.5,s),gy(s));g.lineTo(X(2.5,s),gy(s))}g.stroke();
if(st=='home')portal(SC(70));
for(const o of R.objs.slice().sort((a,b)=>b.wz-a.wz)){const d=o.wz-R.dist;if(d>80||d<-1.5||o.dead)continue;const s=SC(d);
if(o.t=='block')box(o.l,s,.9,0,1.4,'#ff4fa0');else if(o.t=='bar')box(o.l,s,.9,0,.5,'#ffa02f');else if(o.t=='over'){box(o.l,s,.9,.9,1.6,'#ffe14f');g.fillStyle='#f33';g.beginPath();g.arc(X(o.l,s),gy(s)-1.25*U*s,4*s+1,0,7);g.fill()}
else if(o.t=='orb'){const x=X(o.l,s),y=gy(s)-(o.h+.5)*U*s,r=U*.2*s;g.fillStyle='#ffd23f55';g.beginPath();g.arc(x,y,r*1.8,0,7);g.fill();g.fillStyle='#ffd23f';g.beginPath();g.arc(x,y,r,0,7);g.fill()}
else if(o.t=='portal')portal(s);
else if(o.t=='gate'){g.strokeStyle='#ffd23f';g.lineWidth=4*s+1;g.beginPath();g.moveTo(X(-.5,s),gy(s)-2.6*U*s);g.lineTo(X(2.5,s),gy(s)-2.6*U*s);g.stroke();for(let l=0;l<3;l++){const x=X(l,s),pw=LW*.9*s,ph=2.2*U*s,y=gy(s)-ph-.2*U*s,good=o.open&&l==o.ans,bad=o.dis[l],sel=st=='ask'&&o===cur&&pl.l==l;g.fillStyle=good?'#0a6a3a':bad?'#5a1020':'#0b2a55';g.fillRect(x-pw/2,y,pw,ph);g.lineWidth=sel?4:2;g.strokeStyle=sel?'#ffd23f':good?'#3dff9a':bad?'#ff4a6a':'#20d6ff';g.strokeRect(x-pw/2,y,pw,ph);g.fillStyle='#ff4fa0';g.font=`bold ${Math.max(10,34*s)}px system-ui`;g.textAlign='center';g.fillText('ABC'[l],x,y+34*s+4);g.fillStyle='#fff';g.font=`${Math.max(8,13*s)}px system-ui`;g.fillText(o.opts[l],x,y+ph*.6,pw-6)}}}
drawPl();for(const p of R.parts){g.fillStyle=p.c;g.globalAlpha=Math.max(0,p.life);g.fillRect(p.x,p.y,4,4)}g.globalAlpha=1;
g.textAlign='center';for(const p of R.pops){g.globalAlpha=Math.max(0,p.life);g.fillStyle=p.c;g.font='bold 20px system-ui';g.fillText(p.t,p.x,p.y)}g.globalAlpha=1;
if(st=='count'){g.fillStyle='#fff';g.font='bold 90px system-ui';g.fillText(Math.ceil(R.ct)||'GO!',W/2,H*.4)}g.restore()}
function drawPl(){const x=X(pl.lx,1),y=gb-pl.jy*U,m=st=='play'?'run':st=='end'?'cel':'idle',ph=T*(m=='run'?14:3);if(R.inv>0&&Math.floor(T*20)%2)g.globalAlpha=.4;
g.fillStyle='#0006';g.beginPath();g.ellipse(x,gb+4,U*.4*(1-pl.jy*.2),U*.1,0,0,7);g.fill();g.lineCap='round';
if(m=='run'&&Math.random()<.5)R.parts.push({x:x+(Math.random()-.5)*20,y:y,vx:0,vy:-20,life:.3,c:'#20d6ff'});
if(pl.sl>0&&pl.jy==0){g.fillStyle='#20d6ff';g.fillRect(x-U*.5,y-U*.5,U*.9,U*.45);g.fillStyle='#e8f4ff';g.beginPath();g.arc(x+U*.55,y-U*.3,U*.24,0,7);g.fill();g.fillStyle='#0a1840';g.fillRect(x+U*.5,y-U*.38,U*.28,U*.1)}
else{g.strokeStyle='#7a4dff';g.lineWidth=U*.16;for(const k of[-1,1]){const sw=pl.jy>0?.3:Math.sin(ph*k)*.35*(m=='idle'?.2:1);g.beginPath();g.moveTo(x+k*U*.12,y-U*.7);g.lineTo(x+k*U*.12+sw*U,y-(pl.jy>0?U*.3:0));g.stroke()}
const by=m=='idle'?Math.sin(ph)*2:m=='cel'?-Math.abs(Math.sin(T*8))*U*.4:0;g.fillStyle='#ffa02f';g.fillRect(x-U*.36,y-U*1.2+by,U*.16,U*.5);g.fillStyle='#20d6ff';g.fillRect(x-U*.26,y-U*1.25+by,U*.52,U*.6);
g.strokeStyle='#20d6ff';g.beginPath();for(const k of[-1,1]){g.moveTo(x+k*U*.28,y-U*1.15+by);g.lineTo(x+k*U*.4,y-(m=='cel'?U*1.7:U*.8+Math.sin(ph*k)*U*.2)+by)}g.stroke();
g.fillStyle='#e8f4ff';g.beginPath();g.arc(x,y-U*1.45+by,U*.27,0,7);g.fill();g.fillStyle='#0a1840';g.fillRect(x-U*.2+(m=='idle'?Math.sin(T)*3:0),y-U*1.5+by,U*.4,U*.12)}g.globalAlpha=1}
function fx(dt){shake-=dt;for(const p of R.parts){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=300*dt;p.life-=dt}R.parts=R.parts.filter(p=>p.life>0);for(const p of R.pops){p.y-=40*dt;p.life-=dt}R.pops=R.pops.filter(p=>p.life>0)}
function hud(){if(cid<0||st=='home')return;const n=R.objs.filter(o=>o.t=='gate'&&o.open).length;$('ms').textContent=`${C[cid].n} · Question ${Math.min(5,n+(st=='ask'?1:1))}/5 · ⭐ ${R.stars}/15 · x${R.mult}`;$('eb').style.width=R.en+'%';$('sc').textContent=R.sc}
let last=0;function loop(ts){requestAnimationFrame(loop);const dt=Math.min(.05,(ts-last)/1000||0);last=ts;T+=dt;cam+=(pl.lx-cam)*Math.min(1,dt*6);
if(st=='home')scene(dt,4);else if(st=='end')scene(dt,1);else if(st=='port'){PT+=dt;if(PT>1.8){st='count';R.ct=3}}else if(st=='count'){scene(dt,0);R.ct-=dt;if(R.ct<=0)st='play'}else if(st=='play')upd(dt);else if(st=='ask')pl.lx+=(pl.l-pl.lx)*Math.min(1,dt*10);
else if(st=='learn'){LS.t+=dt;if(LS.p&&LS.t>8&&LS.i<C[cid].sc.length-1)ln(1);ls(C[cid].sc[LS.i],LS.t)}
if(st!='pause')fx(dt);draw();hud()}
newRun();show('o-home');homeUI();requestAnimationFrame(loop);
