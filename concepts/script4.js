function a() {
    let x = 10;
    function b() {
        let y = 20;
        function c() {
            let z = 30;
            console.log(x);
        }
        c();
    }
    b();
}
a();