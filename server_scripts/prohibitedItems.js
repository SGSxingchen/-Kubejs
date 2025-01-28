const prohibitedItems = [
  'refurbished_furniture:oak_crate',
  'refurbished_furniture:birch_crate',
  'refurbished_furniture:jungle_crate'
];

BlockEvents.rightClicked(event => {
  if (prohibitedItems.includes(event.block.id)) {
    if (event.player.teamId !== "op") {
      event.cancel();
    }
  }
});