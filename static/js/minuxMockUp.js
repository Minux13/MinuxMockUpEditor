
function element(classElement, txt){
    minuxMockUp.idNum += 1;
    
    var node = document.createElement("div");
    node.innerHTML = txt;
    node.setAttribute("class", "minux_draggable " +  classElement);
    node.setAttribute("id", "element" + minuxMockUp.idNum );
    node.contentEditable = true;
    node.setAttribute("spellcheck", false );
    
    document.getElementById("container").prepend(node);
}

function img(){
    var myself = this;
    minuxMockUp.idNum += 1;
    
    myself.node = document.createElement("div");;
    myself.node.innerHTML =`<svg style="width:100%; height:100%;"> 
                                <g>
                                    <line x1="0%" y1="100%" x2="100%" y2="0%"    class="imageLineStoked" ></line> 
                                    <line x1="0%" y1="0%" x2="100%" y2="100%"    class="imageLineStoked" ></line> 
                                    <line x1="0%" y1="0%" x2="100%" y2="0%"      class="imageLineStoked" ></line> 
                                    <line x1="0%" y1="0%" x2="0%" y2="100%"      class="imageLineStoked" ></line> 
                                    <line x1="100%" y1="0%" x2="100%" y2="100%"  class="imageLineStoked" ></line> 
                                    <line x1="0%" y1="100%" x2="100%" y2="100%"  class="imageLineStoked" ></line>
                                    <g>
                                        <rect width="90%" height="32" x="4" y="50%" transform="translate(0,-19)" fill="white" ></rect>

                                        <text text-anchor="middle" x="50%" y="50%" style="font-size:16px;" fill="#666">
                                            <tspan>Imagen</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>`;
    myself.node.setAttribute("class", "minux_draggable createdImg");
    myself.node.setAttribute("id", "element" + minuxMockUp.idNum );
    myself.node.contentEditable = true;
    myself.node.setAttribute("spellcheck", false );
    myself.node.style.width = '100px';
    myself.node.style.height= '100px';
    
    document.getElementById("container").appendChild(myself.node);
    
}

function inputForm(classElement, typeInput){
    minuxMockUp.idNum += 1;

    var inputsBox = {
        text: '<div style="border: solid 1px #ccc; margin: 5px 0;width: 100%;color: #a8a8a8; font-style: italic;padding:5px 10px;box-sizing: border-box;">Texto...</div>',
        calendar: '<div style="border: solid 1px #ccc; margin: 5px 0;width: 100%;color: #a8a8a8; font-style: italic;padding:5px 10px;box-sizing: border-box;"><div style="display: inline-block;"><i class="fas fa-calendar-alt" style="margin:0 7px 0 2px;"></i> Fecha...</div></div>',
        select: '<div style="border: solid 1px #ccc; margin: 5px 0;width: 100%;color: #a8a8a8; font-style: italic;padding:5px 10px;box-sizing: border-box;"><div style="display: inline-block;">Selección...</div><div style="display: inline-block;float:right;"><i class="fas fa-angle-down"></i></div></div>',
        checkbox: '<div><input type="checkbox"> <label>Campo</label><br><input type="checkbox"> <label>Campo</label> <br> <input type="checkbox"> <label>Campo</label> </div>',
        dateTime: '<div style="border: solid 1px #ccc; margin: 5px 0;width: 100%;color: #a8a8a8; font-style: italic;padding:5px 10px;box-sizing: border-box;"><div style="display: inline-block;"><i class="fas fa-calendar-alt" style="margin:0 7px 0 2px;"></i> Fecha / Hora...</div></div>',
        upload: '<div style="text-align: center; margin: 5px; background: linear-gradient(0deg, #eee, transparent); padding: 5px; width: 140px;"> <i class="fas fa-upload"></i> </div>',
    }

    var labelsInputs = {
        text: 'Nombre *',
        calendar: 'Fecha *',
        select: 'Selecciona una Opción *',
        checkbox: 'Selecciona una Opción *',
        dateTime: 'Fecha y Hora * ',
        upload: 'Selecciona un archivo * ',
    }
    
    var node = document.createElement("div");
    node.innerHTML = `
        <span style="color: #555;">`+ labelsInputs[typeInput] +`</span>
        `+ inputsBox[typeInput] +`
        <div style="color:#215ccc;">[ Especificación 1 ]</div>
    `;
    node.setAttribute("class", "minux_draggable " );
    node.setAttribute("id", "element" + minuxMockUp.idNum );
    node.contentEditable = true;
    node.setAttribute("spellcheck", false );
    
    document.getElementById("container").prepend(node);
}

