let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
const herbs = ['hexerei:dried_sage', 'hexerei:dried_belladonna_flowers', 'hexerei:dried_mandrake_flowers', 'hexerei:dried_mugwort_flowers', 'hexerei:dried_mugwort_leaves', 'hexerei:dried_yellow_dock_flowers', 'hexerei:dried_yellow_dock_leaves'];
function getRandomHerb() {
    return herbs[Math.floor(Math.random() * herbs.length)];
}
function addCustomMixingCauldronRecipe(event, config) {
    config = config || {};
    var liquid = config.liquid || "minecraft:water";
    var ingredients = config.ingredients || [];
    var outputItem = config.outputItem;
    var outputCount = config.outputCount || 1;
    var fluidLevelsConsumed = config.fluidLevelsConsumed || 0;
  
    if (!outputItem) {
      console.error("Output item is required for mixing cauldron recipe");
      return;
    }
  
    var processedIngredients = ingredients.map(function(ingredient) {
      if (typeof ingredient === 'string') {
        return ingredient.startsWith('#') ? { "tag": ingredient.slice(1) } : { "item": ingredient };
      }
      return ingredient;
    });
    while (processedIngredients.length < 8) {
      processedIngredients.push({ item: getRandomHerb() });
    }
    event.custom({
      type: "hexerei:mixingcauldron",
      liquid: {
        fluid: liquid
      },
      ingredients: processedIngredients,
      output: {
        item: outputItem,
        count: outputCount
      },
      liquidOutput: {
        fluid: liquid
      },
      fluidLevelsConsumed: fluidLevelsConsumed
    });
  }
ServerEvents.recipes(function(event) {
    // 原始的烛台配方，使用默认的水和0消耗
    // addCustomMixingCauldronRecipe(event, {
    //   ingredients: [
    //     "minecraft:chain",
    //     "#hexerei:candles",
    //     "#hexerei:candles",
    //     "minecraft:iron_ingot",
    //     "minecraft:iron_ingot",
    //     "minecraft:iron_ingot",
    //     "#hexerei:candles",
    //     "#hexerei:candles"
    //   ],
    //   outputItem: "hexerei:candelabra"
    // });
  
    // // 使用岩浆并消耗1000mB的配方
    // addCustomMixingCauldronRecipe(event, {
    //   liquid: "minecraft:lava",
    //   ingredients: [
    //     "minecraft:blaze_powder",
    //     "minecraft:ghast_tear",
    //     "minecraft:nether_wart"
    //   ],
    //   outputItem: "minecraft:fire_charge",
    //   outputCount: 3,
    //   fluidLevelsConsumed: 1000
    // });
});