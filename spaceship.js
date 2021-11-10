class Spaceship{
	constructor(){
		this.sprite = null;
		this.x = 0;
		this.y = 0;
		this.scale = 0.2;
		this.shootTimer = 0;
	}
	
	mouseMove(event){
		this.x = event.offsetX;
	}
	
	draw(ctx){
		let inverseScale = (1/this.scale);
		
		this.shootTimer -= 0.08;
		ctx.save();
		ctx.scale(this.scale, this.scale);
		ctx.translate(this.x * inverseScale, this.y * inverseScale);
		ctx.drawImage(this.sprite, -256, -256);
		ctx.restore();
	}

	canShoot(){
		return (this.shootTimer <= 0);
	}

	shoot(){
		this.shootTimer = 1;
	}
}