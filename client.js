//var Color = importNamespace('PixelCombats.ScriptingApi.Structures'); 
//var System = importNamespace('System'); 
 
// константы 
var WaitingPlayersTime = 10; 
var BuildBaseTime = 30; 
var GameModeTime = 780; 
var EndOfMatchTime = 10; 
 
// константы имен 
var WaitingStateValue = ""; 
var BuildModeStateValue = "BuildMode"; 
var GameStateValue = "сражайтесь"; 
var EndOfMatchStateValue = "EndOfMatch"; 
 
// посто€нные переменные 
var mainTimer = Timers.GetContext().Get("Main"); 
var stateProp = Properties.GetContext().Get("State"); 
 
// примен€ем параметры создани€ комнаты 
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool("Damage"); 
Map.Rotation = GameMode.Parameters.GetBool("MapRotation"); 
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction"); 
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks"); 
 
// ��������� ��������� �������� �������  
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool("Damage"); 
 
 
 
 
// ????????? ???? ? ??????? ?? ???????  
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
Damage.GetContext(player).DamageIn.Value=trur; 
Damage.GetContext(player).FriendlyFire.Value = false; GameMode.Parameters.GetBool("Damage"); 
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
 
// блок игрока всегда усилен 
BreackGraph.PlayerBlockBoost = true; 
 
// параметры игры 
Properties.GetContext().GameModeName.Value = "GameModes/Team Dead Match"; 
TeamsBalancer.IsAutoBalance = true; 
Ui.GetContext().MainTimerId.Value = mainTimer.Id; 
// создаем команды 
Teams.Add("Blue", "<size=26><color=#000000>Р</color><color=#000000>У</color><color=#f9ff00>С</color><color=#f6ff00>С</color><color=#f4ff00>К</color><color=#f4fff9>И</color><color=#fffefc>Е</color></size>", { g: 20, b: 100 });

Teams.Add("Red", "<size=26><color=#000dff>Ф</color><color=#0003ff>Р</color><color=#0200ff>А</color><color=#fefff7>Н</color><color=#fefff1>Ц</color><color=#ff0100>У</color><color=#ff0f00>З</color><color=#ff0500>Ы</color></size>", { r: 20, p: 200, b: 150 }); 
var blueTeam = Teams.Get("Blue"); 
var redTeam = Teams.Get("Red"); 
blueTeam.Spawns.SpawnPointsGroups.Add(1); 
redTeam.Spawns.SpawnPointsGroups.Add(2); 
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue; 
redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red; 
 
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths; 
// 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
 
player.Properties.Get("pid").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16); 
}); 
// ???????????? ?????  
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
sTrigger.OnExit.Add(function (player) {        
player.inventory.Melee.Value = true;  
}); var sAreaTag = "2";  
var ViewsParameterName = "Vivews";  
var sAreas = AreaService.GetByTag(sAreaTag);  
var sView = AreaViewService.GetContext().Get("sView");  
 sView.Color = {r:1};  
 sView.Tags = [sAreaTag];  
 sView.Enable = true;  
var sTrigger = AreaPlayerTriggerService.Get("sTrigger");  
sTrigger.Tags = [sAreaTag];  
sTrigger.Enable = true;  
sTrigger.OnEnter.Add(function (player) {        
player.inventory.MainInfinity.Value = true;  
});  
sTrigger.OnExit.Add(function (player) {        
player.inventory.MainInfinity.Value = true;  
});  
 
//    
var sAreaTag = "10";  
var ViewsParameterName = "Vivews";  
var sAreas = AreaService.GetByTag(sAreaTag);  
var sView = AreaViewService.GetContext().Get("sView");  
 sView.Color = { r: 20, g: 100, b: 150 };  
 sView.Tags = [sAreaTag];  
 sView.Enable = true;  
