// ��������� ��������� �������� �������  
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool("Damage"); 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");  
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");  
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");  
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");  
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");  
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");  
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");  
 
// ������ ��������� ������ ��� ����� 
BreackGraph.BreackAll = true; 
// ���������� ���������� ������ 
Ui.GetContext().QuadsCount.Value = true; 
// ��� ������������ �����  
Build.GetContext().Pipette.Value = false;  
Build.GetContext().BalkLenChange.Value = false;  
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
Build.GetContext().FlyEnable.Value = true;  

// ��������� ���� 
Properties.GetContext().GameModeName.Value = "GameModes/Peace"; 
// ������� ������� 
red = GameMode.Parameters.GetBool("RedTeam"); 
blue = GameMode.Parameters.GetBool("BlueTeam"); 
if (red || !red && !blue) { 
 Teams.Add("Red", "<i><B><color=white>◅ RED ▻</color></B></i>", { r: 20, r: 100 }); 
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
} 
if (blue || !red && !blue) { 
 Teams.Add("Blue", "<i><B><color=white>◅ BLUE ▻</color></B></i>", { b: 20, b: 100 }); 
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1); 
 if(GameMode.Parameters.GetBool("BlueHasNothing")){ 
  var inventory = Inventory.GetContext(); 
  Teams.Get("Blue").Inventory.Main.Value = false; 
  Teams.Get("Blue").Inventory.Secondary.Value = false; 
  Teams.Get("Blue").Inventory.Melee.Value = false; 
  Teams.Get("Blue").Inventory.Explosive.Value = false; 
  Teams.Get("Blue").Inventory.Build.Value = false; 
 } 
} 
 
 
 
 
// ��������� ���� � ������� �� �������  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player)  
if (player.id  == "A1E3E99D7AE32532" || player.id == "5476D6FE9BCC1E6B"||player.id == "BD522F7812801DD1"|| player. id == "77E903647242544D"){  
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
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
Damage.GetContext(player).DamageIn.Value = true; 
 var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger");
adminTrigger.Tags = ["admin"];  
adminTrigger.Enable = true;  
adminTrigger.OnEnter.Add(function(player) {  
 player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;  
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;  
 player.Build.FlyEnable.Value = true;  
});  
 }  
});  
// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);}); 
// ����� �� ����� � ������� 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()}); 
 
// ������ ��������� 
Ui.getContext().Hint.Value = "Hint/BuildBase"; 
 
// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 
 
// ��������� ��� ������ ����� 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 
 
// ������������ �����  
Spawns.GetContext().RespawnTime.Value = 0; var pvpAreaTag = "p";  
var ViewpvpParameterName = "Vivewpvp";  
var pvpAreas = AreaService.GetByTag(pvpAreaTag);  
var pvpView = AreaViewService.GetContext().Get("pvpView");  
 pvpView.Color = { r:150, g: 0, b: 0 };  
 pvpView.Tags = [pvpAreaTag];  
 pvpView.Enable = true;  
var pvpTrigger = AreaPlayerTriggerService.Get("pvpTrigger");  
pvpTrigger.Tags = [pvpAreaTag];  
pvpTrigger.Enable = true;  
pvpTrigger.OnEnter.Add(function (player){  
player.Ui.Hint.Value = "онлайн: "+ Players.Count;});  
pvpTrigger.OnExit.Add(function (player){  
player.Ui.Hint.Value = " ";  
});var banAreaTag = "a";  
var ViewbanParameterName = "Vivewban";  
var banAreas = AreaService.GetByTag(banAreaTag);  
var banView = AreaViewService.GetContext().Get("banView");  
 banView.Color = {g:1};  
 banView.Tags = [banAreaTag];  
 banView.Enable = true;  
var banTrigger = AreaPlayerTriggerService.Get("banTrigger");  
banTrigger.Tags = [banAreaTag];  
banTrigger.Enable = true;  
banTrigger.OnEnter.Add(function (player) {  
player.Build.Pipette.Value = true;  
player.Build.FloodFill.Value = false;  
player.Build.FillQuad.Value = false;  
player.Build.RemoveQuad.Value = false;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = false;  
player.Build.GenMapEnable.Value = false;  
player.Build.ChangeCameraPointsEnable.Value = false;  
player.Build.QuadChangeEnable.Value = false;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = false;  
player.Build.RenameMapEnable.Value = false;  
player.Build.ChangeMapAuthorsEnable.Value = false;  
player.Build.LoadMapEnable.Value = false;  
player.Build.ChangeSpawnsEnable.Value = false;  
player.Build.BuildRangeEnable.Value = false;  
player.Damage.DamageIn.Value = true;  
player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;  
player.inventory.Main.Value = true;  
player.inventory.Secondary.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = false;  
player.inventory.MainInfinity.Value = true;  
player.inventory.SecondaryInfinity.Value = true;  
player.inventory.ExplosiveInfinity.Value = false; 
});var mlllsAreasTag = "ffgg";  
AreaService.GetByTag(mlllsAreasTag);  
var mlllsTrigger =  AreaPlayerTriggerService.Get("mlllsTrigger");  
mlllsTrigger.Tags = [mlllsAreasTag];   
mlllsTrigger.Enable = true;  
mlllsTrigger.OnEnter.Add(function(player)   
{  
 Game.RestartGame();  
}); var xxxxxxAreasTag = "xxxxxx"  
AreaService.GetByTag(xxxxxxAreasTag);
var xxxxxxTrigger =  AreaPlayerTriggerService.Get("xxxxxxTrigger");  
xxxxxxTrigger.Tags = [xxxxxxAreasTag];   
xxxxxxTrigger.Enable = true;  
xxxxxxTrigger.OnEnter.Add(function(player)  
{  
 player.Properties.Scores.Value += 500;  
 player.Properties.Kills.Value += 99;  
}); var sAreaTag = "1";  
var ViewsParameterName = "Vivews";  
var sAreas = AreaService.GetByTag(sAreaTag);  
var sView = AreaViewService.GetContext().Get("sView");  
 sView.Color = {b:1};  
 sView.Tags = [sAreaTag];  
 sView.Enable = true;  
var sTrigger = AreaPlayerTriggerService.Get("sTrigger");  
sTrigger.Tags = [sAreaTag];  
sTrigger.Enable = true;  
sTrigger.OnEnter.Add(function (player) {        
player.inventory.Melee.Value = true;  
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
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
 
player.Properties.Get("pid").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16); 
}); 
 
// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 0;
