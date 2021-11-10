class Laser{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.velocity = 5;
		this.length = 50;
		this.isHit = false;
	}
	
	draw(ctx){
		if (!this.isHit){
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00FF00';
			ctx.beginPath(this.x, this.y);
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x, this.y + this.length);
			ctx.stroke();
		}
		
		this.y -= this.velocity;
	}
}