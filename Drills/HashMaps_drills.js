const Hashmap = require('./hashmap')
const HashMap = require('./hashmap')

const store = [
    ["Hobbit", "Bilbo"], 
    ["Hobbit", "Frodo"], 
    ["Wizard", "Gandalf"], 
    ["Human", "Aragorn"], 
    ["Elf", "Legolas"], 
    ["Maiar", "The Necromancer"],
    ["Maiar", "Sauron"], 
    ["RingBearer", "Gollum"], 
    ["LadyOfLight", "Galadriel"], 
    ["Ent", "Treebeard"],
    ["HalfElven", "Arwen"]
]

function main() {
    const lotr = new HashMap()
    HashMap.MAX_LOAD_RATIO = 0.5
    HashMap.SIZE_RATIO = 3

    store.forEach(c => {
        lotr.set(c[0], c[1])
    })

    console.log(lotr)

    console.log(lotr.get("Hobbit"))
    console.log(lotr.get("Maiar"))
}

main()