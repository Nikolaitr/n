import * as API from 'pixel_combats/room'
import * as BASIC from 'pixel_combats/basic'
import { Build, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns } from 'pixel_combats/room';
import * as peace from './options.js';
import * as teams from './default_teams.js';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, 
        Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer, Build, AreaPlayerTriggerService } from 'pixel_combats/room';

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
peace.set_editor_options();

// запрет нанесения урона
Damage.GetContext().DamageOut.Value = false;

// параметры игры
Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";
// создаем команды
var red = GameMode.Parameters.GetBool("RedTeam");
var blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) teams.create_team_red();
if (blue || !red && !blue) teams.create_team_blue();

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.add_Event(function (player, team) { team.Add(player); });
// спавн по входу в команду
Teams.OnPlayerChangeTeam.add_Event(function (player) { player.Spawns.Spawn(); });

// задаем подсказку
Ui.getContext().Hint.Value = "Hint/BuildBase";

// конфигурация инвентаря
peace.set_editor_inventory();

//зоны
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
yellowView.Color = {r:1, g:1}
 stateProp.Value = BaseStateValue;
 mainTimer.Restart(BaseTime);
}
function Set() {
yellowView.Color = {r:20, g:100, b:100}
 stateProp.Value = WStateValue;
 mainTimer.Restart(BaseTime);
}
});

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 0;
