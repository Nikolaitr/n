//
contextedProperties.GetContext().SkinType.Value = 2;

//
contextedProperties.GetContext().InventoryType.Value = 1;

// MAPI 
function Hint(text){ 
 // функция вывода текста Ui.getContext().Hint.Value = text; 
} 
function CreateTeam(tag,name,color,spawns){ 
    Teams.Add(tag,name,color); 
    Teams.Get(tag).Spawns.SpawnPointsGroups.Add(spawns); 
    return Teams.Get(tag); 
} 
function SetArea(player, area){ 
    if(area == "red"){ 
     player.Properties.Get("Isegg").Value = true; 
        player.Ui.Hint.Value = "ты взял груз,теперь отнеси его на склад"; 
     return;  
    } 
    player.Ui.Hint.Value = "ты взял груз, теперь отнеси его на склад";
    player.Properties.Get("Isegg").Value = true; 
    blueTeam.Properties.Get("EggTeam").Value = false; 
    blueView.Color = { r: 1 }; 
 
} 
function GetArea(player, area){ 
 if(area == "red"){ 
     player.Ui.Hint.Value =  "груз доставлен"; 
     player.Properties.Scores.Value += 100;   
 blueTeam.Properties.Get("EggTeam").Value = true; 
        blueView.Color = { b: 1 }; 
 
        player.Properties.Get("eggPls").Value++; 
        return; 
 } 
    player.Ui.Hint.Value = "груз доставлен";
    player.Properties.Scores.Value += 100;
    player.Properties.Get("Isegg").Value = false; 
    blueTeam.Properties.Get("egg").Value += 1; 
 
    player.Properties.Get("eggPls").Value++; 
} 

// настройки 
TeamsBalancer.IsAutoBalance = true;
BreackGraph.Damage = false; 
Damage.GetContext().FriendlyFire.Value = true;
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
Damage.FriendlyFire = true;
Ui.GetContext().QuadsCount.Value = true;
BreackGraph.OnlyPlayerBlocksDmg = false;
BreackGraph.WeakBlocks = true;

// ��� ������������ ����� 
Build.GetContext().Pipette.Value = true; 
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
Damage.GetContext().DamageOut.Value = true;
 
// переменные 
var ValueTeams = 0; 
var TimeGame = 300; 
var IsNotGame = false; 
var EffectDamage = true; 
var Winner;
var ballTicketsLeft = 7;

// команды 
var blueTeam = CreateTeam("Blue", "<i><B><color=white>◅ ИГРОКИ ▻</color></B></i>", { g: 150, b: 20 }, 1);

// разрешаем вход в команды по заросу 
Teams.OnRequestJoinTeam.Add(function(player,team){ 
team.Add(player); 
    player.Properties.Get("Isegg").Value = false; 
    player.Properties.Get("eggPls").Value = 0; 
}); 
// спавн по входу в команду 
Teams.OnPlayerChangeTeam.Add(function(player){ 
player.Spawns.Spawn();
});

// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player) 
if (player.id  == "EBF216C27ECD86B"  player.id == "5476D6FE9BCC1E6B" player.id == "77E903647242544D" ||player.id == ""){ 
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
var KAreaTag = "b";  
var ViewsParameterName = "Vivews";  
var KAreas = AreaService.GetByTag(KAreaTag);  
var KView = AreaViewService.GetContext().Get("KView");  
 KView.Color = {p:22};  
 KView.Tags = [KAreaTag];  
 KView.Enable = true;  
var KTrigger = AreaPlayerTriggerService.Get("KTrigger");  
KTrigger.Tags = [KAreaTag];  
KTrigger.Enable = true;  
KTrigger.OnEnter.Add(function (player)  
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
if (C.Value ==1){  
player.Ui.Hint.Value = "красный"; 
KView.Color = {r:1};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "красный";   
KView.Color = {p:22};  
} 
});
var RAreaTag = "j";  
var ViewsParameterName = "Vivews";  
var RAreas = AreaService.GetByTag(RAreaTag);  
var RView = AreaViewService.GetContext().Get("RView");  
 RView.Color = {p:22};  
 RView.Tags = [RAreaTag];  
 RView.Enable = true;  
