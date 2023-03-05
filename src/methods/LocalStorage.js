const storageMethods = {
  // 存檔
  save (favorite) {
    // 丟進來的東西先做轉型 JSON.stringify
    const favoriteString = JSON.stringify(favorite)
    // hexFavorite 再做寫入，也就是把東西存進去
    localStorage.setItem('myFavorite', favoriteString)
  },
  // 取出
  get () {
    // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
    return JSON.parse(localStorage.getItem('myFavorite'))
  }
}

export default storageMethods