function buscador(){
    minuxMockUp.idNum += 1;
    
    var node = document.createElement("div");
    node.innerHTML = 'Buscar <i class="fas fa-search"></i> ';
    node.setAttribute("class", "minux_draggable buscador");
    node.setAttribute("id", "element" + minuxMockUp.idNum );
    node.contentEditable = true;
    node.setAttribute("spellcheck", false );
    
    document.getElementById("container").prepend(node);
}

function lineSlash(deg){
    var myself = this;
    minuxMockUp.idNum += 1;
    
    var slash = {
        deg45 : '<line x1="0%" y1="100%" x2="100%" y2="0%" style="stroke:#bbb;stroke-width:1px;" ></line>',
        deg135: '<line x1="0%" y1="0%" x2="100%" y2="100%" style="stroke:#bbb;stroke-width:1px;" ></line>',
    }

    myself.node = document.createElement("div");;
    myself.node.innerHTML =`<svg style="width:100%; height:100%;"> 
                                `+ slash[deg] +` 
                            </svg>`;
    myself.node.setAttribute("class", "minux_draggable");
    myself.node.setAttribute("id", "element" + minuxMockUp.idNum );
    myself.node.style.width = '100px';
    myself.node.style.height= '100px';
    
    document.getElementById("container").appendChild(myself.node);
    
}

function tabs(){
    
    minuxMockUp.idNum += 1;
    
    node = document.createElement("div");;
    node.innerHTML =`<div id="tab1" class="tabs" active> Texto 1</div>
        <div class="tabs">Texto 2</div>
        <div class="tabs">Texto 3</div><br>
    `;
    node.setAttribute("class", "minux_draggable tabsContainer");
    node.setAttribute("id", "element" + minuxMockUp.idNum );
    node.contentEditable = true;
    node.setAttribute("spellcheck", false );
    
    document.getElementById("container").appendChild(node);
}


interact('.minux_draggable').draggable({
    onmove: dragMoveListener,
    onstart: dragStartMoveListener,
    onend: dragEndMoveListener,
})
.resizable({
    preserveAspectRatio: true,
    edges: { left: false, right: true, bottom: true, top: false }
})
.on('resizemove', function (event) {
    var target = event.target,
    x = (parseFloat(target.getAttribute('data-x')) || 0),
    y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
    
    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;
    
    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';
    
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    //target.textContent = event.rect.width + '×' + event.rect.height;
})
.on('click', function(event){
    /*Store the draggable element*/
    var target = event.target;
    var targetDrag = target.closest(".minux_draggable");
    minuxMockUp.elementTarget = targetDrag;

    if(minuxMockUp.isPressCtrlKey){
        minuxMockUp.storeDivs.push( targetDrag );
    }
});

interact('.minux_draggable_only').draggable({
    onmove: function dragMoveListener (event) {
        var target = event.target;

        if (minuxMockUp.storeSelectedDiv){
            var childrenDraggable = minuxMockUp.storeSelectedDiv.childNodes;
            if( childrenDraggable ){
                for( var child = 0; child < childrenDraggable.length; child++ ){
                    var childDrag = childrenDraggable[child];
                    if( childDrag.classList.contains("minux_draggable_not") ){
                        
                        x = (parseFloat(childDrag.getAttribute('data-x')) || 0) + event.dx,
                        y = (parseFloat(childDrag.getAttribute('data-y')) || 0) + event.dy;

                        // translate the element
                        childDrag.style.webkitTransform =
                        childDrag.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                        // update the posiion attributes
                        childDrag.setAttribute('data-x', x);
                        childDrag.setAttribute('data-y', y);

                    }
                }
            }
        }
    },
    onstart: dragStartMoveListener,
    onend: dragEndMoveListener,
})