var RTrigger = AreaPlayerTriggerService.Get("RTrigger");  
RTrigger.Tags = [RAreaTag];  
RTrigger.Enable = true;  
RTrigger.OnEnter.Add(function (player)  
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
if (C.Value ==1){  
player.Ui.Hint.Value = "жёлтый"; 
RView.Color = {r:1, g:1};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "желтый";   
RView.Color = {p:22};  
} 
});
var NAreaTag = "g";  
var ViewsParameterName = "Vivews";  
var NAreas = AreaService.GetByTag(NAreaTag);  
var NView = AreaViewService.GetContext().Get("NView");  
 NView.Color = {p:22};  
 NView.Tags = [NAreaTag];  
 NView.Enable = true;  
var NTrigger = AreaPlayerTriggerService.Get("NTrigger");  
NTrigger.Tags = [NAreaTag];  
NTrigger.Enable = true;  
NTrigger.OnEnter.Add(function (player)  
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
if (C.Value ==1){  
player.Ui.Hint.Value = "зелёный"; 
NView.Color = {g:99};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "зелёный";   
NView.Color = {p:22};  
} 
});
var NAAreaTag = "w";  
var ViewsParameterName = "Vivews";  
var NAAreas = AreaService.GetByTag(NAAreaTag);  
var NAView = AreaViewService.GetContext().Get("NAView");  
 NAView.Color = {p:22};  
 NAView.Tags = [NAAreaTag];  
 NAView.Enable = true;  
var NATrigger = AreaPlayerTriggerService.Get("NATrigger");  
NATrigger.Tags = [NAAreaTag];  
NATrigger.Enable = true;  
NATrigger.OnEnter.Add(function (player)
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
if (C.Value ==1){  
player.Ui.Hint.Value = "лампочки включены"; 
NAView.Color = {r:1, g:1};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "лампочки выключены";   
NAView.Color = {p:22};  
} 
});
var NDAreaTag = "re";  
var ViewsParameterName = "Vivews";  
var NDAreas = AreaService.GetByTag(NDAreaTag);  
var NDView = AreaViewService.GetContext().Get("NDView");  
 NDView.Color = {p:22};  
 NDView.Tags = [NDAreaTag];  
 NDView.Enable = true;  
var NDTrigger = AreaPlayerTriggerService.Get("NDTrigger");  
NDTrigger.Tags = [NDAreaTag];  
NDTrigger.Enable = true;  
NDTrigger.OnEnter.Add(function (player)  
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
if (C.Value ==1){  
player.Ui.Hint.Value = "светофор не исправен"; 
NDView.Color = {r:1, g:1, b: 1};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "светофор работает";   
NDView.Color = {p:22};  
} 
});
var mlllsAreasTag = "f"; 
AreaService.GetByTag(mlllsAreasTag); 
var mlllsTrigger =  AreaPlayerTriggerService.Get("mlllsTrigger"); 
mlllsTrigger.Tags = [mlllsAreasTag];  
mlllsTrigger.Enable = true; 
mlllsTrigger.OnEnter.Add(function(player)  
{ 
 Game.RestartGame(); 
});
var xxxxxxAreasTag = "x" 
AreaService.GetByTag(xxxxxxAreasTag); 
var xxxxxxTrigger =  AreaPlayerTriggerService.Get("xxxxxxTrigger"); 
xxxxxxTrigger.Tags = [xxxxxxAreasTag];  
xxxxxxTrigger.Enable = true; 
xxxxxxTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value += 10; 
 player.Properties.Kills.Value += 1; 
});
var pvpAreaTag = "p"; 
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
var sAreaTag = "o"; 
var ViewsParameterName = "Vivews"; 
var sAreas = AreaService.GetByTag(sAreaTag); 
var sView = AreaViewService.GetContext().Get("sView"); 
 sView.Color = { r: 1, g: 1, b: 1 }; 
 sView.Tags = [sAreaTag]; 
 sView.Enable = true; 
var sTrigger = AreaPlayerTriggerService.Get("sTrigger"); 
sTrigger.Tags = [sAreaTag]; 
sTrigger.Enable = true; 
sTrigger.OnEnter.Add(function (player) {       
if (player.Properties.Scores.Value > 10000){
player.Ui.Hint.Value = "ты купил бесконечные блоки !";
 player.inventory.BuildInfinity.Value = true;
player.Properties.Scores.Value -= 10000;
 }else{player.Ui.Hint.Value = "надо 10000 до бесконечных блоков, а у тебя: "+player.Properties.Scores.Value;
 } 
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
var nnTrigger =  AreaPlayerTriggerService.Get("NNTrigger") 
 
nnTrigger.Tags = ["nn"]; 
nnTrigger.Enable = true; 
nnTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "онлайн:" + Players.Count; 
});
var JJAreaTag = "Vip"; 
 
