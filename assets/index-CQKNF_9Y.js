!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const e=document.getElementById("container"),t=document.getElementById("passwordInput"),n=document.getElementById("closePlanetForm"),i=document.getElementById("submitPassword"),o=document.getElementById("wishModal"),s=document.getElementById("closeWishModal"),a=document.getElementById("wishName"),r=document.getElementById("wishText"),d=document.getElementById("resetView"),l=document.getElementById("modifyWishBtn"),c=document.getElementById("editWishDiv"),m=document.getElementById("editNameInput"),u=document.getElementById("editWishInput"),p=document.getElementById("editPasswordInput"),y=document.getElementById("saveWishBtn"),E=document.getElementById("cancelWishBtn"),w=document.getElementById("planetFormModal"),I=document.getElementById("passwordInput"),h=document.getElementById("closePasswordInputModal");let f,g,T,v,R,M,x,B,C,b,J,j,S=[],O=new THREE.Vector3,H=new THREE.Vector3,k=null,P=null,z=null;const L="https://tlojtipiijabtnakekwp.supabase.co";async function N(e,t,n,i,o,s,a,r=!0,d=null){const l=new THREE.SphereGeometry(5,28,28),c=new THREE.MeshStandardMaterial({color:16777215*Math.random(),emissive:16777215,emissiveIntensity:2,roughness:1,metalness:0}),m=new THREE.Mesh(l,c);let u,p=0;do{const e=2*Math.random()-1,t=2*Math.random()-1,n=2*Math.random()-1,i=new THREE.Vector3(e,t,n).normalize(),a=80+20*Math.random();u=i.multiplyScalar(a),u.y<-2&&(u.y=-2),m.position.copy(u),m.updateMatrixWorld(!0);const r=(new THREE.Box3).setFromObject(m);let d=!1;s&&s.intersectsBox(r)&&(d=!0);for(let s of o){if((new THREE.Box3).setFromObject(s).intersectsBox(r)){d=!0;break}}if(!d)break;p++}while(p<100);100===p&&(u=new THREE.Vector3(80,-2,0)),m.position.copy(u),m.userData={name:e,wish:t,password:n,pageId:d},o.push(m);const y=new THREE.PointLight(16777215,1,20);y.position.set(0,0,0),m.add(y);const E=new THREE.SphereGeometry(3,10,10),w=new THREE.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.2,blending:THREE.AdditiveBlending}),I=new THREE.Mesh(E,w);if(m.add(I),a){const t=W(e);t.position.set(0,8,0),m.add(t),m.userData.textSprite=t}if(r&&!d){const i=await async function(e,t,n){const i={name:e,wish:t,password:n};try{const e=await fetch(`${L}/functions/v1/moon/saveToNotion`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"},body:JSON.stringify(i)});return e.ok?await e.json():(await e.text(),null)}catch(o){return null}}(e,t,n);if(i){const e=i.pageId,t=i.hashedPassword;m.userData.pageId=e,m.userData.password=t}}i.add(m)}function W(e){const t=document.createElement("canvas"),n=t.getContext("2d");n.font="64px 'Noto Sans KR', sans-serif";const i=n.measureText(e).width;t.width=i,t.height=96,n.font="64px 'Noto Sans KR', sans-serif",n.fillStyle="white",n.fillText(e,0,64);const o=new THREE.CanvasTexture(t),s=new THREE.SpriteMaterial({map:o,transparent:!0}),a=new THREE.Sprite(s);return a.scale.set(.1*t.width,.1*t.height,1),a}function F(e){const t=new THREE.Vector3;e.updateMatrixWorld(),t.setFromMatrixPosition(e.matrixWorld),t.project(g);return{x:(.5*t.x+.5)*window.innerWidth,y:(.5*-t.y+.5)*window.innerHeight}}function X(e,t){const n=document.createElement("span");n.className="password-error-message",n.style.color="red",n.style.fontSize="0.9em",n.style.marginTop="5px",n.textContent=t,e.parentNode.insertBefore(n,e.nextSibling)}function Y(e){const t=T.domElement.getBoundingClientRect();if(b.x=(e.clientX-t.left)/t.width*2-1,b.y=-(e.clientY-t.top)/t.height*2+1,z){C.setFromCamera(b,g);const e=C.intersectObject(z,!0);e.length>0?(n=e[0].object,k!==n&&(k&&D(),k=n,k.material&&k.material.emissive&&(k.material.emissive.set(16777215),k.material.emissiveIntensity=3)),P=e[0].object,document.body.style.cursor="pointer"):(D(),P=null,document.body.style.cursor="default")}else document.body.style.cursor="default";var n}function D(){k&&(k.material&&k.material.emissive&&(k.material.emissive.set(0),k.material.emissiveIntensity=0),k=null)}function U(e){const n=T.domElement.getBoundingClientRect();b.x=(e.clientX-n.left)/n.width*2-1,b.y=-(e.clientY-n.top)/n.height*2+1,C.setFromCamera(b,g);const i=C.intersectObjects(S);if(P&&function(e){w.style.display="block";document.getElementById("planetName").textContent=e.name||"Unknown Planet"}(P),i.length>0){J=i[0].object;const e=F(J);t.style.left=`${e.x}px`,t.style.top=`${e.y+20}px`,t.style.display="grid";document.getElementById("planetName").textContent=J.userData.name,document.getElementById("inputPassword").value="";const n=document.querySelector(".password-error-message");n&&n.remove()}else t.style.display="none";e.stopPropagation()}function V(){a.style.display="block",r.style.display="block",l.style.display="inline",s.style.display="inline",c.style.display="none"}function A(){if(!J)return;const e=m.value.trim(),t=u.value.trim(),n=p.value.trim();if(""===e||""===t||""===n)return void alert("모든 필드를 입력해주세요.");if(!/^\d+$/.test(n))return void alert("비밀번호는 숫자만 입력해주세요.");if(S.some((t=>t.userData.name===e&&t!==J)))alert("이미 존재하는 이름입니다. 다른 이름을 선택해주세요.");else{if(J.userData.name=e,J.userData.wish=t,J.userData.pageId&&async function(e,t,n){const i={Name:{title:[{text:{content:t}}]},Wish:{rich_text:[{text:{content:n}}]}};try{const t=await fetch(`${L}/functions/v1/moon/updateNotion/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"},body:JSON.stringify({properties:i})});t.ok||await t.text()}catch(o){}}(J.userData.pageId,e,t),a.textContent=e,r.textContent=t,J.userData.textSprite){J.remove(J.userData.textSprite);const t=W(e);t.position.set(0,8,0),J.add(t),J.userData.textSprite=t}V()}}window.addEventListener("load",(async()=>{try{const e=await fetch(`${L}/functions/v1/moon/visit`,{mothod:"GET",headers:{Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"}}),t=await e.json();document.getElementById("visitorCount").textContent=`${t.count}`}catch(e){}!async function(t){try{const e=await fetch(`${L}/functions/v1/moon/getNotionData`,{mothod:"GET",headers:{Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"}});if(e.ok){(await e.json()).forEach((e=>{var n,i,o,s,a,r;const d=null==(n=e.properties.Name)?void 0:n.title,l=null==(i=e.properties.Wish)?void 0:i.rich_text,c=d&&(null==(s=null==(o=d[0])?void 0:o.text)?void 0:s.content)||"Unknown",m=l&&(null==(r=null==(a=l[0])?void 0:a.text)?void 0:r.content)||"No wish",u=e.id;t(c,m,null,f,S,B,j,!1,u)}))}}catch(e){}}(N)})),s.addEventListener("click",(e=>{o.style.display="none"})),n.addEventListener("click",(e=>{w.style.display="none"})),h.addEventListener("click",(e=>{I.style.display="none"})),document.getElementById("planetForm").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("name").value.trim(),n=document.getElementById("wish").value.trim(),i=document.getElementById("password").value.trim();if(t&&n&&i){if(!/^\d+$/.test(i))return void alert("비밀번호는 숫자만 입력해주세요.");if(S.some((e=>e.userData.name===t)))return void alert("이미 존재하는 이름입니다. 다른 이름을 선택해주세요.");N(t,n,i,f,S,B,j,!0,null),document.getElementById("name").value="",document.getElementById("wish").value="",document.getElementById("password").value="",document.getElementById("planetFormModal").style.display="none"}else alert("모든 필드를 입력해주세요.")})),i.addEventListener("click",(async function(e){e.stopPropagation();const n=document.getElementById("inputPassword").value.trim(),i=J.userData.pageId,s=document.getElementById("inputPassword"),d=document.querySelector(".password-error-message");d&&d.remove();try{const e=await fetch(`${L}/functions/v1/moon/verifyPassword`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"},body:JSON.stringify({enteredPassword:n,pageId:i})});if(e.ok){"비밀번호가 일치합니다."===(await e.json()).message?(a.textContent=J.userData.name,r.textContent=J.userData.wish,o.style.display="block",t.style.display="none"):X(s,"1번에러 비밀번호가 잘못되었어요.")}else X(s,"2번에러 비밀번호가 잘못되었어요.")}catch(l){X(s,"서버 오류가 발생했습니다. 나중에 다시 시도해주세요.")}})),t.addEventListener("click",(function(e){e.stopPropagation()}));document.getElementById("deletePlanetBtn").addEventListener("click",(e=>{if(J){if(confirm("정말 이 행성을 삭제하시겠습니까?")){const e=J.userData.pageId;e?(!async function(e){try{const t=await fetch(`${L}/functions/v1/moon/deleteNotion/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb2p0aXBpaWphYnRuYWtla3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNTU1OTEsImV4cCI6MjA0MTkzMTU5MX0.Oy4oW0oCnSSV2aIFPJ-NO8cLQjtrqEcrwu1F2nJj-TU"}});t.ok||await t.text()}catch(t){}}(e),function(e){f.remove(e);const t=S.indexOf(e);-1!==t&&S.splice(t,1),e.geometry.dispose(),e.material.dispose(),e=void 0}(J),document.getElementById("planetFormModal").style.display="none",o.style.display="none"):alert("데이터 ID가 없습니다.")}}else alert("삭제할 행성이 선택되지 않았습니다.");e.stopPropagation()})),window.addEventListener("resize",(()=>{T.setSize(window.innerWidth,window.innerHeight),R.setSize(window.innerWidth,window.innerHeight),g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix()})),d.addEventListener("click",(()=>{g.position.copy(O),v.target.copy(H),v.update()})),function(){(new THREE.TextureLoader).load("./assets/milky_way.jpg",(function(e){f.background=e})),f=new THREE.Scene,g=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),g.position.set(0,30,150),O.copy(g.position),T=new THREE.WebGLRenderer({antialias:!0}),T.setSize(window.innerWidth,window.innerHeight),e.appendChild(T.domElement);const t=new THREE.AmbientLight(16777215);f.add(t);const n=new THREE.PointLight(16777215,.8);n.position.set(50,50,50),f.add(n),v=new THREE.OrbitControls(g,T.domElement),v.enableDamping=!0,v.dampingFactor=.05,v.minPolarAngle=Math.PI/4,v.maxPolarAngle=2*Math.PI/5,v.minDistance=100,v.maxDistance=300,H.copy(v.target),C=new THREE.Raycaster,b=new THREE.Vector2,window.addEventListener("mousemove",Y,!1),window.addEventListener("click",U,!1),(new THREE.FontLoader).load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",(function(e){j=e}),void 0,(function(e){}));const i=new THREE.RenderPass(f,g);M=new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth,window.innerHeight),1.5,.4,.85),R=new THREE.EffectComposer(T),R.addPass(i),R.addPass(M),(new THREE.GLTFLoader).load("./assets/moon.glb",(function(e){const t=e.scene;t.scale.set(30,30,30),t.position.set(0,0,0),B=(new THREE.Box3).setFromObject(t),t.userData.isClickable=!0,t.traverse((function(e){e.isMesh&&(e.userData.isClickable=!0)})),z=t,f.add(t)}),void 0,(function(e){})),l.addEventListener("click",(e=>{!function(){if(!J)return;m.value=J.userData.name,u.value=J.userData.wish,p.value="",a.style.display="none",r.style.display="none",l.style.display="none",s.style.display="none",c.style.display="flex",o.style.display="block"}(),o.style.display="block",e.stopPropagation()})),y.addEventListener("click",A),E.addEventListener("click",V)}(),function(){const e=new THREE.PlaneGeometry(1e4,1e4);x=new THREE.Water(e,{textureWidth:512,textureHeight:512,waterNormals:(new THREE.TextureLoader).load("https://threejs.org/examples/textures/waternormals.jpg",(function(e){e.wrapS=e.wrapT=THREE.RepeatWrapping})),alpha:1,sunDirection:new THREE.Vector3,sunColor:16777215,waterColor:0,distortionScale:3.7,reflectivity:.5,fog:void 0!==f.fog}),x.rotation.x=-Math.PI/2,x.position.y=-15,f.add(x)}(),function e(){if(requestAnimationFrame(e),x&&(x.material.uniforms.time.value+=1/60),v.update(),R.render(),"grid"===t.style.display&&J){const e=F(J);t.style.left=`${e.x}px`,t.style.top=`${e.y+20}px`}}();
