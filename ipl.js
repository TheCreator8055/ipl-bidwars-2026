const TOTAL_PLAYERS = 220;
const MAX_FOREIGNERS = 6;


const INITIAL_AMOUNT=100, MAX_PLAYERS=15;

const teamNames=[
 "CSK",
 "MI",
 "RCB",
 "KKR",
 "DC",
 "RR",
 "SRH",
 "PBKS",
 "LSG",
 "GT"
];

const teamColors = {
  CSK: "#facc15",   // Yellow
  MI: "#1d4ed8",    // Blue
  RCB: "#dc2626",   // Red
  KKR: "#7c3aed",   // Purple
  DC: "#2563eb",    // Royal Blue
  RR: "#ec4899",    // Pink
  SRH: "#f97316",   // Orange
  PBKS: "#ef4444",  // Red
  LSG: "#0ea5e9",   // Sky Blue
  GT: "#0f766e"     // Teal
};


const teamLogos = {
  CSK: "logos/CSK.jpg",
  MI: "logos/MI.jpg",
  RCB: "logos/RCB.jpg",
  KKR: "logos/KKR.jpg",
  DC: "logos/DC.jpg",
  RR: "logos/RR.jpg",
  SRH: "logos/SRH.jpg",
  PBKS: "logos/PBKS.jpg",
  LSG: "logos/LSG.jpg",
  GT: "logos/GT.jpg"
};



/* ==== IPL 2025 – 220 PLAYERS ==== */
const allPlayers=[
"FAF DUPLESSIS","JAKE FRASER-MCGURK","ROVMAN POWELL","DEWALD BREVIS","DEWON CONWAY","SHIMRON HETMYER","WILL JACKS","TRAVIS HEAD","AIDEN MARKRAM","DAVID WARNER","DAVID MILLER","TIM DAVID","RILLIE ROSSOUW","KANE WILLIAMSON","HARRY BROOK","MARK CHAPMAN","KUSAL PERERA","SHERFANE RUTHERFORD","LHUAN-DRE PRETORIUS","ROHIT SHARMA","VIRAT KOHLI","SHREYAS IYER","RUTURAJ GAIKWAD","SURYAKUMAR YADAV","TILAK VARMA","KARUN NAIR","SHUBMAN GILL","SAI SUDHARSAN","RINKU SINGH","RAJAT PATIDAR","AJINKYA RAHANE","DEVDUTT PADIKKAL","YASHASVI JAISWAL","RIYAN PARAG","NITISH RANA","NEHAL WADHERA","SHASHANK SINGH","VAIBHAV SURYAVANSHI","ANIKET VARMA","AYUSH BADONI","ABHINAV MANOHAR","ANGKRISH RAGHUVANSHI","SAMEER RIZVI","ABDUL SAMAD","ASHUTHOSH SHARMA","SHAIK RASHEED","AYUSH MATHRE","ROBIN MINZ","PRIYANSH ARYA","ANDRE SIDDHRTH","SHUBHAM DUBEY","SACHIN BABY","HENRICH KLAASEN","NICHOLAS POORAN","PHIL SALT","JONNY BAIRSTOW","JAMIE SMITH","QUINTON DE KOCK","RAHMANULLAH GURBAZ","RYAN RICKELTON","JOSH INGLIS","TRISTAN STUBBS","JOS BUTLER","BEN DUCKETT","KUSAL MENDIS","SHAI HOPE","LITTON DAS","DONOVAN FERREIRA","MS DHONI","RISHABH PANT","SANJU SAMSON","KL RAHUL","DHRUV JUREL","ISHAN KISHAN","JITHESH SHARMA","VISHNU VINOD","PRABHSIMRAN SINGH","KUMAR KUSHAGRA","ANUJ RAWAT","URVIL PATEL","VANSH BEDI","ABISHEK POREL","BEN STOKES","LIAM LIVIGSTONE","RACHIN RAVINDRA","DARYL MITCHELL","MITCHELL SANTNER","MOEEN ALI","SAM CURRAN","ANDRE RUSSELL","SUNIL NARINE","MITCHELL MARSH","JACOB BETHELL","GLENN PHILLIPS","KYLE MAYERS","SIKANDAR RAZA","CAMERON GREEN","MARCO JANSEN","ROMARIO SHEPHERD","JASON HOLDER","RASHID KHAN","MARCUS STOINIS","M NABI","GLENN MAXWELL","HARDIK PANDYA","RAVIDRA JADEJA","RAVICHANDRAN ASHWIN","KRUNAL PANDYA","AXAR PATEL","RAMANDEEP SINGH","VENKATESH IYER","SHIVAM DUBE","JAYANTH YADAV","WASHINGTON SUNDAR","KRISHNAPPA GOWTHAM","KARN SHARMA","RISHI DHAWAN","SAI KISHORE","SHARDUL THAKUR","VIJAY SHANKAR","ABHISHEK SHARMA","NITISH KUMAR REDDY","MUSHEER KHAN","VIPRAJ NIGAM","MAHIPAL LOMROR","NISHANTH SINDHU","MOHD.ARSHATH KHAN","M SHARUKH KHAN","ANKUL ROY","SHAHBAZ AHMED","RAJVARDHAN HANGARGEKAR","SONU YADAV","LALIT YADAV","SAMSH MULANI","RAHUL TEWATIA","MAYANK DAGAR","BABA APARJITH","LOCKIE FERGUSON","MITCHELL STARC","JOSH HAZLEWOOD","PAT CUMMINS","ADIL RASHID","ADAM ZAMPA","JOFRA ARCHER","MARK WOOD","ADAM MILNE","JOSH LITTLE","GERALD COETZEE","WANINDU HASARANGA","MAHEESH THEEKSHANA","KESHAV MAHARAJ","TABRAIZ SHAMSI","RASHID KHAN","NOOR AHMAD","ALLAH GHAZANFAR","MATHEESHA PATHIRANA","LUNGI NGIDI","KAGISO RABADA","ANRICH NORTJE","FAZALHAQ FAROOQI","NANDRE BURGER","TRENT BOULT","NUWAN TUSHARA","NATHAN ELLIS","ALZARRI JOSEPH","SHAMAR JOSEPH","NAVEEN UL HAQ","MUJEEB UR RAHMAN","AZMATULLAH OMARZAI","GUS ATKINSON","M SIRAJ","M SHAMI","UMESH YADAV","PRASIDH KRISHNA","ARSHDEEP SINGH","JASPRIT BUMRAH","KHALEEL AHMAD","ANSHUL KAMBOJ","KULDEEP YADAV","Y CHAHAL","HARSHAL PATEL","JAYDEV UNADKAT","BHUVANESHWAR KUMAR","AVESH KHAN","MAYANK MARKANDE","UMRAN MALIK","MAYANK YADAV","MOHIT SHARMA","HARSHITH RANA","SHREYAS GOPAL","DEEPAK CHAHAR","TUSHAR DESHPANDE","MUKESH KUMAR","ISHANTH SHARMA","VARUN CHAKARAVATHY","CHETAN SAKARIYA","RAVI BISHNOI","RAHUL CHAHAR","AKASH DEEP","T NATRAJAN","SANDEEP SHARMA","YASH DAYAL","MOSIN KHAN","DIGVESH SINGH","MUKESH CHOUDHARY","SUYASH SHARMA","AKASH MADWAL","Rashik dhar","GURJAPNEET SINGH","SHREYAS GOPAL","VAIBHAV ARORA","M SIDDHARTH","AKASH SINGH","ASHWANI KUMAR","VYSHAK VIJAYAKUMAR","KULDEEP SEN","RASIKH DHAR","SIMRAJEET SINGH","ZEESHAN ANSARI","YASH THAKUR"

];

