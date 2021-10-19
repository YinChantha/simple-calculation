function App(){
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const display = (Symbol) => {
        setExpression(prev => prev + Symbol)
    }
    const calculate = () => {
        setAnswer (eval(expression))
    }
    const allClear = () =>{
        setExpression("");
        setAnswer(0)
    }
    const clear = () =>{
        setExpression(prev => prev.split("").slice(0,length - 1).join(""));
        setAnswer(0);
    }
    return ( 
    <div className="container">
        <div className="grid">
            <div className="dis">
                <input type="text" value={expression} placeholder="0" disabled />
                <div className="total">{answer}</div>
            </div>
            <div onClick={allClear} className="padButton AC">AC</div>
            <div onClick={clear} className="padButton C">C</div>
            <div onClick={() => display("/")}className="padButton div">/</div>
            <div onClick={() => display("*")}className="padButton times">x</div>
            <div onClick={() => display("7")}className="padButton seven">7</div>
            <div onClick={() => display("8")}className="padButton eight">8</div>
            <div onClick={() => display("9")}className="padButton nine">9</div>
            <div onClick={() => display("-")}className="padButton minus">-</div>
            <div onClick={() => display("4")}className="padButton four">4</div>
            <div onClick={() => display("5")}className="padButton five">5</div>
            <div onClick={() => display("6")}className="padButton six">6</div>
            <div onClick={() => display("+")}className="padButton plus">+</div>
            <div onClick={() => display("1")}className="padButton one">1</div>
            <div onClick={() => display("2")}className="padButton two">2</div>
            <div onClick={() => display("3")}className="padButton three">3</div>
            <div onClick={calculate}className="padButton equal">=</div>
            <div onClick={() => display("0")}className="padButton zero">0</div>
            <div onClick={() => display(".")}className="padButton dot">.</div>

        </div>
    </div>
    );
}
ReactDOM.render(<App />, document.getElementById("app"))