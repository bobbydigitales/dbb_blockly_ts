window.addEventListener("load", main)


let scriptHeader = `export class Script extends UserScriptComponent {
`;

let scriptFooter = `
}`;

let writeLock = false;

function main() {
    console.log("Hello world!");

    // console.log(Blockly)

    monaco.languages.typescript.typescriptDefaults.addExtraLib("class UserScriptComponent{game:any;entity:any}");

    let editor = monaco.editor.create(document.getElementById('monacoContainer'), {
        value: '// waiting for blockly...',
        language: 'typescript',
        theme: "vs-dark",
    });





    Blockly.defineBlocksWithJsonArray([
      {
        "type": "start",
        "message0": "start %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "body"
          }
        ],
        "colour": 20,
        "tooltip": "Called when the game starts.",
        "helpUrl": ""
      }, {
        "type": "server_time",
        "message0": "server time %1",
        "args0": [
          {
            "type": "input_dummy"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
      }, {
        "type": "delta_time",
        "message0": "delta time %1",
        "args0": [
          {
            "type": "input_dummy"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
      }, {
        "type": "current_entity",
        "message0": "current entity",
        "output": "entity",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "player_entity",
        "message0": "player entity",
        "output": "entity",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "position_get_x",
        "message0": "get X %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "position",
            "check": "position"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "tick",
        "message0": "tick %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "body"
          }
        ],
        "colour": 20,
        "tooltip": "Called every game update.",
        "helpUrl": ""
      }, {
        "type": "on_collision_enter",
        "message0": "onCollisionEnter with otherEntity and contact %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "body"
          }
        ],
        "colour": 20,
        "tooltip": "Called when this entity begins to collide with another entity.",
        "helpUrl": ""
      }, {
        "type": "on_collision_stay",
        "message0": "on collision stay %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "body"
          }
        ],
        "colour": 20,
        "tooltip": "Called when this entity continues to collide with another entity.",
        "helpUrl": ""
      }, {
        "type": "on_collision_exit",
        "message0": "on collision exit %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "body"
          }
        ],
        "colour": 20,
        "tooltip": "Called when this entity stops colliding with another entity.",
        "helpUrl": ""
      },
      {
        "type": "position",
        "message0": "position %1 x %2 y %3 z %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "x",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "z",
            "check": "Number"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "rotation",
        "message0": "rotation %1 x %2 y %3 z %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "x",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "z",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "get_entity_position",
        "message0": "get entity position %1",
        "args0": [
          {
            "type": "input_value",
            "name": "entity",
            "check": "entity"
          },
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "set_entity_position",
        "message0": "set entity position: entity %1 position %2",
        "args0": [
          {
            "type": "input_value",
            "name": "entity",
            "check": "entity"
          },
          {
            "type": "input_value",
            "name": "position",
            "check": "position"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "set_entity_rotation",
        "message0": "set entity rotation %1",
        "args0": [
          {
            "type": "input_value",
            "name": "rotation",
            "check": "rotation"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "change_entity_position_by",
        "message0": "change entity position by %1",
        "args0": [
          {
            "type": "input_value",
            "name": "position",
            "check": "position"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "change_entity_rotation_by",
        "message0": "change entity rotation by %1",
        "args0": [
          {
            "type": "input_value",
            "name": "rotation",
            "check": "rotation"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "position_move_towards",
        "message0": "move towards %1 from %2 by distance %3",
        "args0": [
          {
            "type": "input_value",
            "name": "target",
            "check": "position"
          },
          {
            "type": "input_value",
            "name": "current",
            "check": "position"
          },
          {
            "type": "input_value",
            "name": "distance",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "position_distance_between",
        "message0": "distance between: %1 first %2 %3 second %4 %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "first",
            "check": "position"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "second",
            "check": "position"
          },
        ],
        "inputsInline": true,

        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "entity_move_forward",
        "message0": "move forward: %1 distance %2 %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "distance",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "text_print_new",
        "message0": Blockly.Msg['TEXT_PRINT_TITLE'],
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "text_blocks",
        "tooltip": Blockly.Msg['TEXT_PRINT_TOOLTIP'],
        "helpUrl": Blockly.Msg['TEXT_PRINT_HELPURL']
      }, {
        "type": "spawn_template",
        "message0": "spawn %1 %2",
        "args0": [
          { "type": "input_dummy" },
          {
            "type": "field_dropdown",
            "name": "template_name",
            "options": [
              ["Rocket", "template1"],
              ["Zombie", "template2"],
              ["Wobble Tree", "template3"],
              ["Explosion", "template4"],
            ]
          }
        ],
        "inputsInline": true,
        "output": "entity",
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "remove_entity",
        "message0": "remove %1",
        "args0": [
          {
            "type": "input_value",
            "name": "entity",
            "check": ["entity", "Array"]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": true,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "get_entities_by_tag",
        "message0": "get entities by tag %1",
        "args0": [
          {
            "type": "input_value",
            "name": "tag",
            "check": "String"
          }
        ],
        "output": "Array",
        "inputsInline": true,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "send_event_to_tag",
        "message0": "send %1 to tag %2",
        "args0": [
          {
            "type": "input_value",
            "name": "event",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "tag",
            "check": "String"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": true,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "entity_add_tag",
        "message0": "add tag %1 to %2",
        "args0": [
          {
            "type": "input_value",
            "name": "tag",
            "check": "String"
          }, {
            "type": "input_value",
            "name": "entity",
            "check": "entity"
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }, {
        "type": "entity_has_tag",
        "message0": "%1 has tag %2",
        "args0": [
          {
            "type": "input_value",
            "name": "entity",
            "check": "entity"
          }, {
            "type": "input_value",
            "name": "tag",
            "check": "String"
          },
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },]);

    Blockly.JavaScript['position'] = function (block) {
      let value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
      let value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
      let value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `new Vector3(${value_x}, ${value_y}, ${value_z})`;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['rotation'] = function (block) {
      let value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
      let value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
      let value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
      let twoPI = Math.PI * 2;
      let code = `new Euler(${value_x} * ${twoPI}, ${value_y} * ${twoPI}, ${value_z} * ${twoPI})`;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['current_entity'] = function (block) {
      let code = `this.entity`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['player_entity'] = function (block) {
      let code = `this.game.playerEntity`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };


    Blockly.JavaScript['entity_add_tag'] = function (block) {
      if (!block.allInputsFilled()) {
        return '';
      }

      const entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
      const tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
      const code = `${entity}.tags.add(${tag})`;
      return code;
    };

    
    Blockly.JavaScript['entity_has_tag'] = function (block) {
      if (!block.allInputsFilled()) {
        return '';
      }

      const entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
      const tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
      const code = `${entity}.tags.has(${tag})`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['get_entity_position'] = function (block) {
      let entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
      let code = `${entity}.worldTransform.position.clone()`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['server_time'] = function (block) {
      let code = `this.game.session.serverTime`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['delta_time'] = function (block) {
      let code = `this.game.frameDeltaTime`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['set_entity_position'] = function (block) {
      let entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
      if (entity === '') {
        entity = 'this.entity';
      }
      let position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `${entity}.worldTransform.position.copy(${position});`;
      return code;
    };

    
    Blockly.JavaScript['set_entity_rotation'] = function (block) {
      let value_name = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `this.entity.worldTransform.rotation.copy(${value_name});`;
      return code;
    };


    
    Blockly.JavaScript['change_entity_position_by'] = function (block) {
      let value_name = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `this.entity.worldTransform.position.add(${value_name}.clone().multiplyScalar(this.game.frameDeltaTime));`;
      return code;
    };

    
    Blockly.JavaScript['position_distance_between'] = function (block) {
      let first = Blockly.JavaScript.valueToCode(block, 'first', Blockly.JavaScript.ORDER_ATOMIC);
      let second = Blockly.JavaScript.valueToCode(block, 'second', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `${first}.distanceTo(${second})`;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    
    Blockly.JavaScript['position_move_towards'] = function (block) {
      let current = Blockly.JavaScript.valueToCode(block, 'current', Blockly.JavaScript.ORDER_ATOMIC);
      let target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
      let distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `${target}.sub(${current}).setLength(${distance})`;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    
    Blockly.JavaScript['entity_move_forward'] = function (block) {
      let distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `this.entity.worldTransform.position.add(this.entity.worldTransform.getForward().clone().setLength(${distance} * this.game.frameDeltaTime));`;
      return code;
    };

    
    Blockly.JavaScript['change_entity_rotation_by'] = function (block) {
      let value_name = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `this.entity.worldTransform.rotation.setFromVector3(this.entity.worldTransform.rotation.toVector3().add(${value_name}.toVector3().multiplyScalar(this.game.frameDeltaTime)));`;
      return code;
    };

    
    Blockly.JavaScript['position_get_x'] = function (block) {
      let position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `${position}.x`;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    
    Blockly.JavaScript['start'] = function (block) {
      let children = Blockly.JavaScript.statementToCode(block, 'body');
      let code = `start() {
    ${children}
  }`;
      return code;
    };

    
    Blockly.JavaScript['text_print_new'] = function (block) {
      let text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);

      let code = `console.log(${text});`;
      return code;
    };

    
    Blockly.JavaScript['spawn_template'] = function (block) {
      if (!block.outputConnection.targetBlock()) {
        return ['', Blockly.JavaScript.ORDER_FUNCTION_CALL];
      }
      let templateName = block.getFieldValue('template_name');
      let code = `this.game.addEntityFromTemplate(this.${templateName}.get())`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['remove_entity'] = function (block) {
      if (!block.allInputsFilled()) {
        return '';
      }

      let childCheck = block.getChildren()[0].outputConnection.getCheck()[0]

      if (childCheck === 'entity') {
        let entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        return `this.game.removeEntity(${entity})`;
      }

      if (childCheck === 'Array') {
        let array = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        return `for (let entity of ${array}){
          this.game.removeEntity(entity);
          }`;
      }

    };

    
    Blockly.JavaScript['get_entities_by_tag'] = function (block) {
      let tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
      let code = `this.game.getEntitiesByTag(${tag})`;
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    
    Blockly.JavaScript['send_event_to_tag'] = function (block) {
      let event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
      let tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
      let code = `this.game.sendEventToTag(${tag}, ${event})`;
      return code
    };

    
    Blockly.JavaScript['tick'] = function (block) {
      let children = Blockly.JavaScript.statementToCode(block, 'body');
      let code = `tick() {
        ${children}
      }`;
      return code;
    };

    
    Blockly.JavaScript['on_collision_enter'] = function (block) {
      let children = Blockly.JavaScript.statementToCode(block, 'body');
      let code = `onCollisionEnter(otherEntity, contact) {
        ${children}
      }`;
      return code;
    };

    
    Blockly.JavaScript['on_collision_stay'] = function (block) {
      let children = Blockly.JavaScript.statementToCode(block, 'body');
      let code = `onCollisionStay(otherEntity, contact) {
        ${children}
      }`;
      return code;
    };

    
    Blockly.JavaScript['on_collision_exit'] = function (block) {
      let children = Blockly.JavaScript.statementToCode(block, 'body');
      let code = `onCollisionExit(otherEntity, contact) {
        ${children}
      }`;
      return code;
    };

    
    this.workspace = Blockly.inject('blocklyDiv', {
      

      toolbox: document.getElementById('toolbox')
    });

    // let xml = Blockly.utils.xml.textToDom('<xml><variables><variable id="=f0=RnD=8vF^%i49W_RK">spawnTimer</variable><variable id="iNZkr`4yYsBW*7KlV^.4">spawnArea</variable><variable id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</variable><variable id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</variable><variable id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</variable><variable id="8/aleFk9Oa{$fP?h!@T5">newEntity</variable></variables><block type="variables_set" id="#%tM4[CfU3,WJ2V986L#" x="0" y="0"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="VALUE"><block type="math_number" id="+y;k9KX|?xn_,JvfY7GA"><field name="NUM">0</field></block></value><next><block type="variables_set" id="Km8yjO|F*}86E7ww|NMJ"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field><value name="VALUE"><block type="math_number" id="vHEL3tMQhiMnv52~7@qO"><field name="NUM">200</field></block></value><next><block type="variables_set" id="uto(y=xVC.WbMe`OFSj0"><field name="VAR" id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</field><value name="VALUE"><block type="math_number" id="?;tWFViAyDaHYMS3+Vv^"><field name="NUM">2</field></block></value><next><block type="variables_set" id="^qel@8Z}N$G|Sxa-2Dxp"><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field><value name="VALUE"><block type="lists_create_with" id=".Ri.7!2=5+qEXi~)Jjg?"><mutation items="0"></mutation></block></value><next><block type="variables_set" id="@YWWx6,bjG5N}]zj,qQ="><field name="VAR" id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</field><value name="VALUE"><block type="math_number" id="Mo2LXc=|qo2[sN#P.S~;"><field name="NUM">10</field></block></value></block></next></block></next></block></next></block></next></block><block type="tick" id="x@1aVy8(^SPd7h:zrZM%" x="0" y="158"><statement name="body"><block type="math_change" id="|F$6vkG/VejNd/U@p(KY"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="DELTA"><shadow type="math_number" id="P^Vnm?-M7@N`vRoV]]Gb"><field name="NUM">1</field></shadow><block type="delta_time" id="(iGM]LKx~siAYFm,%qL3"></block></value><next><block type="controls_if" id="=F6MNx3:LBwjF}Nfe;6$"><value name="IF0"><block type="logic_operation" id="zra%{iW6eNF=SXbQIReY"><field name="OP">AND</field><value name="A"><block type="logic_compare" id="-LZN`TR~.yCsl__s|=C/"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="3v^?UBwigW|c,X%XOg%n"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field></block></value><value name="B"><block type="variables_get" id="xOXhO0r]*oJvm?58tB!t"><field name="VAR" id="/{Vc;Sl6;Bv!vEh^A*A$">spawnPeriod</field></block></value></block></value><value name="B"><block type="logic_compare" id="^C!J/nxYg+VG{*;xPVIy"><field name="OP">LTE</field><value name="A"><block type="lists_length" id="|+tWOpxPK@c-JCzd`184"><value name="VALUE"><block type="variables_get" id="m}Cyl6+NJA`)OZ$A:~e."><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field></block></value></block></value><value name="B"><block type="math_arithmetic" id="v~eVNCxwt%4baEV0Y;6P"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="aR51#OHA;3q$1/-A%gF+"><field name="NUM">1</field></shadow><block type="variables_get" id="]M;$Z20L=D];fVb|=9-"><field name="VAR" id="NBUm;[3~$z^kt#_FFQZ=">maxZombies</field></block></value><value name="B"><shadow type="math_number" id="%k-0{w|]~YX3m_=1WhL!"><field name="NUM">1</field></shadow></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id=".@iJr*H4w]zGsrj/=//g"><field name="VAR" id="=f0=RnD=8vF^%i49W_RK">spawnTimer</field><value name="VALUE"><block type="math_number" id="YF:0]T/KU%CZpIYh(-yt"><field name="NUM">0</field></block></value><next><block type="variables_set" id="WEseMQMQ3_kK$Ra/!pgO"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field><value name="VALUE"><block type="spawn_template" id="B(Sp(XK+]A~UI;a:h!6f"><field name="template_name">template2</field></block></value><next><block type="lists_setIndex" id="p8+WZC1ha;VWS5k?tFFI"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get" id="W}}[,l6Q+AeL5gf6GkHe"><field name="VAR" id="Mi2G+~U6~)%2ho|i1vZ0">spawnedEntities</field></block></value><value name="TO"><block type="variables_get" id="?{^XK-.=r[sRm:K.8LR0"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field></block></value><next><block type="set_entity_position" id="hl}5|Gs8A|[8Md[|@GQw"><value name="entity"><shadow type="current_entity" id="6l=y9-Tridv;D=OFx,V|"></shadow><block type="variables_get" id="R+;+(P^JI!y:DD7Y37y7"><field name="VAR" id="8/aleFk9Oa{$fP?h!@T5">newEntity</field></block></value><value name="position"><shadow type="position" id="vvA?wF0N.6J2Db;dLE4x"><value name="x"><shadow type="math_number" id="uHHaPi4^E6OM-;Jxlo}U"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="#uufzjsABtQQXCbQVNJ6"><field name="NUM">50</field></shadow></value><value name="z"><shadow type="math_number" id="pTIcrK)S|MV^5O09t*:["><field name="NUM">0</field></shadow></value></shadow><block type="position" id="1b^8D:oM_*TPa3de#S6J"><value name="x"><shadow type="math_number" id="{]mC$P$Q|x/ToA!2j;Gg"><field name="NUM">0</field></shadow><block type="math_random_int" id="cVO9$}r3j|Ojk|vW-[:l"><value name="FROM"><shadow type="math_number" id="+{|#p+kX|N$(rs4|.h.f"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="math_number" id="2f:zpgYfHH=`;w4(EOJc"><field name="NUM">100</field></shadow><block type="variables_get" id="`A!-=jOfYZz}z,IkkJTA"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field></block></value></block></value><value name="y"><shadow type="math_number" id=",Gp56yM.x$GNxsATO!pM"><field name="NUM">100</field></shadow></value><value name="z"><shadow type="math_number" id="AO=mOYdVxXC_{i@bJ)~/"><field name="NUM">0</field></shadow><block type="math_random_int" id="Cv#^{_P6Fnv-L(e6NC*Q"><value name="FROM"><shadow type="math_number" id="{Nx^2AE6u=X3k!^.^j++"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="math_number" id="OMC`jx.]HSmLo6o!(QeU"><field name="NUM">100</field></shadow><block type="variables_get" id="Oun,*kim*dgkwP;oPEpG"><field name="VAR" id="iNZkr`4yYsBW*7KlV^.4">spawnArea</field></block></value></block></value></block></value></block></next></block></next></block></next></block></statement></block></next></block></statement></block></xml>');
    // let xml = Blockly.utils.xml.textToDom('<xml><variables><variable id="otherEntity">otherEntity</variable></variables><block type="on_collision_enter" id=".K!BtOL1N3`!zJ3O3dBU" x="53" y="75"><statement name="body"><block type="controls_if" id="Lnl:RYwz(_O0X|J.w8i="><value name="IF0"><block type="entity_has_tag" id="]:-/y93|N%7[20{`cHV?"><value name="entity"><shadow type="current_entity" id="#6NDi3.~2-UMiI9#}l6S"></shadow><block type="variables_get" id=".Jsu:5B=bTgbhMzaAmoz"><field name="VAR" id="otherEntity">otherEntity</field></block></value><value name="tag"><shadow type="text" id="orHLznPQqLjmj7DDNmri"><field name="TEXT">player</field></shadow></value></block></value><statement name="DO0"><block type="set_entity_position" id="}jD!1;)GHzWq;2LlFXu9"><value name="entity"><shadow type="current_entity" id="z;ZQI)yD{s2I:;K0A9K8"></shadow><block type="spawn_template" id="/W=e,dQGUbmHd=~Sr|/*"><field name="template_name">template2</field></block></value><value name="position"><shadow type="position" id="=N9)gOGv7W1eu1G_9-Od"><value name="x"><shadow type="math_number" id="k0YEj)0%7u/7WpwU[^2h"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="d.{ud1]4ScP~Em#xO/%1"><field name="NUM">0</field></shadow></value><value name="z"><shadow type="math_number" id="Q1b[h$k0iz2@R3fIO)ZV"><field name="NUM">0</field></shadow></value></shadow><block type="get_entity_position" id="ejc{!qZ$X3xLEz^=x!R="><value name="entity"><shadow type="current_entity" id="~z`+=]%WR1cr5MeRVHY+"></shadow></value></block></value></block></statement></block></statement></block></xml>');
    // let xml = Blockly.utils.xml.textToDom('<xml><variables><variable id="otherEntity">otherEntity</variable></variables><block type="on_collision_enter" id=".K!BtOL1N3`!zJ3O3dBU" x="53" y="75"><statement name="body"><block type="controls_if" id="Lnl:RYwz(_O0X|J.w8i="><value name="IF0"><block type="entity_has_tag" id="]:-/y93|N%7[20{`cHV?"><value name="entity"><shadow type="current_entity" id="#6NDi3.~2-UMiI9#}l6S"></shadow><block type="variables_get" id=".Jsu:5B=bTgbhMzaAmoz"><field name="VAR" id="otherEntity">otherEntity</field></block></value><value name="tag"><shadow type="text" id="orHLznPQqLjmj7DDNmri"><field name="TEXT">player</field></shadow></value></block></value><statement name="DO0"><block type="set_entity_position" id="}jD!1;)GHzWq;2LlFXu9"><value name="entity"><shadow type="current_entity" id="z;ZQI)yD{s2I:;K0A9K8"></shadow><block type="spawn_template" id="/W=e,dQGUbmHd=~Sr|/*"><field name="template_name">template2</field></block></value><value name="position"><shadow type="position" id="=N9)gOGv7W1eu1G_9-Od"><value name="x"><shadow type="math_number" id="k0YEj)0%7u/7WpwU[^2h"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number" id="d.{ud1]4ScP~Em#xO/%1"><field name="NUM">0</field></shadow></value><value name="z"><shadow type="math_number" id="Q1b[h$k0iz2@R3fIO)ZV"><field name="NUM">0</field></shadow></value></shadow><block type="get_entity_position" id="ejc{!qZ$X3xLEz^=x!R="><value name="entity"><shadow type="current_entity" id="~z`+=]%WR1cr5MeRVHY+"></shadow></value></block></value></block></statement></block></statement></block></xml>');
    
    let xml = Blockly.utils.xml.textToDom('<xml><block type="start" id="pB9ICb,78N3*!tv09;@#" x="268" y="180"><statement name="body"><block type="text_print_new" id="+~Pdo`r@p8q#J7KMtC7#"><value name="TEXT"><shadow type="text" id="~!KOFANj+P4X!FdFfm6k"><field name="TEXT">In start!</field></shadow></value></block></statement></block><block type="tick" id="xa!3vZx.A3jscgfD/ap#" x="270" y="286"><statement name="body"><block type="text_print_new" id="Q`^EPmK-IzT?0[M;.#uA"><value name="TEXT"><shadow type="text" id="J-(:/5R49/`M?x{S*cUs"><field name="TEXT">Ticking!</field></shadow></value><next><block type="text_print_new" id="p#3xDUzKvzgAk;^#pWDp"><value name="TEXT"><shadow type="text" id="OrqSx*zALrd]%5@3U8nI"><field name="TEXT"></field></shadow><block type="text_join" id="jxt9E~ct]EfhhiO0v8cm"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="?Qw(u7}cBsOaF:JBxbO:"><field name="TEXT">Server time is: </field></block></value><value name="ADD1"><block type="server_time" id="g/G1~p+)/4oI(A*OV+^r"></block></value></block></value></block></next></block></statement></block></xml>');
    Blockly.Xml.domToWorkspace(xml, this.workspace);

    this.workspace.addChangeListener((event) => {
      if (event.type === Blockly.Events.CLICK ||
        event.type === Blockly.Events.VIEWPORT_CHANGE ||
        event.type === Blockly.Events.TOOLBOX_ITEM_SELECT) {
        return;
      }
      let blocklySourceOutput = Blockly.JavaScript.workspaceToCode(this.workspace);
      var json = JSON.stringify(Blockly.serialization.workspaces.save(this.workspace));


      let finalSource = `${scriptHeader}// [blockly] ${json}
${blocklySourceOutput}${scriptFooter}`;
      editor.getModel().setValue(finalSource);
      editor.trigger('anything', 'editor.action.formatDocument');
    });

    // this.entity.tags.add('noraycast');
    // Blockly.dbb_initialized = true;

    
    let blocklyDiv = document.querySelector('#blocklyDiv');

    if (blocklyDiv) {
      blocklyDiv.style.visibility = 'visible';
    }


    editor.getModel().onDidChangeContent((event)=>{
      
    });

    editor.onDidPaste((event)=>{
        let source = editor.getModel().getValue();

        const match = source.match(/\/\/ \[blockly\] (\{.*\})/);
        let blocklyWorkspaceIsPresent = match && match[1];
        if (blocklyWorkspaceIsPresent) {
            console.log("Loading workspace from pasted code...");
            const json = JSON.parse(match[1]);
            console.log(json);
            Blockly.serialization.workspaces.load(json, this.workspace);
        }



    });
  }

//   onCollisionEnter(otherEntity: Entity, collision: CollisionContact) {
//     if (this.compiledCode.onCollisionEnter) {
//       this.compiledCode.onCollisionEnter.apply(this, [otherEntity, collision]);
//     }
//   }

//   tick() {
//     if (this.updateWorkspace) {
//       this.updateWorkspace = false;
      
//       this.sourceCode = Blockly.JavaScript.workspaceToCode(this.workspace);
//       this.sourceCode = `${this.sourceCode}
//       return {start:start, tick:tick, onCollisionEnter:onCollisionEnter};`;

//       console.log(this.sourceCode)
//       console.log(Blockly.Xml.workspaceToDom(this.workspace));
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