function addCustomPressingRecipe(event, config) {
    // 设置默认值
    config = config || {};
    var ingredient = config.ingredient;
    var outputItem = config.outputItem;
    var outputCount = config.outputCount || 1;
  
    if (!ingredient) {
      console.error("Input ingredient is required for pressing recipe");
      return;
    }
  
    if (!outputItem) {
      console.error("Output item is required for pressing recipe");
      return;
    }
  
    var processedIngredient = typeof ingredient === 'string'
      ? (ingredient.startsWith('#') ? { "tag": ingredient.slice(1) } : { "item": ingredient })
      : ingredient;
  
    event.custom({
      type: "create:pressing",
      ingredients: [processedIngredient],
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
    // 原始的铁锭压制成铁板的配方
    // addCustomPressingRecipe(event, {
    //   ingredient: "#forge:ingots/iron",
    //   outputItem: "create:iron_sheet"
    // });
  
    // // 另一个自定义配方示例
    // addCustomPressingRecipe(event, {
    //   ingredient: "minecraft:gold_ingot",
    //   outputItem: "create:golden_sheet"
    // });
  });
  