var sTrigger = AreaPlayerTriggerService.Get("sTrigger");  
sTrigger.Tags = [sAreaTag];  
sTrigger.Enable = true;  
sTrigger.OnEnter.Add(function (player) {        
if (player.Properties.Scores.Value > 698572){ 
player.Ui.Hint.Value = "ты купил лопату !"; 
 player.inventory.Melee.Value = true; 
player.Properties.Scores.Value -= 698572; 
 }else{player.Ui.Hint.Value = "надо 698572 а у тебя: "+player.Properties.Scores.Value; 
 }  
});   
 var pvpAreaTag = "p";  
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
player.Ui.Hint.Value = " онлайн: "+ Players.Count;});  
pvpTrigger.OnExit.Add(function (player){  
player.Ui.Hint.Value = " онлайн: ";  
}); 
 var nnTrigger =  AreaPlayerTriggerService.Get("NNTrigger")  
  
nnTrigger.Tags = ["nn"];  
nnTrigger.Enable = true;  
nnTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "онлайн:" + Players.Count;  
}); 
 var mtrigger = AreaPlayerTriggerService.Get("mTrigger");   
mtrigger.Tags = ["m"];   
mtrigger.Enable = true;   
mtrigger.OnEnter.Add(function(player)   
{   
var C = player.Properties.Get("c");   
if (C.Value < 2)   
{   
player.Properties.Get("c").Value++;   
}   
else   
{   
player.Properties.Get("c").Value = 1;   
}   
if (C.Value == 1){   
player.Ui.Hint.Value = " •ДОБРО ПОЖАЛОВАТЬ• ";  
  
}   
if (C.Value == 2){   
player.Ui.Hint.Value = " •ДОСВИДАНИЯ•";  
   
}  
}); 
 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger")  
  
bTrigger.Tags = ["b"];  
bTrigger.Enable = true;  
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой id:" + Players.NickName;  
}); 
 var ttTrigger =  AreaPlayerTriggerService.Get("TTTrigger")  
  
ttTrigger.Tags = ["tt"];  
ttTrigger.Enable = true;  
ttTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "?сражайтесь?";  
}); 
 var eeTrigger =  AreaPlayerTriggerService.Get("EETrigger")  
  
eeTrigger.Tags = ["ee"];  
eeTrigger.Enable = true;  
eeTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ты сможешь";  
}); 
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
player.Ui.Hint.Value = " питьевые фонтаны ";});  
pvpTrigger.OnExit.Add(function (player){  
player.Ui.Hint.Value = " онлайн: ";  
}); 
 var pvpAreaTag = "t";  
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
player.Ui.Hint.Value = " курс валюты: 1$ = 24,7 иехонтов(?); 1€ = 31,4 иехонта(?); 1? = 0,0021 иехонта(?); 1£ = 39,1 иехонта (?)"});  
pvpTrigger.OnExit.Add(function (player){  
player.Ui.Hint.Value = " курс валюты: 1$ = 24,7 иехонтов(?); 1€ = 31,4 иехонта(?); 1? = 0,0021 иехонта(?); 1£ = 39,1 иехонта (?) ";  
}); 
 var KAreaTag = "blok";   
var ViewsParameterName = "Vivews";   
var KAreas = AreaService.GetByTag(KAreaTag);   
var KView = AreaViewService.GetContext().Get("KView");   
 KView.Color = {r:99};   
 KView.Tags = [KAreaTag];   
 KView.Enable = true;   
var KTrigger = AreaPlayerTriggerService.Get("KTrigger");   
KTrigger.Tags = [KAreaTag];   
KTrigger.Enable = true;   
KTrigger.OnEnter.Add(function (player) {         
player.inventory.Build.Value = true;   
});   
KTrigger.OnExit.Add(function (player) {         
player.inventory.BuildInfinity.Value = true;   
player.Ui.Hint.Value = "Ты получил блоки";    
});  
 var JJAreaTag = "Vip";  
  
var jjTrigger = AreaPlayerTriggerService.Get("JJTrigger");                                                  
jjTrigger.Tags = [JJAreaTag];  
jjTrigger.Enable = true;  
jjTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "Vip очки";  
player.Properties.Kills.Value += 0;  
player.Properties.Scores.Value += 1000;  
});  
 var GGAreaTag = "мега";  
  
