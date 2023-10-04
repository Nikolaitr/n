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

 //
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
yellowView.Tags = ["buy"];
yellowView.Enable = true;
var redtrigger = AreaPlayerTriggerService.Get("redTrigger");
redtrigger.Tags = ["buy"];
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
yellowView.Color = {r:1,b:1,g:1}
 stateProp.Value = ModeStateValue;
 mainTimer.Restart(ModeTime);
}
function SetM() {
yellowView.Color = {r:0}
 stateProp.Value = BaseStateValue;
 mainTimer.Restart(BaseTime);
}
function Set() {
yellowView.Color = {r:1,b:19}
 stateProp.Value = WStateValue;
 mainTimer.Restart(BTime);
 }

 // запрет нанесения урона 
 Damage.GetContext().DamageOut.Value = false; 
  
 // параметры игры 
 Properties.GetContext().GameModeName.Value = "GameModes/EDITOR"; 
 // создаем команды 
 red = GameMode.Parameters.GetBool("RedTeam"); 
 blue = GameMode.Parameters.GetBool("BlueTeam"); 
 if (red || !red && !blue) { 
         Teams.Add("Red", "Teams/Red", { r: 200 }); 
         Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
 } 
 if (blue || !red && !blue) { 
         Teams.Add("Blue", "Teams/Blue", { b: 200 }); 
         Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1); 
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
