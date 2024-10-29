import { defineStore } from "pinia";

type Position = {
	x : number,
	y : number
}

//枚举 地板 围墙的显示
/*
 Wall 代表墙壁，用于判断当移动到下一个格子时，如果数组值为1 ，说明触墙
 Floor 代表地板，用于备用在有2的范围内移动过
*/
export enum MapTile {
	Wall = 1,
	Floor = 2
}
export const useMapStore = defineStore('map', () => {
	const map = [
		[1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1]
	]

	// 判断是否触碰墙壁方法
	function isWall(position : Position) {
		return map[position.x][position.y] == MapTile.Wall;
	}

	return { map, isWall }
})