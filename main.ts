scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    info.setScore(carnival.getTimerValue())
    info.score()
    web.open("https://115.111.238.147:889/api/ECommReflection?playername=" + info.score() + "&score=" + info.score() + "&gname=Maze")
    game.over(true)
})
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
carnival.startTimer()