var jjTrigger = AreaPlayerTriggerService.Get("JJTrigger");
jjTrigger.Tags = [JJAreaTag]; 
jjTrigger.Enable = true; 
jjTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "кредит 100 ¢"; 
player.Properties.Kills.Value += 0; 
player.Properties.Scores.Value += 100; 
}); 
var eeTrigger =  AreaPlayerTriggerService.Get("EETrigger") 
 
eeTrigger.Tags = ["ee"]; 
eeTrigger.Enable = true; 
eeTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ты сможешь"; 
});
var pvptAreaTag = "ew"; 
var ViewpvpParameterName = "Vivewpvp"; 
var pvptAreas = AreaService.GetByTag(pvptAreaTag); 
var pvptView = AreaViewService.GetContext().Get("pvptView"); 
 pvptView.Color = {r:1, g: 1}; 
 pvptView.Tags = [pvptAreaTag]; 
 pvptView.Enable = true; 
var pvptTrigger = AreaPlayerTriggerService.Get("pvpyTrigger"); 
pvptTrigger.Tags = [pvptAreaTag]; 
pvptTrigger.Enable = true; 
pvptTrigger.OnEnter.Add(function (player){ 
player.Ui.Hint.Value = " питьевые фонтаны ";
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
var JJAreaTag = "h"; 
 
var jjTrigger = AreaPlayerTriggerService.Get("JJTrigger"); 
jjTrigger.Tags = [JJAreaTag]; 
jjTrigger.Enable = true; 
jjTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = " - 10 иехонтов за проезд "; 
player.Properties.Kills.Value += 0; 
player.Properties.Scores.Value -= 100; 
}); 
var t1trigger = AreaPlayerTriggerService.Get("t1trigger");
t1trigger.Tags = ["t1"];
t1trigger.Enable = true;
t1trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";
BreackGraph.OnlyPlayerBlocksDmg = true;
});
 var t2trigger = AreaPlayerTriggerService.Get("t2trigger");
t2trigger.Tags = ["t2"];
t2trigger.Enable = true;
t2trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание вкл для всех•";
BreackGraph.OnlyPlayerBlocksDmg = false;
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
var ffTrigger =  AreaPlayerTriggerService.Get("FFTrigger");
ffTrigger.Tags = ["gf"];
ffTrigger.Enable = true;
ffTrigger.OnEnter.Add(function (player)         { player.Spawns.Spawn();
});
 var ddTrigger =  AreaPlayerTriggerService.Get("DDTrigger");
ddTrigger.Tags = ["ta"];
ddTrigger.Enable = true;
ddTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ПОЛУЧИЛ ПАЛЕТ";player.Build.FlyEnable.Value = true;                                    });
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
var pdsTrigger = AreaPlayerTriggerService.Get("pdespawnTrigger");


pdsTrigger.Tags = ["jh"];
pdsTrigger.Enable = true;
pdsTrigger.OnEnter.Add(function (player) { player.Spawns.Despawn();
});
VAreaTag = "тп";
var VTrigger = AreaPlayerTriggerService.Get("VTrigger"); 
VTrigger.Tags = [VAreaTag]; 
VTrigger.Enable = true; 
VTrigger.OnEnter.Add(function (player) {       
Teams.Get("Red").Add(player);
});
DAreaTag = "ак";
var DTrigger = AreaPlayerTriggerService.Get("DTrigger"); 
DTrigger.Tags = [DAreaTag]; 
DTrigger.Enable = true; 
DTrigger.OnEnter.Add(function (player) {       
Teams.Get("Blue").Add(player);
});
CTrigger =  
AreaPlayerTriggerService.Get("CTrigger");
CTrigger.Tags = ["l"];
CTrigger.Enable = true;
CTrigger.OnEnter.Add(function(player){
var p = player
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
p.Ui.Hint.Value = letters[Math.floor(Math.random()*letters.length)];});
CTrigger.OnExit.Add(function(player){
p.Ui.Hint.Reset();
});
var LLAreaTag = "uy"; 
 
var llTrigger = AreaPlayerTriggerService.Get("LLTrigger"); 
 
llTrigger.Tags = [LLAreaTag]; 
llTrigger.Enable = true; 
llTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "ты получаешь рандомное количество очков";  
player.Properties.Kills.Value += 0; 
player.Properties.Scores.Value += +Math.random() *100; 
});
var NAAreaTag = "w";  
var ViewsParameterName = "Vivews";  
var NAAreas = AreaService.GetByTag(NAAreaTag);  
var NAView = AreaViewService.GetContext().Get("NAView");  
 NAView.Color = {p:22};  
 NAView.Tags = [NAAreaTag];  
 NAView.Enable = true;  
