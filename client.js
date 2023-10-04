// разрешения
Damage.FriendlyFire = false;
BreackGraph.OnlyPlayerBlocksDmg = false;
BreackGraph.WeakBlocks = true;
// делаем возможным ломать все блоки
BreackGraph.BreackAll = true;
// показываем количество квадов
Ui.GetContext().QuadsCount.Value = true;
// разрешаем все чистые блоки
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
// вкл строительные опции
Build.GetContext().Pipette.Value = true;
Build.GetContext().FloodFill.Value = true;
Build.GetContext().FillQuad.Value = true;
Build.GetContext().RemoveQuad.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().FlyEnable.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;
Build.GetContext().BuildRangeEnable.Value = true;

// запрет нанесения урона
Damage.GetContext().DamageOut.Value = false;

// параметры игры
Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";
// создаем команды
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
}

//
var colours = [{ r: 1 }, { b: 1 }, { g: 1 }];
var KRAreaTag = "i";  
var ViewsParameterName = "Views";  
var KRAreas = AreaService.GetByTag(KRAreaTag);  
var KRView = AreaViewService.GetContext().Get("KRView");  
KRView.Color = {r:0};  
KRView.Tags = [KRAreaTag];  
KRView.Enable = true;  
var KRTrigger = AreaPlayerTriggerService.Get("KRTrigger");  
KRTrigger.Tags = [KRAreaTag];  
KRTrigger.Enable = true;  
KRTrigger.OnEnter.Add(function(player) {  
  if (player.Properties.Get('index').Value > colours.length - 2) {
    player.Properties.Get('index').Value = 0;
  } else {
    player.Properties.Get('index').Value++;
  }
  var index = player.Properties.Get('index').Value;
  KRView.Color = colours[index]

  // таймер на 5 секун
  var timer = setInterval(function() {
    if (index < colours.length - 1) {
      index++;
    } else {
      index = 0;
    }
    KRView.Color = colours[index];
  }, 5000);
});

//
var Door = AreaPlayerTriggerService.Get("Door");
Door.Tags = ["do"];
Door.Enable = true;
Door.OnEnter.Add(function(player) {});
//пв
var DoorOpen = AreaPlayerTriggerService.Get("DoorOpenTrigger");
DoorOpen.Tags = ["d"];
DoorOpen.Enable = true;
DoorOpen.OnEnter.Add(function(player) {
  if (player.Properties.Get("door").Value >= 1){
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,15);
  player.Properties.Get("door").Value -= 75;
  player.Ui.Hint.Value = "вы закрыли дверь";
  }else{
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,0);
  player.Properties.Get("door").Value += 75;
  player.Ui.Hint.Value = "вы открыли дверь";
  }
});
WaitingPlayersTime = 1;
BuildBaseTime = 1;
ModeTime = 1;
BaseTime = 1;
BTime = 1;
WaitingStateValue = "Waiting";
BuildModeStateValue = "BuildMode";
ModeStateValue = "Mode";
BaseStateValue = "Base";
WStateValue = "W";
mainTimer = Timers.GetContext().Get("Main");
stateProp = Properties.GetContext().Get("State");
mainTimer.OnTimer.Add(function() {
switch (stateProp.Value) {
case WaitingStateValue:SetBuildMode();
break;
case BuildModeStateValue: SetMode();
break;
case ModeStateValue : SetM();
break;
case BaseStateValue: Set();
break;
case WStateValue: SetWaitingMode();
 }
});
var yellowView = AreaViewService.GetContext().Get("YellowView");
yellowView.Color = {r:0};
yellowView.Tags = ["mak"];
yellowView.Enable = true;
var redtrigger = AreaPlayerTriggerService.Get("redTrigger");
redtrigger.Tags = ["mak"];
redtrigger.Enable = true;
redtrigger.OnEnter.Add(function(player){});

SetWaitingMode();
function SetWaitingMode() {
yellowView.Color = {r:1}
 stateProp.Value = WaitingStateValue;
 mainTimer.Restart(WaitingPlayersTime);
}
function SetBuildMode() {
yellowView.Color = {b:1}
 stateProp.Value = BuildModeStateValue;
 mainTimer.Restart(BuildBaseTime);
}
function SetMode() {
yellowView.Color = {g:1}
 stateProp.Value = ModeStateValue;
 mainTimer.Restart(ModeTime);
}
function SetM() {
yellowView.Color = {b:1}
 stateProp.Value = BaseStateValue;
 mainTimer.Restart(BaseTime);
}
function Set() {
yellowView.Color = {r:1}
 stateProp.Value = WStateValue;
 mainTimer.Restart(BaseTime);
}

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// спавн по входу в команду
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// задаем подсказку
Ui.getContext().Hint.Value = "Hint/BuildBase";

// конфигурация инвентаря
var roomInventory = Inventory.GetContext();
roomInventory.Main.Value = false;
roomInventory.Secondary.Value = false;
roomInventory.Melee.Value = true;
roomInventory.Explosive.Value = false;
roomInventory.Build.Value = true;
roomInventory.BuildInfinity.Value = true;

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 0;