function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    
    /*
    if (minuxMockUp.storeSelectedDiv){
        var childrenDraggable = minuxMockUp.storeSelectedDiv.childNodes;
        if( childrenDraggable ){
            for( var child = 0; child < childrenDraggable.length; child++ ){
                if( childrenDraggable[child].classList.contains("minux_draggable_not") ){
                    var thisDataX = parseFloat(childrenDraggable[child].getAttribute('data-x'));
                    var thisDataY = parseFloat(childrenDraggable[child].getAttribute('data-x'));

                    var newX = event.dx + x;
                    var newY = event.dy + y;
        console.log(newX);
                    childrenDraggable[child].setAttribute('data-x', newX );
                    childrenDraggable[child].setAttribute('data-y', newY);
                }
            }
        }
    }

    /*
    var hasChildrenDraggable = minuxMockUp.storeSelectedDiv.childNodes.length;
    var childrenDraggable = minuxMockUp.storeSelectedDiv.childNodes;
    if( hasChildrenDraggable ){
        for( var child in childrenDraggable ){
            if( childrenDraggable[child].classList.contains("minux_draggable_not") ){
                childrenDraggable[child].classList.remove("minux_draggable_not");
                childrenDraggable[child].classList.add("minux_draggable");
            }
        }
    }*/
    
}
function dragStartMoveListener(event){
    var target = event.target;

    minuxMockUp.z_Index += 1;
    target.style.zIndex = minuxMockUp.z_Index;
}
function dragEndMoveListener(event){
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    x = x - (x%10);
    y = y - (y%10);

    // translate the element
    target.style.webkitTransform =
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

}



document.onkeydown = function(e) {
    if( e.which === 67 && e.altKey ){
        var clone = minuxMockUp.elementTarget.cloneNode(true);
        minuxMockUp.idNum += 1;
        clone.setAttribute("id", 'element' + minuxMockUp.idNum);
        clone.setAttribute("data-x", '');
        clone.setAttribute("data-y", '');
        clone.style.transform = '';
        document.getElementById("container").appendChild(clone);
    }
    else if( e.which === 83 && e.altKey ){
        var settingsElement = document.getElementById('settings');
        if( settingsElement.classList.contains('settingsShow') ){
            settingsElement.classList.remove("settingsShow");
            settingsElement.classList.add("settingsHide");
        }else{
            settingsElement.classList.remove("settingsHide");
            settingsElement.classList.add("settingsShow");
        }
    }          
    else if( e.which === 82 && e.altKey ){
        minuxMockUp.removeItem();
    }
    else if( e.which === 81 && e.altKey ){
        minuxMockUp.desSelected();
    }
    else if( e.which === 17 ){
        minuxMockUp.isPressCtrlKey = true;
    }
}
document.onkeyup = function(e) {
    if( e.which === 17 ){
        minuxMockUp.isPressCtrlKey = false;
        minuxMockUp.storeSelecteds();
    }
}




var minuxMockUp = {
    elementTarget    : undefined,
    ctr_C_Item       : undefined,
    idNum            : 0,
    z_Index          : 10,
    isPressCtrlKey   : false,
    storeDivs        : [],
    storeSelectedDiv : undefined, 
    setFormatText  : function(){
        var color       = document.getElementById("favcolor").value;
        var size        = document.getElementById("favcolor").value;
        var fontFamily  = document.getElementById("favcolor").value;
        var bold = document.getElementById("favcolor").value;
        
        minuxMockUp.elementTarget.style

        console.log("24444444444");
        return false;
    },
    setFormatItemText : function(color, size, fontFamily, ){
            }, 
    removeItem     : function(){
        minuxMockUp.elementTarget.remove();
    },
    storeSelecteds: function(){
        
        //if( minuxMockUp.storeSelectedDiv ){return;}
        minuxMockUp.storeSelectedDiv = document.createElement('div');
        minuxMockUp.storeSelectedDiv.setAttribute('class', 'minux_draggable_only');
        minuxMockUp.storeSelectedDiv.style.position = "absolute";
        for(var e=0; e<minuxMockUp.storeDivs.length; e++){
            minuxMockUp.storeSelectedDiv.appendChild(minuxMockUp.storeDivs[e]);
            minuxMockUp.storeDivs[e].classList.remove('minux_draggable');
            minuxMockUp.storeDivs[e].classList.add('minux_draggable_not');
        }
        
        var c = document.getElementById('container');
        c.appendChild( minuxMockUp.storeSelectedDiv );

    },
    desSelected: function(){
        var container = document.getElementById('container');
        var children = minuxMockUp.storeSelectedDiv.children;
        var numChildren = children.length;
        for(var c = numChildren-1; c>=0; c--){
            children[c].classList.remove('minux_draggable_not');
            children[c].classList.add('minux_draggable');
            container.appendChild( children[c] );
            minuxMockUp.storeDivs= [];
        }
        minuxMockUp.storeSelectedDiv.remove();
    },
}



function searchSetting() {
  var input = document.getElementById('searchSetting');
  var filter = input.value.toUpperCase();
  var buttons = document.getElementsByClassName('buttonAddElement');

  for (i = 0; i < buttons.length; i++) {
    var txtValue = buttons[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      buttons[i].style.display = "";
    } else {
      buttons[i].style.display = "none";
    }
  }
}


