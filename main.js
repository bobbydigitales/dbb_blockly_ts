
import {defineBlocks} from "./blockDefinitions.mjs";

window.addEventListener("load", main);

let scriptHeader = `export class Script extends UserScriptComponent {
`;

let scriptFooter = `
}`;

let writeLock = false;

function main() {
  console.log("main:Hello world!");

  // console.log(Blockly)

  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    "class UserScriptComponent{game:any;entity:any}"
  );

  let editor = monaco.editor.create(
    document.getElementById("monacoContainer"),
    {
      value: "// waiting for blockly...",
      language: "typescript",
      theme: "vs-dark",
    }
  );

  defineBlocks();

  let workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox"),
    // toolbox: toolbox
  });

  // let xml = Blockly.utils.xml.textToDom('<xml><variables><variable id="=f0=RnD=8vF^%i49W_RK">spawnTimer</variable><variable id="iNZkr`4yYsBW*7KlV^.4">spawnArea</variable><variable id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</variable><variable id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</variable><variable id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</variable><variable id="8/aleFk9Oa{$fP?h!@T5">newEntity</variable></variables><block type="variables_set" id="#%tM4[CfU3,WJ2V986L#" x="0" y="0"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="VALUE"><block type="math_number" id="+y;k9KX|?xn_,JvfY7GA"><field name="NUM">0</field></block></value><next><block type="variables_set" id="Km8yjO|F*}86E7ww|NMJ"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field><value name="VALUE"><block type="math_number" id="vHEL3tMQhiMnv52~7@qO"><field name="NUM">200</field></block></value><next><block type="variables_set" id="uto(y=xVC.WbMe`OFSj0"><field name="VAR" id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</field><value name="VALUE"><block type="math_number" id="?;tWFViAyDaHYMS3+Vv^"><field name="NUM">2</field></block></value><next><block type="variables_set" id="^qel@8Z}N$G|Sxa-2Dxp"><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field><value name="VALUE"><block type="lists_create_with" id=".Ri.7!2=5+qEXi~)Jjg?"><mutation items="0"></mutation></block></value><next><block type="variables_set" id="@YWWx6,bjG5N}]zj,qQ="><field name="VAR" id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</field><value name="VALUE"><block type="math_number" id="Mo2LXc=|qo2[sN#P.S~;"><field name="NUM">10</field></block></value></block></next></block></next></block></next></block></next></block><block type="tick" id="x@1aVy8(^SPd7h:zrZM%" x="0" y="158"><statement name="body"><block type="math_change" id="|F$6vkG/VejNd/U@p(KY"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="DELTA"><shadow type="math_number" id="P^Vnm?-M7@N`vRoV]]Gb"><field name="NUM">1</field></shadow><block type="delta_time" id="(iGM]LKx~siAYFm,%qL3"></block></value><next><block type="controls_if" id="=F6MNx3:LBwjF}Nfe;6$"><value name="IF0"><block type="logic_operation" id="zra%{iW6eNF=SXbQIReY"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="-LZN`TR~.yCsl__s|=C/"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="3v^?UBwigW|c,X%XOg%n"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field></block></value><value name="B"><block type="variables_get" id="xOXhO0r]*oJvm?58tB!t"><field name="VAR" id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</field></block></value></block></value><value name="B"><block type="logic_compare" id="^C!J/nxYg+VG{*;xPVIy"><field name="OP">LTE</field><value name="A"><block type="lists_length" id="|+tWOpxPK@c-JCzd`184"><value name="VALUE"><block type="variables_get" id="m}Cyl6+NJA`)OZ$A:~e."><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field></block></value></block></value><value name="B"><block type="math_arithmetic" id="v~eVNCxwt%4baEV0Y;6P"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="aR51#OHA;3q$1/-A%gF+"><field name="NUM">1</field></shadow><block type="variables_get" id="]M;$Z20L=D];fVb|=9-"><field name="VAR" id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</field></block></value><value name="B"><shadow type="math_number" id="%k-0{w|]~YX3m_=1WhL!"><field name="NUM">1</field></shadow></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id=".@iJr*H4w]zGsrj/=//g"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="VALUE"><block type="math_number" id="YF:0]T/KU%CZpIYh(-yt"><field name="NUM">0</field></block></value><next><block type="variables_set" id="WEseMQMQ3_kK$Ra/!pgO"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field><value name="VALUE"><block type="spawn_template" id="B(Sp(XK+]A~UI;a:h!6f"><field name="template_name">template2</field></block></value><next><block type="lists_setIndex" id="p8+WZC1ha;VWS5k?tFFI"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get" id="W}}[,l6Q+AeL5gf6GkHe"><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field></block></value><value name="TO"><block type="variables_get" id="?{^XK-.=r[sRm:K.8LR0"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field></block></value><next><block type="set_entity_position" id="hl}5|Gs8A|[8Md[|@GQw"><value name="entity"><shadow type="current_entity" id="6l=y9-Tridv;D=OFx,V|"></shadow><block type="variables_get" id="R+;+(P^JI!y:DD7Y37y7"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field></block></value><value name="position"><shadow type="position" id="vvA?wF0N.6J2Db;dLE4x"><value name="x"><shadow type="math_number" id="uHHaPi4^E6OM-;Jxlo}U"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="#uufzjsABtQQXCbQVNJ6"><field name="NUM">50</field></shadow></value><value name="z"><shadow type="math_number" id="pTIcrK)S|MV^5O09t*:["><field name="NUM">0</field></shadow></value></shadow><block type="position" id="1b^8D:oM_*TPa3de#S6J"><value name="x"><shadow type="math_number" id="{]mC$P$Q|x/ToA!2j;Gg"><field name="NUM">0</field></shadow><block type="math_random_int" id="cVO9$}r3j|Ojk|vW-[:l"><value name="FROM"><shadow type="math_number" id="+{|#p+kX|N$(rs4|.h.f"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="math_number" id="2f:zpgYfHH=`;w4(EOJc"><field name="NUM">100</field></shadow><block type="variables_get" id="`A!-=jOfYZz}z,IkkJTA"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field></block></value></block></value><value name="y"><shadow type="math_number" id=",Gp56yM.x$GNxsATO!pM"><field name="NUM">100</field></shadow></value><value name="z"><shadow type="math_number" id="AO=mOYdVxXC_{i@bJ)~/"><field name="NUM">0</field></shadow><block type="math_random_int" id="Cv#^{_P6Fnv-L(e6NC*Q"><value name="FROM"><shadow type="math_number" id="{Nx^2AE6u=X3k!^.^j++"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="math_number" id="OMC`jx.]HSmLo6o!(QeU"><field name="NUM">100</field></shadow><block type="variables_get" id="Oun,*kim*dgkwP;oPEpG"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field></block></value></block></value></block></value></block></next></block></next></block></next></block></statement></block></next></block></statement></block></xml>');
  // let xml = Blockly.utils.xml.textToDom('<xml><variables><variable id="otherEntity">otherEntity</variable></variables><block type="on_collision_enter" id=".K!BtOL1N3`!zJ3O3dBU" x="53" y="75"><statement name="body"><block type="controls_if" id="Lnl:RYwz(_O0X|J.w8i="><value name="IF0"><block type="entity_has_tag" id="]:-/y93|N%7[20{`cHV?"><value name="entity"><shadow type="current_entity" id="#6NDi3.~2-UMiI9#}l6S"></shadow><block type="variables_get" id=".Jsu:5B=bTgbhMzaAmoz"><field name="VAR" id="otherEntity">otherEntity</field></block></value><value name="tag"><shadow type="text" id="orHLznPQqLjmj7DDNmri"><field name="TEXT">player</field></shadow></value></block></value><statement name="DO0"><block type="set_entity_position" id="}jD!1;)GHzWq;2LlFXu9"><value name="entity"><shadow type="current_entity" id="z;ZQI)yD{s2I:;K0A9K8"></shadow><block type="spawn_template" id="/W=e,dQGUbmHd=~Sr|/*"><field name="template_name">template2</field></block></value><value name="position"><shadow type="position" id="=N9)gOGv7W1eu1G_9-Od"><value name="x"><shadow type="math_number" id="k0YEj)0%7u/7WpwU[^2h"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="d.{ud1]4ScP~Em#xO/%1"><field name="NUM">0</field></shadow></value><value name="z"><shadow type="math_number" id="Q1b[h$k0iz2@R3fIO)ZV"><field name="NUM">0</field></shadow></value></shadow><block type="get_entity_position" id="ejc{!qZ$X3xLEz^=x!R="><value name="entity"><shadow type="current_entity" id="~z`+=]%WR1cr5MeRVHY+"></shadow></value></block></value></block></statement></block></statement></block></xml>');
  let xml = Blockly.utils.xml.textToDom(
    '<xml><variables><variable id="otherEntity">otherEntity</variable></variables><block type="on_collision_enter" id=".K!BtOL1N3`!zJ3O3dBU" x="53" y="75"><statement name="body"><block type="controls_if" id="Lnl:RYwz(_O0X|J.w8i="><value name="IF0"><block type="entity_has_tag" id="]:-/y93|N%7[20{`cHV?"><value name="entity"><shadow type="current_entity" id="#6NDi3.~2-UMiI9#}l6S"></shadow><block type="variables_get" id=".Jsu:5B=bTgbhMzaAmoz"><field name="VAR" id="otherEntity">otherEntity</field></block></value><value name="tag"><shadow type="text" id="orHLznPQqLjmj7DDNmri"><field name="TEXT">player</field></shadow></value></block></value><statement name="DO0"><block type="set_entity_position" id="}jD!1;)GHzWq;2LlFXu9"><value name="entity"><shadow type="current_entity" id="z;ZQI)yD{s2I:;K0A9K8"></shadow><block type="spawn_template" id="/W=e,dQGUbmHd=~Sr|/*"><field name="template_name">template2</field></block></value><value name="position"><shadow type="position" id="=N9)gOGv7W1eu1G_9-Od"><value name="x"><shadow type="math_number" id="k0YEj)0%7u/7WpwU[^2h"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="d.{ud1]4ScP~Em#xO/%1"><field name="NUM">0</field></shadow></value><value name="z"><shadow type="math_number" id="Q1b[h$k0iz2@R3fIO)ZV"><field name="NUM">0</field></shadow></value></shadow><block type="get_entity_position" id="ejc{!qZ$X3xLEz^=x!R="><value name="entity"><shadow type="current_entity" id="~z`+=]%WR1cr5MeRVHY+"></shadow></value></block></value></block></statement></block></statement></block></xml>'
  );

  // let xml = Blockly.utils.xml.textToDom('<xml><block type="start" id="pB9ICb,78N3*!tv09;@#" x="268" y="180"><statement name="body"><block type="text_print_new" id="+~Pdo`r@p8q#J7KMtC7#"><value name="TEXT"><shadow type="text" id="~!KOFANj+P4X!FdFfm6k"><field name="TEXT">In start!</field></shadow></value></block></statement></block><block type="tick" id="xa!3vZx.A3jscgfD/ap#" x="270" y="286"><statement name="body"><block type="text_print_new" id="Q`^EPmK-IzT?0[M;.#uA"><value name="TEXT"><shadow type="text" id="J-(:/5R49/`M?x{S*cUs"><field name="TEXT">Ticking!</field></shadow></value><next><block type="text_print_new" id="p#3xDUzKvzgAk;^#pWDp"><value name="TEXT"><shadow type="text" id="OrqSx*zALrd]%5@3U8nI"><field name="TEXT"></field></shadow><block type="text_join" id="jxt9E~ct]EfhhiO0v8cm"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="?Qw(u7}cBsOaF:JBxbO:"><field name="TEXT">Server time is: </field></block></value><value name="ADD1"><block type="server_time" id="g/G1~p+)/4oI(A*OV+^r"></block></value></block></value></block></next></block></statement></block></xml>');
  Blockly.Xml.domToWorkspace(xml, workspace);

  workspace.addChangeListener((event) => {
    if (
      event.type === Blockly.Events.CLICK ||
      event.type === Blockly.Events.VIEWPORT_CHANGE ||
      event.type === Blockly.Events.TOOLBOX_ITEM_SELECT
    ) {
      return;
    }
    compileScript(workspace, editor);
  });

  // this.entity.tags.add('noraycast');
  // Blockly.dbb_initialized = true;

  let blocklyDiv = document.querySelector("#blocklyDiv");

  if (blocklyDiv) {
    blocklyDiv.style.visibility = "visible";
  }

  editor.getModel().onDidChangeContent((event) => {});

  editor.onDidPaste((event) => {
    let source = editor.getModel().getValue();

    const match = source.match(/\/\/ \[blockly\] (\{.*\})/);
    let blocklyWorkspaceIsPresent = match && match[1];
    if (blocklyWorkspaceIsPresent) {
      console.log("Loading workspace from pasted code...");
      const json = JSON.parse(match[1]);
      console.log(json);
      Blockly.serialization.workspaces.load(json, workspace);
    }
  });
}

