// Always adds Easey handlers to MM.Map
// Assumes MM.Map won't be called with an Easey handler (for now)


MM.RegularMap = MM.Map;

MM.Map = function(parent, l, d, eh) {
    var easeyHandlers = [
        easey.DragHandler(),
        easey.MouseWheelHandler(),
        easey.DoubleClickHandler()
        // easey.TouchHandler() // should this be added?
    ];
    eh = eh ? eh.concat(easeyHandlers) : easeyHandlers;
    MM.RegularMap.call(this, parent, l, d, eh);
}

MM.Map.prototype = MM.RegularMap.prototype;
