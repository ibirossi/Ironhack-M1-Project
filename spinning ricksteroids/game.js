let ball = new Image;
ball.src = 'images/asteroid.png';
let rick = new Image;
rick.src = 'images/rickfingerEdit3.png'
let pickle = new Image;
pickle.src ='images/pickled.png'
let bubble= new Image;
bubble.src = 'images/bubbles.jpg'
	window.onload = function(){
		let c = document.getElementsByTagName('canvas')[0];
		let w = c.width = 700;
        let h = c.height = 500;
        let border = c.style.border = '1px solid black';
		let ctx = c.getContext('2d');
		let dx = 5, dy = -2;
		let rx= 200, ry =200;
		let x  = 400, y = 100, a = 0;
		let deg2rad = Math.PI / 180;
		let da = 10 * deg2rad;
		let bw = ball.width/2;
		let bh = ball.height/2;
		let lives = 5;
		let mask =0;
		let pickH= 100; 
		let pickW= 50;

		
		
		
		let intervalId = setInterval(function(){
			
			ctx.clearRect( 0, 0, w, h );
			ctx.drawImage (pickle, 500,300);
			

			//ctx.fillStyle = 'white'
			//ctx.fillRect (500,499-mask,300,300)
			//ctx.fill()
			
			if (lives>1){
				ctx.fillStyle= 'green'
			}
			else ctx.fillStyle='red'
			ctx.fillRect (10, 450, 20*lives, 10)
			ctx.fill()
			
			if (lives==0){
				ctx.fillText ('SHIELDS GONE!', 10, 350)
			}

			if (lives==1){
			ctx.fillText ('SHIELDS LOW', 10, 350)
			ctx.fillText ('shields:'+lives, 10, 400)

			}
			else ctx.fillText ('shields:'+lives, 10, 400)
			
			
			//ctx.drawImage (pickled, 500, 200, 10, 20)
			//ctx.fillRect (500,500,100,mask)

			ctx.drawImage (rick, rx, ry)
			
			ctx.translate(x,y);
			ctx.rotate(a);
            ctx.drawImage( ball, -bw, -bh );
            ctx.rotate(-a);                      
			ctx.translate(-x,-y);
			
			
			x += dx;
			a += da;
			y += dy;
			
			
			if ((x-bw < 0) || (x+bw > w)){
				dx *= -1;
				da *= -1;
			}

			if ((y-bh < 0) || (y+bh > h)){
				dy *= -1;
				da *= -1;
			}

			
			if(x<(rx+rick.width) && x+bw>rx && y<(ry+(rick.height)) && y+bh>ry){
				dx *=-1
				
				
				if (lives>0){
					lives--
					//mask += 40
				}

				
					
				//else 
				//alert ('Game Over!')
				//	
				
				//ctx.drawImage (bubble, 500, 499-mask, 200, 200)
				
			}
			
		},10);
	}

    
	