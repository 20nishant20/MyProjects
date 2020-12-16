var abtn = document.getElementById("add");
var rbtn = document.getElementById("remove");

var ul = document.getElementById("list");
var li;

var inpput = document.getElementById('in');

// for using enter to trigger add button....

inpput.addEventListener(
    "keyup",function(event)
{
    if(event.keyCode=== 13)
    {
        event.preventDefault();
        document.getElementById("add").click();
    }
}
);


    
   var p = document.getElementById("p");

 function aitem()
{   p.innerText="";
    
    var item = document.getElementById("in").value;
    var ul = document.getElementById("list");
    var textNode = document.createTextNode(item);

    if(item== "" ){
        alert("This Field Cannot Be Empty");
    }
        else{

            var li = document.createElement('li');
            
            var checkbox = document.createElement('input');
            checkbox.type='checkbox';
            checkbox.setAttribute('id', 'check');

            var label = document.createElement('label');

            ul.appendChild(label);
            li.appendChild(checkbox);
            label.appendChild(textNode);
            li.appendChild(label);     
            ul.insertBefore(li,ul.childNodes[0]);
            
            li.className='listitem';

            //1st method ....

            // li.setAttribute('id','ids');
            // var x = document.getElementById('ids');
            // x.className='listitem';
            
            //2nd method....
            
            // li.setAttribute('class','listitem');
            

            document.getElementById('myform').reset();
            
            
            
            // document.forms.myform.reset();
        }

}

function ritem()
{

    li = ul.children;
    // var check=0;



    for (let i = 0; i < li.length; i++) {
        while( li[i] && li[i].children[0].checked  )
        {
            ul.removeChild(li[i]);
        
            // check++;
            if(ul.innerText=="")
            {
            p.innerText="Your List is Empty...";
            break;    
            }
        
        }
        
            
        // if( li[i].children[0].checked )
        // {
        //     ul.removeChild(li[i]);
            
        //     check = false;
        // }
        
    }

    // if(check==0)
    // {
    //     alert("You Have Not Done Anything , What Are You Expecting Me To Remove..");
    // }

    
} 

    

