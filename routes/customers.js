/*
 * GET users listing.
 */
exports.list = function(req, res)
{
	req.getConnection(function(err,connection)
	{       
        var query = connection.query('SELECT * FROM customer',
		function(err,rows)
        {            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers',
			{	
				page_title:" Node.js-MySQL-Express Example",
				data:rows
			});
        });         
         //console.log(query.sql);
    });  
};

exports.add = function(req, res)
{
	res.render('add_customer',
		{page_title:"Add Customers - Node.js+MySQL+Express"});
};

exports.edit = function(req, res)
{    
    var id = req.params.id;    
    req.getConnection(function(err,connection)
	{       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',
		[id],function(err,rows)
        {            
            if(err)
                console.log("Error Selecting : %s ",err );     
            res.render('edit_customer',
			{
				page_title:"Edit Customers - Node.js",
				data:rows
			});
        });         
         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res)
{    
    var input = JSON.parse(JSON.stringify(req.body));    
    req.getConnection(function (err, connection) 
	{        
        var data = {            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone         
        };        
        var query = connection.query("INSERT INTO customer set ? ",
		data, function(err, rows)
        {  
			if (err)
            console.log("Error inserting : %s ",err );         
            res.redirect('/customers');          
        });        
       // console.log(query.sql); get raw query    
    });
};

exports.save_edit = function(req , res)
{    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;    
    req.getConnection(function (err, connection) 
	{        
        var data = {            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone         
        };
        
        connection.query("UPDATE customer set ? WHERE id = ? ",
				[data,id], 
		function(err, rows)
        {  
			if (err)
              console.log("Error Updating : %s ",err );
         
			res.redirect('/customers');          
        });    
    });
};


exports.delete_customer = function(req , res ){  
	
    //var c = res.confirm("Are you sure want to remove data?");        
	//if (c) {
		var id = req.params.id;    
		req.getConnection(function (err, connection) 
		{        
			connection.query("DELETE FROM customer  WHERE id = ? ",
			[id], 
			function(err, rows)
			{            
				if(err)
                console.log("Error deleting : %s ",err );            
				res.redirect('/customers');             
			});        
		});
	//} 
};

exports.login = function(req , res ){
    res.render('login',{
	   page_title:'Welcome to Node JS,MySQL,Express,EJS'
	});	
};

exports.login_check = function(req , res ){
    res.redirect('/customers');
};
