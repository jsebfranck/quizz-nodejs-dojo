'use strict';

var express = require('express');

var app = express();

var capitals = [{
    country: 'Slovénie',
    city: 'Ljubljana'
}, {
    country: 'France',
    city: 'Paris'
}, {
    country: 'Jordanie',
    city: 'Amman'
}, {
    country: 'Allemagne',
    city: 'Berlin'
}, {
    country: 'Nigeria',
    city: 'Abuja'
}, {
    country: 'Ghana',
    city: 'Accra'
}, {
    country: 'Pays-Bas',
    city: 'Amsterdam'
}, {
    country: 'Samoa',
    city: 'Aspia'
}, {
    country: 'Venezuela',
    city: 'Caracas'
} ];

/*
 Abou Dabi	Drapeau des Émirats arabes unis Émirats arabes unis
 Achgabat	Drapeau du Turkménistan Turkménistan
 Addis-Abeba	Drapeau de l'Éthiopie Éthiopie
 Alger	Drapeau de l'Algérie Algérie
 Alofi	Drapeau de Niue Niue
 Andorre-la-Vieille	Drapeau d'Andorre Andorre
 Ankara	Drapeau de la Turquie Turquie
 Antananarivo	Drapeau de Madagascar Madagascar
 Asmara	Drapeau de l'Érythrée Érythrée
 Astana4	Drapeau du Kazakhstan Kazakhstan
 Asuncion	Drapeau du Paraguay Paraguay
 Athènes	Drapeau de la Grèce Grèce
 Avarua	Drapeau des Îles Cook Îles Cook
 Bagdad	Drapeau de l'Irak Irak
 Bakou	Drapeau de l'Azerbaïdjan Azerbaïdjan
 Bamako	Drapeau du Mali Mali
 Bandar Seri Begawan	Drapeau du Brunei Brunei
 Bangkok	Drapeau de la Thaïlande Thaïlande
 Bangui	Drapeau de la République centrafricaine République centrafricaine
 Banjul	Drapeau de la Gambie Gambie
 Basseterre	Drapeau de Saint-Christophe-et-Niévès Saint-Christophe-et-Niévès
 Belgrade	Serbie Serbie
 Belmopan	Drapeau du Belize Belize
 Berlin	Drapeau de l'Allemagne Allemagne
 Berne5	Drapeau de la Suisse Suisse
 Beyrouth	Drapeau du Liban Liban
 Bichkek	Drapeau du Kirghizistan Kirghizistan
 Bissau	Drapeau de la Guinée-Bissau Guinée-Bissau
 Bloemfontein (capitale judiciaire)6	Drapeau de l'Afrique du Sud Afrique du Sud
 Bogota	Drapeau de la Colombie Colombie
 Brasilia	Drapeau du Brésil Brésil
 Bratislava	Drapeau de la Slovaquie Slovaquie
 Brazzaville	Drapeau de la République du Congo République du Congo
 Bridgetown	Drapeau de la Barbade Barbade
 Bruxelles	Drapeau de la Belgique Belgique
 Drapeau de l’Union européenne Union européenne (de facto)
 Bucarest	Drapeau de la Roumanie Roumanie
 Budapest	Drapeau de la Hongrie Hongrie
 Buenos Aires	Drapeau de l’Argentine Argentine
 Bujumbura	Drapeau du Burundi Burundi
 Le Caire	Drapeau de l'Égypte Égypte
 Canberra	Drapeau de l'Australie Australie
 Le Cap (capitale législative)6	Drapeau de l'Afrique du Sud Afrique du Sud
 Castries	Drapeau de Sainte-Lucie Sainte-Lucie
 Chisinau	Drapeau de la Moldavie Moldavie
 Sri Jayawardenapura (administrative et législative)7	Drapeau du Sri Lanka Sri Lanka
 Conakry	Drapeau de la Guinée Guinée
 Copenhague	Drapeau du Danemark Danemark
 Dakar	Sénégal Sénégal
 Damas	Drapeau de la Syrie Syrie
 Dar es Salam (ambassades)8	Drapeau de la Tanzanie Tanzanie
 Delap-Uliga-Darrit (Majuro)9	Drapeau des Îles Marshall Îles Marshall
 Dacca	Drapeau du Bangladesh Bangladesh
 Dili	Drapeau du Timor oriental Timor oriental
 Djibouti	Drapeau de Djibouti Djibouti
 Djoubanote 1	Drapeau du Soudan du Sud Soudan du Sud
 Dodoma8	Drapeau de la Tanzanie Tanzanie
 Doha	Drapeau du Qatar Qatar
 Douchanbé	Drapeau du Tadjikistan Tadjikistan
 Dublin	Drapeau de l'Irlande Irlande
 Erevan	Drapeau de l'Arménie Arménie
 Fagatogo (capitale constitutionnelle)	Drapeau des Samoa américaines Samoa américaines
 Freetown	Drapeau de Sierra Leone Sierra Leone
 Funafuti (Vaiaku)10	Drapeau des Tuvalu Tuvalu
 Gaborone	Drapeau du Botswana Botswana
 Georgetown	Drapeau du Guyana Guyana
 Gibraltar	Drapeau de Gibraltar Gibraltar
 Guatemala	Drapeau du Guatemala Guatemala
 Hagåtña	Drapeau de Guam Guam
 Hamilton	Drapeau des Bermudes Bermudes
 Hanoï	Drapeau de la République socialiste du Viêt Nam Viêt Nam
 Harare	Drapeau du Zimbabwe Zimbabwe
 La Havane	Drapeau de Cuba Cuba
 La Haye (capitale politique)11	Drapeau des Pays-Bas Pays-Bas
 Helsinki	Drapeau de la Finlande Finlande
 Honiara	Drapeau des Salomon Salomon
 Islamabad	Drapeau du Pakistan Pakistan
 Jakarta	Drapeau de l'Indonésie Indonésie
 Jérusalemnote 2	Drapeau d’Israël Israël
 Jérusalem-Est (capitale proclamée)note 3	Drapeau de la Palestine Palestine (État de)27
 Kaboul	Drapeau de l'Afghanistan Afghanistan
 Kampala	Drapeau de l'Ouganda Ouganda
 Katmandou	Drapeau du Népal Népal
 Khartoum	Drapeau du Soudan Soudan
 Kiev	Drapeau de l'Ukraine Ukraine
 Kigali	Drapeau du Rwanda Rwanda
 Kingston	Drapeau de la Jamaïque Jamaïque
 Kingstown	Drapeau de Saint-Vincent-et-les-Grenadines Saint-Vincent-et-les Grenadines
 Kinshasa	Drapeau de la République démocratique du Congo République démocratique du Congo
 Melekeok28	Drapeau des Palaos Palaos
 Koweït	Drapeau du Koweït Koweït
 Kuala Lumpur29	Drapeau de la Malaisie Malaisie
 Libreville	Drapeau du Gabon Gabon
 Lilongwe	Drapeau du Malawi Malawi
 Lima	Drapeau du Pérou Pérou
 Lisbonne	Drapeau du Portugal Portugal
 Ljubljana	Drapeau de la Slovénie Slovénie
 Lomé	Drapeau du Togo Togo
 Londres	Drapeau : Royaume-Uni Royaume-Uni
 Luanda	Drapeau de l'Angola Angola
 Lusaka	Drapeau de la Zambie Zambie
 Luxembourg	Drapeau du Luxembourg Luxembourg
 Madrid	Drapeau de l'Espagne Espagne
 Malabo	Drapeau de la Guinée équatoriale Guinée équatoriale
 Malé	Drapeau des Maldives Maldives
 Managua	Drapeau du Nicaragua Nicaragua
 Manama	Drapeau de Bahreïn Bahreïn
 Manille	Drapeau des Philippines Philippines
 Maputo	Drapeau du Mozambique Mozambique
 Mascate	Drapeau d'Oman Oman
 Maseru	Drapeau du Lesotho Lesotho
 Mbabane	Drapeau du Swaziland Swaziland
 Mexico	Drapeau du Mexique Mexique
 Minsk	Drapeau de la Biélorussie Biélorussie
 Mogadiscio (Muqdisho30)	Drapeau de la Somalie Somalie
 Monaco	Drapeau de Monaco Monaco
 Monrovia	Drapeau du Libéria Liberia
 Montevideo	Drapeau de l'Uruguay Uruguay
 Moroni	Drapeau des Comores Comores
 Moscou	Drapeau de la Russie Russie
 Nairobi	Drapeau du Kenya Kenya
 Nassau	Drapeau des Bahamas Bahamas
 Naypyidaw 31	Drapeau de la Birmanie Birmanie
 N'Djaména	Drapeau du Tchad Tchad
 New Delhi	Drapeau de l'Inde Inde
 Niamey	Drapeau du Niger Niger
 Nicosie	Drapeau de Chypre Chypre
 Nouakchott	Drapeau de la Mauritanie Mauritanie
 Nuku'alofa	Drapeau des Tonga Tonga
 Oslo	Drapeau de la Norvège Norvège
 Ottawa	Drapeau du Canada Canada
 Ouagadougou	Drapeau du Burkina Faso Burkina Faso
 Oulan-Bator	Drapeau de la Mongolie Mongolie
 Palikir	Drapeau des États fédérés de Micronésie Micronésie
 Panama	Drapeau du Panama Panama
 Paramaribo	Drapeau du Suriname Suriname
 Paris	Drapeau de la France France
 La Paz (gouvernement et ambassades)32	Drapeau de la Bolivie Bolivie
 Pékin	Drapeau de la République populaire de Chine Chine
 Phnom Penh	Drapeau du Cambodge Cambodge
 Podgorica	Monténégro Monténégro
 Port Moresby	Drapeau de la Papouasie-Nouvelle-Guinée Papouasie-Nouvelle-Guinée
 Port-au-Prince	Drapeau d'Haïti Haïti
 Port-d'Espagne	Drapeau de Trinité-et-Tobago Trinité-et-Tobago
 Port-Louis	Drapeau de Maurice Maurice
 Porto-Novo (constitutionnelle, gouvernement et ambassades)33	Drapeau du Bénin Bénin
 Port-Vila	Drapeau du Vanuatu Vanuatu
 Prague	Drapeau de la République tchèque République tchèque
 Praia	Drapeau du Cap-Vert Cap-Vert
 Pretoria (capitale administrative)6	Drapeau de l'Afrique du Sud Afrique du Sud
 Putrajaya (capitale administrative)29	Drapeau de la Malaisie Malaisie
 Pyongyang	Drapeau de la Corée du Nord Corée du Nord
 Quito	Drapeau de l'Équateur Équateur
 Rabat	Drapeau du Maroc Maroc
 Ramallah (capitale de facto)note 3	Drapeau de la Palestine Palestine27
 Reykjavik	Drapeau de l'Islande Islande
 Riga	Drapeau de la Lettonie Lettonie
 Riyad	Drapeau de l'Arabie saoudite Arabie saoudite
 Rome	Drapeau de l'Italie Italie
 Roseau	Drapeau de la Dominique Dominique
 Saint John's	Drapeau d'Antigua-et-Barbuda Antigua-et-Barbuda
 Saint-Domingue	Drapeau de la République dominicaine République dominicaine
 Saint-Georges	Drapeau de Grenade Grenade
 Saint-Marin	Drapeau de Saint-Marin Saint-Marin
 San José	Drapeau du Costa Rica Costa Rica
 San Salvador	Drapeau du Salvador Salvador
 Sanaa	Drapeau du Yémen Yémen
 Santiago	Drapeau du Chili Chili
 São Tomé	Drapeau de Sao Tomé-et-Principe Sao Tomé-et-Principe
 Sarajevo	Drapeau de la Bosnie-Herzégovine Bosnie-Herzégovine
 Séoul	Drapeau de la Corée du Sud Corée du Sud
 Singapour	Drapeau de Singapour Singapour
 Skopje	Drapeau de la Macédoine Macédoine
 Sofia	Drapeau de la Bulgarie Bulgarie
 Stockholm	Drapeau de la Suède Suède
 Sucre (constitutionnelle)32	Drapeau de la Bolivie Bolivie
 Suva	Drapeau des Fidji Fidji
 Tachkent	Drapeau de l'Ouzbékistan Ouzbékistan
 Tallinn	Drapeau de l'Estonie Estonie
 Tarawa-Sud34	Drapeau des Kiribati Kiribati
 Tbilissi	Drapeau de la Géorgie Géorgie
 Tegucigalpa	Drapeau du Honduras Honduras
 Téhéran	Drapeau de l'Iran Iran
 Tel Aviv-Jaffanote 2	Drapeau d’Israël Israël
 Thimphou	Drapeau du Bhoutan Bhoutan
 Tirana	Drapeau de l'Albanie Albanie
 Tokyo	Drapeau du Japon Japon
 Tripoli	Drapeau de la Libye Libye
 Tunis	Drapeau de la Tunisie Tunisie
 Vaduz	Drapeau du Liechtenstein Liechtenstein
 La Valette	Drapeau de Malte Malte
 Varsovie	Drapeau de la Pologne Pologne
 Vatican	Drapeau du Vatican Vatican
 Victoria	Drapeau des Seychelles Seychelles
 Vienne	Drapeau de l'Autriche Autriche
 Vientiane	Drapeau du Laos Laos
 Vilnius	Drapeau de la Lituanie Lituanie
 Washington D.C.	Drapeau des États-Unis États-Unis
 Wellington	Drapeau de la Nouvelle-Zélande Nouvelle-Zélande
 Windhoek	Drapeau de la Namibie Namibie
 Yamoussoukro35	Drapeau de la Côte d'Ivoire Côte d'Ivoire
 Yaoundé	Drapeau du Cameroun Cameroun
 Yaren	Drapeau de Nauru Nauru
 Zagreb	Drapeau de la Croatie Croatie
 * */

app.get('/capitals', function(req, res) {
    res.json(capitals);
});

app.listen(4000);
