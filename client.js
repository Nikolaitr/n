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
Ui.GetContext().QuadsCount.Value = false; 
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
 
// ��������� ���� 
Properties.GetContext().GameModeName.Value = "GameModes/Peace"; 
// ������� ������� 
Teams.Add("Blue", "<B><color=red>фабрично-заводские рабочие</color></B>", { 
 r: 87, 
 g: 109, 
 b: 265
}); 
Teams.Add("Red", "<B><color=blue>транспортные рабочие</color></B>", { 
 r: 20, 
 g: 100,  
 b: 100 
}); 
Teams.Add("пор", "<B><color=yellow>строительные рабочие</color></B>", { 
 r: 150, 
 p: 200, 
 b: 20
}); 
Teams.Add("рор", "собственники предприятий (капиталисты)", { 
 r: 185, 
 g: 188, 
 b: 22 
}); 
Teams.Add("пог", "<B><color=orange>сельскохозяйственные рабочие</color></B>", { 
 r: 20, 
 p: 200, 
 b: 150 
}); 
Teams.Add("егрр", "<B><color=blue>кадеты</color></B>", { 
 r: 130, 
 g: 5, 
 b: 242
}); 
Teams.Add("поро", "<B><color=red>трудовики</color></B>", { 
 r: 1, 
 g: 1, 
}); 
Teams.Add("поио", "<B><color=green>эссеры</color></B>", { 
 r: 20, 
 g: 100, 
 b: 150 
}); 
Teams.Add("роро", "<B><color=lime>сотрудники лечебных учреждений</color></B>", { 
 r: 20, 
 p: 22, 
 b: 20
}); 
Teams.Add("рорлл", "<B><color=orange>сотрудники образовательных учреждений</color></B>", { 
 g: 20, 
 b: 100
}); 
Teams.Add("роол", "<B><color=black>люди, обслуживающие других людей</color></B>", { 
 r: 150, 
 g: 150, 
 b: 0
}); 
Teams.Add("рооо", "<B><color=blue>сотрудники пожарной охраны</color></B>", { 
 r: 34, 
 g: 109
}); 
Teams.Add("пгро", "<B><color=yellow>сотрудники службы безопасности</color></B>", { 
 p: 22,
 g: 1,
 b: 20
}); 
Teams.Add("рооор", "<B><color=red>сотрудники полиции</color></B>", { 
 r: 1, 
 g: 1
}); 
Teams.Add("пгрдж", "<B><color=blue>сотрудники военных структур</color></B>", { 
 r: 20, 
 g: 100, 
 b: 150
}); 
Teams.Add("цыы", " <B><color=lime>губернатор</color></B>", {
 p: 22 
}); 
Teams.Add("уыуаа", "<B><color=orange>правитель страны</color></B>", { 
 r: 135, 
 p: 22, 
 b: 112
}); 
Teams.Add("хдэхэ", "<B><color=red>министр внутренних дел</color></B>", { 
 r: 1, 
 g: 1, 
}); 
Teams.Add("енег", "<B><color=blue>министр народного просвещения</color></B>", { 
 r: 87, 
 g: 109, 
 b: 265
}); 
Teams.Add("ччсч", "<B><color=black>министр обороны</color></B>", { 
 r: 20, 
 g: 20, 
 b: 150
}); 
Teams.Add("яыйвв", "<B><color=orange>министр путей сообщений</color></B>", { 
 r: 100, 
 g: 20, 
 b: 150
}); 
Teams.Add("ьбирлл", "<B><color=yellow>министр торговли и промышленности</color></B>", { 
 p: 22, 
 g: 1,
 b: 20
}); 
Teams.Add("зщгпк", "<B><color=lime>министр финансов и иностранных дел</color></B>", { 
 r: 20, 
 p: 22, 
 b: 20
}); 
var blueTeam = Teams.Get("Blue"); 
var redTeam = Teams.Get("Red"); 



 
// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player) 
player.Ui.Hint.Value = "Приветствую " + player.NickName 
if (player.id  == "A1E3E99D7AE32532" || player.id == "5476D6FE9BCC1E6B"||player.id == "77E903647242544D"){ 
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
 
// задаем что выводить вверху 
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// задаем макс смертей команд 
var maxDeaths = "<size=100><color=#0559ff>с</color><color=#b911ff>к</color><color=#ff209b>а</color><color=#91ff67>з</color><color=#62aff2>о</color><color=#63ff81>ч</color><color=#49ffb0>н</color><color=#ddff00>и</color><color=#45fbff>к</color></size>";
var maxDeaths2 = "<size=100><color=#bfff00>Г</color><color=#d9ff01>О</color><color=#f6ff01>С</color><color=#feff02>У</color><color=#ffcb00>Д</color><color=#ffa500>А</color><color=#ff6d00>Р</color><color=#ff5900>С</color><color=#ff1d02>Т</color><color=#ff0c17>В</color><color=#ff0a28>О</color></size>"; 
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths; 
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;
 
// ������ ��������� 
Ui.getContext().Hint.Value = "<B><color=lime>ОБНОВЛЕНИЕ СУПЕР СНЮС!</color></B>"; 
 
// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = true; 
inventory.Explosive.Value = false; 
inventory.Build.Value = true; 
inventory.BuildInfinity.Value = true; 
 
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
 var павAreasTag = "пав" 
AreaService.GetByTag(павAreasTag); 
var павTrigger =  AreaPlayerTriggerService.Get("павTrigger"); 
павTrigger.Tags = [павAreasTag];  
павTrigger.Enable = true; 
павTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value += 13; 
 player.Properties.Kills.Value += 0; 
});
 var повAreasTag = "пов" 
