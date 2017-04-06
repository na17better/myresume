/*
* @Author: dell
* @Date:   2017-03-25 19:49:02
* @Last Modified by:   dell
* @Last Modified time: 2017-03-25 20:14:09
*/

'use strict';
var canvas=document.getElementById("myCanvas");
var cxt=canvas.getContext('2d');
 canvas.width=240;
 canvas.height=240;
 cxt.beginPath();
 cxt.arc(120, 120, 120, 0,Math.PI*2,flase);
 cxt.fillStyle="pink";
 cxt.closePath();