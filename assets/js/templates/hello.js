templates.hello_text = function(data){
    var content = `
        <div id="hello_text">
            <h2>Hello...</h2>
<<<<<<< HEAD
            <img src="assets/images/Brian_Garland.jpg" align="left" style="width:70px;">
=======
            <img src="assets/images/profile_pic.jpg" align="left" style="width:70px;">
>>>>>>> 3213e352fad89b3200fc31d52179310ea5961f6a
            <p>
                Thank you for visiting my blog.  I am Brian Garland.  I am a skilled software developer that loves solving problems.  I am a native Vermonter currently working in Colchester and residing in Georgia.
            </p>
            <p>
                I am currently working for Vermont Information Processing as one of their senior developers converting the legacy green screen system to the web.
            </p>
        </div>
    `;

    return content;
};