AreaService.GetByTag(повAreasTag); 
var повTrigger =  AreaPlayerTriggerService.Get("повTrigger"); 
повTrigger.Tags = [повAreasTag];  
повTrigger.Enable = true; 
повTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 1000; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "штраф -1000¢"; 
});
 var якAreasTag = "як" 
AreaService.GetByTag(якAreasTag); 
var якTrigger =  AreaPlayerTriggerService.Get("якTrigger"); 
якTrigger.Tags = [якAreasTag];  
якTrigger.Enable = true; 
якTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 300; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "налог -300¢"; 
});
 var наAreasTag = "на" 
AreaService.GetByTag(наAreasTag); 
var наTrigger =  AreaPlayerTriggerService.Get("наTrigger"); 
наTrigger.Tags = [наAreasTag];  
наTrigger.Enable = true; 
наTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 2000; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "вы купили маленькую квартиру за 2000¢"; 
});
 var екAreasTag = "ек" 
AreaService.GetByTag(екAreasTag); 
var екTrigger =  AreaPlayerTriggerService.Get("екTrigger"); 
екTrigger.Tags = [екAreasTag];  
екTrigger.Enable = true; 
екTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 4000; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "вы купили квартиру среднего размера за 4000¢"; 
});
 var боAreasTag = "бо" 
AreaService.GetByTag(боAreasTag); 
var боTrigger =  AreaPlayerTriggerService.Get("боTrigger"); 
боTrigger.Tags = [боAreasTag];  
боTrigger.Enable = true; 
боTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 15000; 
 player.Properties.Kills.Value += 0;
 player.Ui.Hint.Value = "вы купили большую квартиру за 15000¢";  
});
 var зоAreasTag = "зо" 
AreaService.GetByTag(зоAreasTag); 
var зоTrigger =  AreaPlayerTriggerService.Get("зоTrigger"); 
зоTrigger.Tags = [зоAreasTag];  
зоTrigger.Enable = true; 
зоTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 50000; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "вы купили большую квартиру за 50000"; 
});
 var рокAreasTag = "рок" 
AreaService.GetByTag(рокAreasTag); 
var рокTrigger =  AreaPlayerTriggerService.Get("рокTrigger"); 
рокTrigger.Tags = [рокAreasTag];  
рокTrigger.Enable = true; 
рокTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 10; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "-10¢ за проезд"; 
});
 var еоAreasTag = "ео" 
AreaService.GetByTag(еоAreasTag); 
var еоTrigger =  AreaPlayerTriggerService.Get("еоTrigger"); 
еоTrigger.Tags = [еоAreasTag];  
еоTrigger.Enable = true; 
еоTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value -= 5000; 
 player.Properties.Kills.Value += 0; 
 player.Ui.Hint.Value = "штраф -5000¢ за убийство игрока"; 
});
 var доAreasTag = "до" 
AreaService.GetByTag(доAreasTag); 
var доTrigger =  AreaPlayerTriggerService.Get("доTrigger"); 
доTrigger.Tags = [доAreasTag];  
доTrigger.Enable = true; 
доTrigger.OnEnter.Add(function(player) 
{ 
 player.Ui.Hint.Value = "данный офис принадлежит банку"; 
});
//
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);
  if (player.id  == "5476D6FE9BCC1E6B"||player.id == "77E903647242544D"||player.id == "A1E3E99D7AE32532"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B")
  {
   player.Properties.Get("pid").Value = "<B><color=red>босс</color></B>";   
  }                                
});
//
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("pid").Value = "<B><color=lime>игрок</color></B>";                                                                                   

});
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("aa").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16);

});
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "<B><color=orange>УБИЙСТВА</color></B>",
  ShortDisplayName: "<B><color=orange>УБИЙСТВА</color></B>"
 },
 {
  Value: "aa",
  DisplayName: "<B><color=yellow>ID</color></B>",
  ShortDisplayName: "<B><color=yellow>ID</color></B>"
 },
 {
  Value: "pid",
  DisplayName: "<B><color=lime>СТАТУС</color></B>",
  ShortDisplayName: "<B><color=lime>СТАТУС</color></B>"
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
// нанесения урона 
Damage.GetContext().DamageOut.Value = true;

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 8;







































































