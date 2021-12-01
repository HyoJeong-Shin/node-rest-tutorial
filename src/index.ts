import express from 'express'

let app = express()

// body-parser는 내장되어있음. json 파싱하기 위해서 설정만 추가
app.use(express.json())

// express에는 json data를 parsing하는 module 내장 (body-parser library 내장)
// 하지만 json만 되고 x-www-form-urlencoded를 parsing하기 위해서 아래 코드를 입력해 확장해야 함
app.use(express.urlencoded({
    extended: true
}))

// use 메서드 : 모든 http method 허용, 스트링 리턴     // GET, POST 모두 허용  // http 상태 코드 200 리턴
app.use('/hello', (req, res) => {
    res.send('Hello test')
})

// GET만 허용 : get이라는 별도 메서드 사용   // POST로 테스트시, node 서버에서 404 error 리턴
app.get('/hello2', (req, res) => {
    res.send('Hello test')
})

// GET + query parameter로 데이터 전송
// GET으로 테스트시, http://localhost:8080/hello3?name=hyojeong 이렇게 key=value 값 주어야 test 가능 => Hello hyojeong 리턴
app.get('/hello3', (req, res) => {
    const {name} = req.query
    res.send(`Hello ${name}`)
})

// GET + uri parameter
// query parameter와 사실상 동일, 표현 방식 차이
app.get('/hello32/:name', (req, res) => {
    const {name} = req.params
    res.send(`Hello ${name}`)
})

// POST + query parameter로 데이터 전송
app.post('/hello33', (req, res) => {
    const { name } = req.query
    res.send(`Hello ${name}`)
})

// POST 전송, x - www-form-urlencoded 방식
app.post('/hello4', (req, res) => {
    const {name} = req.body
    res.send(`Hello ${name}`)
})

// response - json data 보내기
app.post('/hello5', (req, res) => {
    const result = {
        code: 0,
        message: 'success'
    }
    res.send(result)
})

// request - json data 받기
app.post('/hello6', (req, res) => {
    console.log(req.body)
    const result = req.body
    res.send(result)
})

app.listen(8080, () => {
    console.log('server is listening 8080')
})