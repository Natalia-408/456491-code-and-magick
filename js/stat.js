var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SWING = 10; // размер тени
var CLOUD_X = 100;  // координата Х облака
var CLOUD_Y = 10; // координата Y  облака
var BAR_HEIGHT = 150; // высота гистограммы
var COLUMN_WIDTH = 40; // ширина столбика гистограммы
var COLUMN_SPACE = 50; // ширина пробела между столбиками
var TEXT_HEIGHT = 20; // высота строки текста
var TEXT_WIDTH = 50; // отступ текста от края облака

var FONT_SWING = 16;

// отрисовка облака
var createCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
// выбор максимального результата игроков
function getMaxElement(times) {
  var maxTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function(ctx, players, times) {
  createCloud(ctx, CLOUD_X + SWING, CLOUD_Y + SWING, 'rgba(0, 0, 0, 0.7)');
  createCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var barWidth = (COLUMN_WIDTH + COLUMN_SPACE) * players.length;
  var beginX = (CLOUD_WIDTH - barWidth)/2;


  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + SWING + TEXT_WIDTH, CLOUD_Y + SWING + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + SWING + TEXT_WIDTH, CLOUD_Y + SWING + TEXT_HEIGHT * 2);

  var barStartX = CLOUD_X + beginX;
  var barStartY = CLOUD_Y + SWING + TEXT_HEIGHT * 3;
  var barEndY = barStartY + BAR_HEIGHT;

  for (var i = 0; i < players.length; i++) {

	if (players[i] === 'Вы') {
		ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	} else {
		var randomColor = Math.floor(255 - Math.random()*255);
		ctx.fillStyle = 'rgb(00, 00, ' + randomColor + ')';
	}
  ctx.fillRect(barStartX + beginX +(COLUMN_WIDTH + COLUMN_SPACE) * i, barEndY - (BAR_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
	ctx.fillText(players[i], barStartX + beginX +(COLUMN_WIDTH + COLUMN_SPACE) * i, barEndY + TEXT_HEIGHT);
  }
}
