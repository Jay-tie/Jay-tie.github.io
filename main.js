             function AddNum(num){
            document.getElementById('display').value+=num
        }
         // đặt tên function là AddNum 
        //  (num) là yếu tố được gọi ra khi function được thực hiện . 
        // vậy khi
        
        function AddOp(op){
            document.getElementById('display').value+=op
        }
        // += là 1 operator thực hiện phép cộng cho cả dạng data number và string
        
        function Cal(){
            var display = document.getElementById('display').value;
            var result = eval(display)
            document.getElementById('result').innerHTML = result
            
        }
        function Del(){
            document.getElementById('display').value=-num
            document.getElementById('display').value=-op
        }
        function AC(){
            document.getElementById('display').value = 0;
            document.getElementById('result').innerHTML = 0;
        }