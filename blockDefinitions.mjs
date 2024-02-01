export function defineBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      type: "start",
      message0: "start %1",
      args0: [
        {
          type: "input_statement",
          name: "body",
        },
      ],
      colour: 20,
      tooltip: "Called when the game starts.",
      helpUrl: "",
    },
    {
      type: "server_time",
      message0: "server time %1",
      args0: [
        {
          type: "input_dummy",
        },
      ],
      inputsInline: true,
      output: ["Number"],
      colour: 230,
      tooltip: "",
    },
    {
      type: "delta_time",
      message0: "delta time %1",
      args0: [
        {
          type: "input_dummy",
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
    },
    {
      type: "current_entity",
      message0: "current entity",
      output: ["entity"],
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "player_entity",
      message0: "player entity",
      output: ["entity"],
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "position_get_x",
      message0: "get X %1 %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "position",
          check: ["position"],
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "position_get_y",
      message0: "get Y %1 %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "position",
          check: ["position"],
        },
      ],
      inputsInline: true,
      output: "Number",
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "position_get_z",
      message0: "get Z %1 %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "position",
          check: ["position"],
        },
      ],
      inputsInline: true,
      output: "Number",
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "tick",
      message0: "tick %1",
      args0: [
        {
          type: "input_statement",
          name: "body",
        },
      ],
      colour: 20,
      tooltip: "Called every game update.",
      helpUrl: "",
    },
    {
      type: "on_collision_enter",
      message0: "onCollisionEnter with otherEntity and contact %1 %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "body",
        },
      ],
      colour: 20,
      tooltip: "Called when this entity begins to collide with another entity.",
      helpUrl: "",
    },
    {
      type: "on_collision_stay",
      message0: "on collision stay %1",
      args0: [
        {
          type: "input_statement",
          name: "body",
        },
      ],
      colour: 20,
      tooltip:
        "Called when this entity continues to collide with another entity.",
      helpUrl: "",
    },
    {
      type: "on_collision_exit",
      message0: "on collision exit %1",
      args0: [
        {
          type: "input_statement",
          name: "body",
        },
      ],
      colour: 20,
      tooltip: "Called when this entity stops colliding with another entity.",
      helpUrl: "",
    },
    {
      type: "position",
      message0: "position %1 x %2 y %3 z %4",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "x",
          check: ["Number"],
        },
        {
          type: "input_value",
          name: "y",
          check: ["Number"],
        },
        {
          type: "input_value",
          name: "z",
          check: ["Number"],
        },
      ],
      inputsInline: true,
      output: "position",
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "rotation",
      message0: "rotation %1 x %2 y %3 z %4",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "x",
          check: "Number",
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
        },
        {
          type: "input_value",
          name: "z",
          check: "Number",
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "get_entity_position",
      message0: "get entity position %1",
      args0: [
        {
          type: "input_value",
          name: "entity",
          check: ["entity"],
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "set_entity_position",
      message0: "set entity position: entity %1 position %2",
      args0: [
        {
          type: "input_value",
          name: "entity",
          check: "entity",
        },
        {
          type: "input_value",
          name: "position",
          check: "position",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "set_entity_rotation",
      message0: "set entity rotation %1",
      args0: [
        {
          type: "input_value",
          name: "rotation",
          check: "rotation",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "change_entity_position_by",
      message0: "change entity position by %1",
      args0: [
        {
          type: "input_value",
          name: "position",
          check: "position",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "change_entity_rotation_by",
      message0: "change entity rotation by %1",
      args0: [
        {
          type: "input_value",
          name: "rotation",
          check: "rotation",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "position_move_towards",
      message0: "move towards %1 from %2 by distance %3",
      args0: [
        {
          type: "input_value",
          name: "target",
          check: ["position"],
        },
        {
          type: "input_value",
          name: "current",
          check: ["position"],
        },
        {
          type: "input_value",
          name: "distance",
          check: ["Number"],
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "position_distance_between",
      message0: "distance between: %1 first %2 %3 second %4 %5",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "first",
          check: "position",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "second",
          check: "position",
        },
      ],
      inputsInline: true,

      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "entity_move_forward",
      message0: "move forward: %1 distance %2 %3",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "distance",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "text_print_new",
      message0: Blockly.Msg["TEXT_PRINT_TITLE"],
      args0: [
        {
          type: "input_value",
          name: "TEXT",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      style: "text_blocks",
      tooltip: Blockly.Msg["TEXT_PRINT_TOOLTIP"],
      helpUrl: Blockly.Msg["TEXT_PRINT_HELPURL"],
    },
    {
      type: "spawn_template",
      message0: "spawn %1 %2",
      args0: [
        { type: "input_dummy" },
        {
          type: "field_dropdown",
          name: "template_name",
          options: [
            ["Template 1", "template1"],
            ["Template 2", "template2"],
            ["Template 3", "template3"],
            ["Template 4", "template4"],
          ],
        },
      ],
      inputsInline: true,
      output: "entity",
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "remove_entity",
      message0: "remove %1",
      args0: [
        {
          type: "input_value",
          name: "entity",
          check: ["entity", "Array"],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "get_entities_by_tag",
      message0: "get entities by tag %1",
      args0: [
        {
          type: "input_value",
          name: "tag",
          check: "String",
        },
      ],
      output: "Array",
      inputsInline: true,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "send_event_to_tag",
      message0: "send %1 to tag %2",
      args0: [
        {
          type: "input_value",
          name: "event",
          check: ["String"],
        },
        {
          type: "input_value",
          name: "tag",
          check: ["String"],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "send_event_to_entity",
      message0: "send %1 to entity %2 with value %3",
      args0: [
        {
          type: "input_value",
          name: "event",
          check: "String",
        },
        {
          type: "input_value",
          name: "entity",
          check: "entity",
        },
        {
          type: "input_value",
          name: "value",
          check: null,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "entity_add_tag",
      message0: "add tag %1 to %2",
      args0: [
        {
          type: "input_value",
          name: "tag",
          check: "String",
        },
        {
          type: "input_value",
          name: "entity",
          check: "entity",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
    {
      type: "entity_has_tag",
      message0: "%1 has tag %2",
      args0: [
        {
          type: "input_value",
          name: "entity",
          check: "entity",
        },
        {
          type: "input_value",
          name: "tag",
          check: "String",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
  ]);

  Blockly.JavaScript["position"] = function (block) {
    let value_x = Blockly.JavaScript.valueToCode(
      block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let value_y = Blockly.JavaScript.valueToCode(
      block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let value_z = Blockly.JavaScript.valueToCode(
      block,
      "z",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `new Vector3(${value_x}, ${value_y}, ${value_z})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["rotation"] = function (block) {
    let value_x = Blockly.JavaScript.valueToCode(
      block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let value_y = Blockly.JavaScript.valueToCode(
      block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let value_z = Blockly.JavaScript.valueToCode(
      block,
      "z",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let twoPI = Math.PI * 2;
    let code = `new Euler(${value_x} * ${twoPI}, ${value_y} * ${twoPI}, ${value_z} * ${twoPI})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["current_entity"] = function (block) {
    let code = `this.entity`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["player_entity"] = function (block) {
    let code = `this.game.playerEntity`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["entity_add_tag"] = function (block) {
    if (!block.allInputsFilled()) {
      return "";
    }

    const entity = Blockly.JavaScript.valueToCode(
      block,
      "entity",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    const tag = Blockly.JavaScript.valueToCode(
      block,
      "tag",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    const code = `${entity}.tags.add(${tag})`;
    return code;
  };

  Blockly.JavaScript["entity_has_tag"] = function (block) {
    if (!block.allInputsFilled()) {
      return "";
    }

    const entity = Blockly.JavaScript.valueToCode(
      block,
      "entity",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    const tag = Blockly.JavaScript.valueToCode(
      block,
      "tag",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    const code = `${entity}.tags.has(${tag})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["get_entity_position"] = function (block) {
    let entity = Blockly.JavaScript.valueToCode(
      block,
      "entity",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `${entity}.worldTransform.position.clone()`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["server_time"] = function (block) {
    let code = `this.game.session.serverTime`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["delta_time"] = function (block) {
    let code = `this.game.frameDeltaTime`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["set_entity_position"] = function (block) {
    let entity = Blockly.JavaScript.valueToCode(
      block,
      "entity",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    if (entity === "") {
      entity = "this.entity";
    }
    let position = Blockly.JavaScript.valueToCode(
      block,
      "position",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${entity}.worldTransform.position.copy(${position});`;
    return code;
  };

  Blockly.JavaScript["set_entity_rotation"] = function (block) {
    let value_name = Blockly.JavaScript.valueToCode(
      block,
      "rotation",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `this.entity.worldTransform.rotation.copy(${value_name});`;
    return code;
  };

  Blockly.JavaScript["change_entity_position_by"] = function (block) {
    let value_name = Blockly.JavaScript.valueToCode(
      block,
      "position",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `this.entity.worldTransform.position.add(${value_name}.clone().multiplyScalar(this.game.frameDeltaTime));`;
    return code;
  };

  Blockly.JavaScript["position_distance_between"] = function (block) {
    let first = Blockly.JavaScript.valueToCode(
      block,
      "first",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let second = Blockly.JavaScript.valueToCode(
      block,
      "second",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${first}.distanceTo(${second})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["position_move_towards"] = function (block) {
    let current = Blockly.JavaScript.valueToCode(
      block,
      "current",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let target = Blockly.JavaScript.valueToCode(
      block,
      "target",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let distance = Blockly.JavaScript.valueToCode(
      block,
      "distance",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${target}.sub(${current}).setLength(${distance})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["entity_move_forward"] = function (block) {
    let distance = Blockly.JavaScript.valueToCode(
      block,
      "distance",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `this.entity.worldTransform.position.add(this.entity.worldTransform.getForward().clone().setLength(${distance} * this.game.frameDeltaTime));`;
    return code;
  };

  Blockly.JavaScript["change_entity_rotation_by"] = function (block) {
    let value_name = Blockly.JavaScript.valueToCode(
      block,
      "rotation",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `this.entity.worldTransform.rotation.setFromVector3(this.entity.worldTransform.rotation.toVector3().add(${value_name}.toVector3().multiplyScalar(this.game.frameDeltaTime)));`;
    return code;
  };

  Blockly.JavaScript["position_get_x"] = function (block) {
    let position = Blockly.JavaScript.valueToCode(
      block,
      "position",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${position}.x`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["position_get_y"] = function (block) {
    let position = Blockly.JavaScript.valueToCode(
      block,
      "position",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${position}.y`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["position_get_z"] = function (block) {
    let position = Blockly.JavaScript.valueToCode(
      block,
      "position",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `${position}.z`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["start"] = function (block) {
    let children = Blockly.JavaScript.statementToCode(block, "body");
    let code = `function start() {
    ${children}
  }`;
    return code;
  };

  Blockly.JavaScript["text_print_new"] = function (block) {
    let text = Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_ATOMIC
    );

    let code = `console.log(${text});`;
    return code;
  };

  Blockly.JavaScript["spawn_template"] = function (block) {
    if (!block.outputConnection.targetBlock()) {
      return ["", Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }
    let templateName = block.getFieldValue("template_name");
    let code = `this.game.addEntityFromTemplate(this.${templateName}.get())`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["remove_entity"] = function (block) {
    if (!block.allInputsFilled()) {
      return "";
    }

    let childCheck = block.getChildren()[0].outputConnection.getCheck()[0];

    if (childCheck === "entity") {
      let entity = Blockly.JavaScript.valueToCode(
        block,
        "entity",
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `this.game.removeEntity(${entity})`;
    }

    if (childCheck === "Array") {
      let array = Blockly.JavaScript.valueToCode(
        block,
        "entity",
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `for (let entity of ${array}){
          this.game.removeEntity(entity);
          }`;
    }
  };

  Blockly.JavaScript["get_entities_by_tag"] = function (block) {
    let tag = Blockly.JavaScript.valueToCode(
      block,
      "tag",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `this.game.getEntitiesByTag(${tag})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript["send_event_to_tag"] = function (block) {
    let event = Blockly.JavaScript.valueToCode(
      block,
      "event",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let tag = Blockly.JavaScript.valueToCode(
      block,
      "tag",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `this.game.sendEventToTag(${tag}, ${event})`;
    return code;
  };

  Blockly.JavaScript["send_event_to_entity"] = function (block) {
    let event = Blockly.JavaScript.valueToCode(
      block,
      "event",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let entity = Blockly.JavaScript.valueToCode(
      block,
      "entity",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let value = Blockly.JavaScript.valueToCode(
      block,
      "value",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `${entity}.sendEvent(${event}, ${value});
`;
    return code;
  };

  Blockly.JavaScript["tick"] = function (block) {
    let children = Blockly.JavaScript.statementToCode(block, "body");
    let code = `function tick() {
        ${children}
      }`;
    return code;
  };

  Blockly.JavaScript["on_collision_enter"] = function (block) {
    let children = Blockly.JavaScript.statementToCode(block, "body");
    let code = `function onCollisionEnter(otherEntity, contact) {
        ${children}
      }`;
    return code;
  };

  Blockly.JavaScript["on_collision_stay"] = function (block) {
    let children = Blockly.JavaScript.statementToCode(block, "body");
    let code = `function onCollisionStay(otherEntity, contact) {
        ${children}
      }`;
    return code;
  };

  Blockly.JavaScript["on_collision_exit"] = function (block) {
    let children = Blockly.JavaScript.statementToCode(block, "body");
    let code = `function onCollisionExit(otherEntity, contact) {
        ${children}
      }`;
    return code;
  };
}