var NATrigger = AreaPlayerTriggerService.Get("NATrigger");  
NATrigger.Tags = [NAAreaTag];  
NATrigger.Enable = true;  
NATrigger.OnEnter.Add(function (player)  
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
if (C.Value ==1){  
player.Ui.Hint.Value = "лампочки включены"; 
NAView.Color = {r:1, g:1};   
}  
if (C.Value ==2){  
player.Ui.Hint.Value = "лампочки выключены";   
NAView.Color = {p:22};  
} 
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
var words = ["apple", "banana", "carrot", "dog", "elephant", "football", "guitar", "hamburger", "ice cream", "jacket", "kangaroo", "laptop", "mountain", "notebook", "orange", "pizza", "queen", "rabbit", "sunglasses", "telephone", "unicorn", "volcano", "watermelon", "xylophone", "yacht", "zebra"];
var LLAreaTag = "oiu";
var llTrigger = AreaPlayerTriggerService.Get("LLTrigger");
llTrigger.Tags = [LLAreaTag];
llTrigger.Enable = true;
llTrigger.OnEnter.Add(function (player) {
  var randomIndex = Math.floor(Math.random() * words.length);
  player.Ui.Hint.Value = "Твоё слово: " + words[randomIndex];
}); 
var WeaponZoneTrigger = AreaPlayerTriggerService.Get("WeaponZoneTrigger"); 
WeaponZoneTrigger.Tags = ["wea"]; 
WeaponZoneTrigger.Enable = true; 
WeaponZoneTrigger.OnEnter.Add(function(player) { 
  player.Ui.Hint.Value = "зона дуэли"; 
  player.inventory.Secondary.Value = true; contextedProperties.GetContext(player).InventoryType.Value = false; 
  player.inventory.Explosive.Value = false;
  Damage.GetContext().FriendlyFire.Value = true;
}); 
WeaponZoneTrigger.OnExit.Add(function(player) { 
  player.inventory.Secondary.Value = false;
  Damage.GetContext().FriendlyFire.Value = false; 
  player.Inventory.Explosive.Value = true;
contextedProperties.GetContext(player).InventoryType.Value = 1;
});
var chosewTrg = AreaPlayerTriggerService.Get("ChosewTrigger"); 
chosewTrg.Tags = ["й"]; 
chosewTrg.Enable = true; 
chosewTrg.OnEnter.Add(function(p){ 
ato = list[curenc]; 
p.Ui.Hint.Value="> "+ato; 
if(curenc < (list.length - 1))curenc++; 
else curenc = 0; 
}); 

var updaTrg = AreaPlayerTriggerService.Get("UpdaTrigger"); 
updaTrg.Tags = ["ц"]; 
updaTrg.Enable = true; 
updaTrg.OnEnter.Add(function(){ 
list = []; 
curenc = 0; 
ato = 0; 
var e = Players.GetEnumerator(); 
while(e.moveNext()){ 
list.push(e.Current); 
} 
}); 

var banaTrg = AreaPlayerTriggerService.Get("BanaTrigger") 
banaTrg.Tags = ["ун"]; 
banaTrg.Enable = true; 
banaTrg.OnEnter.Add(function(p){ 
Ban(ato); 
p.Ui.Hint.Value=ato+" тебя вызвали на дуэль пройди в зону дуэли "; 
function Ban(player){ 
p=player 
p.Ui.Hint.Value="you are banned"; 
} 
});
var WealpponZoneTrigger = AreaPlayerTriggerService.Get("WealpponZoneTrigger"); 
WealpponZoneTrigger.Tags = ["lp"]; 
WealpponZoneTrigger.Enable = true; 
WealpponZoneTrigger.OnEnter.Add(function(player) { 
  player.Ui.Hint.Value = ""; 
});

WealpponZoneTrigger.OnExit.Add(function(player) { 
  var visitedZone = player.Properties.Get("VisitedWeaponZone").Value;
  if (!visitedZone) {
    var words = ["аар", "banana", "carrot", "dog", "elephant", "football", "guitar", "hamburger", "ice cream", "jacket", "kangaroo", "laptop", "mountain", "notebook", "orange", "pizza", "queen", "rabbit", "sunglasses", "telephone", "unicorn", "volcano", "watermelon", "xylophone", "yacht", "zebra"];
    var randomIndex = Math.floor(Math.random() * words.length);
    Ui.GetContext(player).Hint.Value = player + ". Приветствую, ты: " + words[randomIndex];
    player.Properties.Get("ST").Value = "" + words[randomIndex];
    player.Properties.Get("VisitedWeaponZone").Value = true;
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
});
var WeapontZoneTrigger = AreaPlayerTriggerService.Get("WeapontZoneTrigger");
WeapontZoneTrigger.Tags = ["wtu"];
WeapontZoneTrigger.Enable = true;
WeapontZoneTrigger.OnEnter.Add(function(player) {
  if (player.Properties.Scores.Value >= 900 && ballTicketsLeft > 0) {
    player.Properties.Scores.Value -= 900;
    ballTicketsLeft--;
    player.Ui.Hint.Value = "Ты купил билет на бал! Осталось билетов: " + ballTicketsLeft;
    isBallOpen = true;
    player.Properties.Get("AS").Value = "+"; 
  } else if (player.Properties.Scores.Value < 900) {
    player.Ui.Hint.Value = "У тебя недостаточно монет для покупки билета!";
  } else {
    player.Ui.Hint.Value = "Билеты на бал распроданы!";
  }
});
var mlllssAreasTag = "dss"; 
AreaService.GetByTag(mlllssAreasTag); 
var mlllssTrigger =  AreaPlayerTriggerService.Get("mlllssTrigger"); 
mlllssTrigger.Tags = [mlllssAreasTag];
mlllssTrigger.Enable = true; 
mlllssTrigger.OnEnter.Add(function(player) { 
 if (player.Properties.Get("AS").Value = "+") 
  {
    player.Ui.Hint.Value = "добро пожаловать!";
    player.Properties.Get("AS").Value = ""; 
  }
  else
  {
    player.Spawns.Spawn();
  }
});
var mlllsstAreasTag = "rds";
AreaService.GetByTag(mlllsstAreasTag);
var mlllsstTrigger = AreaPlayerTriggerService.Get("mlllsstTrigger");
mlllsstTrigger.Tags = [mlllsstAreasTag];
mlllsstTrigger.Enable = true;
mlllsstTrigger.OnEnter.Add(function(player) {
  ballTicketsLeft = 7;
});
var mlllsseAreasTag = "ss"; 
AreaService.GetByTag(mlllsseAreasTag); 
var mlllsseTrigger =  AreaPlayerTriggerService.Get("mlllsseTrigger"); 
mlllsseTrigger.Tags = [mlllsseAreasTag];  
mlllsseTrigger.Enable = true; 
mlllsseTrigger.OnEnter.Add(function(player) {
player.inventory.Build.Value = true;
player.Ui.Hint.Value = "ты взял груз,теперь доставь его на базу"; 
});
var mlAreasTag = "as"; 
AreaService.GetByTag(mlAreasTag); 
var mlTrigger =  AreaPlayerTriggerService.Get("mlTrigger"); 
mlTrigger.Tags = [mlAreasTag];  
mlTrigger.Enable = true; 
mlTrigger.OnEnter.Add(function(player) { 
 if (player.inventory.Build.Value = true) 
  {
    player.Properties.Get("Scores").Value + 100;
    player.inventory.Build.Value = false;
  }
  else 
  {
    player.Properties.Scores.Value += 0;
    player.Ui.Hint.Value = "У тебя";
  }
});
var swview = AreaViewService.GetContext().Get("sqView");
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
// зона красных 
var redTrg = AreaPlayerTriggerService.Get("redTrigger"); 
redTrg.Tags = ["ter"]; 
redTrg.Enable = true; 
redTrg.OnEnter.Add(function(player){ 
    if(!player.Properties.Get("IsCargoTaken").Value && player.Team == blueTeam){ 
        player.Properties.Get("IsCargoTaken").Value = true; 
        SetArea(player, "red"); 
    } else if(player.Properties.Get("IsCargoTaken").Value && player.Team == blueTeam) { 
        player.Properties.Get("IsCargoTaken").Value = false; 
        SetArea(player, "blue"); 
        player.Properties.Scores.Value += 100; 
    } 
}); 

// зона синих 
var blueTrg = AreaPlayerTriggerService.Get("blueTrigger"); 
blueTrg.Tags = ["ret"]; 
blueTrg.Enable = true; 
blueTrg.OnEnter.Add(function(player){ 
    if(player.Properties.Get("IsCargoTaken").Value && player.Team == blueTeam){ 
        player.Properties.Get("IsCargoTaken").Value = false; 
        GetArea(player, "blue"); 
    } 
}); 
//
Damage.OnKill.Add(function(player) {
 if (player.Properties.Get("Kills").Value
>= 3) 
  {
    player.Spawns.Despawn();
  }
  else
  {
    player.Ui.Hint.Value = "при четырёх килах вы будете забанены";
  }
});
// по лвл бан
Teams.OnRequestJoinTeam.Add(function(player) {
 if (player.Properties.Lvl.Value <= 20) 
  {
    player.Spawns.Despawn();
  }
  else
  {
    player.Ui.Hint.Value = "";
	  }
});
// по лвл бан
Teams.OnRequestJoinTeam.Add(function(player) {
 if (player.Properties.TesterLvl.Value >= 10) 
  {
    player.Spawns.Despawn();
  }
  else
  {
    player.Ui.Hint.Value = "";
  }
});
// лидерборд 
LeaderBoard.PlayerLeaderBoardValues = [
 { 
        Value: "ST", 
        DisplayName: "<B>ST</B>", 
        ShortDisplayName: "<B>ST</B>" 
 }, 
 {
  Value: "Scores",
  DisplayName: "<B>M</B>",
  ShortDisplayName: "<B>M</B>"
 },
 {
        Value: "AS", 
        DisplayName: "<B>ticets</B>", 
        ShortDisplayName: "<B>ticets</B>"
 }, 
 {    
        Value: "TA", 
        DisplayName: "<B>э</B>", 
        ShortDisplayName: "<B>э</B>"
 }, 
 { 
     Value: "eggPls", 
     DisplayName: "К", 
     ShortDisplayName: "К" 
 }, 
 { 
        Value: "Isegg", 
        DisplayName: "Я", 
        ShortDisplayName: "Я" 
 } 
]; 
//
blueTeam.Properties.Get("egg").Value = ValueTeams; 
blueTeam.Properties.Get("EggTeam").Value = true; 
                                                                                       
// задаем что выводить вверху  
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Deaths" }; 

// задаем макс смертей команд  
var maxDeaths = ""; 
var maxDeaths2 = "";  
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;  
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;

// ������ ��������� 
Ui.getContext().Hint.Value = "<i><B><color=cyan>BEAR</color></B></i>"; 

//                                                                                 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
 
player.Properties.Get("ST").Value = "<B><i>ГОСТЬ</i></B>"; 
 
}); 