var ggTrigger = AreaPlayerTriggerService.Get("GGTrigger");  
ggTrigger.Tags = [GGAreaTag];  
ggTrigger.Enable = true;  
ggTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = " МЕГА очки";  
player.Properties.Kills.Value += 0;  
player.Properties.Scores.Value += 1500;  
});  
 var EXPTrigger =  
AreaPlayerTriggerService.Get("EXPTrigger")  
EXPTrigger.Tags = ["exp"];  
EXPTrigger.Enable = true;  
EXPTrigger.OnEnter.Add(function(player) {  
  
  
player.Ui.Hint.Value = "Подрывай врагов!) ";  
player.inventory.Explosive.Value = true  
 player.inventory.ExplosiveInfinity.Value = true;  
});  
 var zonTrigger = AreaPlayerTriggerService.Get("zonTrigger")  
zonTrigger.Tags = ["g"];   
zonTrigger.Enable = true;   
zonTrigger.OnEnter.Add(function (player) {  
player.Ui.Hint.Value = " ";  
var d = new Date();  
    var hours = d.getHours();  
    var minutes = d.getMinutes();  
player.Ui.Hint.Value = d + hours + minutes  
}); 
 var JJAreaTag = "h";  
  
var jjTrigger = AreaPlayerTriggerService.Get("JJTrigger");  
jjTrigger.Tags = [JJAreaTag];  
jjTrigger.Enable = true;  
jjTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = " - 10 иехонтов за проезд ";  
player.Properties.Kills.Value += 0;  
player.Properties.Scores.Value -= 10;  
});  
 var EDTrigger =  
AreaPlayerTriggerService.Get("EDTrigger");  
EDTrigger.Tags = ["ed"];  
EDTrigger.Enable = true;  
EDTrigger.OnEnter.Add(function(player) {  
  
  
player.Ui.Hint.Value = "Выдана лопатка";  
inventory.Melee.Value = true;

});  
  
 var ETTrigger =  
AreaPlayerTriggerService.Get("ETTrigger");  
ETTrigger.Tags = ["et"];  
ETTrigger.Enable = true;  
ETTrigger.OnEnter.Add(function(player) {  
  
  
player.Ui.Hint.Value = "НЕТУ ЛОПАТКИ(";  
player.inventory.Melee.Value = false;  
}); 
 var t1trigger = AreaPlayerTriggerService.Get("t1trigger"); 
t1trigger.Tags = ["t1"]; 
t1trigger.Enable = true; 
t1trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";BreackGraph.OnlyPlayerBlocksDmg = true; 
 }); 
 
 var t2trigger = AreaPlayerTriggerService.Get("t2trigger"); 
t2trigger.Tags = ["t2"]; 
t2trigger.Enable = true; 
t2trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание вкл для всех•";BreackGraph.OnlyPlayerBlocksDmg = false; 
 }); 
 var OTrigger = AreaPlayerTriggerService.Get("OTrigger"); 
OTrigger.Tags = ["name"]; 
OTrigger.Enable = true; 
OTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "твой ник:"+player; 
 }); 
 var t2trigger = AreaPlayerTriggerService.Get("t2trigger"); 
t2trigger.Tags = ["й"]; 
t2trigger.Enable = true; 
t2trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "getElementPosition(localPlayer)outputConsole"; 
}); 
 var iiTrigger =  AreaPlayerTriggerService.Get("IITrigger");  
iiTrigger.Tags = ["е"]; 
iiTrigger.Enable = true; 
iiTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ВЫДАН BAN РЕСТАРТА";player.Properties.Immortality.Value = false;player.Properties.Immortality.Value = false; 
Spawns.GetContext().enable = true; 
iiTrigger.Enable = true; 
Spawns.GetContext().RespawnTime.Value = 99999; 
iiTrigger.Enable = true; 
}); 
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger"); 
donTrigger.Tags = ["к"]; 
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "Включено бесмертие";Player.Spawns.Spawn(); 
}); 
 var xxTrigger =  AreaPlayerTriggerService.Get("XXTrigger"); 
