var idNum = 0;
var z_Index = 10;
var elementTarget;

function element(classElement){
    var myself = this;
    idNum += 1;
    
    myself.node = document.createElement("div");
    myself.node.innerHTML = 'Texto';
    myself.node.setAttribute("class", "minux_draggable " +  classElement);
    myself.node.setAttribute("id", "element" + idNum );
    myself.node.contentEditable = true;
    myself.node.setAttribute("spellcheck", false );
    
    document.getElementById("container").appendChild(myself.node);
    
    this.remove = function(){
        this.node.remove();
    }
}

function img(){
    var myself = this;
    idNum += 1;
    
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
    myself.node.setAttribute("id", "element" + idNum );
    myself.node.contentEditable = true;
    myself.node.setAttribute("spellcheck", false );
    myself.node.style.width = '100px';
    myself.node.style.height= '100px';
    
    document.getElementById("container").appendChild(myself.node);
    
}


interact('.minux_draggable').draggable({
    onmove: window.dragMoveListener,
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
});

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
    
}
function dragStartMoveListener(event){
    var target = event.target;
    
    elementTarget = target;

    z_Index += 1;
    target.style.zIndex = z_Index;
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
        var clone = elementTarget.cloneNode(true);
        idNum += 1;
        clone.setAttribute("id", 'element' + idNum);
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
        elementTarget.remove();
    }
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


