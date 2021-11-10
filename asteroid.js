class Asteroid{
	constructor(x, y, velocity = 2){
		this.x = x;
		this.y = y;
		this.scale = 0.2;
		this.angle = Math.random() * (Math.PI * 2);
		this.velocity = velocity;
		this.sprite = null;
		this.isHit = false;
		this.particles = [];
	}
	
	draw(ctx){
		this.angle += 0.01;
		this.y += this.velocity;

		if (!this.isHit){
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.scale(this.scale, this.scale);
			ctx.rotate(this.angle);
			ctx.drawImage(this.sprite, -(this.sprite.width / 2), -(this.sprite.height / 2));
			ctx.restore();
		}
		
		for (let i = 0; i < this.particles.length; i++){
			this.particles[i].draw(ctx);
		}
	}

	hit(){
		let pCount = Math.floor(Math.random() * 10) + 3;
		this.isHit = true;

		for (let i = 0; i < pCount; i++){
			this.particles.push(new Asteroid_Particle(this.x, this.y));
		}
	}

	getDimensions(){
		return [
			this.sprite.width * this.scale,
			this.sprite.height * this.scale
		];
	}
}

class Asteroid_Particle{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.maxVelocity = 5;
		this.velocity = [
			(Math.random() * this.maxVelocity * 2) - this.maxVelocity,
			(Math.random() * this.maxVelocity * 2) - this.maxVelocity
		]
		this.lifeTime = 1;
	}

	draw(ctx){
		let speedMult = this.lifeTime;
		let fadeMult = -Math.sqrt(1-Math.pow(this.lifeTime, 2)) + 1;

		ctx.fillStyle = 'rgb(150, 150, 150,' + fadeMult + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2, false);
		ctx.fill();
		this.x += this.velocity[0] * speedMult;
		this.y += this.velocity[1] * speedMult;
		this.lifeTime = Math.max(0, this.lifeTime - 0.005);
	}
}