xxTrigger.Tags = ["н"]; 
xxTrigger.Enable = true; 
xxTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "BAN РАЗБЛОКИРОВАН";player.Properties.Immortality.Value = false; 
Spawns.GetContext().enable = true; 
xxTrigger.Enable = true; 
Spawns.GetContext().RespawnTime.Value = 0; 
xxTrigger.Enable = true; 
}); 
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger"); 
donTrigger.Tags = ["ddd"]; 
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) {  
player.Ui.Hint.Value = " ";  
var d = new Date(); 
    var date = d.getDate(); 
    var month = d.getMonth() + 1; 
    var year = d.getFullYear(); 
player.Ui.Hint.Value = d + date + month + year  
}); 
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger"); 
donTrigger.Tags = ["z"]; 
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) {  
player.Ui.Hint.Value = " ";  
var d = new Date(); 
    var date = d.getDate(); 
    var month = d.getMonth() + 1; 
    var year = d.getFullYear(); 
    var milliseconds = d.getMilliseconds(); 
    var seconds = d.getSeconds(); 
    var minutes = d.getMinutes(); 
    var hours = d.getHours(); 
player.Ui.Hint.Value = d + date + milliseconds + seconds + minutes + hours + month + year 
}); 
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger"); 
donTrigger.Tags = ["qwe"]; 
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) {  
player.Ui.Hint.Value = " ";  
var location = new LatLng(location.getLatitude(), location.getLongitude() ); 
    var latitude =  location.getLatitude(); 
    var longitude = location.getLongitude(); 
player.Ui.Hint.Value = d + location + latitude + longitude 
}); 
 var prtTrigger =  
AreaPlayerTriggerService.Get("PrtTrigger"); 
prtTrigger.Tags = ["ю"]; 
prtTrigger.Enable = true; 
prtTrigger.OnEnter.Add(function()

{ 
 msg = "." + AreaService.GetByTag("cmd"); 
 msg = msg.slice(0,-28); 
 msg = msg.slice(3,-1); 
 Ui.GetContext().Hint.Value = msg; 
 Player.Ui.Hint.Value = msg; 
}); 
 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger")  
  
bTrigger.Tags = ["bab"];  
bTrigger.Enable = true;  
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой ник:" + player.NickName;  
}); 
 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger")  
  
bTrigger.Tags = ["nah"];  
bTrigger.Enable = true;  
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой лвл:" + Players.Properties.Lvl.Value;  
}); 
 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger")  
  
bTrigger.Tags = ["pop"];  
bTrigger.Enable = true;  
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой id:" + player.id;  
}); 
 var pdsTrigger = AreaPlayerTriggerService.Get("pdespawnTrigger"); 
 
 
pdsTrigger.Tags = ["jh"]; 
pdsTrigger.Enable = true; 
pdsTrigger.OnEnter.Add(function (player) { player.Spawns.Despawn(); 
}); 
 var ddTrigger =  AreaPlayerTriggerService.Get("DDTrigger"); 
 
 
ddTrigger.Tags = ["kp"]; 
ddTrigger.Enable = true; 
ddTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ПОЛУЧИЛ ПАЛЕТ";player.Build.FlyEnable.Value = true;                                    }); 
 var ffTrigger =  AreaPlayerTriggerService.Get("FFTrigger"); 
 
 
ffTrigger.Tags = ["gf"]; 
ffTrigger.Enable = true; 
ffTrigger.OnEnter.Add(function (player)         { player.Spawns.Spawn(); 
}); 
 var qAreaTag = "wo";  
var ViewqParameterName = "Vivewpvp";  
var qAreas = AreaService.GetByTag(qAreaTag);  
var qView = AreaViewService.GetContext().Get("qView");  
 qView.Color = {r:1};  
 qView.Tags = [qAreaTag];  
 qView.Enable = true;  
