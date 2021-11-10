class Earth{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.angle= 0;
        this.scale = 3;
        this.sprite = null;
        this.health = 100;
        this.flash = 0;
    }

    draw(ctx){
        this.angle += 0.001;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.angle);
        ctx.drawImage(this.sprite, -(this.sprite.width / 2), -(this.sprite.width / 2));
        ctx.fillStyle = 'rgb(255,0,0,' + this.flash + ')';
        ctx.beginPath();
        ctx.arc(0, 0, this.sprite.width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
        
        this.flash = Math.max(0, this.flash - 0.01);
    }

    hit(){
        this.flash = 0.7;
        this.health -= 5;
    }
}