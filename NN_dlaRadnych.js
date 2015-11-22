/**
    Name: Nerthus dla Rady
    Drugi plik z dodatku Nerthusa. Zawiera podstawowe zmienne do modyfikacji.
**/
try{

//data i godzina zmian - jeśli były jakieś ważne zmiany na forum to tu ustawia się ich czas - odpowiada za skakanie tarczy
nerthus.dataZmian = '2.11.2010'; //dd.mm.rrrr
nerthus.godzinaZmian = '8:45';   //hh:mm

//Lista osób specjalnych - uprawnieni do używania specjalnych komend na chacie - taki bard bez etykietki
nerthus.NerthusSpec = ["Leira Elamshin","Sihaya","Lechi Chucherko","Ath`Lar Draa`Ilythiiri","Ihoold","Aktibro","Shiraya","Minstrella","Noys Hollyhook-Rumore"];

//lista radnych - możliwość używania komend chatowych i ranga "radny"
nerthus.NerthusRad = ["Rothe","Materios Dragonius","Sanjuro Sadatake"]

//Lista narratorów - możliwość używania *nar i ranga "bard"
nerthus.NerthusNarr = ["Aevenien","Sihaya","Llorando","Vanielle","Snorri",'Materios Dragonius','Demetris','Rothe','Learodus','Saithan','Korano Ligatur','Navu Vruzael'];

//Nazwy rang tych zamiast lvla
nerthus.lvlNames = ['Ciułacz','Łowca Wilków','Tropiciel Zulusów','Poganiacz Goblinów','Piętno Orków','Miłośnik Harpii','Rezun Olbrzymów','Hycel Gnolli','Koszmar Tolloków','Magazynier Pełną Gębą','Zguba Minotaurów','Niszczyciel Szkieletów','Treser Centaurów','Nieustraszony Pogromca Korsarzy','Tańczący z Mumiami','Szabrownik Wraków','Gobliński Kat','Postrach Berserkerów','Władca Kazamatów','Młot na Czarownice','Dręczyciel Praorków','Zguba Czarnej Gwardii','Poskramiacz Furboli','Egzekutor Myświórów','Wielki Inkwizytor','Zaklinacz Arachnidów','Kat Demonisa','Oprawca Maddoków','Potomek Najwyższych','Piekielny Jeźdźca', 'Ponury Żniwiarz','Gwardzista Piekieł','Tytan'];

//Lista vipów - ci z innymi opisami zamiast lvlów lista to ich id!
nerthus.vipList = [16,50,319,6749,7422,9565,6901,2720,3077,10430,10473,2230,513,4146,10406,12002,12932,10372,10880,1558];

//Lista specialnych opisów dla wipów
nerthus.vipNames = ['Teźa','Mulher Má','Niecny drow','Przezacna','Mistrz pióra','Donna Amadonna','Zło wcielone','Fochnisia','Siewca Wiatru','Wschodzące Słońce','Wędrowny Rysownik','Mhroczniś','Zbieracz gumijagód','Gumitruskawka','Latorośle drowa','Głodny hobbit','Latorośle drowa','Boski Wiatr','Boski Wiatr','Zielarka'];

//Info jakie się wyświetla po załadowaniu gry - to czerwone, jeżeli jest '' to nie wyświetla się nic
nerthus.chatInfoStr = '';

//Wiadomość która pojawia się na środku ekranu po starcie gry
//<img src="http://game3.margonem.pl/obrazki/npc/mas/ner_her_1.gif"><font style="font-size:200%; color:#1E90FF">Nerthus Wita</font><img  src="http://game3.margonem.pl/obrazki/npc/mas/ner_her_1.gif">
nerthus.EnterMsg = '';

//mapy do ustawienia sezon,id mapy,link do grafiki
nerthus.mapsArr =
[
    [4,11,'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/maps/dolina_yss_zima.png']
];

//lista dodatkowych skryptów odpalanych w dodatku, tak na przyszłość - dodawać adres skryptu w apostrofach np: 'http://addons.margonem.pl/get/82.js'
nerthus.additionaScripts =
[
    'NN_chatCmd.js',
    'NN_alko.js',
    'NN_night_lights.js'
];

nerthus.graf = {}
nerthus.graf['weather'] = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/weatherIcons.gif'
nerthus.graf['rain']    = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/weather_rain.gif'
nerthus.graf['snow']    = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/weather_snow.jpg'
nerthus.graf['shield']  = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/nerthus_icon.gif'
nerthus.graf['panelTop']= 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/nerthusPanel.png'
nerthus.graf['dazed']   = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/dazed.png'
nerthus.graf['loading'] = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/loadingnerthus.png'
nerthus.graf['chat']    = 'http://cdn.rawgit.com/akrzyz/nerthusaddon/master/img/chatPanel2.png'

g.names.ranks[3] = "Strażnik Słowa"; //"Modelator Czasu"; //"Moderator czatu";
g.names.ranks[4] = "Tkacz Słów"; //"Modelator czasoprzestrzeni"; //"Super moderator";
g.names.ranks[5] = "Trubadur"; //"Męczystruna"; //"Bard";
g.names.ranks[6] = "Piewca Słowa"; //"Modelator struny"; //"Bard + MC";
g.names.ranks[7] = "Radny"; //Radny;

}catch(e){log('NerthusRada Error: '+e.message,1);}