//                                                                                 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
 
player.Properties.Get("aa").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16); 
 
}); 
// 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player); 
  if (player.Properties.TesterLvl.Value  >= 1) 
  { 
   player.Properties.Get("hh").Value = "<B><color=cyan>+</color></B>";    
  }                                 
});
// инвентарь 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = true;  inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 

// счётчик киллов
Damage.OnKill.Add(function(player, killed){ 
  if (killed.Team != null && killed.blueTeam == player.blueTeam) {
   ++player.Properties.Kills.Value;
  }
});

// бессмертие после спавна 
Spawns.GetContext().OnSpawn.Add(function(player){ 
 player.Properties.Immortality.Value = true; 
    timer = player.Timers.Get("im").Restart(2); 
}); 
Timers.OnPlayerTimer.Add(function(timer){ 
    if(timer.Id != "im") return; 
    timer.Player.Properties.Immortality.Value = false; 
}); 
// зона красных 
var redTrg = AreaPlayerTriggerService.Get("redTrigger"); 
redTrg.Tags = ["red"]; 
redTrg.Enable = true; 
redTrg.OnEnter.Add(function(player){ 
    if(!player.Properties.Get("Isegg").Value && blueTeam.Properties.Get("EggTeam").Value && player.Team == blueTeam){ 
        SetArea(player, "red"); 
    } if(player.Properties.Get("Isegg").Value && player.Team == blueTeam) { 
        GetArea(player, "red"); 
    } 
}); 
// зона синих 
var blueTrg = AreaPlayerTriggerService.Get("blueTrigger"); 
blueTrg.Tags = ["blue"]; 
blueTrg.Enable = true; 
blueTrg.OnEnter.Add(function(player){ 
    if(player.Properties.Get("Isegg").Value && player.Team == blueTeam){ 
        GetArea(player, "blue"); 
    } if(!player.Properties.Get("Isegg").Value && blueTeam.Properties.Get("EggTeam").Value && player.Team == blueTeam) { 
        SetArea(player, "blue"); 
    } 
}); 

contextedProperties.GetContext().MaxHp.Value = 500;
