function addCustomCompactingRecipe(event, config) {
    // 设置默认值
    config = config || {};
    var ingredients = config.ingredients || [];
    var fluidIngredient = config.fluidIngredient;
    var outputItem = config.outputItem;
    var outputCount = config.outputCount || 1;
  
    if (ingredients.length === 0 && !fluidIngredient) {
      console.error("At least one ingredient or fluid is required for compacting recipe");
      return;
    }
  
    if (!outputItem) {
      console.error("Output item is required for compacting recipe");
      return;
    }
  
    var processedIngredients = ingredients.map(function(ingredient) {
      if (typeof ingredient === 'string') {
        return ingredient.startsWith('#') ? { "tag": ingredient.slice(1) } : { "item": ingredient };
      }
      return ingredient;
    });
  
    if (fluidIngredient) {
      processedIngredients.push({
        "amount": fluidIngredient.amount,
        "fluid": fluidIngredient.fluid,
        "nbt": fluidIngredient.nbt || {}
      });
    }
  
    event.custom({
      type: "create:compacting",
      ingredients: processedIngredients,
      results: [
        {
          item: outputItem,
          count: outputCount
        }
      ]
    });
  }
  
  // 使用方法
  ServerEvents.recipes(function(event) {
    // // 原始的燧石和砂砾压缩成安山岩的配方
    // addCustomCompactingRecipe(event, {
    //   ingredients: [
    //     "minecraft:flint",
    //     "minecraft:flint",
    //     "minecraft:gravel"
    //   ],
    //   fluidIngredient: {
    //     amount: 100,
    //     fluid: "minecraft:lava"
    //   },
    //   outputItem: "minecraft:andesite"
    // });
  
    // // 另一个自定义配方示例
    // addCustomCompactingRecipe(event, {
    //   ingredients: [
    //     "minecraft:sand",
    //     "minecraft:sand"
    //   ],
    //   fluidIngredient: {
    //     amount: 50,
    //     fluid: "minecraft:water"
    //   },
    //   outputItem: "minecraft:clay",
    //   outputCount: 2
    // });
  });
  