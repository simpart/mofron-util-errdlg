const ErrDialog = require('mofron-comp-errdialog');
const ConfArg = mofron.class.ConfArg;

let size = {
    width:  "4.3rem",
    height: "2.3rem"
};
module.exports = {
    show: (msg, cb, cp) => {
        try {
            let errdlg = new ErrDialog({
	        fade: 300, text: msg,
                size: new ConfArg(size.width, size.height)
	    });
            
            /* set callback for parameter */
            if ('function' === typeof cb) {
                errdlg.closeEvent(cb,cp);
	    }

	    /* destructor */
	    errdlg.closeEvent((p1) => {
                setTimeout(
		    () => { p1.destroy(); },
		    1000
		);
	    });
            
	    mofron.root[0].child(errdlg);
	    errdlg.visible(true);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    },
    size: (wid,hei) => {
        try {
            size.width = wid;
	    size.height = hei;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
