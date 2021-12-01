## GET과 POST
1. 모든 http method 허용
    - use method : 모든 method 허용
    - postman에서 test시, GET, POST 방식 모두 http 상태 코드 200 return
    
2. GET만 허용
    - GET method
    - GET으로 test하면, status 200 return
    POST으로 test하면, node 서버에서 404 not found return
    
3. GET + query parameter
    - GET vs POST
        - GET : request시 Header만 존재하고 Body 없음
        URL 뒤 ? 다음 key=value&key=value 형태로 연결해서 data 보냄 === query parameter
    - req 변수에 request의 모든 변수 담겨 있고, query parameter는 req.query object에 담김
    - GET으로 테스트시, http://localhost:8080/hello3?name=hyojeong 이렇게 key=value 값 주어야 test 가능 => Hello hyojeong 리턴

4. GET + uri parameter
    - query parameter와 사실상 동일, 표현 방식 차이
    - query에서는 key=value라 보냈던 걸, /value 형태로 보냄  => key는 sever에서 /:key로 받음
    - GET으로 테스트시, http://localhost:8080/hello32/hyojeong 

5. POST + query parameter
    - GET은 query parameter를 사용하고, POST는 body에 데이터를 보내야 하는 것만은 아님
    - GET
        - request시, body에 data 보낼 수 없음
        - query parameter밖에 사용 못 함
     - POST
        - body에 data를 담아서 보낼 수 있으므로 body로 data 보냄
        - query parameter로 data 보낼 수도 있음

6. POST
    - web에서 input 박스에 값을 넣고 submit 버튼을 누르면 POST방식으로 전송
    - input에 담긴 data들은 x-www-form-urlencoded 방식으로 body에 담겨서 전송
    - express에서 x-www-form-urlencoded로 온 미디어 타입 파싱 불가능하여 코드 추가 필요
    - postman에서 POST로 테스트시, body -> x-www-form-urlencoded 선택하여 key와 value값 적어주면 됨
    - x-www-form-urlencoded : 내가 body에 보내는 data type이 form 방식이라는 것 명시