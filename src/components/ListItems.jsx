function ListItems(){


let todoName ='Mile is yami';
let todoDate ='3/4/2024';

return <>
<div class="container">
  <div class="row">
    <div class="col">
     {todoName}
    </div>
    <div class="col">
    {todoDate}
    </div>
    <div class="col">
    <button type="button" class="btn btn-danger my-btn">Delete</button>
    </div>
  </div>
</div>
</>
}

export default ListItems;