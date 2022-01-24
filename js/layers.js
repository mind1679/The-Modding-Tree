addLayer("Pr", {
    name: "Proton", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Pr", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF3300",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Protons", // Name of prestige currency
    baseResource: "quarks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("Pr", 11)) gain = gain.mul(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
    title: "Boost Generation",
    description: "Double your quark gain.",
    cost: new Decimal(1),
        },
    },
})