const playerUsed={};
allPlayers.forEach(p=>{
 document.getElementById("players").innerHTML+=`<option value="${p}">`;
});

let data=JSON.parse(localStorage.getItem("auction"))||
teamNames.map(t=>({name:t,amount:100,players:[]}));

function render(){
 let sold=0,spent=0,remain=0;
 document.getElementById("teams").innerHTML="";
 let ranking = [...data].map(t=>({
  name:t.name,
  rating:t.players.reduce((a,p)=>a+(p.rating||0),0)
})).sort((a,b)=>b.rating-a.rating);

 data.forEach((t,i)=>{
  sold+=t.players.length;
  spent+=100-t.amount;
  remain+=t.amount;
  const totalRating = t.players.reduce((a,p)=>a+(p.rating||0),0);
  const locked=t.players.length>=15||t.amount<=0;
  document.getElementById("teams").innerHTML+=`
<div class="team ${
  ranking[0]?.name===t.name ? "rank-gold" :
  ranking[1]?.name===t.name ? "rank-silver" :
  ranking[2]?.name===t.name ? "rank-bronze" : ""
} ${locked?"locked":""}"
style="border-left:6px solid ${teamColors[t.name]};">

   <h2 style="display:flex;align-items:center;gap:10px;">
  <img src="${teamLogos[t.name]}" class="team-logo">
  <br>Total Rating: ⭐ ${totalRating.toFixed(1)}

  ${t.name}
${
 ranking[0]?.name===t.name ? " 🥇" :
 ranking[1]?.name===t.name ? " 🥈" :
 ranking[2]?.name===t.name ? " 🥉" : ""
}
${locked ? " 🔒" : ""}

</h2>

   

   Players: ${t.players.length}/15<br>

Foreigners: 
<span style="color:${t.players.filter(p=>p.type==="Foreigner").length >= 6 
  ? "#ef4444" 
  : "#60a5fa"}">
${t.players.filter(p=>p.type==="Foreigner").length}/6
</span>
<br>



   Remaining: <span class="remaining">₹${t.amount.toFixed(2)} Cr</span><br>

   <button class="undo" onclick="undo(${i})">Undo</button>
   <ul>${t.players.map(p=>`<li class="${p.type === 'Foreigner' ? 'player-foreigner' : 'player-indian'}">
  ${p.name} ${p.type === "Foreigner" ? "🌍" : "🇮🇳"} 
–  ₹${p.amount.toFixed(2)} Cr 
– ⭐ ${p.rating}

</li>


`).join("")}</ul>
  </div>`;
 });

 const remainingPlayers = TOTAL_PLAYERS - sold;

 document.getElementById("admin").innerHTML = `
 <h2>ADMIN DASHBOARD</h2>

 <div class="admin-grid">
  <div>
    Players Sold<br>
    <b>${sold} / ${TOTAL_PLAYERS}</b>
  </div>

  <div>
    Remaining Players<br>
    <b>${remainingPlayers} / ${TOTAL_PLAYERS}</b>
  </div>

  <div>
    Total Spent<br>
    <b>₹${spent} Cr</b>
  </div>

  <div>
    Total Remaining Purse<br>
    <b>₹${remain.toFixed(2)} Cr</b>
  </div>
 </div>

 <div class="admin-buy-panel">
   <h3>➕ Buy Player</h3>

   <div class="admin-form">
     <input list="players" id="admin-name" placeholder="Player Name">

     <select id="admin-type">
       <option value="Indian">🇮🇳 Indian</option>
       <option value="Foreigner">🌍 Foreigner</option>
     </select>

     <input type="number" id="admin-rating" placeholder="⭐ Rating" min="1" max="10" step="0.1">

     <input type="number" id="admin-amount" placeholder="₹ Cr">

     <select id="admin-team">
       ${teamNames.map((t,i)=>`<option value="${i}">${t}</option>`).join("")}
     </select>

     <button class="buy" onclick="adminBuy()">Buy</button>
   </div>
 </div>
`;

document.addEventListener("keydown", function(e){

const nameField = document.getElementById("admin-name");
if(!nameField) return;

const active = document.activeElement;

// Ignore if already typing in an input or select (except name field)
if (
  active.tagName === "INPUT" ||
  active.tagName === "SELECT" ||
  active.tagName === "TEXTAREA"
) {
  return;
}

// Only react to normal character keys (letters, numbers, space)
if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
  nameField.focus();
  nameField.value = e.key;   // start typing immediately
  e.preventDefault();
}
});

 localStorage.setItem("auction",JSON.stringify(data));
}