function compileScript(workspace, editor) {
  let blocklySourceOutput = Blockly.JavaScript.workspaceToCode(workspace);
  var json = JSON.stringify(
    Blockly.serialization.workspaces.save(workspace)
  );

  let sourceCode = `${blocklySourceOutput}
return {start:start, tick:tick, onCollisionEnter:onCollisionEnter};`;

  // let finalSource = `${scriptHeader}// [blockly] ${json}
// ${blocklySourceOutput}${scriptFooter}`;

let codeWrapper = `export class Script extends UserScriptComponent {

  template1: TemplateRef = new TemplateRef();
  template2: TemplateRef = new TemplateRef();
  template3: TemplateRef = new TemplateRef();
  template4: TemplateRef = new TemplateRef();

  compiledCode:any = null;

  start() {
    let blocklyCode = \`${sourceCode}\`;
          let start = null;
        let tick = null;
        let onCollisionEnter = null;

      this.compiledCode = (new Function('Vector3, Euler, start, tick, onCollisionEnter', blocklyCode)).bind(this)(Vector3, Euler, start, tick, onCollisionEnter);

    if (this.compiledCode) {
      if (typeof this.compiledCode.start === 'function') {
        try {
          this.compiledCode.start.apply(this);
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  onCollisionEnter(otherEntity: Entity, collision: CollisionContact) {
    if (this.compiledCode) {
      if (typeof this.compiledCode.onCollisionEnter === 'function') {
        try {
          this.compiledCode.onCollisionEnter.apply(this, [otherEntity, collision]);
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  
  tick() {
    if (this.compiledCode) {
      if (typeof this.compiledCode.tick === 'function') {
        try {
          this.compiledCode.tick.apply(this);
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}`;

// let finalSource = codeWrapper;

let finalSource = `// [blockly] ${json}
${codeWrapper};`

  editor.getModel().setValue(finalSource);
  editor.trigger("anything", "editor.action.formatDocument");

  return finalSource;
}

//   onCollisionEnter(otherEntity: Entity, collision: CollisionContact) {
//     if (this.compiledCode.onCollisionEnter) {
//       this.compiledCode.onCollisionEnter.apply(this, [otherEntity, collision]);
//     }
//   }

//   tick() {
//     if (this.updateWorkspace) {
//       this.updateWorkspace = false;

//       this.sourceCode = Blockly.JavaScript.workspaceToCode(workspace);
//       this.sourceCode = `${this.sourceCode}
//       return {start:start, tick:tick, onCollisionEnter:onCollisionEnter};`;

//       console.log(this.sourceCode)
//       console.log(Blockly.Xml.workspaceToDom(workspace));
//       let start = null;
//       let tick = null;
//       let onCollisionEnter = null;
//       try {
//         this.compiledCode = (new Function('Vector3, Euler, start, tick, onCollisionEnter', this.sourceCode)).bind(this)(Vector3, Euler, start, tick, onCollisionEnter);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     if (this.compiledCode) {
//       if (typeof this.compiledCode.tick === 'function') {
//         try {
//           this.compiledCode.tick.apply(this);
//         } catch (error) {
//           console.log(error)
//         }
//       }
//     }
//   }
