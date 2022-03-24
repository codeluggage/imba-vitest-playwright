const $2 = Symbol.for('#beforeReconcile'), $12 = Symbol.for('#placeChild'), $15 = Symbol.for('#afterReconcile'), $21 = Symbol.for('##up'), $22 = Symbol.for('#afterVisit');
var $5 = Symbol(), $11 = Symbol(), $16, $17 = imba_getRenderContext(), $18 = Symbol(), $19, $20;
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, createSVGElement as imba_createSVGElement, defineTag as imba_defineTag, getRenderContext as imba_getRenderContext, mount as imba_mount} from 'imba'/*$path$*/;
import $9 from './logo.svg?as=img'/*$path$*/;

/*body*/
/**
@param {number} input
*/
function answer(input){
	
	if (input === 42) { return true };
	if (input === -42) { return true };
	return false;
};

class AppComponent extends imba_Component {
	
	render(){
		var $1, $3, $4, $6 = this._ns_ || '', $7, $8, $10, $13, $14;
		$1=this;
		$1[$2]();
		($3=$4=1,$1[$5] === 1) || ($3=$4=0,$1[$5]=1);
		$3 || ($7=imba_createElement('header',$1,`${$6}`,null));
		$3 || ($8=imba_createSVGElement('svg',$7,`wkvmqj-ah ${$6}`,null));
		$3 || ($8.set$('src',$9));
		;
		($10=$1[$11]) || ($1[$11]=$10=imba_createElement('p',$7,`${$6}`,null));
		$3 || $10[$12]("Edit ");
		$3 || ($13=imba_createElement('code',$10,`${$6}`,"app/client.imba"));
		;
		$3 || $10[$12](" and save to reload");
		;
		$3 || ($14=imba_createElement('a',$7,`${$6}`,"Learn Imba"));
		$3 || ($14.href="https://imba.io");
		;
		;
		$1[$15]($4);
		return $1;
	}
}; imba_defineTag('app',AppComponent,{});

imba_mount((($19=$20=1,$16=$17[$18]) || ($19=$20=0,$16=$17[$18]=$16=imba_createComponent('app',null,null,null)),
$19 || ($16[$21]=$17._),
$19 || $17.sym || !$16.setup || $16.setup($20),
$17.sym || $16[$22]($20),
$16));

export {answer};

imba_styles.register('wkvmqj',`
html {font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");}

.wkvmqj-ah:not(#_):not(#_):not(#_) {width: 200px;
height: auto;}

app-tag { display:block; }
`);
//# sourceMappingURL=client.js.map