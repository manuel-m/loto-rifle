App();

function App() {
  var $grid = document.getElementById('loto-grid');
  var $topbar = document.getElementById('loto-topbar');
  var modes = ['SQ', 'DQ', 'CP'];
  var mode = modes[0];
  var $modes = document.querySelectorAll('.loto-topbar-tile.mode');

  $grid.addEventListener('click', function(e) {
    e.target.classList.toggle('selected');
  });

  $topbar.addEventListener('click', function(e) {
    var newMode = e.target.innerText;
    if (newMode === mode) return;
    e.target.classList.add('selected');
    mode = newMode;
    for (var i = 0; i < $modes.length; i += 1) {
      var $btn = $modes[i];
      if ($btn.innerText !== mode) {
        $btn.classList.remove('selected');
      }
    }
  });
}