var qTrigger = AreaPlayerTriggerService.Get("qTrigger");  
qTrigger.Tags = [qAreaTag];  
qTrigger.Enable = true;  
qTrigger.OnEnter.Add(function (player){  
player.Ui.Hint.Value = " продажа ценных бумаг,акций,облигаций. (владелец компании - сказочник)"});  
qTrigger.OnExit.Add(function (player){  
player.Ui.Hint.Value = " продажа ценных бумаг,акций,облигаций. (владелец компании - сказочник)";  
}); 
 var doTrigger =  AreaPlayerTriggerService.Get("DOTrigger")  
  
doTrigger.Tags = ["do"];  
doTrigger.Enable = true;  
doTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "продажа недвижимости (владелец компании - сказочник)";  
}); 
 var taTrigger =  AreaPlayerTriggerService.Get("TATrigger")  
  
taTrigger.Tags = ["ta"];  
taTrigger.Enable = true;  
taTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "квартира принадлежит сказочнику";  
}); 
 var daTrigger =  AreaPlayerTriggerService.Get("DATrigger")  
  
daTrigger.Tags = ["da"];  
daTrigger.Enable = true;  
daTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "дом принадлежит сказочнику";  
}); 
 var toTrigger =  AreaPlayerTriggerService.Get("TOTrigger")  
  
toTrigger.Tags = ["to"];  
toTrigger.Enable = true;  
toTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "машина принадлежит сказочнику";  
}); 
 var weaponTrigger = AreaPlayerTriggerService.Get("WeaponTrigger"); 
weaponTrigger.Tags = ["gdz"]; 
weaponTrigger.Enable = true; 
weaponTrigger.OnEnter.Add(function (player) { 
 if (player.Inventory.Melee.Value) 
  { 
    player.Ui.Hint.Value = "ВЫ ЗОМБИ"; 
  } 
  else 
  { 
    myWpTimer.Restart(180); 
    weaponTrigger.Enable = false; 
    spawnsView.Enable = false; 
    player.Inventory.Main.Value = false; 
    player.Inventory.Main.Value = true; 
  } 
}); 
 var OoTrigger =  
AreaPlayerTriggerService.Get("OoTrigger");  
OoTrigger.Tags = ["м"];  
OoTrigger.Enable = true;  
OoTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "Купил бургер";

}); 
 
 var JTrigger =  
AreaPlayerTriggerService.Get("JTrigger");  
JTrigger.Tags = ["э"];  
JTrigger.Enable = true;  
JTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "купил бешпармак";  
});  
 var ZILTrigger =  
AreaPlayerTriggerService.Get("ZILTrigger");  
ZILTrigger.Tags = ["г"];  
ZILTrigger.Enable = true;  
ZILTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "купил ROLTON";  
});  
 var ZXILTrigger =  
AreaPlayerTriggerService.Get("ZXILTrigger");  
ZXILTrigger.Tags = ["ю"];  
ZXILTrigger.Enable = true;  
ZXILTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "купил казахстанскую шекаладку";  
});  
 var ZxTrigger =  
AreaPlayerTriggerService.Get("ZxTrigger");  
ZxTrigger.Tags = ["дл"];  
ZxTrigger.Enable = true;  
ZxTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "купил пиво";  
});  
 var zvTrigger =  
AreaPlayerTriggerService.Get("zvTrigger");  
zvTrigger.Tags = ["и"];  
zvTrigger.Enable = true;  
zvTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "купил сигареты";  
});  
 var PlTrigger =  
AreaPlayerTriggerService.Get("PlTrigger");  
PlTrigger.Tags = ["ц"];  
PlTrigger.Enable = true;  
PlTrigger.OnEnter.Add(function (player) {  
  
  
player.Ui.Hint.Value = "Ты продовец#&#@@";  
}); 
// 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
 
player.Properties.Get("pid").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16); 
}); 
 