function buy(i){
  const name = document.getElementById(`p-${i}`).value.trim();
  const type = document.getElementById(`t-${i}`).value;
  const amt  = parseFloat(document.getElementById(`a-${i}`).value);
  const rating = parseFloat(document.getElementById(`r-${i}`).value);
  if (isNaN(rating) || rating < 1 || rating > 10) {
  showAlert("⭐ Rating must be between 1 and 10");
  return;
}



  /* BASIC VALIDATION */
  if (!name || isNaN(amt) || amt <= 0) {
    showAlert("⚠️ Enter valid player name and amount");
    return;
  }

  if (playerUsed[name]) {
    showAlert("🚫 Player already sold!");
    return;
  }

  /* MAX PLAYERS CHECK */
  if (data[i].players.length >= MAX_PLAYERS) {
    showAlert("🚫 Maximum 15 players already selected");
    return;
  }

  /* BALANCE CHECK */
  if (amt > data[i].amount) {
    showAlert("💰 Insufficient team balance");
    return;
  }

  /* FOREIGNER LIMIT CHECK */
  const foreignCount = data[i].players.filter(
    p => p.type === "Foreigner"
  ).length;

  if (type === "Foreigner" && foreignCount >= MAX_FOREIGNERS) {
    showAlert(`🌍 Maximum ${MAX_FOREIGNERS} foreign players allowed`);
    return;
  }

  /* ADD PLAYER */
  data[i].players.push({ name, amount: amt, type, rating });
  data[i].amount -= amt;
  playerUsed[name] = true;

  render();
}
document.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    const active = document.activeElement.id;
    if(active.startsWith("admin-")){
      adminBuy();
    }
  }
});

