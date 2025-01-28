function addCustomDryingRackRecipe(event, config) {
    // 设置默认值
    config = config || {};
    var ingredient = config.ingredient;
    var outputItem = config.outputItem;
    var outputCount = config.outputCount || 1;
    var dryingTimeInTicks = config.dryingTimeInTicks || 2000;
  
    if (!ingredient) {
      console.error("Input ingredient is required for drying rack recipe");
      return;
    }
  
    if (!outputItem) {
      console.error("Output item is required for drying rack recipe");
      return;
    }
  
    var processedIngredient = typeof ingredient === 'string'
      ? (ingredient.startsWith('#') ? { "tag": ingredient.slice(1) } : { "item": ingredient })
      : ingredient;
  
    event.custom({
      type: "hexerei:drying_rack",
      ingredients: [processedIngredient],
      output: {
        item: outputItem,
        count: outputCount
      },
      dryingTimeInTicks: dryingTimeInTicks
    });
  }
  
  // 使用方法
  ServerEvents.recipes(function(event) {
    // // 原始的艾蒿花晾干配方
    // addCustomDryingRackRecipe(event, {
    //   ingredient: "hexerei:mugwort_flowers",
    //   outputItem: "hexerei:dried_mugwort_flowers",
    //   dryingTimeInTicks: 2000
    // });
  
    // // 另一个自定义配方示例
    // addCustomDryingRackRecipe(event, {
    //   ingredient: "minecraft:beef",
    //   outputItem: "minecraft:leather",
    //   dryingTimeInTicks: 4000
    // });
  
  });