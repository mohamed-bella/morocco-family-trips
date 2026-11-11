import type { ImageCredit } from "./photos";

export type PlacePhoto = {
  src: string;
  alt: string;
  caption: string;
  credit?: ImageCredit;
};

export const moroccoPlaces = {
  marrakechKoutoubia: {
    src: "/images/morocco-places/marrakech-koutoubia.jpg",
    alt: "Koutoubia Mosque and the surrounding Marrakech medina",
    caption: "Koutoubia Mosque, Marrakech",
  },
  marrakechJemaa: {
    src: "/images/morocco-places/marrakech-jemaa-el-fna.jpg",
    alt: "Fruit and juice stalls in Jemaa el-Fnaa, Marrakech",
    caption: "Jemaa el-Fnaa, Marrakech",
  },
  fesMedina: {
    src: "/images/morocco-places/fes-medina.jpg",
    alt: "Rooftops and minarets above the old medina of Fes",
    caption: "Fes medina",
  },
  chefchaouenBlueCity: {
    src: "/images/morocco-places/chefchaouen-blue-city.jpg",
    alt: "Blue-painted arches and courtyard in Chefchaouen",
    caption: "Chefchaouen's blue medina",
  },
  merzougaDunes: {
    src: "/images/morocco-places/merzouga-dunes.jpg",
    alt: "Camel caravan crossing the orange dunes near Merzouga, Morocco",
    caption: "Erg Chebbi dunes near Merzouga",
  },
  aitBenhaddou: {
    src: "/images/morocco-places/ait-benhaddou.jpg",
    alt: "Earthen kasbah village at Aït Benhaddou near Ouarzazate",
    caption: "Aït Benhaddou",
    credit: { photographer: "said bendlala", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kasbah_Ait_Ben_Haddou_Ouarzazate.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  highAtlas: {
    src: "/images/morocco-places/high-atlas-road.jpg",
    alt: "Snow-dusted High Atlas mountains seen from a mountain crossing in Morocco",
    caption: "High Atlas crossing",
  },
  essaouiraCitadel: {
    src: "/images/morocco-places/essaouira-citadel.jpg",
    alt: "Stone sea ramparts and fishing boats in Essaouira's harbor",
    caption: "Essaouira harbor and ramparts",
  },
  casablancaMosque: {
    src: "/images/morocco-places/casablanca-hassan-ii-mosque.jpg",
    alt: "Open plaza beside Hassan II Mosque in Casablanca",
    caption: "Hassan II Mosque plaza, Casablanca",
  },
  rabatHassanTower: {
    src: "/images/morocco-places/rabat-hassan-tower.jpg",
    alt: "Hassan Tower and its historic grounds in Rabat",
    caption: "Hassan Tower, Rabat",
  },
  tangierMedina: {
    src: "/images/morocco-places/tangier-medina.jpg",
    alt: "Historic whitewashed lanes in the medina of Tangier",
    caption: "Tangier medina",
  },
  agadirBeach: {
    src: "/images/morocco-places/agadir-beach.jpg",
    alt: "Agadir beach and the Atlantic shoreline",
    caption: "Agadir’s Atlantic shoreline",
  },
  meknesBabMansour: {
    src: "/images/morocco-places/meknes-bab-mansour.jpg",
    alt: "Bab Mansour gate beside El Hedim Square in Meknes",
    caption: "Bab Mansour, Meknes",
  },
  volubilisRuins: {
    src: "/images/morocco-places/volubilis-roman-ruins.jpg",
    alt: "Stone remains at the Roman archaeological site of Volubilis",
    caption: "Roman-era remains at Volubilis",
  },
  ifraneForest: {
    src: "/images/morocco-places/ifrane-morocco.jpg",
    alt: "Snow-dusted cedar forest landscape in the Middle Atlas near Ifrane",
    caption: "Winter landscape near Ifrane",
  },
  ouarzazateKasbah: {
    src: "/images/morocco-places/ouarzazate-taourirt-kasbah.jpg",
    alt: "Kasbah Taourirt, a historic earthen kasbah in Ouarzazate",
    caption: "Kasbah Taourirt, Ouarzazate",
  },
  taroudantWalls: {
    src: "/images/morocco-places/taroudant-walls.jpg",
    alt: "Historic earthen ramparts along a palm-lined street in Taroudant",
    caption: "Taroudant city walls",
    credit: { photographer: "Bjørn Christian Tørrissen", sourceUrl: "https://commons.wikimedia.org/wiki/File:Taroudant_City_Walls_2011.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", changes: "Resized to 1440 px wide." },
  },
  paradiseValley: {
    src: "/images/morocco-places/paradise-valley.jpg",
    alt: "Rocky valley, palms and pools in Paradise Valley near Agadir",
    caption: "Paradise Valley",
    credit: { photographer: "Kad09", sourceUrl: "https://commons.wikimedia.org/wiki/File:Paradise_valley.JPG", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  skouraKasbah: {
    src: "/images/morocco-places/skoura-kasbah-amridil.jpg",
    alt: "Kasbah Amridil set against the Skoura palm grove landscape",
    caption: "Kasbah Amridil, Skoura",
    credit: { photographer: "Petar Milošević", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kasbah_Amridil,_Marocco_(قصبة_امريديل).jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  dadesGorge: {
    src: "/images/morocco-places/dades-gorge.jpg",
    alt: "Road running through the rocky Dades Gorge in southern Morocco",
    caption: "Dades Gorge",
    credit: { photographer: "Nawfal Kharbach", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_dades_gorge,_southern_Morocco.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  todghaGorge: {
    src: "/images/morocco-places/todgha-gorge.jpg",
    alt: "Tall red rock walls enclosing Todgha Gorge near Tinghir",
    caption: "Todgha Gorge",
    credit: { photographer: "Nawfal Kharbach", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Todgha_Gorges,_Tinghir.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  ouzoudFalls: {
    src: "/images/morocco-places/ouzoud-waterfall.jpg",
    alt: "Water descending the red cliffs at Ouzoud Waterfalls",
    caption: "Ouzoud Waterfalls",
    credit: { photographer: "Antony Stanley", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ouzoud_Waterfall.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", changes: "Resized to 1440 px wide." },
  },
  ourikaValley: {
    src: "/images/morocco-places/ourika-valley.jpg",
    alt: "Ourika Valley river flowing beneath the High Atlas mountains",
    caption: "Ourika Valley",
    credit: { photographer: "Bryce Edwards", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ourika_Valley.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", changes: "Resized to 1440 px wide." },
  },
  binElOuidane: {
    src: "/images/morocco-places/bin-el-ouidane-lake.jpg",
    alt: "Bin El Ouidane lake below the Atlas mountain ridges",
    caption: "Bin El Ouidane",
    credit: { photographer: "Hadoumi", sourceUrl: "https://commons.wikimedia.org/wiki/File:بحيرة_سد_بين_الويدان_المغرب.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  aitBouguemez: {
    src: "/images/morocco-places/ait-bouguemez-valley.jpg",
    alt: "Green cultivated floor of Aït Bouguemez Valley surrounded by High Atlas mountains",
    caption: "Aït Bouguemez Valley",
    credit: { photographer: "Mkabriti", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ait_bougmez.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  tiznitWalls: {
    src: "/images/morocco-places/tiznit-medina-walls.jpg",
    alt: "Tiznit’s high earthen walls lining a quiet lane",
    caption: "Tiznit ramparts",
    credit: { photographer: "Anass Sedrati", sourceUrl: "https://commons.wikimedia.org/wiki/File:Between_Walls_of_Tinzit.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  tafraouteRocks: {
    src: "/images/morocco-places/tafroute-painted-rocks.jpg",
    alt: "Large painted granite boulders near Tafraoute",
    caption: "Painted rocks near Tafraoute",
    credit: { photographer: "Cesar.mx22", sourceUrl: "https://commons.wikimedia.org/wiki/File:Painted_Rocks_Trafraoute.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  mirleftCoast: {
    src: "/images/morocco-places/mirleft-coast.jpg",
    alt: "A sandy beach and Atlantic surf at Mirleft",
    caption: "Mirleft Atlantic coast",
    credit: { photographer: "Benailla19811", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mirleft_beach_tiznit_view.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1440 px wide." },
  },
  asilahRamparts: {
    src: "/images/morocco-places/asilah-ramparts.jpg",
    alt: "Atlantic surf beside the fortified old medina walls of Asilah",
    caption: "Asilah’s Atlantic ramparts",
    credit: { photographer: "RACHID BAYA", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_ramparts_of_the_Old_Medina_of_Asilah.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1280 px wide." },
  },
  tetouanMedina: {
    src: "/images/morocco-places/tetouan-medina.jpg",
    alt: "The Tetouan kasbah and medina area with the Rif mountains behind it",
    caption: "Medina and kasbah area, Tétouan",
    credit: { photographer: "Ideophagous", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tetouan,_near_the_Medina_and_Qasba.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1920 px wide." },
  },
  elJadidaCistern: {
    src: "/images/morocco-places/el-jadida-cistern.jpg",
    alt: "Stone columns and vaulted ceiling reflected in El Jadida’s Portuguese Cistern",
    caption: "Portuguese Cistern, El Jadida",
    credit: { photographer: "Axel Rouvin", sourceUrl: "https://commons.wikimedia.org/wiki/File:El_Jadida_cistern.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", changes: "Resized to 1920 px wide." },
  },
  zagoraMount: {
    src: "/images/morocco-places/zagora-mount.jpg",
    alt: "Camel caravan beside Mount Zagora in southern Morocco",
    caption: "Mount Zagora and a camel caravan",
    credit: { photographer: "YoTuT", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mount_Zagora,_Morocco_(5422834133)_(6).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", changes: "Resized to 1920 px wide." },
  },
  rissaniKsar: {
    src: "/images/morocco-places/rissani-ksar.jpg",
    alt: "Traditional earthen ksar beside a palm-lined square in Rissani",
    caption: "Ksar Abou Aam, Rissani",
    credit: { photographer: "Hmidanix", sourceUrl: "https://commons.wikimedia.org/wiki/File:Abou_Aam_the_main_Ksar_in_Rissani.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1920 px wide." },
  },
  imlilVillage: {
    src: "/images/morocco-places/imlil-village.jpg",
    alt: "Imlil village and cultivated valley beneath the High Atlas mountains",
    caption: "Imlil viewed from Aroumd",
    credit: { photographer: "DimiTalen", sourceUrl: "https://commons.wikimedia.org/wiki/File:Overview_of_Imlil_from_Aroumd,_Morocco,_2008.jpg", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", changes: "Resized to 1920 px wide." },
  },
  dakhlaDunes: {
    src: "/images/morocco-places/dakhla-lagoon.jpg",
    alt: "Calm lagoon water curving between the pale White Dune and desert shore near Dakhla",
    caption: "White Dune lagoon, Dakhla",
    credit: { photographer: "Houssain tork", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dunes_blanches_dakhla.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", changes: "Resized to 1280 px wide." },
  },
  agdzDraaValley: {
    src: "/images/morocco-places/agdz-draa-valley.jpg",
    alt: "Palm grove and earthen settlements spread across the Drâa Valley near Agdz",
    caption: "Drâa Valley near Agdz",
    credit: { photographer: "Richard Allaway", sourceUrl: "https://commons.wikimedia.org/wiki/File:Extreme_Environments_-_Looking_south_along_the_Dr%C3%A2a_Valley_from_Agdz,_Morocco_(32527406943).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", changes: "Resized to 1920 px wide." },
  },
} satisfies Record<string, PlacePhoto>;