function adminBuy(){
  const name = document.getElementById("admin-name").value.trim();
  const type = document.getElementById("admin-type").value;
  const rating = parseFloat(document.getElementById("admin-rating").value);
  const amt = parseFloat(document.getElementById("admin-amount").value);
  const teamIndex = parseInt(document.getElementById("admin-team").value);

  if (!name || isNaN(amt) || amt <= 0) {
    showAlert("⚠️ Enter valid player name and amount");
    return;
  }

  if (isNaN(rating) || rating < 1 || rating > 10) {
    showAlert("⭐ Rating must be between 1 and 10");
    return;
  }

  if (playerUsed[name]) {
    showAlert("🚫 Player already sold!");
    return;
  }

  const team = data[teamIndex];

  if (team.players.length >= MAX_PLAYERS) {
    showAlert("🚫 Team already has 15 players");
    return;
  }

  if (amt > team.amount) {
    showAlert("💰 Insufficient team balance");
    return;
  }

  const foreignCount = team.players.filter(p=>p.type==="Foreigner").length;
  if (type==="Foreigner" && foreignCount >= MAX_FOREIGNERS) {
    showAlert(`🌍 Max ${MAX_FOREIGNERS} foreign players allowed`);
    return;
  }

  team.players.push({name, amount:amt, type, rating});
  team.amount -= amt;
  playerUsed[name] = true;

  // Clear fields
  document.getElementById("admin-name").value="";
  document.getElementById("admin-rating").value="";
  document.getElementById("admin-amount").value="";
  document.getElementById("admin-name").focus();

  render();
}

function undo(i){
 if(!data[i].players.length)return;
 const p=data[i].players.pop();
 data[i].amount+=p.amount;
 delete playerUsed[p.name];
 render();
}



function exportPDF() {
    let win = window.open("", "", "width=900,height=650");

    let html = `
    <html>
    <head>
        <title>IPL Auction 2025 – PDF Report</title>
        <style>
            body { font-family: Arial; padding: 20px; }
            h1, h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #333; padding: 8px; text-align: left; }
            th { background: #f1f1f1; }
        </style>
    </head>
    <body>
        <h1>IPL Auction 2025 – Final Report</h1>
        <h2>Admin Summary</h2>
        <table>
            <tr>
              <th>TEAM</th>
              <th>Total Sold Player</th>
              <th>Total Remaining Purse (cr)</th>
            </tr>

            <tr>
                <td>10</td>
                <td>${data.reduce((a,t)=>a+t.players.length,0)}</td>
                <td>₹${data.reduce((a,t)=>a+t.amount,0).toFixed(2)} Cr</td>
            </tr>
        </table>
    `;

    data.forEach(team => {
        html += `
        <h2>${team.name}</h2>
        <table>
            <tr>
                <th>Player Name</th>
                <th>Amount (Cr)</th>
                <th>Rating ⭐</th>
            </tr>
        `;
        if (team.players.length === 0) {
            html += `<tr><td colspan="3">No players picked</td></tr>`;
        } else {
            const indianPlayers = team.players.filter(p => p.type === "Indian");
const foreignPlayers = team.players.filter(p => p.type === "Foreigner");

/* ===== INDIAN PLAYERS ===== */
html += `
<tr>
  <th colspan="3" style="background:#e6fffa;color:#065f46;">
    🇮🇳 Indian Players (${indianPlayers.length})
  </th>
</tr>
`;

if (indianPlayers.length === 0) {
  html += `<tr><td colspan="2">None</td></tr>`;
} else {
  indianPlayers.forEach(p => {
    html += `
    <tr>
      <td>${p.name}</td>
      <td>₹${p.amount.toFixed(2)}</td>
      <td>⭐ ${p.rating.toFixed(1)}</td>
    </tr>`;
  });
}

/* ===== FOREIGN PLAYERS ===== */
html += `
<tr>
  <th colspan="3" style="background:#eff6ff;color:#1e40af;">
    🌍 Foreign Players (${foreignPlayers.length})
  </th>
</tr>
`;

if (foreignPlayers.length === 0) {
  html += `<tr><td colspan="2">None</td></tr>`;
} else {
  foreignPlayers.forEach(p => {
    html += `
    <tr>
      <td>${p.name}</td>
      <td>₹${p.amount.toFixed(2)}</td>
      <td>⭐ ${p.rating.toFixed(1)}</td>
    </tr>`;
  });
}

        }
        html += `
            <tr>
              <th>Total Team Rating</th>
              <th colspan="2">
              ⭐ ${team.players.reduce((a,p)=>a+(p.rating||0),0).toFixed(1)}
              </th>
            </tr>

            <tr>
                
                <th>Remaining Balance</th>
                
                <th colspan="2">₹${team.amount.toFixed(2)} Cr</th>

            </tr>
        </table>
        `;
    });

    html += `
        <script>
            window.onload = function () {
                window.print();
            }
        <\/script>
    </body>
    </html>
    `;

    win.document.write(html);
    win.document.close();
}

function showAlert(msg){
  document.getElementById("alertText").innerText = msg;
  document.getElementById("customAlert").classList.add("show");
}

function closeAlert(){
  document.getElementById("customAlert").classList.remove("show");
}


render();

