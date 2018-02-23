import {playMode} from 'common/js/config'
// 定义状态文件
const state = {
  singer: {},
  playing: false, // 播放状态
  fullScreen: false, // 全屏
  playlist: [], // 播放顺序列表
  sequenceList: [], // 按钮菜单栏播放顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放歌曲索引
}
export default state