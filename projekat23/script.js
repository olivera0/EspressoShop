
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex >= slides.length) { slideIndex = 0 }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 2000);
}

function login(ime) {
  if (ime == "" || ime == null || ime.length<3) {
    alert("Niste se ulogovali!");
  } else {
    let uppercaseIme = ime.toUpperCase(); 
    alert("Dobar dan " + uppercaseIme + "!");
  }
}

let ime = prompt("Unesite Vaše ime da biste se ulogovali:");
login(ime);


function ispis(x) {
  let naslovi = ["Iron Flame", "Covek po imenu Uve", "All of us Villan", "Then she was gone", "The Vampire Lestat", "Holly"];
  let opisi = [
    "Ova knjiga nije široko poznata, pa nemam konkretne informacije o njoj. Potrebno je više informacija o autoru ili sadržaju kako bih mogao dati detaljniji pregled.",
    "Roman švedskog autora Fredrika Backmana, prati priču o Oveu, starijem muškarcu koji živi po strogoj rutini i čvrstim uvjerenjima, ali koji se mijenja kroz neobična susretanja s novim susjedima.",
    "Roman američke spisateljice Bryn Greenwood, istražuje kompleksne odnose i moralne dileme kroz priču o Kelliju, djevojčici koja odrasta u teškim okolnostima, i njenom odnosu s muškarcem znatno starijim od nje.",
    "Triler britanske spisateljice Lisa Jewell, prati priču o majci koja traži istinu o nestanku svoje kćeri deset godina kasnije, kada se čini da su se pronašli tragovi koji otkrivaju šokantne tajne.",
    "Roman američkog autora Anne Ricea, drugi je dio serijala Kronike Vampira. Fokusira se na priču o Lestatu de Lioncourt-u, vampiru iz 18. stoljeća, koji postaje centralna figura u vampirskom svijetu.",
    "Holly je kriminalistički roman američkog autora Stivena Kinga, objavljen 2023. godine. Radnja se odvija u fiktivnom gradu Swope, Mejn, i prati privatnog detektiva Hodža koji je unajmljen da istraži nestanak mlade devojčice po imenu Holiv Gibni. Dok Hodž istražuje ovaj slučaj, dublje se zaranja u mračne tajne i zlokobne zavere koje vrebaju ispod površine navodno mirnog grada."];
  let cene = [2400, 1300, 2125, 1800, 1680, 1450];

  let nizCene= cene.push(2000);
    console.log(nizCene);

  alert(`${naslovi[x]}
    Opis knjige: ${opisi[x]}
    Cena: ${cene[x]} dinara`);
}

function Podaci() {
  let f = registracija;
  let ime = f.ime;
  let prezime = f.prezime;
  let email = f.email;
  let poruka = f.poruka;

  event.preventDefault();
  if (ime.value === "" || prezime.value === "" || email.value === "" || poruka.value === "") {
    alert("Molimo vas da popunite sva polja!");
  } else {
    let podaci = "Ime: " + ime.value + "\n" +
      "Prezime: " + prezime.value + "\n" +
      "Email: " + email.value + "\n" +
      "Poruka: " + poruka.value + "\n" +
      "Da li su podaci tacno uneti?";
    alert(podaci);
  }
};

let styleText = document.getElementById('styleText');
styleText.style.fontSize = "40px";
styleText.style.borderBottom = "2px solid white";
let text= document.getElementById('text');
text.innerHTML =" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloremque porro repellendus consequuntur sint suscipit distinctio neque perspiciatis quidem quis nulla itaque, dignissimos placeat modi harum mollitia? Voluptatum quibusdam perferendis labore at voluptates, itaque alias."

let dogadjaji = [
  { naslov: "Obavestenje 1", datum: "2024-05-01", lokacija: "Beograd" },
  { naslov: "Obavestenje 2", datum: "2024-05-15", lokacija: "Novi Sad" },
  { naslov: "Obavestenje 3", datum: "2024-06-02", lokacija: "Nis" }
];
alert("Imamo par dogadjaja koja mozete proveriti na nasoj stranici: "+ dogadjaji.length);

