function formBuilder(spec,$el){
  // BEGIN EDITING HERE
  var i = spec;
  console.log(spec);

//if(spec === 1){

  $form = $("<form></form>");
  	$form.append('<h1>Comment Form</h1>');
		$form.append('<input type="text" name="title" placeholder="Title"/><br/>');
		$form.append('<input type="text" name="email"/><br/>');
		$form.append('<input type="textbox" name="body"/><br/>');
		$form.append('<input type="checkbox" name="subscribe" label="mail me when someone comments" /><br/>');
		$form.append('<input type="button" value="button" />');
		$('#spec').append($form);
	//}






  $el.html("<i>HTML Form Results Here</i>");
  // STOP EDITING HERE
}