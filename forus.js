function validateForm(){
    var name = document.getElementById('userid').value
    var password = document.getElementById('password').value


    if(name == ''){
        var h1 = document.createElement('p')
        var text = document.createTextNode('Please enter name')
        h1.setAttribute('id','err')
        h1.appendChild(text)
        document.getElementById('userlog').appendChild(h1)
    }
    if (password == '') {
        var h1 = document.createElement('p')
        var text = document.createTextNode('Please enter Password')
        h1.setAttribute('id','err')
        h1.appendChild(text)
        document.getElementById('passErr').appendChild(h1)
    }

};
<select>
  <optgroup label="Mammals">
    <option>Cat</option>
    <option>Dog</option>
  </optgroup>
  <optgroup label="Birds">
    <option>Crow</option>
    <option>Eagle</option>
  </optgroup>
  <optgroup label="Dinosaurs">
    <option>Raptor</option>
    <option>Tyrannosaurus</option>
    <option>Brachiosaurus</option>
  </optgroup>
</select>
<select class="selectpicker">
  <optgroup label="Picnic">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </optgroup>
  <optgroup label="Camping">
    <option>Tent</option>
    <option>Flashlight</option>
    <option>Toilet Paper</option>
  </optgroup>
</select>
//search
<select class="selectpicker" data-live-search="true">
  <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
  <option data-tokens="mustard">Burger, Shake and a Smile</option>
  <option data-tokens="frosting">Sugar, Spice and all things nice</option>
</select>
<select class="selectpicker" data-style="btn-primary">
  ...
</select>

<select class="selectpicker" data-style="btn-info">
  ...
</select>

<select class="selectpicker" data-style="btn-success">
  ...
</select>

<select class="selectpicker" data-style="btn-warning">
  ...
</select>

<select class="selectpicker" data-style="btn-danger">
  ...
</select>
<select class="selectpicker" data-width="auto">
  ...
</select>
<select class="selectpicker" data-width="fit">
  ...
</select>
<select class="selectpicker" data-width="100px">
  ...
</select>
<select class="selectpicker" data-width="75%">
  ...
</select>
<select class="selectpicker">
  <option data-icon="fa-heart">Ketchup</option>
</select>
