// разрешения 
 Damage.FriendlyFire = true; 
 BreackGraph.OnlyPlayerBlocksDmg = false; 
 BreackGraph.WeakBlocks = true; 
 // делаем возможным ломать все блоки 
 BreackGraph.BreackAll = false; 
 // показываем количество квадов 
 Ui.GetContext().QuadsCount.Value = true; 
 // разрешаем все чистые блоки 
 Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 
 // вкл строительные опции 
 Build.GetContext().Pipette.Value = false; 
 Build.GetContext().FloodFill.Value = false; 
 Build.GetContext().FillQuad.Value = false; 
 Build.GetContext().RemoveQuad.Value = false; 
 Build.GetContext().BalkLenChange.Value = false; 
 Build.GetContext().FlyEnable.Value = false; 
 Build.GetContext().SetSkyEnable.Value = false; 
 Build.GetContext().GenMapEnable.Value = false; 
 Build.GetContext().ChangeCameraPointsEnable.Value = false; 
 Build.GetContext().QuadChangeEnable.Value = false; 
 Build.GetContext().BuildModeEnable.Value = false; 
 Build.GetContext().CollapseChangeEnable.Value = false; 
 Build.GetContext().RenameMapEnable.Value = false; 
 Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
 Build.GetContext().LoadMapEnable.Value = false; 
 Build.GetContext().ChangeSpawnsEnable.Value = false; 
 Build.GetContext().BuildRangeEnable.Value = false; 

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
yellowView.Color = {r:1,g:1}
 stateProp.Value = WaitingStateValue;
 mainTimer.Restart(WaitingPlayersTime);
}
function SetBuildMode() {
yellowView.Color = {r:20,g:100,b:150}
 stateProp.Value = BuildModeStateValue;
 mainTimer.Restart(BuildBaseTime);
}
function SetMode() {
yellowView.Color = {r:1,g:1}
 stateProp.Value = ModeStateValue;
 mainTimer.Restart(ModeTime);
}
function SetM() {
yellowView.Color = {r:20,g:100,b:150}
 stateProp.Value = BaseStateValue;
 mainTimer.Restart(BaseTime);
}
function Set() {
yellowView.Color = {r:1,g:1}
 stateProp.Value = WStateValue;
 mainTimer.Restart(BTime);
 }

 //
var pvpAreaTag = "y"; 
var ViewpvpParameterName = "Vivewpvp"; 
var pvpAreas = AreaService.GetByTag(pvpAreaTag); 
var pvpView = AreaViewService.GetContext().Get("pvpView"); 
 pvpView.Color = {r:1}; 
 pvpView.Tags = [pvpAreaTag]; 
 pvpView.Enable = true; 
var pvpTrigger = AreaPlayerTriggerService.Get("pvpTrigger"); 
pvpTrigger.Tags = [pvpAreaTag]; 
pvpTrigger.Enable = true; 
pvpTrigger.OnEnter.Add(function (player){ 
player.Ui.Hint.Value = " питьевые фонтаны ";
}); 

// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player) 
if (player.id  == "BDD0364B24FE93D7"  player.id == "5476D6FE9BCC1E6B" player.id == "A1E3E99D7AE32532" ||player.id == ""){ 
player.inventory.MainInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.Melee.Value = true;  
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = player.inventory.SecondaryInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true; 
player.Build.FillQuad.Value = true; 
player.Build.RemoveQuad.Value = true; 
player.Build.BalkLenChange.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.SetSkyEnable.Value = true; 
player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.QuadChangeEnable.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.CollapseChangeEnable.Value = true; 
player.Build.RenameMapEnable.Value = true; 
player.Build.ChangeMapAuthorsEnable.Value = true; 
player.Build.LoadMapEnable.Value = true; 
player.Build.ChangeSpawnsEnable.Value = true; 
player.Build.BuildRangeEnable.Value = true;
contextedProperties.GetContext(player).SkinType.Value = 0;
player.Properties.Get("aa").Value = "<B><color=red>false</color></B>";
player.Properties.Get("pid").Value = "<B><color=red>босс</color></B>";  
Damage.GetContext(player).DamageIn.Value=false;
 var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger"); 
adminTrigger.Tags = ["admin"]; 
adminTrigger.Enable = true; 
adminTrigger.OnEnter.Add(function(player) { 
 player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true; 
 player.inventory.Secondary.Value = true; 
 player.inventory.SecondaryInfinity.Value = true; 
 player.inventory.Melee.Value = true;
 player.inventory.Build.Value = true; 
 player.inventory.BuildInfinity.Value = true; 
 player.Build.FlyEnable.Value = true; 
});
 } 
}); 
 // запрет нанесения урона 
 Damage.GetContext().DamageOut.Value = false; 
  
 // параметры игры 
 Properties.GetContext().GameModeName.Value = "GameModes/EDITOR"; 
 // создаем команды 
 red = GameMode.Parameters.GetBool("RedTeam"); 
 blue = GameMode.Parameters.GetBool("BlueTeam"); 
 if (red || !red && !blue) { 
         Teams.Add("Red", "<i><B><color=white>◅ RED ▻</color></B></i>", { r: 20, r: 100 }); 
         Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
 } 
 if (blue || !red && !blue) { 
         Teams.Add("Blue", "<i><B><color=white>◅ BLUE ▻</color></B></i>", { b: 20, b: 100 }); 
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
 roomInventory.Melee.Value = false; 
 roomInventory.Explosive.Value = false; 
 roomInventory.Build.Value = false; 
 roomInventory.BuildInfinity.Value = false; 
  
 // моментальный спавн 
 Spawns.GetContext().RespawnTime.Value = 0;
