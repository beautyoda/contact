$(function () {
	
    // お問い合わせフォームを表示する
    $('#form-number').click(function () {
        $('#form-name').empty();
	var namelabel = $('input[name="namelabel"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();
    });

    // 送信
    $('form').submit(function () {
	var namelabel = $('input[name="namelabel"]').val();
        var inquiries = $('textarea[name="inquiries"]').val();
	    
        var msg = ` ＊＊お問い合わせ内容＊＊ \n ${namelabel}\n ${inquiries}`;
        sendText(msg);

        return false;
    });
	
});
