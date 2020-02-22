class Util {
  constructor() {
    this.instance = null
  }
  static getInstance() { // 创建单例
    return this.instance || (this.instance = new Util())
  }
  setRem(designWidth) { // 设置页面的缩放比例
    const _html = document.getElementsByTagName('html')[0];
    const _w = window.innerWidth;
    _html.style.fontSize = _w / designWidth * 100 + 'px'
    const _body = document.body || document.documentElement.body
    _body.style.fontSize = '32px'
  }
}
export default Util.getInstance()