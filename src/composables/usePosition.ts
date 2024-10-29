// 复合组件重复方法

import { computed } from 'vue'

// 复合 - 移动位置方法
interface pos {
	x : number,
	y : number
}
export function usePosition(pos : pos) {

	// 初始化人物位置 + computed 计算属性计算位移
	const STEP = 54;
	const position = computed(() => {
		return {
			left: pos.x * STEP + "px",
			top: pos.y * STEP + "px"
		}
	});

	return { position };


}