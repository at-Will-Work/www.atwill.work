/* ---------------------------------------------------------------------- */
/*	form
/* ---------------------------------------------------------------------- */

;(function($) {
	var validation = null;
	if (document.getElementById("contact_form") != null) {
		validation = $("form#contact_form").exValidation({
			firstValidate: true,
			stepValidation: true,
			customListener : "blur change",
			scrollToErr: true,
			errMsgPrefix: "",
			errTipCloseBtn: false,
			errInsertPos: 'after',
			errPosition: 'fixed',
			rules: {
				mail_company: "chkcompany",
				mail_author: "chkname",
				mail_email: "chkemail chkmailaddress",
				mail_remail: "chkretype-mail_email chkemail chkmailaddress",
				mail_tel: "chktels chktel"
			}
		});
	}

	if (document.getElementById("guide_form") != null) {
		validation = $("form#guide_form").exValidation({
			firstValidate: true,
			stepValidation: true,
			customListener : "blur change",
			scrollToErr: true,
			errMsgPrefix: "",
			errTipCloseBtn: false,
			errInsertPos: 'after',
			errPosition: 'fixed',
			rules: {
				sender_type: "chksendertype",
				mail_author: "chksendername",
				mail_zip: "chkzipcode chkzip",
				pref: "chkprefselect",
				mail_city: "chkcity",
				mail_place: "chkplace",
				mail_tel: "chktels chktel",
				mail_fax: "chkfax",
				mail_email: "chkemail chkmailaddress",
				how: "chkradio",
				reason: "chkreason",
				mail_text: "chkreason"
			}
		});
	}


})(jQuery);
