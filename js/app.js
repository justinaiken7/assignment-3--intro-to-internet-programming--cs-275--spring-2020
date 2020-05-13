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

