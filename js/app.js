var tbl = document.getElementsByTagName(`table`)[0];
if (tbl != null) 
	{
    for (var i = 0; i < tbl.rows.length; i++) 
		{
        for (var j = 0; j < tbl.rows[i].cells.length; j++) 
			{
            tbl.rows[i].cells[j].onclick = function() 
				{
                performRotation(this);
				};
			}
		}
	}

function performRotation(table) 
{
    let others = document.getElementsByTagName(`td`);
    for (var i = 0; i < others.length; i++)
	{
        item = others[i];
        if (item != table)
			{
            item.style.webkitTransform = `rotate(0deg)`;
            item.style.color = `black`;
			}
    }
	
	if (table.style.webkitTransform == `rotate(180deg)`) 
		{
			table.style.webkitTransform = `rotate(0deg)`;
			table.style.color = `black`;
		} 
	else if (table.style.webkitTransform == `rotate(0deg)` || 
			table.style.webkitTransform == ``) 
		{
			table.style.webkitTransform = `rotate(180deg)`;
			table.style.color = `#ff0000`;
		}
    table.style.WebkitTransitionDuration = `0.5s`;
}
