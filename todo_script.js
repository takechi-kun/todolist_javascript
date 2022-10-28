let sort_item = [];
for (var i = 0; i < localStorage.length; i++) {
  var str = localStorage.key(i);
  var item = JSON.parse(localStorage.getItem(str));
  sort_item.push(item);
}
sort_item = sort_item.sort((a, b) => {
  if (a.time < b.time) {
    return -1;
  }
});



var test = document.querySelector("ul");
for (var i = 0; i < sort_item.length; i++) {
  var li = document.createElement("li");
  var t = document.createTextNode(sort_item[i].inputValue);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "list";
  checkbox.value = t.data;
  checkbox.id = "list";
  li.appendChild(checkbox);
  li.appendChild(t);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("ลบ");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  document.getElementById("listItem").appendChild(li);
}



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    localStorage.removeItem(div.childNodes[1].data);
  };
}



let selected = [];
var list = document.querySelector("ul");
list.addEventListener("change", (ev) => {
  var li = document.querySelectorAll("li");
  if (ev.target.type === "checkbox") {
    const checked = document.querySelectorAll('input[name="list"]');
    for (var i = 0; i < checked.length; i++) {
      if (checked[i].checked === true) {
        li[i].classList.add("checked");
      } else {
        li[i].classList.remove("checked");
      }
    }
  }
});



function newElement() {
  const d = new Date();
  let time = d.getTime();
  var li = document.createElement("li");
  var t;
  var inputValue = document.getElementById("inputText").value;
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "list";
  checkbox.value = inputValue;
  checkbox.id = "list";
  li.appendChild(checkbox);
  t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === "") {
    alert("ItemName is require!, Please insert itemname.");
  } else {
    document.getElementById("listItem").appendChild(li);
    let insert_detail = { inputValue: inputValue, time: time };
    localStorage.setItem(inputValue, JSON.stringify(insert_detail));
    alert(`Successfull! \nName : ${t.data}\nCreate Time : ${new Date()}` )
  }
  document.getElementById("inputText").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("ลบ");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      localStorage.removeItem(div.childNodes[1].data);
    };
  }

  var list = document.querySelector("ul");

  list.addEventListener("change", (ev) => {
    var li = document.querySelectorAll("li");
    if (ev.target.type === "checkbox") {
      const checked = document.querySelectorAll('input[name="list"]');
      for (var i = 0; i < checked.length; i++) {
        if (checked[i].checked === true) {
          li[i].classList.add("checked");
        } else {
          li[i].classList.remove("checked");
        }
      }
    }
  });
  
}
