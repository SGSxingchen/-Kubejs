BlockCrafting.addMultiblockStructure(MultiblockStructureFileBuilder.create(`plane`)
    .file(`kubejs/assets/kubejs/ponder/plane.nbt`)
    .center('create:encased_fan')
    .craftingItem('irons_spellbooks:energized_core')
    .resultEntity("man_of_many_planes:economy_plane")
    .resultAction((level,pos,player)=>{
        player.mainHandItem.count--
    })
    .build()
);