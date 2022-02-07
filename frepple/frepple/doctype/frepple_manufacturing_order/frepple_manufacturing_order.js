// Copyright (c) 2022, Drayang Chua and contributors
// For license information, please see license.txt

frappe.ui.form.on('Frepple Manufacturing Order', {
	after_save:function(frm){
		frm.call({
			method:"generate_erp_wo",
			args:{
				doc: frm.doc
			},
			callback:function(r){
				console.log(r.message)
			},
		})
	}
});
