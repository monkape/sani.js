
function update(){

	// Cancel loop.
	if( this.request === null ){
		return;
	}

	this.request = window.requestAnimationFrame( this.update );

	// Canvas size changed, rescale animation.
	const canvas = this.context.canvas;
	if( canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight ){
		this.scale();

		if( this.paused )   // If paused stuff won't redraw, that's why.
			this.draw();
	}
	
	if( this.paused ){
		return;
	}

	// Update ball positions.
	this.clear();
	for( const ball of this.balls )
		ball.update();
	this.draw();

}

export { update };