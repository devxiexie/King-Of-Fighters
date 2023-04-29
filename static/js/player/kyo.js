import { Player } from "/static/js/player/base.js";
import { GIF } from "/static/js/utils/gif.js";

export class Kyo extends Player {
	constructor(root, info) {
		super(root, info);

		this.init_animations();
	}

	init_animations() {
		let outer = this;
		let offsets_for_x = [0, 0, 0, 0, 0, 0, 0, -230];
		let offsets_for_y = [0, -22, -22, -140, 0, 0, 0, 0];
		for (let i = 0; i < 8; i++) {
			let gif = GIF();
			gif.load(`/static/images/player/kyo/${i}.gif`);
			this.animations.set(i, {
				gif: gif,
				frame_cnt: 0, //total number of images
				frame_rate: 5, //changes image every 5 ms
				offset_x: offsets_for_x[i],
				offset_y: offsets_for_y[i], //offset in y direction
				loaded: false, // is it loaded
				scale: 2, // scale
			});
			gif.onload = function () {
				let obj = outer.animations.get(i);
				obj.frame_cnt = gif.frames.length;
				obj.loaded = true;

				if (i == 3) {
					obj.frame_rate = 4;
				}
			};
		}
	}
}
