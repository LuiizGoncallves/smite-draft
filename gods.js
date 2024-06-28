const gods = [
    {
        "godName": "Achilles",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/achilles.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Agni",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/agni.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Ah Muzen Cab",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ah-muzen-cab.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Movement Speed, High Attack Speed"
    },
    {
        "godName": "Ah Puch",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ah-puch.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Amaterasu",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/amaterasu.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Area Damage, High Mobility"
    },
    {
        "godName": "Anhur",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/anhur.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Anubis",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/anubis.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Ao Kuang",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ao-kuang.jpg",
        "role": "Mage",
        "type": "Melee, Magical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Aphrodite",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/aphrodite.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Sustain"
    },
    {
        "godName": "Apollo",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/apollo.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Mobility"
    },
    {
        "godName": "Arachne",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/arachne.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, Great Jungler"
    },
    {
        "godName": "Ares",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ares.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Artemis",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/artemis.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Artio",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/artio.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Sustain"
    },
    {
        "godName": "Athena",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/athena.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Atlas",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/atlas.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Awilix",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/awilix.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Baba Yaga",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/baba-yaga.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Bacchus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/bacchus.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Bakasura",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/bakasura.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Bake Kujira",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/bake-kujira.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Defense"
    },
    {
        "godName": "Baron Samedi",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/baron-samedi.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Crowd Control, High Sustain, Medium Area Damage"
    },
    {
        "godName": "Bastet",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/bastet.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Bellona",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/bellona.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense"
    },
    {
        "godName": "Cabrakan",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cabrakan.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Camazotz",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/camazotz.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Sustain, Great Jungler"
    },
    {
        "godName": "Cerberus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cerberus.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "Medium Crowd Control, Medium Area Damage"
    },
    {
        "godName": "Cernunnos",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cernunnos.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Chaac",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/chaac.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Sustain"
    },
    {
        "godName": "Chang'e",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/change.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Sustain, High Mobility"
    },
    {
        "godName": "Charon",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/charon.jpg",
        "role": "Guardian",
        "type": "Ranged, Magical",
        "pros": "High Mobility"
    },
    {
        "godName": "Charybdis",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/charybdis.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Attack Speed"
    },
    {
        "godName": "Chernobog",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/chernobog.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage, High Attack Speed"
    },
    {
        "godName": "Chiron",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/chiron.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Sustain, High Movement Speed"
    },
    {
        "godName": "Chronos",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/chronos.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "Medium Crowd Control, High Mobility"
    },
    {
        "godName": "Cliodhna",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cliodhna.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Cthulhu",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cthulhu.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Cu Chulainn",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cu-chulainn.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Cupid",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/cupid.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage, High Sustain"
    },
    {
        "godName": "Da Ji",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/da-ji.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Danzaburou",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/danzaburou.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Discordia",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/discordia.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Erlang Shen",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/erlang-shen.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Attack Speed"
    },
    {
        "godName": "Eset",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/eset.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Fafnir",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/fafnir.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Defense, High Mobility"
    },
    {
        "godName": "Fenrir",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/fenrir.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Freya",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/freya.jpg",
        "role": "Mage",
        "type": "Melee, Magical",
        "pros": "High Area Damage, Medium Crowd Control"
    },
    {
        "godName": "Ganesha",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ganesha.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Geb",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/geb.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Gilgamesh",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/gilgamesh.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense"
    },
    {
        "godName": "Guan Yu",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/guan-yu.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Sustain, High Mobility"
    },
    {
        "godName": "Hachiman",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hachiman.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Hades",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hades.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Defense, High Sustain"
    },
    {
        "godName": "He Bo",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/he-bo.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, Medium Crowd Control"
    },
    {
        "godName": "Heimdallr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/heimdallr.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Hel",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hel.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, High Sustain"
    },
    {
        "godName": "Hera",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hera.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Hercules",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hercules.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Sustain"
    },
    {
        "godName": "Horus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/horus.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, High Sustain"
    },
    {
        "godName": "Hou Yi",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hou-yi.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Area Damage, High Single Target Damage"
    },
    {
        "godName": "Hun Batz",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/hun-batz.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Ishtar",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ishtar.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "Medium Area Damage, High Attack Speed"
    },
    {
        "godName": "Ix Chel",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ix-chel.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Crowd Control, High Sustain, Medium Area Damage"
    },
    {
        "godName": "Izanami",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/izanami.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Area Damage, Pusher"
    },
    {
        "godName": "Janus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/janus.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, High Mobility"
    },
    {
        "godName": "Jing Wei",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/jing-wei.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Mobility"
    },
    {
        "godName": "Jormungandr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/jormungandr.jpg",
        "role": "Guardian",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Kali",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/kali.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Sustain"
    },
    {
        "godName": "Khepri",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/khepri.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "King Arthur",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/king-arthur.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Kukulkan",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/kukulkan.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, Pusher"
    },
    {
        "godName": "Kumbhakarna",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/kumbhakarna.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Kuzenbo",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/kuzenbo.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Lancelot",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/lancelot.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Mobility"
    },
    {
        "godName": "Loki",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/loki.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Maman Brigitte",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/maman-brigitte.jpg",
        "role": "Mage",
        "type": "Melee, Magical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Martichoras",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/martichoras.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "Medium Single Target Damage, Medium Area Damage"
    },
    {
        "godName": "Maui",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/maui.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Mobility"
    },
    {
        "godName": "Medusa",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/medusa.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Mercury",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/mercury.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Merlin",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/merlin.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Morgan Le Fay",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/morgan-le-fay.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Mulan",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/mulan.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Ne Zha",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ne-zha.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, Medium Crowd Control"
    },
    {
        "godName": "Neith",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/neith.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Crowd Control, High Sustain"
    },
    {
        "godName": "Nemesis",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/nemesis.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Mobility"
    },
    {
        "godName": "Nike",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/nike.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, Medium Crowd Control"
    },
    {
        "godName": "Nox",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/nox.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Crowd Control"
    },
    {
        "godName": "Nu Wa",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/nu-wa.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "Pusher"
    },
    {
        "godName": "Nut",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/nut.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "Medium Area Damage, High Attack Speed"
    },
    {
        "godName": "Odin",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/odin.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Area Damage, High Crowd Control"
    },
    {
        "godName": "Olorun",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/olorun.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Attack Speed"
    },
    {
        "godName": "Osiris",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/osiris.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, High Attack Speed"
    },
    {
        "godName": "Pele",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/pele.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Persephone",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/persephone.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Poseidon",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/poseidon.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Ra",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ra.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Sustain, Pusher"
    },
    {
        "godName": "Raijin",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/raijin.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "Pusher, High Mobility"
    },
    {
        "godName": "Rama",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/rama.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Mobility, High Attack Speed"
    },
    {
        "godName": "Ratatoskr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ratatoskr.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "Great Jungler, High Mobility"
    },
    {
        "godName": "Ravana",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ravana.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Sustain"
    },
    {
        "godName": "Scylla",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/scylla.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Serqet",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/serqet.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Set",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/set.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Shiva",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/shiva.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Crowd Control"
    },
    {
        "godName": "Skadi",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/skadi.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Crowd Control, Pusher"
    },
    {
        "godName": "Sobek",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/sobek.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Sol",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/sol.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Single Target Damage, High Mobility"
    },
    {
        "godName": "Sun Wukong",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/sun-wukong.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, High Mobility"
    },
    {
        "godName": "Surtr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/surtr.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Susano",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/susano.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Crowd Control, High Mobility"
    },
    {
        "godName": "Sylvanus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/sylvanus.jpg",
        "role": "Guardian",
        "type": "Ranged, Magical",
        "pros": "High Crowd Control, High Sustain"
    },
    {
        "godName": "Terra",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/terra.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Area Damage, High Sustain"
    },
    {
        "godName": "Thanatos",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/thanatos.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Sustain"
    },
    {
        "godName": "The Morrigan",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/the-morrigan.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Thor",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/thor.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage, Medium Crowd Control"
    },
    {
        "godName": "Thoth",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/thoth.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Tiamat",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/tiamat.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Tsukuyomi",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/tsukuyomi.jpg",
        "role": "Assassin",
        "type": "Melee, Physical",
        "pros": "High Single Target Damage"
    },
    {
        "godName": "Tyr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/tyr.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, Medium Crowd Control"
    },
    {
        "godName": "Ullr",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ullr.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Sustain"
    },
    {
        "godName": "Vamana",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/vamana.jpg",
        "role": "Warrior",
        "type": "Melee, Physical",
        "pros": "High Defense, High Sustain"
    },
    {
        "godName": "Vulcan",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/vulcan.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, Pusher"
    },
    {
        "godName": "Xbalanque",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/xbalanque.jpg",
        "role": "Hunter",
        "type": "Ranged, Physical",
        "pros": "High Single Target Damage, Medium Area Damage"
    },
    {
        "godName": "Xing Tian",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/xing-tian.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control"
    },
    {
        "godName": "Yemoja",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/yemoja.jpg",
        "role": "Guardian",
        "type": "Ranged, Magical",
        "pros": "High Sustain"
    },
    {
        "godName": "Ymir",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/ymir.jpg",
        "role": "Guardian",
        "type": "Melee, Magical",
        "pros": "High Crowd Control, High Defense"
    },
    {
        "godName": "Yu Huang",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/yu-huang.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Zeus",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/zeus.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage"
    },
    {
        "godName": "Zhong Kui",
        "photo": "https://webcdn.hirezstudios.com/smite/god-cards/zhong-kui.jpg",
        "role": "Mage",
        "type": "Ranged, Magical",
        "pros": "High Area Damage, Medium Crowd Control"
    }
];