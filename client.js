// ��������� ��������� �������� �������   
Damage.GetContext().FriendlyFire.Value = false;
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");  
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");  
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");  
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");  
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");  
BreackGraph.BreackAll = false; 
BreackGraph.WeakBlocks = true; 

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
Build.GetContext().FlyEnable.Value = false;  

// ��������� ���� 
Properties.GetContext().GameModeName.Value = "сражайтесь"; 
// создаем команды 
Teams.Add("Blue", "<i><B><color=white>◅ БЕЛЫЕ ▻</color></B></i>", { b: 20, b: 100 });


Teams.Add("Red", "<i><B><color=white>◅ КРАСНЫЕ ▻</color></B></i>", { r: 20, r: 100 });
var blueTeam = Teams.Get("Blue"); 
var redTeam = Teams.Get("Red"); 
blueTeam.Spawns.SpawnPointsGroups.Add(1); 
redTeam.Spawns.SpawnPointsGroups.Add(2); 
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue; 
redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red; 
 
// состо€ни€ игры 
function SetWaitingMode() { 
 stateProp.Value = WaitingStateValue; 
 Ui.GetContext().Hint.Value = "<B><color=lime>ОТЕЧЕСТВЕННАЯ ВОЙНА 1812 г.</color></B>"; 
 Spawns.GetContext().enable = false; 
 mainTimer.Restart(WaitingPlayersTime); 
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
player.Build.FlyEnable.Value = false;  
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
Ui.getContext().Hint.Value = "сражайтесь"; 
 
// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = true; 
inventory.Secondary.Value = true;
inventory.Melee.Value = true; 
inventory.Explosive.Value = true; 
inventory.Build.Value = true;  
 
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
});
var banAreaTag = "a";  
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
player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;  
player.Build.GenMapEnable.Value = true;  
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true;  
player.Damage.DamageIn.Value = true;  
player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;  
player.inventory.Main.Value = true;  
player.inventory.Secondary.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.MainInfinity.Value = true;  
player.inventory.SecondaryInfinity.Value = true;  
player.inventory.ExplosiveInfinity.Value = true; 
});var swview = AreaViewService.GetContext().Get("sqView");
var Srop = Properties.GetContext();
var swt = AreaPlayerTriggerService.Get("swtTrigger");
swview.Color = { g: 1 };
swview.Enable = true;
swview.Tags = ["sss"];
swt.Tags = ["sss"];
swt.Enable = true;
swt.OnEnter.Add(function(player){
  var prop = player.Properties.Get('list').Value;
if(prop < 2){
player.Properties.Get('list').Value++;
} else {
player.Properties.Get('list').Value = 1;
}
if(prop == 1){
  Srop.Get("door").Value = 1;
player.Ui.Hint.Value = "открыто";
} else if(prop == 2){
player.Ui.Hint.Value = "закрыто";
  Srop.Get("door").Value = 2;
    }
});

var LeDo = AreaPlayerTriggerService.Get("LeDoTrigger");
var LeDoV = AreaViewService.GetContext().Get("dview");
LeDoV.Color = { r: 80, b: 80 };
LeDoV.Enable = true;
LeDoV.Tags = ["ggg"];
LeDo.Tags = ["ggg"];
LeDo.Enable = true;
LeDo.OnEnter.Add(function(player){
  if(Srop.Get("door").Value == 1){
} else if(Srop.Get("door").Value == 2){
  player.Spawns.Spawn();
   }
});
LeDo.OnEnter.Add(function(player){
  if(Srop.Get("door").Value == 2){
  player.Spawns.Spawn();
   }
});
var ETTrigger = 
AreaPlayerTriggerService.Get("ETTrigger"); 
ETTrigger.Tags = ["et"]; 
ETTrigger.Enable = true; 
ETTrigger.OnEnter.Add(function(player) { 
 
 
player.Ui.Hint.Value = "блоки получены"; 
player.inventory.Build.Value = true; 
});
var updTrg = AreaPlayerTriggerService.Get("UpdTrigger"); 
updTrg.Tags = ["upu"]; 
updTrg.Enable = true; 
updTrg.OnEnter.Add(function(){ 
list = []; 
curenc = 0; 
ato = 0; 
var e = Players.GetEnumerator(); 
while(e.moveNext()){ 
list.push(e.Current); 
} 
}); 

var choseTrg = AreaPlayerTriggerService.Get("ChoseTrigger"); 
choseTrg.Tags = ["chu"]; 
choseTrg.Enable = true; 
choseTrg.OnEnter.Add(function(p){ 
ato = list[curenc]; 
p.Ui.Hint.Value="> "+ato; 
if(curenc < (list.length - 1))curenc++; 
else curenc = 0; 
}); 

var banTrg = AreaPlayerTriggerService.Get("BanTrigger") 
banTrg.Tags = ["banu"]; 
banTrg.Enable = true; 
banTrg.OnEnter.Add(function(p){ 
Ban(ato); 
p.Ui.Hint.Value=ato+" не бушуй "; 
function Ban(player){ 
p=player 
p.Spawns.Spawn(); 
p.Spawns.Despawn(); 
p.Build.BuildRangeEnable.Value=false; 
p.Ui.Hint.Value="you are banned"; 
} 
});
var mlllsAreasTag = "ffgg";  
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
 
// задаем что выводить в лидербордах 
LeaderBoard.PlayerLeaderBoardValues = [ 
 { 
  Value: "Kills", 
  DisplayName: "<i><B><color=white>УБИЙСТВА</color></B></i>", 
  ShortDisplayName: "<i><B><color=white>УБИЙСТВА</color></B></i>" 
 }, 
 { 
  Value: "Deaths", 
  DisplayName: "<i><B><color=white>СМЕРТИ</color></B></i>", 
  ShortDisplayName: "<i><B><color=white>СМЕРТИ</color></B></i>" 
 }, 
 { 
  Value: "pid", 
  DisplayName: "<i><B><color=white>ID</color></B></i>", 
  ShortDisplayName: "<i><B><color=white>ID</color></B></i>" 
 }
]; 
LeaderBoard.TeamLeaderBoardValue = { 
 Value: "Deaths", 
 DisplayName: "Statistics\Deaths", 
 ShortDisplayName: "Statistics\Deaths" 
}; 
// вес команды в лидерборде 
LeaderBoard.TeamWeightGetter.Set(function(team) { 
 return team.Properties.Get("Deaths").Value; 
}); 
// вес игрока в лидерборде 
LeaderBoard.PlayersWeightGetter.Set(function(player) { 
 return player.Properties.Get("Kills").Value; 
}); 
 
// задаем что выводить вверху 
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" }; 

// счетчик спавнов 
Spawns.OnSpawn.Add(function(player) { 
 ++player.Properties.Spawns.Value; 
}); 
// счетчик смертей 
Damage.OnDeath.Add(function(player) { 
 ++player.Properties.Deaths.Value; 
}); 
// счетчик убийств 
Damage.OnKill.Add(function(player, killed) { 
 if (killed.Team != null && killed.Team != player.Team) { 
  ++player.Properties.Kills.Value; 
  player.Properties.Scores.Value += 0; 
 } 
}); 
 
// делаем игроков неу€звимыми после спавна
var immortalityTimerName="immortality";
Spawns.GetContext().OnSpawn.Add(function(player){
	player.Properties.Immortality.Value=true;
	timer=player.Timers.Get(immortalityTimerName).Restart(5);
});
Timers.OnPlayerTimer.Add(function(timer){
	if(timer.Id!=immortalityTimerName) return;
	timer.Player.Properties.Immortality.Value=false;
});

// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 0;
