
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator || {};

/**
 * Behavior generated from Horizontal sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator = class HorizontalSpriteSheetAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpriteX = behaviorData.SpriteX !== undefined ? behaviorData.SpriteX : Number("16") || 0;
    this._behaviorData.SpriteY = behaviorData.SpriteY !== undefined ? behaviorData.SpriteY : Number("16") || 0;
    this._behaviorData.SpriteSpacing = behaviorData.SpriteSpacing !== undefined ? behaviorData.SpriteSpacing : Number("0") || 0;
    this._behaviorData.AnimationSpeed = Number("1") || 0;
    this._behaviorData.AnimationRow = Number("1") || 0;
    this._behaviorData.FirstFrame = Number("1") || 0;
    this._behaviorData.LastFrame = Number("1") || 0;
    this._behaviorData.CurrentFrame = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpriteX !== newBehaviorData.SpriteX)
      this._behaviorData.SpriteX = newBehaviorData.SpriteX;
    if (oldBehaviorData.SpriteY !== newBehaviorData.SpriteY)
      this._behaviorData.SpriteY = newBehaviorData.SpriteY;
    if (oldBehaviorData.SpriteSpacing !== newBehaviorData.SpriteSpacing)
      this._behaviorData.SpriteSpacing = newBehaviorData.SpriteSpacing;
    if (oldBehaviorData.AnimationSpeed !== newBehaviorData.AnimationSpeed)
      this._behaviorData.AnimationSpeed = newBehaviorData.AnimationSpeed;
    if (oldBehaviorData.AnimationRow !== newBehaviorData.AnimationRow)
      this._behaviorData.AnimationRow = newBehaviorData.AnimationRow;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.LastFrame !== newBehaviorData.LastFrame)
      this._behaviorData.LastFrame = newBehaviorData.LastFrame;
    if (oldBehaviorData.CurrentFrame !== newBehaviorData.CurrentFrame)
      this._behaviorData.CurrentFrame = newBehaviorData.CurrentFrame;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    SpriteX: this._behaviorData.SpriteX,
    SpriteY: this._behaviorData.SpriteY,
    SpriteSpacing: this._behaviorData.SpriteSpacing,
    AnimationSpeed: this._behaviorData.AnimationSpeed,
    AnimationRow: this._behaviorData.AnimationRow,
    FirstFrame: this._behaviorData.FirstFrame,
    LastFrame: this._behaviorData.LastFrame,
    CurrentFrame: this._behaviorData.CurrentFrame,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.SpriteX !== undefined)
      this._behaviorData.SpriteX = networkSyncData.props.SpriteX;
    if (networkSyncData.props.SpriteY !== undefined)
      this._behaviorData.SpriteY = networkSyncData.props.SpriteY;
    if (networkSyncData.props.SpriteSpacing !== undefined)
      this._behaviorData.SpriteSpacing = networkSyncData.props.SpriteSpacing;
    if (networkSyncData.props.AnimationSpeed !== undefined)
      this._behaviorData.AnimationSpeed = networkSyncData.props.AnimationSpeed;
    if (networkSyncData.props.AnimationRow !== undefined)
      this._behaviorData.AnimationRow = networkSyncData.props.AnimationRow;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.LastFrame !== undefined)
      this._behaviorData.LastFrame = networkSyncData.props.LastFrame;
    if (networkSyncData.props.CurrentFrame !== undefined)
      this._behaviorData.CurrentFrame = networkSyncData.props.CurrentFrame;
  }

  // Properties:
  
  _getSpriteX() {
    return this._behaviorData.SpriteX !== undefined ? this._behaviorData.SpriteX : Number("16") || 0;
  }
  _setSpriteX(newValue) {
    this._behaviorData.SpriteX = newValue;
  }
  _getSpriteY() {
    return this._behaviorData.SpriteY !== undefined ? this._behaviorData.SpriteY : Number("16") || 0;
  }
  _setSpriteY(newValue) {
    this._behaviorData.SpriteY = newValue;
  }
  _getSpriteSpacing() {
    return this._behaviorData.SpriteSpacing !== undefined ? this._behaviorData.SpriteSpacing : Number("0") || 0;
  }
  _setSpriteSpacing(newValue) {
    this._behaviorData.SpriteSpacing = newValue;
  }
  _getAnimationSpeed() {
    return this._behaviorData.AnimationSpeed !== undefined ? this._behaviorData.AnimationSpeed : Number("1") || 0;
  }
  _setAnimationSpeed(newValue) {
    this._behaviorData.AnimationSpeed = newValue;
  }
  _getAnimationRow() {
    return this._behaviorData.AnimationRow !== undefined ? this._behaviorData.AnimationRow : Number("1") || 0;
  }
  _setAnimationRow(newValue) {
    this._behaviorData.AnimationRow = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : Number("1") || 0;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _getLastFrame() {
    return this._behaviorData.LastFrame !== undefined ? this._behaviorData.LastFrame : Number("1") || 0;
  }
  _setLastFrame(newValue) {
    this._behaviorData.LastFrame = newValue;
  }
  _getCurrentFrame() {
    return this._behaviorData.CurrentFrame !== undefined ? this._behaviorData.CurrentFrame : Number("0") || 0;
  }
  _setCurrentFrame(newValue) {
    this._behaviorData.CurrentFrame = newValue;
  }
}

/**
 * Shared data generated from Horizontal sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.SharedData = class HorizontalSpriteSheetAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData = new gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("frame")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame() >= ((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastFrame()) - (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame())) + 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].setYOffset((((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationRow())) * ((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteY()))) + ((((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationRow())) * (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing())) + (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing())));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].setXOffset((((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame()) + (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())) * (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteX())) + ((((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame()) + (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())) * (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing())) + (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing())));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrame = function(frame, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "frame") return frame;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(31712276);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("__SpriteSheet_Animation", (gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationSpeed())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._SetFrame((gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame()) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationRow((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnimationRow")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnimationSpeed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FirstFrame")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastFrame((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LastFrame")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._SetFrame(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimation = function(FirstFrame, LastFrame, AnimationSpeed, AnimationRow, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FirstFrame") return FirstFrame;
if (argName === "LastFrame") return LastFrame;
if (argName === "AnimationSpeed") return AnimationSpeed;
if (argName === "AnimationRow") return AnimationRow;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame()); }}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrame = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteSheet::HorizontalSpriteSheetAnimator", gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator);
