function addCustomRollingRecipe(event, config) {
    // 设置默认值
    config = config || {};
    var input = config.input;
    var outputItem = config.outputItem;
    var outputCount = config.outputCount || 1;
    var requiredMod = config.requiredMod;
  
    if (!input) {
      console.error("Input is required for rolling recipe");
      return;
    }
  
    if (!outputItem) {
      console.error("Output item is required for rolling recipe");
      return;
    }
  
    var processedInput = typeof input === 'string'
      ? (input.startsWith('#') ? { "tag": input.slice(1) } : { "item": input })
      : input;
  
    var recipe = {
      type: "createaddition:rolling",
      input: processedInput,
      result: {
        item: outputItem,
        count: outputCount
      }
    };
  
    if (requiredMod) {
      recipe.conditions = [
        {
          type: "forge:mod_loaded",
          modid: requiredMod
        }
      ];
    }
  
    event.custom(recipe);
  }
  
  // 使用方法
ServerEvents.recipes(function(event) {
    // 自定义配方示例
    // addCustomRollingRecipe(event, {
    //     input: "minecraft:iron_ingot",
    //     outputItem: 'createaddition:iron_wire',
    //     outputCount: 3
    // });
});
  