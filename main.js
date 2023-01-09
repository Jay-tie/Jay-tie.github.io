         function AddNum(num){
         document.getElementById('display').value+=num
        }
        // đặt tên function là AddNum 
        //  (num) là yếu tố được gọi ra khi function được thực hiện . 
        // vậy khi
        
        function AddOp(op){
            document.getElementById('display').value+=op
            var display = document.getElementById('display').value;
            // var LastChar = display.value[display.value.length - 1, display.value.length - 1];
        var LastChar=display.value.substring(display.value.length - 1, display.value.length - 1);
            if (LastChar==='+'||LastChar==='-'||LastChar==='*'||LastChar==='/'){
                return;
            }
           else {display.value+=op;

        }
        }
        // += là 1 operator thực hiện phép cộng cho cả dạng data number và string
        
        function Cal(){
            var display = document.getElementById('display').value;
            var result = eval(display)
            document.getElementById('result').innerHTML = result
            
        }

        function Del() {
        // var display = document.getElementById('display');
            display.value = display.value.substring(0, display.value.length - 1);
        }
        // display là biến đã gọi trước đó. 
        // ".value" để set về đặc tính giá trị
        // substring dùng để xóa bớt 1 số kí tự trong 1 chuỗi 
        // (0,..) là vị trí bắt đầu của chuỗi mới
        // (..., display.value.lenght -1 ) là vị trí kết thúc của chuỗi mới trong trường hợp trên là độ dài của chuỗi cũ -1

        function AC(){
            document.getElementById('display').value = '';
            document.getElementById('result').innerHTML = '';
        }
        // set 2 biến về rỗng
            // var display = document.getElementById('display').value;
            