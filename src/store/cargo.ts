import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useMapStore } from './map';
import { useCargoTargetStore } from './cargotarget'
interface Cargo {
	x : number,
	y : number
}
type Position = {
	x : number,
	y : number
}
export const useCargoStore = defineStore("cargoArr", () => {
	// 自定义箱子位置
	const cargoArr : Cargo[] = reactive([
		{ x: 2, y: 5 },
		{ x: 4, y: 3 }
	])

	//获取指定地点位置坐标
	const { cargotargetArr } = useCargoTargetStore()

	// 判断是否触墙
	const { isWall } = useMapStore();

	// 判断是否人物推箱子
	function isCargo(position : Position) {
		const isTouch = cargoArr.some(item => {
			return item.x == position.x && item.y == position.y
		})
		return isTouch;
	}

	// 触发人物推动箱子，箱子位移
	function ToTouchCargo(position : Position, status : string) {
		let isToTouchstate : boolean = false;
		cargoArr.forEach(item => {
			if (position.x == item.x && position.y == item.y) {
				switch (status) {
					case 'up':
						if (isWall({ x: item.x, y: item.y - 1 })) return isToTouchstate = true;
						return item.y -= 1

					case 'down':
						if (isWall({ x: item.x, y: item.y + 1 })) return isToTouchstate = true;
						return item.y += 1

					case 'left':
						if (isWall({ x: item.x - 1, y: item.y })) return isToTouchstate = true;
						return item.x -= 1

					case 'right':
						if (isWall({ x: item.x + 1, y: item.y })) return isToTouchstate = true;
						return item.x += 1

				}
			}
		})
		return isToTouchstate
	}

	// 判断是否通关方法
	function IsClearance() {
		let isWinner = false;
		if (JSON.stringify(cargoArr) === JSON.stringify(cargotargetArr)) {
			isWinner = true;
		}
		return isWinner
	}


	return { cargoArr, isCargo, ToTouchCargo, IsClearance }

});