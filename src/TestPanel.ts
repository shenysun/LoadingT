class TestPanel extends egret.Sprite {
	public constructor() {
		super();
		this.init();
	}

	private init() {
		let bg: egret.Bitmap = new egret.Bitmap( RES.getRes("loadingBG_jpg"));
		this.addChild(bg);

		let icon_1: egret.Bitmap = new egret.Bitmap(RES.getRes("sjdj_bg2_png"));
		this.addChild(icon_1);
	}
}