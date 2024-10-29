import { defineStore } from 'pinia';
interface Cargo {
	x : number,
	y : number
}
export const useCargoTargetStore = defineStore("cargotargetArr", () => {
	// 自定义指定位置
	const cargotargetArr : Cargo[] = [
		{ x: 2, y: 6 },
		{ x: 3, y: 3 }
	]
	
	return { cargotargetArr }

});