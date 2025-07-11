const dogFacts = [
  {
    breed: 'Golden Retriever',
    desc: 'Golden Retriever to przyjazny, inteligentny i bardzo lojalny pies rodzinny. Świetnie sprawdza się jako pies przewodnik.',
    fact: 'Golden Retrievery uwielbiają wodę i są doskonałymi pływakami.',
    size: 'duży'
  },
  {
    breed: 'Shiba Inu',
    desc: 'Shiba Inu to mały, zwinny pies z Japonii. Jest niezależny, czujny i bardzo odważny.',
    fact: 'Shiba Inu słynie z charakterystycznego "uśmiechu" i głośnego "krzyku shiby".',
    size: 'mały'
  },
  {
    breed: 'Beagle',
    desc: 'Beagle to wesoły, energiczny pies gończy o doskonałym węchu. Jest bardzo towarzyski i łagodny.',
    fact: 'Beagle są często wykorzystywane na lotniskach do wykrywania nielegalnych substancji.',
    size: 'średni'
  },
  {
    breed: 'Samoyed',
    desc: 'Samoyed to pies o śnieżnobiałej sierści i "uśmiechniętym" pysku. Jest bardzo przyjazny i łagodny.',
    fact: 'Samoyedy były wykorzystywane przez ludy Syberii do ciągnięcia sań.',
    size: 'średni'
  },
  {
    breed: 'Mops',
    desc: 'Mops to mały pies o krępej budowie i pomarszczonej mordce. Jest wesoły, towarzyski i bardzo oddany rodzinie.',
    fact: 'Mopsy były ulubieńcami chińskich cesarzy.',
    size: 'mały'
  },
  {
    breed: 'Owczarek niemiecki',
    desc: 'Owczarek niemiecki to bardzo inteligentny, lojalny i wszechstronny pies pracujący. Często pracuje w policji.',
    fact: 'Owczarki niemieckie są znane z niezwykłej zdolności do nauki i posłuszeństwa.',
    size: 'duży'
  },
  {
    breed: 'Dalmatyńczyk',
    desc: 'Dalmatyńczyk to pies o charakterystycznej, cętkowanej sierści. Jest energiczny, inteligentny i bardzo lojalny.',
    fact: 'Dalmatyńczyki są znane z filmu "101 Dalmatyńczyków".',
    size: 'średni'
  },
  {
    breed: 'Pomeranian',
    desc: 'Pomeranian (szpic miniaturowy) to bardzo mały, puszysty pies o żywym temperamencie. Jest inteligentny i odważny.',
    fact: 'Pomeraniany potrafią szczekać głośniej niż niektóre dużo większe psy!',
    size: 'mały'
  },
  {
    breed: 'Boxer',
    desc: 'Boxer to energiczny, wesoły i bardzo lojalny pies rodzinny. Jest inteligentny, odważny i uwielbia zabawę.',
    fact: 'Boxery są znane z charakterystycznego sposobu zabawy przednimi łapami, przypominającego boksowanie.',
    size: 'duży'
  }
];

function getRandomDogFact() {
  return dogFacts[Math.floor(Math.random() * dogFacts.length)];
}

function getRandomDogImage() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => data.message);
}

const randomDogBtn = document.getElementById('random-dog-btn');
if (randomDogBtn) {
  randomDogBtn.addEventListener('click', async function() {
    const resultDiv = document.getElementById('random-dog-result');
    resultDiv.innerHTML = 'Ładowanie...';
    const fact = getRandomDogFact();
    let imgUrl = '';
    try {
      imgUrl = await getRandomDogImage();
    } catch {
      imgUrl = '';
    }
    resultDiv.innerHTML = `
      <div style="max-width:350px; margin:auto; text-align:center;">
        <img src="${imgUrl}" alt="Losowy pies" style="max-width:100%; border-radius:14px; box-shadow:0 2px 8px #ccd; margin-bottom:12px;">
        <h3 style="margin:8px 0 4px 0;">${fact.breed} <span style='font-size:0.95em; color:#888;'>(${fact.size} pies)</span></h3>
        <p style="margin:0 0 4px 0;"><strong>Opis:</strong> ${fact.desc}</p>
        <p style="margin:0;"><strong>Ciekawostka:</strong> ${fact.fact}</p>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  if (sidebar && toggle) {
    function toggleSidebar() {
      sidebar.classList.toggle('sidebar-open');
    }
    toggle.addEventListener('click', toggleSidebar);
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSidebar();
      }
    });
    // Zamknij sidebar po kliknięciu poza nim
    document.addEventListener('click', function(e) {
      if (sidebar.classList.contains('sidebar-open') && !sidebar.contains(e.target) && e.target !== toggle) {
        sidebar.classList.remove('sidebar-open');
      }
    });
  }
});