// задаем что выводить в лидербордах 
LeaderBoard.PlayerLeaderBoardValues = [ 
 { 
  Value: "Kills", 
  DisplayName: "<B><color=orange>УБИЙСТВА</color></B>", 
  ShortDisplayName: "<B><color=orange>УБИЙСТВА</color></B>" 
 }, 
 { 
  Value: "Deaths", 
  DisplayName: "<B><color=yellow>СМЕРТИ</color></B>", 
  ShortDisplayName: "<B><color=yellow>СМЕРТИ</color></B>" 
 }, 
 { 
  Value: "pid", 
  DisplayName: "<B><color=lime>ID</color></B>", 
  ShortDisplayName: "<B><color=lime>ID</color></B>" 
 }, 
 { 
  Value: "Scores", 
  DisplayName: "<B><color=red>ДЕНЬГИ</color></B>", 
  ShortDisplayName: "<B><color=red>ДЕНЬГИ</color></B>" 
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
 
// разрешаем вход в команды по запросу 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);}); 
// спавн по входу в команду 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()}); 
 
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
 
// после каждой смерти игрока отнимаем одну смерть в команде 
Properties.OnPlayerProperty.Add(function(context, value) { 
 if (value.Name !== "Deaths") return; 
 if (context.Player.Team == null) return; 
 context.Player.Team.Properties.Get("Deaths").Value--; 
}); 
// если в команде количество смертей занулилось то завершаем игру 
Properties.OnTeamProperty.Add(function(context, value) { 
 if (value.Name !== "Deaths") return;

if (value.Value <= 0) SetEndOfMatchMode(); 
}); 
 
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
  player.Properties.Scores.Value += 100; 
 } 
}); 
 
// задаем первое игровое состо€ние 
SetWaitingMode(); 
 
// состо€ни€ игры 
function SetWaitingMode() { 
 stateProp.Value = WaitingStateValue; 
 Ui.GetContext().Hint.Value = "<i><B><color=lime>Гражданская война рп</color></B></i>"; 
 Spawns.GetContext().enable = false; 
 mainTimer.Restart(WaitingPlayersTime); 
} 
 
function SetBuildMode()  
{ 
 stateProp.Value = BuildModeStateValue; 
 Ui.GetContext().Hint.Value = "сражайтесь"; 
 var inventory = Inventory.GetContext(); 
 inventory.Main.Value = true; 
 inventory.Secondary.Value = true; 
 inventory.Melee.Value = true; 
 inventory.Explosive.Value = true; 
 inventory.Build.Value = true; 
 
 mainTimer.Restart(BuildBaseTime); 
 Spawns.GetContext().enable = true; 
 SpawnTeams(); 
} 
function SetGameMode()  
{ 
 stateProp.Value = GameStateValue; 
 Ui.GetContext().Hint.Value = "сражайтесь"; 
 
 var inventory = Inventory.GetContext(); 
 if (GameMode.Parameters.GetBool("OnlyKnives")) { 
  inventory.Main.Value = true;
  inventory.Secondary.Value = true; 
  inventory.Melee.Value = true; 
  inventory.Explosive.Value = true; 
  inventory.Build.Value = true; 
 } else { 
  inventory.Main.Value = true; 
  inventory.Secondary.Value = true; 
  inventory.Melee.Value = true; 
  inventory.Explosive.Value = true; 
  inventory.Build.Value = true; 
 } 
 
 mainTimer.Restart(GameModeTime); 
 Spawns.GetContext().Despawn(); 
 SpawnTeams(); 
} 
function SetEndOfMatchMode() { 
 stateProp.Value = EndOfMatchStateValue; 
 Ui.GetContext().Hint.Value = "КОНЕЦ СРАЖЕНИЯ"; 
 
 var spawns = Spawns.GetContext(); 
 spawns.enable = false; 
 spawns.Despawn(); 
 Game.GameOver(LeaderBoard.GetTeams()); 
 mainTimer.Restart(EndOfMatchTime); 
} 
function RestartGame() { 
 Game.RestartGame(); 
} 
 
function SpawnTeams() { 
 var e = Teams.GetEnumerator(); 
 while (e.moveNext()) { 
  Spawns.GetContext(e.Current).Spawn(); 
 } 
						 }
